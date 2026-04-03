import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About | Alexandra Sleep Consulting',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-purple-50 to-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-semibold text-stone-800 mb-4">
            About Caillie
          </h1>
          <p className="text-stone-600 text-lg">
            Certified pediatric sleep consultant and your partner in better rest.
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
              Hi, I&apos;m Caillie Alexandra
            </h2>
            <div className="text-stone-600 text-sm leading-relaxed space-y-3">
              <p>
                I&apos;m a Certified Pediatric Sleep Consultant with over 8 years
                of experience working as a nanny with babies and toddlers.
                Throughout my years caring for children, I&apos;ve supported
                families through many different stages, including some very
                sleepless ones.
              </p>
              <p>
                Working closely with families showed me just how much sleep
                impacts not only a child&apos;s development, but the well-being of
                the entire household. I&apos;ve seen firsthand how exhausting and
                overwhelming sleep challenges can feel, and how life-changing it
                is when a child starts sleeping well.
              </p>
              <p>
                My approach is rooted in both real-life experience and sleep
                education. I believe every baby is unique, which is why I create
                personalized, practical sleep plans that align with your
                child&apos;s needs and your parenting style.
              </p>
              <p>
                Whether you&apos;re navigating short naps, sleepless nights, or
                bedtime struggles, I&apos;m here to support you every step of the
                way.
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
          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
            <div className="w-full sm:w-80 shrink-0">
              <Image
                src="/images/certificate.jpeg"
                alt="Institute of Pediatric Sleep &amp; Parenting — Certificate of Completion for Caillie Sheppard, Sleep Consultant Certification Program, March 2025"
                width={640}
                height={480}
                className="rounded-2xl shadow-md w-full h-auto"
              />
            </div>
            <div className="space-y-3">
              {[
                'Certified Pediatric Sleep Consultant',
                'Institute of Pediatric Sleep & Parenting — Certified (March 2025)',
                '8+ Years Experience as a Professional Nanny',
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
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-semibold text-stone-800 mb-4">
            My Philosophy
          </h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            I believe every baby is unique, and there&apos;s no one-size-fits-all
            solution to sleep. My approach is rooted in both real-life experience
            and sleep education — personalized, practical plans that align with
            your child&apos;s needs and your parenting style.
          </p>
          <p className="text-stone-600 leading-relaxed mb-8">
            I&apos;m a judgement-free zone. Whatever your sleep situation looks like
            right now, we&apos;ll figure out a path forward together — one that
            respects your parenting choices and fits seamlessly into your
            family&apos;s life.
          </p>
          <a
            href="/#contact"
            className="px-8 py-3 bg-purple-300 text-stone-800 font-medium rounded-full hover:bg-purple-400 transition-colors"
          >
            Work With Me
          </a>
        </div>
      </section>
    </>
  );
}
