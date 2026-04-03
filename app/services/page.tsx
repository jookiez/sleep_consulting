import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Alexandra Sleep Consulting',
};

const packages = [
  {
    name: 'Foundations',
    price: '$150',
    duration: '',
    description:
      'For parents who want to implement themselves. Get a personalized sleep plan with expert guidance to start your journey to better sleep.',
    includes: [
      'Personalized sleep plan',
      'Intake call',
      'Schedule/routine guidance',
      '1 week troubleshooting support',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Full Support',
    price: '$250',
    duration: '2 weeks',
    description:
      'For parents who want more support. I walk with you through every step of the process — from plan creation through implementation — with daily check-ins and real-time adjustments.',
    includes: [
      'Personalized sleep plan & intake call',
      'Daily check-ins',
      '2 weeks troubleshooting support',
      'Adjustments as baby progresses',
    ],
    cta: 'Get Started',
    featured: true,
  },
  {
    name: 'Overnight Support',
    price: '$25/hour',
    duration: '10pm – 6am',
    description:
      'For parents who want in-person support. I come to your home and handle the night so you can finally get a full night of sleep.',
    includes: [
      'In-home overnight care',
      'Supporting baby through night wakings',
      'Implementing sleep strategies',
      'Full night\'s sleep for parents!',
    ],
    cta: 'Book Overnight Support',
    featured: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-moon-50 to-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-semibold text-stone-800 mb-4">Services</h1>
          <p className="text-stone-600 text-lg">
            Every family is different. Choose the level of support that works best for you.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl border p-6 sm:p-8 flex flex-col ${
                pkg.featured
                  ? 'border-moon-400 bg-moon-50 shadow-md'
                  : 'border-stone-100 bg-white shadow-sm'
              }`}
            >
              {pkg.featured && (
                <span className="text-xs font-medium text-moon-500 uppercase tracking-wider mb-2">
                  Most Popular
                </span>
              )}
              <h2 className="font-serif text-xl font-semibold text-stone-800 mb-1">
                {pkg.name}
              </h2>
              <p className="text-moon-500 font-medium mb-1">{pkg.price}</p>
              <p className="text-xs text-stone-500 mb-4">{pkg.duration}</p>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">{pkg.description}</p>
              <ul className="space-y-1 mb-6 flex-1">
                {pkg.includes.map((item) => (
                  <li key={item} className="text-sm text-stone-700 flex gap-2">
                    <span className="text-moon-400 mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/#contact"
                className={`px-6 py-2.5 text-sm font-medium rounded-full text-center transition-colors ${
                  pkg.featured
                    ? 'bg-moon-400 text-stone-800 hover:bg-moon-500'
                    : 'border border-stone-300 text-stone-700 hover:bg-stone-50'
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-moon-50 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-xl font-semibold text-stone-800 mb-3">
            Not sure which package is right for you?
          </h2>
          <p className="text-stone-600 text-sm mb-6">
            Reach out and we&apos;ll figure it out together — no
            pressure, no commitment.
          </p>
          <a
            href="/#contact"
            className="px-8 py-3 bg-moon-400 text-stone-800 font-medium rounded-full hover:bg-moon-500 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
