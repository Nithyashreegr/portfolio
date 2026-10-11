import React from 'react';

const items = [
  'QUITHABIT',
  'HOTEL ROOM MANAGEMENT',
  'ZOMBIE SURVIVAL CITY',
  'AI DUNGEON EXPLORER',
  'BUILD • LEARN • ITERATE',
  'QUITHABIT',
  'HOTEL ROOM MANAGEMENT',
  'ZOMBIE SURVIVAL CITY',
  'AI DUNGEON EXPLORER',
  'BUILD • LEARN • ITERATE',
];

const MarqueeRow: React.FC<{ reverse?: boolean }> = ({ reverse = false }) => {
  return (
    <div className="flex overflow-hidden" aria-hidden="true">
      <div
        className={`flex whitespace-nowrap gap-0 ${reverse ? 'animate-marquee2' : 'animate-marquee'}`}
        style={{
          animationDirection: reverse ? 'reverse' : 'normal',
          willChange: 'transform',
        }}
      >
        {/* Double the items for seamless loop */}
        {[...items, ...items].map((label, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-6 px-8 text-sm font-display font-semibold tracking-[0.2em] uppercase"
            style={{
              color: idx % 5 === 4 ? 'rgba(185,160,255,0.5)' : 'rgba(215,226,234,0.12)',
            }}
          >
            {label}
            <span
              className="w-1.5 h-1.5 rounded-full inline-block flex-shrink-0"
              style={{ backgroundColor: 'rgba(185,160,255,0.3)' }}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

const Marquee: React.FC = () => {
  return (
    <section
      className="py-10 relative overflow-hidden border-y marquee-container"
      style={{ borderColor: 'rgba(215,226,234,0.07)' }}
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0C0C0C, transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0C0C0C, transparent)' }}
        aria-hidden="true"
      />

      <div className="flex flex-col gap-4">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
};

export default Marquee;
