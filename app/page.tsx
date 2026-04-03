import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

// Stored for future use — cute sleeping baby feet photo (Unsplash, free to use):
// const HERO_BG_IMAGE = 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1600&q=80';

const features = [
  {
    icon: '🌛',
    title: 'Personalized Plans',
    description:
      "Every baby is unique. I create customized sleep plans tailored to your child's temperament, age, and your family's specific needs.",
  },
  {
    icon: '💤',
    title: 'Evidence-Based Methods',
    description:
      "Using proven, gentle sleep training approaches grounded in the latest pediatric sleep research — never one-size-fits-all.",
  },
  {
    icon: '🧸',
    title: 'Ongoing Support',
    description:
      "I'm with you every step of the way. Get answers to your questions and adjustments to the plan as your baby grows.",
  },
];

const services = [
  {
    title: 'Foundations',
    price: '$150',
    description:
      'A personalized sleep plan with an intake call, schedule guidance, and 1 week of troubleshooting support. For parents who want to implement themselves.',
  },
  {
    title: 'Full Support',
    price: '$250',
    description:
      'Everything you need — personalized sleep plan, daily check-ins, 2 weeks of troubleshooting support, and adjustments as baby progresses.',
  },
  {
    title: 'Overnight Support',
    price: '$25/hour',
    description:
      'In-home overnight care (10pm–6am). I support your baby through night wakings so you can get a full night of sleep.',
  },
];

const testimonials = [
  {
    quote:
      "When our twin girls were 6 months old, they were waking every hour. After failing with standard sleep plans and endless DIY research, we reached out to Caillie to create a custom strategy that respected our girls' needs and our comfort level. The results were nearly instant. After the first night they were sleeping long stretches, and in no time they were happily sleeping the entire night on their own.",
    author: 'Chelsea',
    detail: 'Mom of twin girls, age 6 months',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-moon-50 to-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-stone-800 leading-tight mb-6">
            Better Sleep for Your Baby,
            <br />
            Peace of Mind for You
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            I&apos;m a certified pediatric sleep consultant helping families
            establish healthy sleep habits for babies and toddlers — gently,
            confidently, and on your timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-moon-400 text-stone-800 font-medium rounded-full hover:bg-moon-500 transition-colors"
            >
              Book a Free Discovery Call
            </a>
            <Link
              href="/about"
              className="px-8 py-3 border border-stone-300 text-stone-700 font-medium rounded-full hover:bg-stone-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-moon-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-800 text-center mb-12">
            Why Families Choose Caillie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="text-center px-4">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-stone-800 text-lg mb-2">{f.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-800 text-center mb-4">
            Services
          </h2>
          <p className="text-stone-600 text-center mb-10 max-w-xl mx-auto">
            From a quick discovery call to full hands-on support, there&apos;s a
            package that fits your family.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6"
              >
                <p className="text-xs font-medium text-moon-500 uppercase tracking-wider mb-2">
                  {s.price}
                </p>
                <h3 className="font-semibold text-stone-800 text-lg mb-2">{s.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="text-moon-500 font-medium text-sm hover:underline">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="bg-moon-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-800 text-center mb-10">
            What Families Are Saying
          </h2>
          <div className="max-w-2xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-semibold text-stone-800 text-sm">{t.author}</p>
                <p className="text-stone-500 text-xs">{t.detail}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/testimonials"
              className="text-moon-500 font-medium text-sm hover:underline"
            >
              Read more testimonials →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-moon-50 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-800 text-center mb-3">
            Get in Touch
          </h2>
          <p className="text-stone-600 text-center mb-8">
            Ready to start sleeping better? Fill out the form and I&apos;ll be
            in touch within 24–48 hours.
          </p>
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
