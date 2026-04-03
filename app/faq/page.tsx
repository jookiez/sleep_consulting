import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Alexandra Sleep Consulting',
};

const faqs = [
  {
    q: 'What age range do you work with?',
    a: "I work with babies and toddlers from 0 to 3 years old. Sleep strategies vary significantly across age groups, and I tailor my approach to your child's developmental stage.",
  },
  {
    q: 'How long does sleep training take?',
    a: "Most families see significant improvement within 1–2 weeks, though every child is different. Some babies turn a corner in just a few days, while others may need a bit more time. Consistency is key.",
  },
  {
    q: 'Do you use the "cry-it-out" method?',
    a: "I offer a range of approaches from completely no-cry methods to more structured sleep training, depending on your child's age, temperament, and your preferences. We'll discuss all options together so you can make an informed choice.",
  },
  {
    q: 'My baby is breastfed — can you still help?',
    a: "Absolutely. Many of my clients are breastfeeding, and I always work to preserve your nursing relationship while still improving sleep. We'll find a plan that works for both of you.",
  },
  {
    q: "What if the plan isn't working?",
    a: "All packages include a period of follow-up support, during which I can adjust the plan as needed. Sleep is dynamic, and sometimes tweaks are necessary — that's completely normal and expected.",
  },
  {
    q: 'Is sleep consulting covered by insurance?',
    a: 'Some extended health benefit plans cover sleep consulting. I recommend checking with your provider. I can provide a receipt for your records upon request.',
  },
  {
    q: "What if my partner and I aren't on the same page?",
    a: "Consistency between caregivers is important for success. I encourage both parents to be involved from the start and am happy to answer questions from either of you throughout the process.",
  },
  {
    q: 'Do you work with families outside of Canada?',
    a: "Yes! All consultations are conducted virtually, so I work with families anywhere in the world. We'll find a time that works across time zones.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-purple-50 to-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-semibold text-stone-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-stone-600 text-lg">
            Common questions about pediatric sleep consulting and how I work.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group bg-white border border-stone-200 rounded-2xl"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-medium text-stone-800 text-sm list-none">
                {faq.q}
                <span className="ml-4 shrink-0 text-stone-400 group-open:rotate-180 transition-transform duration-200">
                  ▾
                </span>
              </summary>
              <div className="px-6 pb-5 text-sm text-stone-600 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-purple-50 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-xl font-semibold text-stone-800 mb-3">
            Still have questions?
          </h2>
          <p className="text-stone-600 text-sm mb-6">
            I&apos;m happy to answer anything not covered here. Reach out anytime.
          </p>
          <a
            href="/#contact"
            className="px-8 py-3 bg-purple-400 text-stone-800 font-medium rounded-full hover:bg-purple-500 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
