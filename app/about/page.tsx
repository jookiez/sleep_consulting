import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Alexandra Sleep Consulting',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-rose-50 to-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-semibold text-stone-800 mb-4">
            About Alexandra
          </h1>
          <p className="text-stone-600 text-lg">
            Certified pediatric sleep consultant, mom, and your partner in better rest.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="bg-stone-100 rounded-2xl aspect-square flex items-center justify-center text-stone-400 text-sm">
            [Photo coming soon]
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-stone-800 mb-4">
              Hi, I&apos;m Alexandra
            </h2>
            <div className="text-stone-600 text-sm leading-relaxed space-y-3">
              <p>
                As a certified pediatric sleep consultant and mother, I understand
                firsthand the exhaustion and overwhelm that comes with a child who
                isn&apos;t sleeping well. I started Alexandra Sleep Consulting
                because I believe that every family deserves restful nights.
              </p>
              <p>
                I work with families of babies and toddlers aged 0–3 years, helping
                them create sustainable sleep habits using gentle, evidence-based
                methods that align with each family&apos;s values and parenting style.
              </p>
              <p>
                My approach is never one-size-fits-all. I take the time to understand
                your unique situation, your baby&apos;s temperament, and your goals
                — then craft a plan that actually fits your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-stone-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-semibold text-stone-800 mb-8 text-center">
            Credentials &amp; Training
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Certified Pediatric Sleep Consultant',
              'Member, International Association of Child Sleep Consultants',
              'Trained in Infant & Toddler Sleep Science',
              'Gentle Sleep Training Methods Certification',
              'Infant Development & Nutrition Training',
              'Ongoing Continuing Education',
            ].map((cred) => (
              <div
                key={cred}
                className="bg-white rounded-xl border border-stone-100 p-4 text-sm text-stone-700"
              >
                ✓ {cred}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-semibold text-stone-800 mb-4">
            My Philosophy
          </h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            I believe sleep is foundational to a child&apos;s health, development,
            and happiness — and to a parent&apos;s wellbeing. Good sleep habits
            aren&apos;t a luxury; they&apos;re a gift you give your whole family.
          </p>
          <p className="text-stone-600 leading-relaxed mb-8">
            I&apos;m a judgement-free zone. Whatever your sleep situation looks like
            right now, we&apos;ll figure out a path forward together — one that
            respects your parenting choices and fits seamlessly into your
            family&apos;s life.
          </p>
          <a
            href="/#contact"
            className="px-8 py-3 bg-rose-300 text-stone-800 font-medium rounded-full hover:bg-rose-400 transition-colors"
          >
            Work With Me
          </a>
        </div>
      </section>
    </>
  );
}
