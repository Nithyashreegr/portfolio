import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const GithubIcon = ({ size = 18, className = '' }: { size?: number; className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size}
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18.13V22" />
  </svg>
);

/** CSS-based abstract visual for each project */
const ProjectVisual: React.FC<{ projectId: string }> = ({ projectId }) => {
  if (projectId === '01') {
    // QuitHabit: habit streak rings
    return (
      <div className="w-full h-full flex items-center justify-center" aria-hidden="true">
        <div className="relative w-32 h-32">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border-2 opacity-60"
              style={{
                inset: `${i * 14}px`,
                borderColor: i === 0 ? 'rgba(185,160,255,0.6)' : i === 1 ? 'rgba(139,92,246,0.4)' : 'rgba(185,160,255,0.2)',
                animation: `spin ${8 + i * 4}s linear infinite ${i % 2 === 1 ? 'reverse' : ''}`,
              }}
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="font-display font-bold text-accent text-lg">🔥</div>
              <div className="text-[10px] text-muted tracking-wider mt-1">STREAK</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === '02') {
    // Hotel Room Management: room grid
    return (
      <div className="w-full h-full flex items-center justify-center p-6" aria-hidden="true">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="w-10 h-8 rounded-md border text-[8px] font-mono flex items-center justify-center"
              style={{
                borderColor: i < 3 ? 'rgba(185,160,255,0.5)' : 'rgba(215,226,234,0.1)',
                background: i < 3 ? 'rgba(185,160,255,0.12)' : 'rgba(20,20,25,0.5)',
                color: i < 3 ? '#B9A0FF' : '#A1A1AA',
              }}
            >
              {i < 3 ? '✓' : `10${i + 1}`}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (projectId === '03') {
    // Zombie Survival City: dark grid city
    return (
      <div className="w-full h-full flex items-center justify-center p-4 relative" aria-hidden="true">
        <div className="relative w-36 h-28">
          {/* Building silhouettes */}
          {[
            { left: '0%', width: '18%', height: '70%' },
            { left: '22%', width: '22%', height: '55%' },
            { left: '48%', width: '18%', height: '85%' },
            { left: '70%', width: '15%', height: '60%' },
            { left: '88%', width: '12%', height: '75%' },
          ].map((b, i) => (
            <div
              key={i}
              className="absolute bottom-0 rounded-sm"
              style={{
                left: b.left, width: b.width, height: b.height,
                background: 'rgba(40,40,50,0.9)',
                border: '1px solid rgba(185,160,255,0.1)',
              }}
            >
              {/* Windows */}
              <div className="absolute inset-x-0.5 top-2 grid grid-cols-2 gap-0.5 opacity-60">
                {[0, 1, 2, 3].map((w) => (
                  <div key={w} className="h-1 rounded-sm" style={{ background: Math.random() > 0.4 ? '#B9A0FF' : 'transparent', opacity: 0.6 }} />
                ))}
              </div>
            </div>
          ))}
          {/* Eerie glow at base */}
          <div className="absolute bottom-0 inset-x-0 h-6 blur-sm" style={{ background: 'linear-gradient(to top, rgba(139,92,246,0.3), transparent)' }} />
          <div className="absolute -top-4 right-4 text-base">🧟</div>
        </div>
      </div>
    );
  }

  if (projectId === '04') {
    // AI Dungeon Explorer: map grid
    return (
      <div className="w-full h-full flex items-center justify-center p-4" aria-hidden="true">
        <div className="grid grid-cols-5 grid-rows-4 gap-0.5 w-40 h-32">
          {Array.from({ length: 20 }).map((_, i) => {
            const isPath = [2, 7, 8, 9, 14, 13, 12, 17].includes(i);
            const isEnd = i === 17;
            const isStart = i === 2;
            return (
              <div
                key={i}
                className="rounded-sm flex items-center justify-center text-[7px]"
                style={{
                  background: isEnd ? 'rgba(185,160,255,0.3)' : isPath ? 'rgba(185,160,255,0.08)' : 'rgba(20,20,25,0.8)',
                  border: `1px solid ${isPath ? 'rgba(185,160,255,0.2)' : 'rgba(215,226,234,0.04)'}`,
                }}
              >
                {isStart ? '⚔' : isEnd ? '★' : ''}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-28 relative border-t"
      style={{ borderColor: 'rgba(215,226,234,0.07)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] font-semibold tracking-[0.25em] text-accent uppercase mb-4 block">
            FEATURED WORK
          </span>
          <h2
            className="font-display font-bold mb-4 leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Projects I've built.
          </h2>
          <p className="text-secondary max-w-2xl mb-16 text-lg">
            Small steps, practical ideas, and projects that help me learn by building.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative flex flex-col rounded-3xl overflow-hidden border transition-all duration-400"
              style={{
                background: 'rgba(14,14,18,0.9)',
                borderColor: 'rgba(215,226,234,0.08)',
              }}
            >
              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(185,160,255,0.25)' }}
                aria-hidden="true"
              />

              {/* Visual Preview Area */}
              <div
                className="relative h-48 overflow-hidden flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, rgba(20,20,28,1) 0%, rgba(14,14,22,1) 100%)' }}
                aria-label={`Visual preview for ${project.title}`}
              >
                <ProjectVisual projectId={project.id} />
                {/* Gradient overlay at bottom of visual */}
                <div
                  className="absolute bottom-0 inset-x-0 h-16 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(14,14,18,1), transparent)' }}
                  aria-hidden="true"
                />
                {/* Project number */}
                <div
                  className="absolute top-4 left-5 font-display font-bold text-4xl leading-none select-none"
                  style={{ color: 'rgba(215,226,234,0.07)' }}
                  aria-hidden="true"
                >
                  {project.id}
                </div>
                {/* Category badge */}
                <div className="absolute top-4 right-5">
                  <span
                    className="text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(185,160,255,0.1)',
                      color: '#B9A0FF',
                      border: '1px solid rgba(185,160,255,0.2)',
                    }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-7 pt-5">
                <h3 className="font-display font-bold text-xl text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Features list */}
                {project.features && project.features.length > 0 && (
                  <ul className="mb-6 space-y-1.5">
                    {project.features.slice(0, 3).map((feat, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-xs text-muted">
                        <span className="text-accent mt-0.5 flex-shrink-0">—</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, ti) => (
                    <span
                      key={ti}
                      className="text-[11px] px-2.5 py-1 rounded-md font-medium"
                      style={{
                        background: 'rgba(215,226,234,0.05)',
                        color: 'rgba(215,226,234,0.55)',
                        border: '1px solid rgba(215,226,234,0.06)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons - only shown if real URLs exist */}
                {(project.liveUrl || project.sourceUrl) && (
                  <div
                    className="flex items-center gap-4 pt-5 border-t"
                    style={{ borderColor: 'rgba(215,226,234,0.06)' }}
                  >
                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs text-secondary hover:text-accent transition-colors duration-200 font-medium"
                        aria-label={`Source code for ${project.title}`}
                      >
                        <GithubIcon size={15} />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs text-secondary hover:text-accent transition-colors duration-200 font-medium"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
