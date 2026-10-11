import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';

// Map issuers to icon symbols
const issuerIcon: Record<string, string> = {
  'Cisco Networking Academy': '🌐',
  'Infosys Springboard': '⬡',
  'IBM SkillsBuild': '◈',
  'EY and Microsoft': '◆',
};

const issuerColor: Record<string, string> = {
  'Cisco Networking Academy': '#B9A0FF',
  'Infosys Springboard': '#8B5CF6',
  'IBM SkillsBuild': '#B9A0FF',
  'EY and Microsoft': '#D7E2EA',
};

const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
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
            CERTIFICATIONS
          </span>
          <h2
            className="font-display font-bold mb-4 leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Learning beyond the classroom.
          </h2>
          <p className="text-secondary max-w-2xl mb-14 text-lg">
            Certifications earned through self-directed learning across AI, development, and digital skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="group p-5 rounded-2xl border transition-all duration-300 hover:border-accent/25 flex flex-col gap-3"
              style={{
                background: 'rgba(14,14,18,0.8)',
                borderColor: 'rgba(215,226,234,0.08)',
              }}
            >
              {/* Issuer icon */}
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-sm flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'rgba(185,160,255,0.08)',
                  border: '1px solid rgba(185,160,255,0.15)',
                  color: issuerColor[cert.issuer] || '#B9A0FF',
                }}
              >
                {issuerIcon[cert.issuer] || '◎'}
              </div>

              {/* Title & issuer */}
              <div>
                <h3 className="font-semibold text-sm text-primary leading-snug mb-1.5 group-hover:text-accent transition-colors duration-300">
                  {cert.title}
                </h3>
                <p
                  className="text-[11px] font-medium tracking-wide"
                  style={{ color: issuerColor[cert.issuer] || 'rgba(185,160,255,0.7)', opacity: 0.8 }}
                >
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
