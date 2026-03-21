import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials | Alexandra Sleep Consulting',
};

const testimonials = [
  {
    quote:
      'Alexandra changed our lives. Our 8-month-old went from waking 5 times a night to sleeping 11 hours straight in just two weeks. I only wish we had found her sooner.',
    author: 'Sarah M.',
    detail: 'Mom of an 8-month-old',
  },
  {
    quote:
      "I was skeptical at first, but the personalized approach made all the difference. We finally have our evenings back, and our son falls asleep on his own without any fuss.",
    author: 'Michael & Jen T.',
    detail: 'Parents of a 10-month-old',
  },
  {
    quote:
      "Kind, patient, and incredibly knowledgeable. Alexandra guided us through every step without judgment. She really listened to what we were comfortable with.",
    author: 'Priya K.',
    detail: 'Mom of twins, age 6 months',
  },
  {
    quote:
      "After 14 months of barely sleeping, I was at my breaking point. Alexandra's plan was clear, gentle, and actually worked. We saw results in the first three days.",
    author: 'Rachel H.',
    detail: 'Mom of a 14-month-old',
  },
  {
    quote:
      'Worth every penny. The support we received throughout the two-week program was incredible. Alexandra was always available and always had an answer.',
    author: 'David & Mia L.',
    detail: 'Parents of a 7-month-old',
  },
  {
    quote:
      "We tried everything before reaching out — nothing worked. Alexandra figured out what was going wrong within the first call and had a plan ready the next day.",
    author: 'Anna B.',
    detail: 'Mom of a 5-month-old',
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-rose-50 to-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-semibold text-stone-800 mb-4">
            Testimonials
          </h1>
          <p className="text-stone-600 text-lg">
            Real families, real results. Here&apos;s what parents have to say.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-rose-50 rounded-2xl p-6 flex flex-col">
              <p className="text-stone-700 text-sm leading-relaxed flex-1 mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-stone-800 text-sm">{t.author}</p>
                <p className="text-stone-500 text-xs">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-50 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-xl font-semibold text-stone-800 mb-3">
            Ready to write your own success story?
          </h2>
          <a
            href="/#contact"
            className="inline-block px-8 py-3 bg-rose-300 text-stone-800 font-medium rounded-full hover:bg-rose-400 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
