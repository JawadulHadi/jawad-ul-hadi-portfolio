import React from 'react';
import { EXPERIENCES } from '../data';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#F5F0EB]/50 relative border-t border-b border-[#EBE3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8B6F47] bg-white px-3.5 py-1.5 rounded-full border border-[#EBE3DC]">
            Career Path
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3D2914] mt-4 mb-4 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-[#6B5344] text-base sm:text-lg">
            A track record of designing scalable backend architectures, intelligent RPA bots, and AI systems in enterprise environments.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-[#EBE3DC] p-6 sm:p-8 shadow-[0_4px_20px_rgba(61,41,20,0.04)] relative overflow-hidden"
            >
              {/* Top Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#5C3D2E] to-[#8B6F47]" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pt-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#3D2914]">
                    {exp.company}
                  </h3>
                  <p className="text-base font-semibold text-[#8B6F47] mt-0.5">
                    {exp.role}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium text-[#6B5344]">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5F0EB] border border-[#EBE3DC]">
                    <MapPin className="w-4 h-4 text-[#8B6F47]" />
                    {exp.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5F0EB] border border-[#EBE3DC]">
                    <Calendar className="w-4 h-4 text-[#8B6F47]" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3 mb-6">
                {exp.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8B6F47] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-[#6B5344] leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* Skills Used */}
              <div className="pt-4 border-t border-[#F5F0EB]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6B5344] mb-2.5">
                  Technologies &amp; Tools Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skillsUsed.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-lg bg-[#F5F0EB] text-[#3D2914] text-xs font-medium border border-[#EBE3DC]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
