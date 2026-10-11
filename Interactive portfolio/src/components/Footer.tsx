import React from 'react';
import { ArrowUp, Mail, MapPin, ExternalLink } from 'lucide-react';

const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg
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

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative border-t bg-background pt-16 pb-12 overflow-hidden"
      style={{ borderColor: 'rgba(215,226,234,0.07)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b" style={{ borderColor: 'rgba(215,226,234,0.06)' }}>
          {/* Brand & Summary */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, '#home')}
                className="font-display font-bold text-xl tracking-tight text-primary hover:text-accent transition-colors block mb-3"
              >
                Nithyashree G.R.
              </a>
              <p className="text-secondary text-sm leading-relaxed max-w-sm mb-4">
                Undergraduate student pursuing Artificial Intelligence &amp; Machine Learning at SJC Institute of Technology. Exploring intelligent systems, modern web development, and practical software engineering.
              </p>
              <div className="flex items-center gap-2 text-xs text-muted">
                <MapPin size={13} className="text-accent" />
                <span>Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4">
            <span className="text-[10px] font-semibold tracking-[0.2em] text-accent uppercase block mb-4">
              NAVIGATION
            </span>
            <ul className="grid grid-cols-2 gap-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-secondary hover:text-primary hover:translate-x-0.5 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Top Action */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-accent uppercase block mb-4">
                CONNECT
              </span>
              <div className="flex flex-col gap-2.5">
                <a
                  href="https://www.linkedin.com/in/nithyashree-g-r/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors"
                >
                  <LinkedInIcon size={15} />
                  <span>LinkedIn</span>
                  <ExternalLink size={12} className="text-muted" />
                </a>
                <a
                  href="mailto:nithya98659@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors"
                >
                  <Mail size={15} />
                  <span>nithya98659@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={scrollToTop}
                aria-label="Back to top of page"
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full border text-xs font-medium text-secondary hover:text-primary hover:border-accent/40 transition-all duration-300"
                style={{
                  background: 'rgba(20,20,25,0.7)',
                  borderColor: 'rgba(215,226,234,0.1)',
                }}
              >
                <span>Back to top</span>
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5"
                  style={{ background: 'rgba(185,160,255,0.15)', color: '#B9A0FF' }}
                >
                  <ArrowUp size={13} />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Nithyashree G.R. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to AI &amp; Web Development Opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
