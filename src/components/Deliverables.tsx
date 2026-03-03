import { Film, Smartphone, FileText, Image, Megaphone, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Deliverables() {
  const ref = useScrollReveal();

  const deliverables = [
    {
      icon: Film,
      tag: "Hero Asset",
      title: "Mini-Doc",
      desc: "8–15 minute narrative cut focusing on the rebuild, the people, and the hiring journey."
    },
    {
      icon: Smartphone,
      tag: "Social",
      title: "Short-Form Clips",
      desc: "6–12 vertical clips (Reels/TikTok) optimized for mobile engagement and virality."
    },
    {
      icon: FileText,
      tag: "B2B Asset",
      title: "Written Case Study",
      desc: "Detailed draft with approved metrics and \"Problem/Solution\" narrative for sales enablement."
    },
    {
      icon: Image,
      tag: "Visuals",
      title: "Photo Library",
      desc: "20+ high-res selects of staff, venue, and \"hired\" moments for your marketing use."
    },
    {
      icon: Megaphone,
      tag: "PR",
      title: "Community PR",
      desc: "\"Jobs Created\" press release distributed to local and industry media outlets."
    },
    {
      icon: ShieldCheck,
      tag: "Rights",
      title: "Usage Rights",
      desc: "12-month organic + paid license for all produced content assets."
    }
  ];

  return (
    <section id="deliverables" className="py-32 bg-[var(--bg-surface)] relative">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Marketing Deliverables</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">High-impact assets designed for multi-channel distribution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
          {deliverables.map((item, index) => (
            <div key={index} className="bg-[rgba(255,255,255,0.02)] border border-[var(--border)] rounded-[var(--radius-lg)] p-8 hover:bg-[rgba(255,255,255,0.04)] hover:border-[var(--primary)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden flex flex-col h-full">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-[rgba(20,20,20,0.6)] border border-[rgba(255,255,255,0.1)] rounded-2xl flex items-center justify-center group-hover:border-[var(--primary)] group-hover:bg-[rgba(54,171,98,0.1)] group-hover:shadow-[0_0_20px_rgba(54,171,98,0.2)] transition-all duration-300">
                  <item.icon size={28} className="text-[var(--text-secondary)] group-hover:text-[var(--primary)] group-hover:scale-110 transition-all duration-300" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)] bg-[rgba(54,171,98,0.1)] px-3 py-1 rounded-full border border-[rgba(54,171,98,0.2)]">
                  {item.tag}
                </span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">{item.title}</h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
              
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-radial-gradient from-[rgba(54,171,98,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
