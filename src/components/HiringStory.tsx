import { FileText, Search, Users, UserCheck, Rocket } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HiringStory() {
  const ref = useScrollReveal();

  const timelineSteps = [
    { icon: FileText, title: "The Post", desc: "Job goes live" },
    { icon: Search, title: "The Search", desc: "Invite to Apply" },
    { icon: Users, title: "The Interview", desc: "Speed & Quality" },
    { icon: UserCheck, title: "The Hire", desc: "Offers Accepted" },
    { icon: Rocket, title: "The Launch", desc: "Grand Opening" }
  ];

  const scenes = [
    {
      number: "01",
      icon: Search,
      title: "The Search",
      desc: "The owner uses the mobile app to post roles and invites candidates instantly. We capture the ease of \"Invite to Apply.\""
    },
    {
      number: "02",
      icon: UserCheck,
      title: "The Selection",
      desc: "Real-time reaction to \"Great Match\" candidates. We film the \"Aha!\" moment when the perfect resume comes in."
    },
    {
      number: "03",
      icon: Users,
      title: "The Training",
      desc: "First day on the job. The team comes together. A \"Powered by ZipRecruiter\" moment showing the full squad."
    },
    {
      number: "04",
      icon: Rocket,
      title: "The Payoff",
      desc: "Grand Re-opening montage. The staff executes perfectly under pressure, proving the quality of the hires."
    }
  ];

  return (
    <section id="hiring" className="py-32 relative">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">The Staff Rebuild Is the Plot</h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            The drama isn't just in the renovation—it's in the <span className="text-[var(--primary)] font-bold">hiring</span>. We are building a team from scratch, and ZipRecruiter is the engine that makes it possible.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-24 reveal">
          {timelineSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative z-10 w-full md:w-auto group">
              <div className="w-16 h-16 rounded-full bg-[rgba(20,20,20,0.8)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:-translate-y-2 group-hover:shadow-[0_8px_30px_rgba(54,171,98,0.2)]">
                <step.icon size={28} className="text-white group-hover:text-[var(--primary)] transition-colors" />
              </div>
              <h4 className="text-white font-bold mb-1">{step.title}</h4>
              <p className="text-[var(--text-secondary)] text-xs uppercase tracking-wider">{step.desc}</p>
              
              {/* Connector Line (Desktop) */}
              {index < timelineSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-[rgba(255,255,255,0.1)] -z-10">
                  <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent w-full animate-[connect-flow_3s_infinite_linear]" />
                </div>
              )}
            </div>
          ))}
        </div>

        <h4 className="text-center text-2xl font-bold mb-12 tracking-tight">Key Integration Moments</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {scenes.map((scene, index) => (
            <div key={index} className="bg-[rgba(255,255,255,0.02)] border border-[var(--border)] rounded-[var(--radius-md)] p-8 hover:bg-[rgba(255,255,255,0.04)] hover:border-[var(--primary)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="flex justify-between items-center mb-6 border-b border-[rgba(255,255,255,0.05)] pb-4">
                <span className="font-mono text-sm text-[var(--primary)] opacity-80">SCENE {scene.number}</span>
                <scene.icon size={20} className="text-white opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h5 className="text-xl font-bold mb-3 text-white">{scene.title}</h5>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{scene.desc}</p>
            </div>
          ))}
        </div>
        
        <p className="text-center text-xs text-[var(--text-secondary)] mt-12 opacity-50">*All candidate participation is consent-based.</p>
      </div>
    </section>
  );
}
