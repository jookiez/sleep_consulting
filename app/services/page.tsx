import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Alexandra Sleep Consulting',
};

const packages = [
  {
    name: 'Free Discovery Call',
    price: 'Free',
    duration: '15 minutes',
    description:
      "Not sure if sleep consulting is right for you? Let's chat. This no-obligation call gives you the chance to ask questions, share your situation, and find out how I can help.",
    includes: [
      'Overview of your current sleep situation',
      'Introduction to my approach and methods',
      'Recommended next steps',
    ],
    cta: 'Book a Free Call',
    featured: false,
  },
  {
    name: 'Initial Consultation',
    price: 'Starting at $149',
    duration: '60–90 minutes',
    description:
      "A thorough deep-dive into your child's sleep history, current habits, and goals. Includes a customized written sleep plan you can start implementing right away.",
    includes: [
      'Detailed intake form review',
      '60–90 minute consultation call',
      'Customized written sleep plan',
      '7 days of email support',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Full Sleep Support Package',
    price: 'Starting at $349',
    duration: '2 weeks',
    description:
      'Our most comprehensive option. I walk with you through every step of the process — from plan creation through implementation — with daily check-ins and real-time adjustments.',
    includes: [
      'Everything in Initial Consultation',
      '14 days of daily check-in calls or messages',
      'Plan adjustments as needed',
      'Access to resource library',
      '30-day follow-up call',
    ],
    cta: 'Get Started',
    featured: true,
  },
  {
    name: 'Follow-Up Session',
    price: '$79',
    duration: '30 minutes',
    description:
      'Already a client and running into new challenges? A focused follow-up session to troubleshoot regressions, transitions, or new sleep issues.',
    includes: [
      '30-minute call',
      'Updated plan adjustments',
      '7 days of follow-up email support',
    ],
    cta: 'Book a Follow-Up',
    featured: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-rose-50 to-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-semibold text-stone-800 mb-4">Services</h1>
          <p className="text-stone-600 text-lg">
            Every family is different. Choose the level of support that works best for you.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl border p-6 sm:p-8 flex flex-col ${
                pkg.featured
                  ? 'border-rose-300 bg-rose-50 shadow-md'
                  : 'border-stone-100 bg-white shadow-sm'
              }`}
            >
              {pkg.featured && (
                <span className="text-xs font-medium text-rose-500 uppercase tracking-wider mb-2">
                  Most Popular
                </span>
              )}
              <h2 className="font-serif text-xl font-semibold text-stone-800 mb-1">
                {pkg.name}
              </h2>
              <p className="text-rose-500 font-medium mb-1">{pkg.price}</p>
              <p className="text-xs text-stone-500 mb-4">{pkg.duration}</p>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">{pkg.description}</p>
              <ul className="space-y-1 mb-6 flex-1">
                {pkg.includes.map((item) => (
                  <li key={item} className="text-sm text-stone-700 flex gap-2">
                    <span className="text-rose-400 mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/#contact"
                className={`px-6 py-2.5 text-sm font-medium rounded-full text-center transition-colors ${
                  pkg.featured
                    ? 'bg-rose-300 text-stone-800 hover:bg-rose-400'
                    : 'border border-stone-300 text-stone-700 hover:bg-stone-50'
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-50 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-xl font-semibold text-stone-800 mb-3">
            Not sure which package is right for you?
          </h2>
          <p className="text-stone-600 text-sm mb-6">
            Book a free discovery call and we&apos;ll figure it out together — no
            pressure, no commitment.
          </p>
          <a
            href="/#contact"
            className="px-8 py-3 bg-rose-300 text-stone-800 font-medium rounded-full hover:bg-rose-400 transition-colors"
          >
            Book a Free Discovery Call
          </a>
        </div>
      </section>
    </>
  );
}
