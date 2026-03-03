import { useState } from 'react';
import { jobs, Job } from '../data/jobs';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { X, Check, Briefcase, MapPin, Clock, DollarSign, Star } from 'lucide-react';

export default function Careers() {
  const ref = useScrollReveal();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <section id="careers" className="py-24 relative bg-[var(--bg-surface)]">
      <div ref={ref} className="container mx-auto px-6 reveal">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Join the <span className="text-accent-gradient">Rebuild Team</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            We are looking for driven individuals to help us turn 3 Thirty 3 Live into a premier destination. 
            This is more than a job; it's a chance to build something real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div 
              key={job.id} 
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius-lg)] p-8 hover:border-[var(--primary)] transition-all duration-300 group cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedJob(job)}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {job.title}
                </h3>
                <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm mb-1">
                  <MapPin size={14} />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                  <Clock size={14} />
                  <span>{job.type.split('|')[0].trim()}</span>
                </div>
              </div>
              
              <p className="text-[var(--text-tertiary)] mb-8 line-clamp-3 flex-grow">
                {job.intro}
              </p>

              <button className="btn btn-secondary w-full group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)] group-hover:text-white transition-all">
                View Position
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedJob(null)}
          />
          
          <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-[var(--radius-lg)] w-full max-w-4xl max-h-full overflow-y-auto relative z-10 shadow-2xl flex flex-col">
            <div className="sticky top-0 bg-[var(--bg-surface)]/95 backdrop-blur-md border-b border-[var(--border)] p-6 md:p-8 flex items-start justify-between z-20">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedJob.title}</h3>
                <div className="flex flex-wrap gap-4 text-[var(--text-secondary)] text-sm">
                  <span className="flex items-center gap-1"><MapPin size={14} /> {selectedJob.location}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {selectedJob.type}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedJob(null)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-8 overflow-y-auto custom-scrollbar">
              <div>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed border-l-4 border-[var(--primary)] pl-6">
                  {selectedJob.intro}
                </p>
              </div>

              {selectedJob.whoFor && selectedJob.whoFor.length > 0 && (
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Star size={20} className="text-[var(--primary)]" /> Who This Is For
                  </h4>
                  <ul className="space-y-3">
                    {selectedJob.whoFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                        <Check size={18} className="text-[var(--primary)] mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedJob.responsibilities && selectedJob.responsibilities.length > 0 && (
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Briefcase size={20} className="text-[var(--primary)]" /> What You’ll Do
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedJob.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)] bg-[var(--bg-card)] p-3 rounded-lg border border-[var(--border)]">
                        <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedJob.requirements && selectedJob.requirements.length > 0 && (
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Check size={20} className="text-[var(--primary)]" /> What We’re Looking For
                  </h4>
                  <ul className="space-y-3">
                    {selectedJob.requirements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                        <Check size={18} className="text-[var(--primary)] mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedJob.bonus && selectedJob.bonus.length > 0 && (
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Bonus Points</h4>
                  <ul className="space-y-3">
                    {selectedJob.bonus.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                        <span className="text-[var(--primary)] font-bold">+</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedJob.compensation && selectedJob.compensation.length > 0 && (
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <DollarSign size={20} className="text-[var(--primary)]" /> Compensation
                  </h4>
                  <ul className="space-y-3">
                    {selectedJob.compensation.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                        <Check size={18} className="text-[var(--primary)] mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedJob.success && selectedJob.success.length > 0 && (
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">What Success Looks Like</h4>
                  <ul className="space-y-3">
                    {selectedJob.success.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                        <Check size={18} className="text-[var(--primary)] mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-[var(--bg-card)] border border-[var(--primary)]/30 rounded-[var(--radius-lg)] p-8 mt-8">
                <h4 className="text-2xl font-bold text-white mb-6">How to Apply</h4>
                <div className="space-y-4 mb-8">
                  {selectedJob.toApply.map((item, i) => (
                    <p key={i} className="text-[var(--text-secondary)] flex items-start gap-3">
                      <span className="w-6 h-6 bg-[var(--primary)]/20 rounded-full flex items-center justify-center text-[var(--primary)] text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      {item}
                    </p>
                  ))}
                </div>
                <a 
                  href={`mailto:support@launchnow.today?subject=Application: ${selectedJob.title}`}
                  className="btn btn-primary w-full md:w-auto inline-flex items-center gap-2"
                >
                  Apply Now <Briefcase size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
