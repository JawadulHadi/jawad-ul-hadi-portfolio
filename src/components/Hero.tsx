import React from 'react';
import { ArrowRight, Sparkles, Terminal, Cpu, Database } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-gradient-to-b from-[#F5F0EB]/60 via-[#FFFFFF] to-[#FFFFFF]">
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3d291408_1px,transparent_1px),linear-gradient(to_bottom,#3d291408_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B6F47]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F0EB] border border-[#EBE3DC] text-[#5C3D2E] text-xs font-semibold mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              Available for Enterprise AI & Automation Consulting
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#3D2914] tracking-tight mb-4">
              JAWAD UL HADI
            </h1>
            
            <p className="text-xl sm:text-2xl font-bold text-[#8B6F47] mb-6">
              Sr. Software Engineer &amp; RPA/Agentic AI Developer
            </p>

            <p className="text-lg text-[#6B5344] leading-relaxed mb-8 max-w-2xl">
              Automating enterprise workflows with intelligent AI solutions, advanced RAG systems, and robust backend architectures. Transforming complex business operations into seamless automated pipelines.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => scrollTo('#projects')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#5C3D2E] text-white font-semibold text-base hover:bg-[#3D2914] transition-all duration-200 shadow-[0_4px_20px_rgba(92,61,46,0.2)] group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-[#DCD2C8] text-[#3D2914] font-semibold text-base hover:bg-[#F5F0EB] transition-all duration-200 shadow-xs"
              >
                Contact Me
              </button>
            </div>

            {/* Tech Stack Pills */}
            <div className="w-full pt-8 border-t border-[#F5F0EB]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B5344] mb-3">
                Core Expertise &amp; Stack
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                {['NestJS', 'Node.js', 'RAG Systems', 'Generative AI', 'UiPath Agentic AI', 'Python', 'PostgreSQL', 'Cloud & DevOps'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-lg bg-[#F5F0EB] text-[#3D2914] text-xs font-medium border border-[#EBE3DC] shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative box shadow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#8B6F47] to-[#5C3D2E] rounded-3xl blur-lg opacity-25" />
              
              <div className="relative bg-white rounded-2xl border border-[#EBE3DC] p-6 sm:p-8 shadow-[0_10px_30px_rgba(61,41,20,0.08)]">
                <div className="flex items-center justify-between pb-6 border-b border-[#F5F0EB]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#F5F0EB] text-[#5C3D2E] flex items-center justify-center font-bold text-xl">
                      JH
                    </div>
                    <div>
                      <h3 className="font-bold text-[#3D2914] text-lg">Jawad Ul Hadi</h3>
                      <p className="text-xs text-[#6B5344]">Islamabad, Pakistan</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#F5F0EB] text-[#5C3D2E] text-xs font-semibold">
                    4+ Years Exp
                  </span>
                </div>

                <div className="py-6 space-y-4">
                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-[#F5F0EB]/60 border border-[#EBE3DC]">
                    <Cpu className="w-5 h-5 text-[#8B6F47] mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#3D2914] text-sm">Agentic AI &amp; RPA</h4>
                      <p className="text-xs text-[#6B5344] mt-0.5">Autonomous workflow bots, UiPath orchestration &amp; cognitive IDP.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-[#F5F0EB]/60 border border-[#EBE3DC]">
                    <Database className="w-5 h-5 text-[#8B6F47] mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#3D2914] text-sm">Enterprise RAG &amp; LLMs</h4>
                      <p className="text-xs text-[#6B5344] mt-0.5">Vector DBs, embedding pipelines &amp; secure contextual Q&amp;A models.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-[#F5F0EB]/60 border border-[#EBE3DC]">
                    <Terminal className="w-5 h-5 text-[#8B6F47] mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#3D2914] text-sm">Backend Architecture</h4>
                      <p className="text-xs text-[#6B5344] mt-0.5">Scalable REST/GraphQL microservices in NestJS &amp; Node.js.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F5F0EB] flex items-center justify-between text-xs text-[#6B5344]">
                  <span>Current: MicroAgility.apac</span>
                  <span className="font-semibold text-[#3D2914]">Sr. Software Engineer</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
