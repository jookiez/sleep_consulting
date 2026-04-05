import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// In-memory rate limiter: 5 submissions per IP per hour.
// Resets on serverless cold starts — acceptable for a low-traffic site.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const limit = 5;
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }
  if (entry.count >= limit) return true;
  entry.count++;
  return false;
}

function escape(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many submissions. Please try again later.' },
      { status: 429 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await request.json();
  const { name, email, phone, babyAge, message, website } = body;

  // Honeypot — if filled, it's a bot. Return 200 so it thinks it succeeded.
  if (website) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !babyAge || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    // TODO: replace 'from' with a verified domain email once set up in Resend
    from: 'Alexandra Sleep Consulting <onboarding@resend.dev>',
    to: 'wagnerm@alumni.uoguelph.ca',
    replyTo: email,
    subject: `New consultation request from ${escape(name)}`,
    html: `
      <h2 style="color:#1e293b;font-family:sans-serif;margin-bottom:16px;">
        New Consultation Request
      </h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:500px;">
        <tr>
          <td style="padding:6px 12px 6px 0;color:#64748b;width:120px;vertical-align:top;"><strong>Name</strong></td>
          <td style="padding:6px 0;">${escape(name)}</td>
        </tr>
        <tr>
          <td style="padding:6px 12px 6px 0;color:#64748b;vertical-align:top;"><strong>Email</strong></td>
          <td style="padding:6px 0;">${escape(email)}</td>
        </tr>
        <tr>
          <td style="padding:6px 12px 6px 0;color:#64748b;vertical-align:top;"><strong>Phone</strong></td>
          <td style="padding:6px 0;">${escape(phone || 'Not provided')}</td>
        </tr>
        <tr>
          <td style="padding:6px 12px 6px 0;color:#64748b;vertical-align:top;"><strong>Baby's Age</strong></td>
          <td style="padding:6px 0;">${escape(babyAge)}</td>
        </tr>
        <tr>
          <td style="padding:6px 12px 6px 0;color:#64748b;vertical-align:top;"><strong>Message</strong></td>
          <td style="padding:6px 0;">${escape(message).replace(/\n/g, '<br>')}</td>
        </tr>
      </table>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
