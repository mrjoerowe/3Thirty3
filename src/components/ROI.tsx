import { Youtube, Facebook, Instagram, MapPin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ROI() {
  const ref = useScrollReveal();

  const channels = [
    { icon: Youtube, name: "YouTube", tag: "Primary" },
    { icon: Facebook, name: "Facebook", tag: "Primary" },
    { icon: Instagram, name: "IG Reels", tag: "Primary" },
    { icon: MapPin, name: "On-Site", tag: "QR Signage" }
  ];

  const metrics = [
    { value: "25", label: "Roles Filled" },
    { value: "14", label: "Days to Hire" },
    { value: "100", label: "Applicants" },
    { value: "100k", label: "Est. Views" }
  ];

  return (
    <section id="roi" className="py-32 bg-[var(--bg-surface)] relative">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal">
          {/* Audience & Distribution */}
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius-lg)] p-10 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">Audience & <span className="text-accent-gradient">Distribution</span></h3>
              <p className="text-[var(--text-secondary)] mb-8 text-lg leading-relaxed">
                We target the intersection of local community, service industry professionals, and small business owners.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {channels.map((channel, index) => (
                  <div key={index} className="bg-[rgba(255,255,255,0.03)] border border-[var(--border)] rounded-[var(--radius-md)] p-6 text-center hover:border-[var(--primary)] transition-colors group">
                    <div className="w-12 h-12 mx-auto mb-3 bg-[rgba(20,20,20,0.6)] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <channel.icon size={24} className="text-[var(--text-secondary)] group-hover:text-[var(--primary)] transition-colors" />
                    </div>
                    <div className="font-bold text-white mb-1">{channel.name}</div>
                    <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${channel.tag === 'Primary' ? 'bg-[rgba(54,171,98,0.1)] text-[var(--primary)]' : 'bg-[rgba(255,255,255,0.1)] text-[var(--text-secondary)]'}`}>
                      {channel.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-4">Target Viewer Profiles</h5>
              <div className="flex flex-wrap gap-2">
                {["Young Professionals", "Service Industry", "SMB Owners", "Local Community"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full text-sm text-[var(--text-secondary)] hover:bg-[rgba(255,255,255,0.1)] transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Projected Metrics */}
          <div className="flex flex-col h-full justify-center">
            <h3 className="text-3xl font-bold mb-2 text-white">Projected Metrics</h3>
            <p className="text-xs text-[var(--text-secondary)] mb-8 opacity-70">Metrics are reported for transparency. Results vary. No performance guarantees.</p>
            
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-gradient-to-br from-[rgba(54,171,98,0.1)] to-[rgba(20,20,20,0.6)] border border-[rgba(54,171,98,0.3)] rounded-[var(--radius-lg)] p-8 text-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
                  <div className="text-5xl font-extrabold text-[var(--primary)] mb-2 drop-shadow-[0_0_20px_rgba(54,171,98,0.4)] group-hover:scale-110 transition-transform duration-300 origin-bottom">
                    {metric.value}
                  </div>
                  <div className="text-sm font-bold uppercase tracking-wider text-[var(--text-secondary)] group-hover:text-white transition-colors">
                    {metric.label}
                  </div>
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(54,171,98,0.2)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
