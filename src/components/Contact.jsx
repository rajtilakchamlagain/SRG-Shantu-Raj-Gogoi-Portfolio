import { useState } from 'react';
import { Mail, Send, Copy, Check, Instagram, MapPin, Phone, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });
    // Compose mailto link as fallback
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formState.subject || 'Portfolio Inquiry: Opportunities')}&body=${encodeURIComponent(`From: ${formState.name} (${formState.email})\n\n${formState.message}`)}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090e1a] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
            05. Candidate Engagement
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Initiate Contact & Discussion
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Actively seeking entry-level Mechanical Engineer, GET (Graduate Engineering Trainee), CAD Designer, or Mechatronics roles. Let's discuss technical requirements and team alignment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Direct Contact Channels
              </h3>

              <div className="space-y-4">
                {/* Email Item with copy */}
                <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl space-y-2">
                  <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
                    <span>Official Email:</span>
                    <button 
                      onClick={handleCopyEmail}
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold transition-colors"
                    >
                      {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-sm font-semibold text-white hover:text-blue-400 break-all transition-colors block"
                  >
                    {personalInfo.email}
                  </a>
                </div>

                {/* Location Item */}
                <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl">
                  <div className="text-xs font-mono text-slate-400 mb-1">Geographic Location:</div>
                  <div className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                    <MapPin size={15} className="text-emerald-400" />
                    <span>Assam, India (Open to Relocation)</span>
                  </div>
                </div>

                {/* Instagram / Professional Portfolio Handle */}
                <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl">
                  <div className="text-xs font-mono text-slate-400 mb-1">Design & Visual Handle:</div>
                  <a 
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors"
                  >
                    <Instagram size={15} />
                    <span>@srg.phics</span>
                    <ExternalLink size={12} className="ml-1 opacity-70" />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <div className="text-xs text-slate-400">
                Response timeline: <span className="text-emerald-400 font-semibold">Within 24 business hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Transmission Form */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-6">
              Send a Message or Interview Invitation
            </h3>

            {submitted ? (
              <div className="p-8 text-center bg-slate-950/60 rounded-xl border border-emerald-500/30 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check size={24} />
                </div>
                <h4 className="text-lg font-bold text-white">Opening Your Mail Client!</h4>
                <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto">
                  Your mail app is being launched with the message details. You can also reach Shantu directly at {personalInfo.email}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-blue-400 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                      Your Name / Organization
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / Tata Motors HR"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="hr@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                    Inquiry Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Job Opening: Graduate Mechanical Engineer"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                    Message Details / Job Description
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell Shantu about the position, location, or project scope..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
