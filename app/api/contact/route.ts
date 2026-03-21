import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

function escape(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, babyAge, message } = body;

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
