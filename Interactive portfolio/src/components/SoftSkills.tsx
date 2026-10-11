import React from 'react';
import { motion } from 'framer-motion';
import { softSkills } from '../data/skills';

const softSkillIcons: Record<string, string> = {
  'Communication and Interpersonal Skills': '💬',
  'Teamwork and Collaboration': '🤝',
  'Leadership and Team Coordination': '🎯',
  'Time Management and Prioritization': '⏱',
  'Adaptability and Continuous Learning': '🔄',
  'Problem-Solving and Critical Thinking': '🧩',
};

const SoftSkills: React.FC = () => {
  return (
    <section
      id="soft-skills"
      className="py-28 relative border-t"
      style={{ borderColor: 'rgba(215,226,234,0.07)', background: 'rgba(20,20,25,0.3)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] font-semibold tracking-[0.25em] text-accent uppercase mb-4 block">
            SOFT SKILLS
          </span>
          <h2
            className="font-display font-bold mb-14 leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            How I show up.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {softSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 hover:border-accent/25"
              style={{
                background: 'rgba(14,14,18,0.7)',
                borderColor: 'rgba(215,226,234,0.08)',
              }}
            >
              <span
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'rgba(185,160,255,0.08)' }}
                aria-hidden="true"
              >
                {softSkillIcons[skill] || '◎'}
              </span>
              <span className="text-secondary text-sm font-medium leading-snug group-hover:text-primary transition-colors duration-300">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
