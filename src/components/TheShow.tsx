import { Film, PlayCircle, Smartphone, Globe } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function TheShow() {
  const ref = useScrollReveal();

  const cards = [
    {
      icon: Film,
      title: "Genre",
      desc: "Business Turnaround / Docu-series"
    },
    {
      icon: PlayCircle,
      title: "Primary Content",
      desc: "4-Part Web Series (or 1 Mini-Doc)"
    },
    {
      icon: Smartphone,
      title: "Social Content",
      desc: "Daily \"Build Logs\" (Reels/TikTok)"
    },
    {
      icon: Globe,
      title: "Distribution",
      desc: "YouTube, FB, IG, Local PR"
    }
  ];

  return (
    <section id="show" className="py-32 bg-[var(--bg-surface)] relative">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="text-[var(--primary)] font-bold text-sm uppercase tracking-wider mb-4 block">The Concept</span>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Bar Rescue <br/>
              <span className="text-2xl font-normal opacity-70 block my-2">meets</span>
              <span className="text-accent-gradient">The Office</span>
            </h2>
            
            <p className="text-[var(--text-secondary)] text-lg mb-6 leading-relaxed">
              A gritty but uplifting docu-series following the complete rebuild of a multi-area venue. While we fix the operations, the core storyline is <strong className="text-[var(--primary)]">staffing</strong>.
            </p>
            <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed">
              Without the team, the venue fails. This creates high stakes for the hiring process, making ZipRecruiter the hero of the story.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              {["Authentic", "High-Stakes", "Operational"].map((tag) => (
                <span key={tag} className="px-6 py-2 bg-[rgba(255,255,255,0.05)] border border-[var(--border)] rounded-full text-sm font-medium text-[var(--text-secondary)]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <div key={index} className="bg-[rgba(255,255,255,0.03)] border border-[var(--border)] rounded-[var(--radius-md)] p-6 flex items-center gap-6 hover:bg-[rgba(54,171,98,0.05)] hover:border-[var(--primary)] hover:translate-x-2 transition-all duration-300 group">
                <div className="w-12 h-12 bg-[rgba(54,171,98,0.1)] rounded-xl flex items-center justify-center text-[var(--primary)] shrink-0 group-hover:scale-110 transition-transform">
                  <card.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-white">{card.title}</h4>
                  <p className="text-sm text-[var(--text-secondary)]">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
