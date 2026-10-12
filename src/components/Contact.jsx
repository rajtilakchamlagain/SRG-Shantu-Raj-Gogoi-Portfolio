import { useState } from 'react';
import { Mail, Send, Copy, Check, Instagram, MapPin, Phone, ExternalLink, Linkedin, FileText, Download } from 'lucide-react';
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
      particleCount: 60,
      spread: 50,
      origin: { y: 0.7 }
    });
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formState.subject || 'Engineering Inquiry: Shantu Raj Gogoi')}&body=${encodeURIComponent(`From: ${formState.name} (${formState.email})\n\n${formState.message}`)}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-24 relative bg-[#0c0f17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-3">
            <span>06</span>
            <span>&bull;</span>
            <span>Direct Outreach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Initiate Contact & Discussion
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Actively seeking Mechanical Design, CAD Modeling, and Mechatronics Engineering opportunities. Direct outreach channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 bg-[#131826] border border-[#232d46] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 sm:space-y-8 shadow-designer-sm">
            <div className="space-y-5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Direct Contact Channels
              </h3>

              <div className="space-y-3.5">
                {/* Email Item */}
                <div className="bg-[#0c0f17] border border-[#232d46] p-4 rounded-xl space-y-1.5">
                  <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
                    <span>Email Address:</span>
                    <button 
                      onClick={handleCopyEmail}
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold transition-colors text-[11px]"
                    >
                      {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-xs sm:text-sm font-semibold text-white hover:text-blue-400 break-all transition-colors block"
                  >
                    {personalInfo.email}
                  </a>
                </div>

                {/* Phone Item */}
                <div className="bg-[#0c0f17] border border-[#232d46] p-4 rounded-xl">
                  <div className="text-xs font-mono text-slate-400 mb-1">Direct Mobile:</div>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-blue-400 flex items-center gap-2 transition-colors"
                  >
                    <Phone size={14} className="text-blue-400" />
                    <span>{personalInfo.phone}</span>
                  </a>
                </div>

                {/* Location Item */}
                <div className="bg-[#0c0f17] border border-[#232d46] p-4 rounded-xl">
                  <div className="text-xs font-mono text-slate-400 mb-1">Location:</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200 flex items-center gap-2">
                    <MapPin size={14} className="text-emerald-400" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>

                {/* LinkedIn Link */}
                <div className="bg-[#0c0f17] border border-[#232d46] p-4 rounded-xl">
                  <div className="text-xs font-mono text-slate-400 mb-1">LinkedIn Profile:</div>
                  <a 
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors"
                  >
                    <Linkedin size={14} />
                    <span>linkedin.com/in/shanturajgogoi</span>
                    <ExternalLink size={11} className="ml-0.5 opacity-70" />
                  </a>
                </div>
              </div>
            </div>

            {/* Resume Download Feature in Contact Column */}
            <div className="pt-4 border-t border-[#232d46]">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Shantu_Raj_Gogoi_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#182032] hover:bg-[#1f2940] active:scale-95 text-white text-xs font-semibold transition-all border border-[#232d46] shadow-designer-sm"
              >
                <Download size={14} />
                <span>Download Shantu_Raj_Gogoi_Resume.pdf</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Transmission Form */}
          <div className="lg:col-span-7 bg-[#131826] border border-[#232d46] rounded-2xl p-6 sm:p-8 shadow-designer-sm">
            <h3 className="text-base sm:text-lg font-bold text-white mb-6">
              Send a Message or Technical Inquiry
            </h3>

            {submitted ? (
              <div className="p-8 text-center bg-[#0c0f17] rounded-xl border border-emerald-500/30 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check size={24} />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white">Opening Your Mail Client</h4>
                <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto">
                  Your default email application is launching. You can also write directly to {personalInfo.email}.
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
                      placeholder="e.g. Hiring Manager / Recruiter"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#0c0f17] border border-[#232d46] rounded-xl text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contact@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#0c0f17] border border-[#232d46] rounded-xl text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mechanical CAD / FEA Trainee Opportunity"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0c0f17] border border-[#232d46] rounded-xl text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe role requirements, team details, or project scope..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0c0f17] border border-[#232d46] rounded-xl text-sm text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white rounded-xl font-semibold text-sm transition-all shadow-designer-sm hover:shadow-designer-glow flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  <span>Send Message</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
