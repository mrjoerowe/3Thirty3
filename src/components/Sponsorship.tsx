import { MessageSquare, Briefcase, BarChart2, Heart, Layers, CheckCircle, Tag, Video, TrendingUp, Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Sponsorship() {
  const ref = useScrollReveal();

  const whyCards = [
    { icon: MessageSquare, title: "Authentic Narrative", desc: "No scripts. Real small business stakes that resonate with your SMB target audience." },
    { icon: Briefcase, title: "Employer Branding", desc: "Content you can use internally to show purpose, and externally to attract customers." },
    { icon: BarChart2, title: "Data Storytelling", desc: "We track time-to-hire and quality metrics to prove ROI, not just impressions." },
    { icon: Heart, title: "Community Impact", desc: "Directly supporting the local economy by creating jobs in Burlington, NC." },
    { icon: Layers, title: "Multi-Format", desc: "Long-form for depth, vertical short-form for reach, written case study for sales enablement." },
    { icon: CheckCircle, title: "Turnkey Execution", desc: "We handle all production, talent management, and distribution. You simply approve the final assets." }
  ];

  const proposalFeatures = [
    {
      title: "Brand Integration",
      icon: Tag,
      items: [
        "Title Credit: \"Powered by ZipRecruiter\"",
        "In-Scene Usage: App & Dashboard UI",
        "Wardrobe: Branded gear for staff",
        "Signage: \"Now Hiring\" QR codes"
      ]
    },
    {
      title: "Content Assets",
      icon: Video,
      items: [
        "Mini-Doc: 8-15 min narrative feature",
        "Social Series: 12+ vertical clips",
        "Behind-the-Scenes: \"Making the Team\"",
        "Photo Library: 20+ high-res selects"
      ]
    },
    {
      title: "Impact & Perks",
      icon: TrendingUp,
      items: [
        "Case Study: Verified hiring metrics",
        "Talent Access: Staff testimonials",
        "Launch Event: VIP presence",
        "Community PR: \"Jobs Created\" press"
      ]
    }
  ];

  return (
    <section id="sponsorship" className="py-32 relative bg-[var(--bg-surface)]">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Why This <span className="text-accent-gradient">Partnership Works</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32 reveal">
          {whyCards.map((card, index) => (
            <div key={index} className="bg-[var(--bg-card)] backdrop-blur-md border border-[var(--border)] rounded-[var(--radius-lg)] p-8 hover:-translate-y-2 hover:border-[var(--primary)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[rgba(54,171,98,0.1)] flex items-center justify-center text-[var(--primary)] mb-6 group-hover:scale-110 transition-transform">
                <card.icon size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">{card.title}</h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4"><span className="text-accent-gradient">Exclusive</span> Partnership Proposal</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">One comprehensive package designed for maximum impact and ownership.</p>
        </div>

        <div className="bg-gradient-to-br from-[rgba(54,171,98,0.1)] to-[rgba(20,20,20,0.8)] border border-[var(--primary)] rounded-[var(--radius-lg)] p-12 text-center relative overflow-hidden mb-12 shadow-[0_0_40px_rgba(54,171,98,0.1)] reveal">
          <div className="absolute top-4 right-4 bg-[var(--primary)] text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">EXCLUSIVE</div>
          <h3 className="text-3xl md:text-5xl font-bold mb-4 text-white">The "Hiring Hero" Partner</h3>
          <p className="text-[var(--primary)] font-bold text-xl tracking-widest uppercase mb-6">COMPLETE CATEGORY EXCLUSIVITY</p>
          <p className="text-[var(--text-secondary)] text-lg max-w-3xl mx-auto leading-relaxed">
            ZipRecruiter becomes the sole hiring platform featured in the turnaround, powering every hire from dishwasher to general manager.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal">
          {proposalFeatures.map((feature, index) => (
            <div key={index} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius-md)] p-8 hover:border-[var(--primary)] hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <feature.icon size={24} className="text-[var(--primary)]" />
                <h4 className="text-xl font-bold text-white">{feature.title}</h4>
              </div>
              <ul className="space-y-4">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <span className="w-5 h-5 rounded-full bg-[rgba(54,171,98,0.1)] flex items-center justify-center text-[var(--primary)] shrink-0 mt-0.5">
                      <Check size={12} />
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: item.replace(':', ':</strong>').replace(/^/, '<strong>') }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center reveal">
          <a href="#contact" className="btn btn-primary text-xl px-12 py-5 shadow-[0_0_30px_rgba(54,171,98,0.4)]">Secure This Partnership</a>
        </div>
      </div>
    </section>
  );
}
