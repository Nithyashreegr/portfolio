import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Copy, CheckCircle2, ExternalLink } from 'lucide-react';

const LinkedInIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const EMAIL = 'nithya98659@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/nithyashree-g-r/';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const el = document.createElement('input');
      el.value = EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="contact"
      className="py-28 relative border-t"
      style={{ borderColor: 'rgba(215,226,234,0.07)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.06] blur-[80px]"
          style={{ background: 'radial-gradient(ellipse, #B9A0FF 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[10px] font-semibold tracking-[0.25em] text-accent uppercase mb-4 block">
            GET IN TOUCH
          </span>

          <h2
            className="font-display font-bold mb-5 leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            Let's build something meaningful.
          </h2>

          <p className="text-secondary text-lg max-w-xl mx-auto mb-12">
            I'm always open to learning, connecting, and exploring opportunities to build useful technology.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center gap-3 px-8 py-4 rounded-full font-medium text-sm text-background bg-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,245,247,0.2)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-w-[180px] justify-center"
            >
              <Mail size={18} />
              <span>Send an Email</span>
            </a>

            <button
              onClick={handleCopy}
              aria-label={copied ? 'Email copied!' : 'Copy email to clipboard'}
              className="group flex items-center gap-3 px-8 py-4 rounded-full font-medium text-sm text-primary border transition-all duration-300 hover:border-accent/40 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-w-[180px] justify-center"
              style={{ background: 'rgba(20,20,25,0.6)', borderColor: 'rgba(215,226,234,0.12)' }}
            >
              {copied ? (
                <>
                  <CheckCircle2 size={18} className="text-green-400" />
                  <span className="text-green-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={18} className="group-hover:text-accent transition-colors" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Contact info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {/* Location */}
            <div
              className="flex flex-col items-center p-6 rounded-2xl border"
              style={{
                background: 'rgba(14,14,18,0.7)',
                borderColor: 'rgba(215,226,234,0.07)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: 'rgba(185,160,255,0.08)', color: '#B9A0FF' }}
              >
                <MapPin size={20} />
              </div>
              <span className="font-semibold text-sm text-primary mb-1">Location</span>
              <span className="text-xs text-muted">Karnataka, India</span>
            </div>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="group flex flex-col items-center p-6 rounded-2xl border transition-all duration-300 hover:border-accent/30"
              style={{
                background: 'rgba(14,14,18,0.7)',
                borderColor: 'rgba(215,226,234,0.07)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors duration-300 group-hover:bg-accent/15"
                style={{ background: 'rgba(185,160,255,0.08)', color: '#B9A0FF' }}
              >
                <Mail size={20} />
              </div>
              <span className="font-semibold text-sm text-primary mb-1">Email</span>
              <span className="text-xs text-muted group-hover:text-accent transition-colors break-all text-center">
                nithya98659@gmail.com
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 rounded-2xl border transition-all duration-300 hover:border-accent/30"
              style={{
                background: 'rgba(14,14,18,0.7)',
                borderColor: 'rgba(215,226,234,0.07)',
              }}
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors duration-300 group-hover:bg-accent/15"
                style={{ background: 'rgba(185,160,255,0.08)', color: '#B9A0FF' }}
              >
                <LinkedInIcon size={20} />
              </div>
              <span className="font-semibold text-sm text-primary mb-1 flex items-center gap-1">
                LinkedIn
                <ExternalLink size={11} className="text-muted" />
              </span>
              <span className="text-xs text-muted group-hover:text-accent transition-colors">
                nithyashree-g-r
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
