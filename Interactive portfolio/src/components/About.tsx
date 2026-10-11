import React from 'react';
import { motion } from 'framer-motion';

const featureCards = [
  {
    num: '01',
    title: 'Learn',
    desc: 'Exploring programming, AI, and emerging technologies with a continuous-learning mindset.',
    icon: '◎',
  },
  {
    num: '02',
    title: 'Build',
    desc: 'Turning ideas into interactive projects and practical applications.',
    icon: '◈',
  },
  {
    num: '03',
    title: 'Improve',
    desc: 'Strengthening problem-solving, teamwork, and software development fundamentals.',
    icon: '◉',
  },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-28 relative border-t"
      style={{ borderColor: 'rgba(215,226,234,0.07)' }}
    >
      {/* Subtle ambient */}
      <div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] opacity-[0.04] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #B9A0FF 0%, transparent 70%)', transform: 'translate(-50%, -50%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] font-semibold tracking-[0.25em] text-accent uppercase mb-4 block">
            ABOUT ME
          </span>
          <h2
            className="font-display font-bold mb-14 leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            A little about me.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left: Body text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5 text-secondary text-lg leading-relaxed"
          >
            <p>
              I'm pursuing a B.E. in Artificial Intelligence and Machine Learning at{' '}
              <span className="text-primary font-medium">SJC Institute of Technology</span>. I enjoy
              exploring technology, building web applications, and learning how software can solve
              practical problems.
            </p>
            <p>
              Through my projects and coursework, I'm strengthening my programming, problem-solving,
              and development skills.
            </p>
            <p>
              I'm excited to keep learning, collaborate with others, and turn thoughtful ideas into
              useful solutions.
            </p>

            {/* Small stat row */}
            <div className="flex flex-wrap gap-8 pt-6 border-t" style={{ borderColor: 'rgba(215,226,234,0.08)' }}>
              <div>
                <div className="font-display text-3xl font-bold text-accent">9.48</div>
                <div className="text-xs tracking-wider text-muted mt-1 uppercase">Current CGPA</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-primary">2024</div>
                <div className="text-xs tracking-wider text-muted mt-1 uppercase">Batch</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-primary">10+</div>
                <div className="text-xs tracking-wider text-muted mt-1 uppercase">Certifications</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Feature cards */}
          <div className="flex flex-col gap-5">
            {featureCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.15 + idx * 0.1 }}
                className="group p-6 rounded-2xl border transition-all duration-300 hover:border-accent/30"
                style={{
                  background: 'rgba(20,20,25,0.6)',
                  borderColor: 'rgba(215,226,234,0.08)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-colors duration-300 group-hover:bg-accent/15"
                    style={{ background: 'rgba(185,160,255,0.08)', color: '#B9A0FF' }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-accent/60">{card.num}</span>
                      <span className="font-display font-semibold text-primary tracking-wide">
                        {card.title}
                      </span>
                    </div>
                    <p className="text-sm text-secondary leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
