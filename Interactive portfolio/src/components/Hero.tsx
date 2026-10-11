import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const LinkedInIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(215,226,234,1) 1px, transparent 1px), linear-gradient(90deg, rgba(215,226,234,1) 1px, transparent 1px)',
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 30%, #000 60%, transparent 100%)',
          }}
        />

        {/* Ambient lavender glow - top right */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 right-0 lg:right-20 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(185,160,255,0.35) 0%, transparent 70%)' }}
        />
        {/* Ambient violet glow - bottom left */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-10 -left-40 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center min-h-[calc(100vh-5rem)]">

          {/* LEFT: Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start space-y-7 py-16 lg:py-0"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center text-[10px] sm:text-xs font-semibold tracking-[0.22em] text-accent uppercase border border-accent/25 px-4 py-1.5 rounded-full bg-accent/5 backdrop-blur-sm">
                ARTIFICIAL INTELLIGENCE &amp; MACHINE LEARNING
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-bold leading-[1.05] tracking-tight"
              style={{
                fontSize: 'clamp(2.8rem, 6.5vw, 6rem)',
              }}
            >
              <span className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #F5F5F7 0%, #D7E2EA 40%, #B9A0FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Curious mind.
              </span>
              <span className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #E8E8F0 0%, #C8D5E0 35%, #B9A0FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Building what
              </span>
              <span className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #B9A0FF 0%, #8B5CF6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                comes next.
              </span>
            </motion.h1>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <p className="font-display text-lg font-medium tracking-[0.12em] text-muted uppercase">
                Nithyashree G.R.
              </p>
            </motion.div>

            {/* Supporting copy */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-secondary leading-relaxed max-w-md"
            >
              I'm an AI &amp; ML engineering student who enjoys exploring technology, building practical web applications, and turning ideas into useful digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group relative px-7 py-3.5 font-medium text-sm text-background bg-primary rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,245,247,0.25)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative z-10">Explore My Work</span>
                <span className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 font-medium text-sm text-primary bg-surface/60 backdrop-blur-md border border-white/10 rounded-full transition-all duration-300 hover:bg-white/8 hover:border-accent/30 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's Connect
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-5 pt-1">
              <a
                href="https://www.linkedin.com/in/nithyashree-g-r/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex items-center gap-2 text-muted hover:text-accent transition-colors duration-300 text-sm"
              >
                <LinkedInIcon size={18} />
                <span className="text-xs tracking-wider">LINKEDIN</span>
              </a>
              <span className="w-px h-4 bg-white/10" aria-hidden="true" />
              <a
                href="mailto:nithya98659@gmail.com"
                aria-label="Send email"
                className="flex items-center gap-2 text-muted hover:text-accent transition-colors duration-300 text-sm"
              >
                <Mail size={17} />
                <span className="text-xs tracking-wider">EMAIL</span>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            className="relative flex justify-center lg:justify-end items-center py-8 lg:py-0"
          >
            {/* Decorative ring */}
            <div
              className="absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full opacity-30"
              aria-hidden="true"
              style={{
                background: 'conic-gradient(from 180deg, rgba(185,160,255,0.4), transparent 50%, rgba(139,92,246,0.3) 75%, transparent)',
                animation: 'spin 12s linear infinite',
              }}
            />
            <style>{`
              @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            `}</style>

            {/* Photo card */}
            <div className="relative group">
              {/* Glow behind card */}
              <div
                className="absolute -inset-4 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
                aria-hidden="true"
                style={{ background: 'radial-gradient(circle, rgba(185,160,255,0.25) 0%, transparent 70%)' }}
              />

              {/* Main card */}
              <div
                className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-[18rem] lg:h-[24rem] rounded-[1.75rem] overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
                  border: '1px solid rgba(185,160,255,0.25)',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)',
                }}
              >
                <img
                  src="/assets/profile-photo.jpg"
                  alt="Nithyashree G.R., AI & ML Engineering Student"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  decoding="sync"
                />
                {/* Bottom gradient overlay */}
                <div
                  className="absolute inset-0"
                  aria-hidden="true"
                  style={{
                    background: 'linear-gradient(to top, rgba(12,12,12,0.85) 0%, rgba(12,12,12,0.2) 40%, transparent 70%)',
                  }}
                />

                {/* Name badge inside card */}
                <div className="absolute bottom-5 left-5 right-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-white font-display font-semibold text-base tracking-wider">
                    Nithyashree G.R.
                  </div>
                  <div
                    className="text-xs tracking-[0.18em] uppercase mt-1 font-medium"
                    style={{ color: '#B9A0FF' }}
                  >
                    AI &amp; ML Student
                  </div>
                </div>
              </div>

              {/* Accent badge top-right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl text-xs font-medium tracking-wide"
                style={{
                  background: 'linear-gradient(135deg, rgba(185,160,255,0.2), rgba(139,92,246,0.15))',
                  border: '1px solid rgba(185,160,255,0.3)',
                  color: '#B9A0FF',
                  backdropFilter: 'blur(8px)',
                }}
                aria-hidden="true"
              >
                CGPA 9.48
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted/50"
        aria-hidden="true"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 rounded-full"
          style={{ background: 'linear-gradient(to bottom, rgba(185,160,255,0.4), transparent)' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
