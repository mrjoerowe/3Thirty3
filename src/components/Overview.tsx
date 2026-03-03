import { AlertTriangle, Zap, TrendingUp, Share2, Users, BookOpen, Repeat, Crown, Film, Smartphone, BarChart3, Heart } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Overview() {
  const ref = useScrollReveal();

  const cards = [
    {
      icon: AlertTriangle,
      title: "The Problem",
      desc: "Hospitality staffing is in crisis. 3 Thirty 3 Live has a great venue but lacks the team to operate it. The turnaround hinges on finding the right people, fast."
    },
    {
      icon: Zap,
      title: "The Opportunity",
      desc: "ZipRecruiter steps in as the hero platform. We document the entire process—from posting the first job to the grand re-opening shift.",
      highlight: true
    },
    {
      icon: TrendingUp,
      title: "The Outcome",
      desc: "A fully staffed venue and a documented success story. You get authentic content assets showing ZipRecruiter solving real-world small business problems."
    },
    {
      icon: Share2,
      title: "The Distribution",
      desc: "Multi-channel rollout across YouTube, TikTok, and local PR to maximize reach and engagement."
    }
  ];

  const benefits = [
    { icon: Users, text: "Real hires, documented end-to-end" },
    { icon: BookOpen, text: "Small business workforce story" },
    { icon: Repeat, text: "Reusable branded content" },
    { icon: Crown, text: "Exclusive Category Ownership" },
    { icon: Film, text: "8-15 min Mini-Doc Asset" },
    { icon: Smartphone, text: "12+ Short-form Social Clips" },
    { icon: BarChart3, text: "Verified Case Study Data" },
    { icon: Heart, text: "Positive Brand Sentiment" }
  ];

  return (
    <section id="overview" className="py-32 relative">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 reveal">
          {cards.map((card, index) => (
            <div 
              key={index}
              className={`p-10 rounded-[var(--radius-lg)] border backdrop-blur-md transition-all duration-400 relative overflow-hidden group flex flex-col h-full ${
                card.highlight 
                  ? 'bg-gradient-to-br from-[rgba(54,171,98,0.15)] to-[rgba(20,20,20,0.6)] border-[rgba(54,171,98,0.4)] shadow-[0_0_40px_rgba(54,171,98,0.15)]' 
                  : 'bg-gradient-to-br from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.01)] border-[var(--border)] hover:-translate-y-2 hover:border-[var(--primary)] hover:shadow-[0_20px_40px_-10px_rgba(54,171,98,0.15)]'
              }`}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-[var(--primary)] ${
                card.highlight ? 'bg-[var(--primary)] text-white shadow-[0_0_20px_rgba(54,171,98,0.4)]' : 'bg-[rgba(54,171,98,0.1)]'
              }`}>
                <card.icon size={32} className="modern-icon" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{card.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{card.desc}</p>
              
              {/* Hover Line Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        <div className="mt-24 reveal">
          <div className="text-center mb-12">
            <h4 className="text-3xl md:text-4xl font-bold mb-4">What ZipRecruiter Gets</h4>
            <div className="h-1 w-24 bg-[var(--primary)] mx-auto rounded-full opacity-50"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div 
                key={i} 
                className="group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-[var(--primary)]/30 transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(54,171,98,0.2)]"
              >
                <div className="w-14 h-14 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-6 group-hover:scale-110 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                  <benefit.icon size={24} strokeWidth={2} />
                </div>
                <span className="font-semibold text-lg text-white/90 leading-snug">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
