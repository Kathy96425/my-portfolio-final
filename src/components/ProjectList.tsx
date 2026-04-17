import { motion } from "motion/react";
import { projects, Project } from "../data/projects";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function ProjectList() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="relative w-full min-h-screen py-32 overflow-hidden bg-[#0f0c0a]">
      {/* Film Strip SVG Background */}
      <div className="absolute inset-0 flex justify-center pointer-events-none z-0 hidden md:block overflow-hidden">
        <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice" className="opacity-60">
          <path 
            id="film-path"
            d="M 10vw 90vh C 30vw 60vh, 70vw 70vh, 50vw 50vh C 30vw 30vh, 60vw 40vh, 90vw 10vh" 
            fill="none" 
            stroke="rgba(42, 31, 26, 0.8)" 
            strokeWidth="40" 
            strokeLinecap="round"
          />
          {/* Film holes */}
          <path 
            d="M 10vw 90vh C 30vw 60vh, 70vw 70vh, 50vw 50vh C 30vw 30vh, 60vw 40vh, 90vw 10vh" 
            fill="none" 
            stroke="#0f0c0a" 
            strokeWidth="36" 
            strokeDasharray="4 12" 
            strokeLinecap="square"
          />
          {/* Light flow */}
          <motion.path 
            d="M 10vw 90vh C 30vw 60vh, 70vw 70vh, 50vw 50vh C 30vw 30vh, 60vw 40vh, 90vw 10vh" 
            fill="none" 
            stroke="url(#goldGradient)" 
            strokeWidth="2" 
            strokeDasharray="100 1000"
            animate={{ strokeDashoffset: [1100, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#9B7B4C" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Mobile Straight Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#2a1f1a] -translate-x-1/2 md:hidden z-0">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-[#9B7B4C]/50 to-transparent animate-beam"></div>
      </div>

      <div className="container mx-auto px-4 md:px-0 relative z-10 flex flex-col gap-32 md:gap-48">
        {projects.map((project, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex w-full ${isLeft ? "md:justify-start" : "md:justify-end"} justify-center`}
            >
              <div 
                onClick={() => setSelectedProject(project)}
                className={`group relative w-[90%] ${isLeft ? "md:w-[35%]" : "md:w-[28%]"} cursor-pointer bg-[#1a1512]/85 backdrop-blur-sm border border-[#C73D2E]/10 rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(199,61,46,0.5)] ${isLeft ? "md:ml-[10%]" : "md:mr-[10%]"}`}
              >
                {/* Cover Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.cover} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#C73D2E]/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Tags */}
                  <div className="absolute top-4 left-4 bg-[#9B7B4C] px-3 py-1 text-[#C73D2E] text-xs font-serif tracking-widest shadow-md">
                    {project.type}
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#2C5F5F] rounded-full flex items-center justify-center border border-[#9B7B4C] text-[#9B7B4C] text-[10px] font-serif text-center leading-tight transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_0_15px_rgba(155,123,76,0.8)]">
                    {project.year}
                  </div>
                </div>

                {/* Content */}
                <div className={`p-6 md:p-8 ${isLeft ? "text-left" : "text-right md:text-left"}`}>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#E8E2D4] tracking-widest mb-2">{project.title}</h3>
                  <div className={`w-10 h-[1px] bg-[#C73D2E] mb-4 ${isLeft ? "" : "ml-auto md:ml-0"}`}></div>
                  
                  <p className="text-[#B8A99A] text-sm mb-4">
                    {project.roles.map((role, i) => (
                      <span key={i} className={`text-[#C73D2E] font-medium ${isLeft ? "mr-2" : "ml-2 md:ml-0 md:mr-2"}`}>{role}</span>
                    ))}
                    {project.otherRoles && <span className="opacity-70">/ {project.otherRoles}</span>}
                  </p>
                  
                  <p className="text-[#B8A99A] text-sm leading-relaxed line-clamp-2 opacity-80">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
