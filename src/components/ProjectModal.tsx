import React from 'react';
import { Project } from '../data';
import { X, ExternalLink, Cpu, BarChart3, Layers, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3D2914]/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl border border-[#EBE3DC] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#F5F0EB] text-[#3D2914] hover:bg-[#5C3D2E] hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Title */}
        <div className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8B6F47] bg-[#F5F0EB] px-3 py-1 rounded-full border border-[#EBE3DC]">
            {project.category}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3D2914] mt-3 mb-1">
            {project.title}
          </h2>
          <p className="text-sm font-medium text-[#6B5344]">{project.subtitle}</p>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-[#3D2914] uppercase tracking-wider mb-2 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#8B6F47]" /> Project Overview
          </h4>
          <p className="text-[#6B5344] leading-relaxed text-sm sm:text-base">
            {project.description}
          </p>
        </div>

        {/* Key Metrics */}
        <div className="mb-6 p-4 rounded-2xl bg-[#F5F0EB] border border-[#EBE3DC]">
          <h4 className="text-sm font-bold text-[#3D2914] uppercase tracking-wider mb-3 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-[#8B6F47]" /> Key Metrics &amp; Achievements
          </h4>
          <ul className="space-y-2">
            {project.metrics.map((metric, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-[#3D2914] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#8B6F47] shrink-0 mt-0.5" />
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-[#3D2914] uppercase tracking-wider mb-2 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#8B6F47]" /> Architecture &amp; Implementation
          </h4>
          <p className="text-[#6B5344] leading-relaxed text-sm">
            {project.architecture}
          </p>
        </div>

        {/* Business Impact */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-[#3D2914] uppercase tracking-wider mb-2">
            Business Impact
          </h4>
          <p className="text-[#6B5344] leading-relaxed text-sm bg-white p-3.5 rounded-xl border border-[#EBE3DC]">
            {project.impact}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="pt-6 border-t border-[#F5F0EB]">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6B5344] mb-3">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-[#F5F0EB] text-[#3D2914] text-xs font-medium border border-[#EBE3DC]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal footer */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#5C3D2E] text-white text-sm font-semibold hover:bg-[#3D2914] transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
