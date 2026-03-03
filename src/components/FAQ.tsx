import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FAQ() {
  const ref = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this an official ZipRecruiter production?",
      answer: "No. This is a proposed partnership produced by 3Thirty3 Live. ZipRecruiter would be the featured hiring partner."
    },
    {
      question: "What does \"exclusive\" mean?",
      answer: "It means we will not feature or mention any other hiring platforms (e.g., Indeed, LinkedIn) in the content. ZipRecruiter will be the sole hiring tool shown."
    },
    {
      question: "Can ZipRecruiter approve final cuts?",
      answer: "Yes. We provide a reasonable review window for segments where the brand appears to ensure compliance and brand safety."
    },
    {
      question: "What data do you share?",
      answer: "We share aggregated hiring metrics (time to hire, number of applicants) for the case study. We do not share sensitive PII of candidates."
    },
    {
      question: "Can we tailor deliverables?",
      answer: "Absolutely. If you have a specific campaign message (e.g., \"Phil\" AI), we can emphasize that in the production."
    },
    {
      question: "What is the timeline to decide?",
      answer: "We are moving into pre-production in 14 days. We would like to finalize a partnership agreement within that window."
    },
    {
      question: "Can this scale to other turnarounds?",
      answer: "Yes. The format is designed to be replicable for other small business turnarounds in different markets."
    }
  ];

  return (
    <section className="py-32 bg-[var(--bg-surface)] relative">
      <div ref={ref} className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12">Frequently Asked <span className="text-accent-gradient">Questions</span></h2>
        
        <div className="space-y-4 reveal">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[var(--border)] last:border-0">
              <button
                className="w-full text-left py-6 flex justify-between items-center group focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-white group-hover:text-[var(--primary)] transition-colors pr-8">{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-[var(--text-secondary)] transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[var(--primary)]' : ''}`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-[var(--text-secondary)] leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
