import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: 'B.E. in Artificial Intelligence and Machine Learning',
    institution: 'SJC Institute of Technology, Karnataka',
    period: '2024 – 2028',
    status: 'Pursuing',
    score: '9.48 / 10 CGPA',
    scoreLabel: 'CGPA',
    isCurrent: true,
  },
  {
    degree: 'Higher Secondary (PUC)',
    institution: 'Vidyanidhi Independent PU College',
    period: '2022 – 2024',
    status: 'Completed',
    score: '95.33%',
    scoreLabel: 'Percentage',
    isCurrent: false,
  },
  {
    degree: 'SSLC (Class 10)',
    institution: 'Saraswathi Educational Society',
    period: '2021 – 2022',
    status: 'Completed',
    score: '96.32%',
    scoreLabel: 'Percentage',
    isCurrent: false,
  },
];

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-28 relative border-t"
      style={{ borderColor: 'rgba(215,226,234,0.07)', background: 'rgba(20,20,25,0.35)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] font-semibold tracking-[0.25em] text-accent uppercase mb-4 block">
            ACADEMIC BACKGROUND
          </span>
          <h2
            className="font-display font-bold mb-14 leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Education.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, rgba(185,160,255,0.4), rgba(215,226,234,0.1) 60%, transparent)' }}
            aria-hidden="true"
          />

          <div className="space-y-8">
            {educationData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="relative sm:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-6 hidden sm:flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300"
                  style={{
                    background: item.isCurrent ? 'rgba(185,160,255,0.12)' : 'rgba(20,20,25,0.8)',
                    borderColor: item.isCurrent ? 'rgba(185,160,255,0.5)' : 'rgba(215,226,234,0.12)',
                    boxShadow: item.isCurrent ? '0 0 20px rgba(185,160,255,0.2)' : 'none',
                  }}
                  aria-hidden="true"
                >
                  <GraduationCap
                    size={18}
                    style={{ color: item.isCurrent ? '#B9A0FF' : 'rgba(215,226,234,0.35)' }}
                  />
                </div>

                {/* Card */}
                <div
                  className="group p-7 rounded-2xl border transition-all duration-300"
                  style={{
                    background: item.isCurrent ? 'rgba(185,160,255,0.04)' : 'rgba(14,14,18,0.8)',
                    borderColor: item.isCurrent ? 'rgba(185,160,255,0.2)' : 'rgba(215,226,234,0.07)',
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="font-display font-bold text-lg text-primary">
                          {item.degree}
                        </h3>
                        {item.isCurrent && (
                          <span
                            className="text-[10px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
                            style={{
                              background: 'rgba(185,160,255,0.12)',
                              color: '#B9A0FF',
                              border: '1px solid rgba(185,160,255,0.25)',
                            }}
                          >
                            Pursuing
                          </span>
                        )}
                      </div>
                      <p className="text-secondary text-sm mb-1">{item.institution}</p>
                      <p className="text-muted text-xs tracking-wider">{item.period}</p>
                    </div>

                    {/* Score badge */}
                    <div
                      className="flex-shrink-0 px-5 py-3 rounded-xl text-center"
                      style={{
                        background: item.isCurrent ? 'rgba(185,160,255,0.1)' : 'rgba(215,226,234,0.05)',
                        border: `1px solid ${item.isCurrent ? 'rgba(185,160,255,0.2)' : 'rgba(215,226,234,0.08)'}`,
                      }}
                    >
                      <div
                        className="font-display font-bold text-xl"
                        style={{ color: item.isCurrent ? '#B9A0FF' : '#F5F5F7' }}
                      >
                        {item.score}
                      </div>
                      <div className="text-[10px] tracking-wider text-muted mt-0.5 uppercase">
                        {item.scoreLabel}
                      </div>
                    </div>
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

export default Education;
