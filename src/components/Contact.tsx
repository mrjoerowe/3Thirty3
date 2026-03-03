import { useState } from 'react';
import type React from 'react';
import { Mail, Phone, Calendar, Check, Loader2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    role: '',
    time: '',
    package: '',
    notes: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://hook.us2.make.com/zh6gx7jjyntonupwbqw72u1pc77l3wtp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 reveal">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Let’s Build the <span className="text-accent-gradient">Hiring Comeback Story</span></h2>
            <p className="text-[var(--text-secondary)] text-lg mb-12 leading-relaxed">
              We’re ready to roll cameras. Let’s discuss how ZipRecruiter can own this narrative.
            </p>

            <div className="bg-[rgba(255,255,255,0.03)] border border-[var(--border)] rounded-[var(--radius-md)] p-8 mb-8 backdrop-blur-sm">
              <h5 className="font-bold text-white mb-4 flex items-center gap-2">
                <Calendar size={20} className="text-[var(--primary)]" />
                What happens next?
              </h5>
              <ol className="space-y-4 text-[var(--text-secondary)] list-decimal list-inside marker:text-[var(--primary)] marker:font-bold">
                <li>We schedule a brief 15-min alignment call.</li>
                <li>We send a formal proposal tailored to your tier.</li>
                <li>We sign and start pre-production.</li>
              </ol>
            </div>

            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius-md)] p-6 flex items-center gap-4 hover:border-[var(--primary)] transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-[rgba(54,171,98,0.1)] rounded-full flex items-center justify-center text-[var(--primary)] group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-[var(--text-secondary)] mb-1">Prefer email?</p>
                <a href="mailto:support@launchnow.today" className="font-bold text-white group-hover:text-[var(--primary)] transition-colors text-lg">support@launchnow.today</a>
              </div>
            </div>
          </div>

          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius-lg)] p-8 md:p-10 shadow-2xl relative overflow-hidden">
            {status === 'success' ? (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(54,171,98,0.5)]">
                  <Check size={48} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Request Received!</h3>
                <p className="text-[var(--text-secondary)] mb-8 text-lg">Thanks for your interest. We'll be in touch shortly to schedule your call.</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="btn btn-secondary w-full"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-white mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full bg-[var(--bg-body)] border border-[var(--border)] rounded-[var(--radius-md)] px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all placeholder:text-[var(--text-tertiary)]"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-bold text-white mb-2">Title</label>
                    <input 
                      type="text" 
                      id="title" 
                      name="title" 
                      className="w-full bg-[var(--bg-body)] border border-[var(--border)] rounded-[var(--radius-md)] px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all placeholder:text-[var(--text-tertiary)]"
                      placeholder="Partnerships Manager"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-white mb-2">Company Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full bg-[var(--bg-body)] border border-[var(--border)] rounded-[var(--radius-md)] px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all placeholder:text-[var(--text-tertiary)]"
                      placeholder="jane@ziprecruiter.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-white mb-2">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="w-full bg-[var(--bg-body)] border border-[var(--border)] rounded-[var(--radius-md)] px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all placeholder:text-[var(--text-tertiary)]"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-bold text-white mb-2">Role/Team</label>
                    <select 
                      id="role" 
                      name="role" 
                      className="w-full bg-[var(--bg-body)] border border-[var(--border)] rounded-[var(--radius-md)] px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all appearance-none cursor-pointer"
                      value={formData.role}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Select...</option>
                      <option value="Brand Partnerships">Brand Partnerships</option>
                      <option value="SMB Marketing">SMB Marketing</option>
                      <option value="Employer Brand">Employer Brand</option>
                      <option value="Content/PR">Content/PR</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="time" className="block text-sm font-bold text-white mb-2">Best time to contact</label>
                    <select 
                      id="time" 
                      name="time" 
                      className="w-full bg-[var(--bg-body)] border border-[var(--border)] rounded-[var(--radius-md)] px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all appearance-none cursor-pointer"
                      value={formData.time}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Select...</option>
                      <option value="Morning">Morning</option>
                      <option value="Afternoon">Afternoon</option>
                      <option value="Evening">Evening</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="package" className="block text-sm font-bold text-white mb-2">Package Interest</label>
                    <select 
                      id="package" 
                      name="package" 
                      className="w-full bg-[var(--bg-body)] border border-[var(--border)] rounded-[var(--radius-md)] px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all appearance-none cursor-pointer"
                      value={formData.package}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Select...</option>
                      <option value="Not sure">Not sure</option>
                      <option value="Tier 1">Tier 1: Hiring Partner</option>
                      <option value="Tier 2">Tier 2: Exclusive</option>
                      <option value="Tier 3">Tier 3: Presenting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-bold text-white mb-2">Notes</label>
                  <textarea 
                    id="notes" 
                    name="notes" 
                    rows={4} 
                    className="w-full bg-[var(--bg-body)] border border-[var(--border)] rounded-[var(--radius-md)] px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all placeholder:text-[var(--text-tertiary)] resize-none"
                    placeholder="Any specific questions or campaign goals?"
                    value={formData.notes}
                    onChange={handleChange}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="btn btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Schedule Partnership Call'
                  )}
                </button>
                
                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center mt-4">There was an error submitting your request. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
