import React from 'react';
import { Briefcase, Award, Code, CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    "4+ Years of Professional Software Engineering Experience",
    "Specialized in RPA & UiPath Agentic Workflow Automation",
    "Expertise in RAG Systems, Vector Databases & Generative AI Integration",
    "Proficient in NestJS, Node.js, Python, and Enterprise PostgreSQL Databases",
    "Proven track record at MicroAgility.apac optimizing Fortune 500 processes"
  ];

  return (
    <section id="about" className="py-24 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8B6F47] bg-[#F5F0EB] px-3.5 py-1.5 rounded-full border border-[#EBE3DC]">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3D2914] mt-4 mb-4 tracking-tight">
            Architecting Intelligent Automation &amp; Backend Systems
          </h2>
          <p className="text-[#6B5344] text-base sm:text-lg">
            Combining rigorous software engineering principles with cutting-edge AI and robotic process automation to eliminate manual friction in enterprise environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Bio summary */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-[#3D2914]">
              Hello! I'm Jawad Ul Hadi, a Senior Software Engineer based in Islamabad, Pakistan.
            </h3>
            
            <p className="text-[#6B5344] leading-relaxed text-base">
              I specialize in bridging the gap between traditional enterprise backend systems and modern autonomous AI agents. Currently serving as a Senior Software Engineer at <span className="font-semibold text-[#3D2914]">MicroAgility.apac</span>, I build robust APIs with NestJS, design scalable RAG knowledge assistants, and deploy cognitive RPA solutions that handle complex business logic.
            </p>

            <p className="text-[#6B5344] leading-relaxed text-base">
              My engineering philosophy revolves around creating resilient, maintainable systems that deliver measurable ROI. Whether it's reducing invoice processing time by 75% or implementing sub-second semantic search over millions of documents, I thrive on solving high-impact architectural challenges.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#F5F0EB] border border-[#EBE3DC]">
                <div className="text-2xl font-extrabold text-[#5C3D2E]">4+</div>
                <div className="text-xs text-[#6B5344] font-medium mt-1">Years Experience</div>
              </div>
              <div className="p-4 rounded-xl bg-[#F5F0EB] border border-[#EBE3DC]">
                <div className="text-2xl font-extrabold text-[#5C3D2E]">30+</div>
                <div className="text-xs text-[#6B5344] font-medium mt-1">Enterprise Bots &amp; APIs</div>
              </div>
            </div>
          </div>

          {/* Right Column - Highlight Cards */}
          <div className="lg:col-span-6">
            <div className="bg-[#F5F0EB]/60 rounded-3xl border border-[#EBE3DC] p-6 sm:p-8 shadow-[0_4px_20px_rgba(61,41,20,0.04)]">
              <h4 className="text-lg font-bold text-[#3D2914] mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#8B6F47]" />
                Core Competency Highlights
              </h4>

              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#EBE3DC] shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-[#8B6F47] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#3D2914]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#EBE3DC] flex items-center justify-between text-xs text-[#6B5344]">
                <span>Current Role: Sr. Software Engineer</span>
                <span className="font-semibold text-[#5C3D2E]">MicroAgility.apac</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
