import { ClipboardList, Search, Hammer, Rocket } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Timeline() {
  const ref = useScrollReveal();

  const steps = [
    { icon: ClipboardList, title: "Weeks 1–2: Prep & Posting", desc: "Operations audit, role definitions, and initial job postings go live.", tag: "Job Posts Live" },
    { icon: Search, title: "Weeks 2–4: The Hunt", desc: "Applicant review, rapid-fire interviews, and selection process.", tag: "Interview Pipeline" },
    { icon: Hammer, title: "Weeks 4–6: The Build", desc: "Onboarding, training intensives, and soft launch events.", tag: "Hiring Wins" },
    { icon: Rocket, title: "Weeks 7–8: Grand Re-Opening", desc: "The full team executes the vision. Content capture wraps.", tag: "Launch Night" }
  ];

  return (
    <section id="timeline" className="py-32 relative">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">60-Day <span className="text-accent-gradient">Turnaround</span></h2>
        </div>

        <div className="max-w-4xl mx-auto relative reveal">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-[var(--border)] md:-ml-0.5" />

          {steps.map((step, index) => (
            <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className="flex-1 md:w-1/2 pl-24 md:pl-0 md:pr-16 md:text-right">
                <div className={`bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius-lg)] p-8 hover:border-[var(--primary)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 group relative ${index % 2 === 0 ? 'md:text-left md:ml-16 md:mr-0' : 'md:mr-16 md:ml-0'}`}>
                  <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[var(--bg-body)] border-4 border-[var(--primary)] rounded-full z-10 shadow-[0_0_15px_var(--primary)] group-hover:scale-150 group-hover:bg-[var(--primary)] transition-transform duration-300 left-[-54px] md:left-auto md:right-[-42px] md:group-hover:right-[-46px]" style={{ [index % 2 === 0 ? 'left' : 'right']: index % 2 === 0 ? '-54px' : '-42px' }} />
                  
                  {/* Mobile Dot Override */}
                  <div className="md:hidden absolute top-1/2 -translate-y-1/2 left-[-54px] w-4 h-4 bg-[var(--bg-body)] border-4 border-[var(--primary)] rounded-full z-10 shadow-[0_0_15px_var(--primary)] group-hover:scale-150 group-hover:bg-[var(--primary)] transition-transform duration-300" />

                  <h4 className="text-xl font-bold mb-2 text-white">{step.title}</h4>
                  <p className="text-[var(--text-secondary)] mb-4">{step.desc}</p>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)] bg-[rgba(54,171,98,0.1)] px-3 py-1 rounded-full border border-[rgba(54,171,98,0.2)]">
                    Integration: {step.tag}
                  </span>
                </div>
              </div>

              {/* Icon (Center) */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-[var(--bg-body)] border border-[var(--border)] rounded-full flex items-center justify-center z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-[var(--primary)] transition-colors">
                <step.icon size={24} className="text-[var(--text-secondary)] group-hover:text-[var(--primary)] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
