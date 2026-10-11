import React from 'react';
import { motion } from 'framer-motion';
import { technicalSkills } from '../data/skills';

const categoryIcons: Record<string, string> = {
  'Programming Languages': '{ }',
  'Core Concepts': '◈',
  'Web Technologies': '</>',
  'Tools': '⚙',
};

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-28 relative border-t"
      style={{ borderColor: 'rgba(215,226,234,0.07)', background: 'rgba(20,20,25,0.4)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] font-semibold tracking-[0.25em] text-accent uppercase mb-4 block">
            TECHNICAL SKILLS
          </span>
          <h2
            className="font-display font-bold mb-4 leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Tools I work with.
          </h2>
          <p className="text-secondary max-w-2xl mb-14 text-lg">
            Skills and technologies I use to build projects and explore ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {technicalSkills.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 rounded-2xl border transition-all duration-300 hover:border-accent/25"
              style={{
                background: 'rgba(14,14,18,0.8)',
                borderColor: 'rgba(215,226,234,0.08)',
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono transition-colors duration-300 group-hover:bg-accent/15"
                  style={{ background: 'rgba(185,160,255,0.08)', color: '#B9A0FF' }}
                >
                  {categoryIcons[group.category] || '◎'}
                </div>
                <h3 className="font-display font-semibold text-sm tracking-wide text-primary">
                  {group.category}
                </h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg border text-secondary transition-all duration-200 hover:text-accent hover:border-accent/30 cursor-default"
                    style={{
                      background: 'rgba(12,12,12,0.6)',
                      borderColor: 'rgba(215,226,234,0.1)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
