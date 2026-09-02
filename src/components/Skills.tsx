import React from 'react';
import { SKILL_CATEGORIES } from '../data';
import { Bot, Brain, Server, Cloud, Check } from 'lucide-react';

export default function Skills() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-6 h-6 text-[#5C3D2E]" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-[#5C3D2E]" />;
      case 'Server':
        return <Server className="w-6 h-6 text-[#5C3D2E]" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-[#5C3D2E]" />;
      default:
        return <Bot className="w-6 h-6 text-[#5C3D2E]" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#F5F0EB]/50 relative border-t border-b border-[#EBE3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8B6F47] bg-white px-3.5 py-1.5 rounded-full border border-[#EBE3DC]">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3D2914] mt-4 mb-4 tracking-tight">
            Technical Skills &amp; Capabilities
          </h2>
          <p className="text-[#6B5344] text-base sm:text-lg">
            A comprehensive overview of the tools, frameworks, and modern technologies I use to build scalable automation and AI-driven solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#EBE3DC] p-6 shadow-[0_4px_20px_rgba(61,41,20,0.04)] hover:shadow-[0_10px_30px_rgba(61,41,20,0.08)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F5F0EB] flex items-center justify-center mb-6 group-hover:bg-[#5C3D2E] group-hover:text-white transition-colors duration-300">
                  {getIcon(category.iconName)}
                </div>

                <h3 className="text-xl font-bold text-[#3D2914] mb-4">
                  {category.title}
                </h3>

                <ul className="space-y-3 mb-6">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-sm text-[#6B5344]">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#8B6F47] shrink-0" />
                      <span className="font-medium text-[#3D2914]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#F5F0EB] flex items-center justify-between text-xs text-[#6B5344]">
                <span>Enterprise Grade</span>
                <span className="font-semibold text-[#8B6F47]">Production Ready</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
