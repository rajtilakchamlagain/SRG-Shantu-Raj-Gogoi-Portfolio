import { internships, leadership } from '../data/portfolioData';
import { Building2, Calendar, MapPin, CheckCircle, Users } from 'lucide-react';

export default function Internships() {
  return (
    <section id="internships" className="py-16 sm:py-20 relative bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold mb-2">
            03. Verified Industrial Experience
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Industry Internships & Engineering Practicums
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Direct operational and engineering experience across commercial healthcare product design, oil refinery infrastructure, and precision MSME tool room fabrication.
          </p>
        </div>

        {/* 3 Prominent Internship Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 sm:mb-16">
          {internships.map((intern, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 transition-colors group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold">
                    {intern.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                    <Calendar size={12} />
                    {intern.period}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {intern.role}
                </h3>
                <h4 className="text-sm font-semibold text-slate-700 mt-1 mb-4 flex items-center gap-1.5">
                  <Building2 size={15} className="text-blue-600" />
                  <span>{intern.company}</span>
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {intern.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin size={12} />
                  {intern.location}
                </span>
                <span className="text-emerald-600 font-medium flex items-center gap-1">
                  <CheckCircle size={12} />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership & Academic Department Positions */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Users size={18} className="text-blue-600" />
            Engineering Club Leadership & Roles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-blue-700 font-bold">{item.org}</span>
                  <span className="text-slate-500">{item.period}</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  {item.role}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
