import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#3D2914] text-[#F5F0EB] py-12 border-t border-[#5C3D2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#5C3D2E]">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#8B6F47] text-white flex items-center justify-center font-bold text-lg">
              JH
            </div>
            <div>
              <span className="font-bold text-white text-base block">Jawad Ul Hadi</span>
              <span className="text-xs text-[#DCD2C8]">Sr. Software Engineer &amp; RPA/Agentic AI Developer</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-[#DCD2C8]">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#5C3D2E] text-white text-xs font-semibold hover:bg-[#8B6F47] transition-colors"
            aria-label="Scroll to top"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DCD2C8]">
          <p>© {new Date().getFullYear()} Jawad Ul Hadi. All rights reserved.</p>
          <p>Islamabad, Pakistan • Enterprise Automation &amp; AI Solutions</p>
        </div>
      </div>
    </footer>
  );
}
