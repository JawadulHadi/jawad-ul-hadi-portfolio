import React, { useState } from 'react';
import { PROJECTS, Project } from '../data';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8B6F47] bg-[#F5F0EB] px-3.5 py-1.5 rounded-full border border-[#EBE3DC]">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3D2914] mt-4 mb-4 tracking-tight">
            Enterprise Projects &amp; Case Studies
          </h2>
          <p className="text-[#6B5344] text-base sm:text-lg">
            Explore production deployments ranging from RAG-powered knowledge assistants and LLM support triage to SAP procurement bots and FinTech banking platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-3xl border border-[#EBE3DC] p-6 sm:p-8 shadow-[0_4px_20px_rgba(61,41,20,0.04)] hover:shadow-[0_12px_35px_rgba(61,41,20,0.1)] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8B6F47] bg-[#F5F0EB] px-3 py-1 rounded-full border border-[#EBE3DC]">
                    {project.category}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#F5F0EB] text-[#5C3D2E] flex items-center justify-center group-hover:bg-[#5C3D2E] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#3D2914] mb-2 group-hover:text-[#5C3D2E] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-xs font-semibold text-[#8B6F47] mb-3">
                  {project.subtitle}
                </p>

                <p className="text-[#6B5344] text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Key Metric Highlight */}
                <div className="mb-6 p-3.5 rounded-xl bg-[#F5F0EB]/60 border border-[#EBE3DC]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#3D2914] mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#8B6F47]" />
                    Key Achievement
                  </div>
                  <p className="text-xs sm:text-sm text-[#6B5344] font-medium">
                    {project.metrics[0]}
                  </p>
                </div>
              </div>

              <div>
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#F5F0EB]">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-[#F5F0EB] text-[#3D2914] text-xs font-medium border border-[#EBE3DC]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 rounded-lg bg-[#F5F0EB] text-[#6B5344] text-xs font-medium">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
