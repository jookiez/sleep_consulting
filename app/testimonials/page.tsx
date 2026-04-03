import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials | Alexandra Sleep Consulting',
};

const testimonials = [
  {
    quote:
      "We first reached out to Caillie when our 6-month-old twin girls were waking every hour (sometimes more!). We had tried a standard, one-size-fits-all sleep plan, but it just didn't work the way it had for our son. I spent weeks reading Reddit posts and trying other strategies with zero success. Sleep-deprived and knowing our girls needed support with their sleep, we turned to Caillie.\n\nShe curated a plan that was tailored to our girls' specific developmental milestones, daily routines, and our comfort level. The plan was thoughtful, straightforward, and included recommendations I hadn't thought of. Starting the first night of us implementing Caillie's recommendations, the girls were sleeping long stretches through the night!\n\nWhat truly sets Caillie apart is her troubleshooting support. Whether I had a quick question or the girls got sick early in our sleep plan, she provided clear, reassuring guidance that kept us on track. As a twin mom, I honestly can't imagine where we'd be without her. I'm happy to report our girls are sleeping through the night because of Caillie's support, and our whole family is finally waking up well-rested as a result. I cannot recommend Caillie enough to any mom looking for a supportive expert to lean on through their sleep journey.",
    author: 'Chelsea',
    detail: 'Mom of twin girls, age 6 months',
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-purple-50 to-white py-16 px-4">
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
        <div className="max-w-3xl mx-auto space-y-8">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-purple-50 rounded-2xl p-8">
              <p className="text-stone-700 text-sm leading-relaxed mb-6 whitespace-pre-line">
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

      <section className="bg-purple-50 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-xl font-semibold text-stone-800 mb-3">
            Ready to write your own success story?
          </h2>
          <a
            href="/#contact"
            className="inline-block px-8 py-3 bg-purple-300 text-stone-800 font-medium rounded-full hover:bg-purple-400 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
