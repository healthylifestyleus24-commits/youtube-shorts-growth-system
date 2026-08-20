import React from 'react';

const Page06Angle: React.FC = () => {
  const examples = [
    { generic: 'Fitness', better: '30-Second Fitness Fixes for Desk Workers', why: 'Targets a specific audience with a clear value promise' },
    { generic: 'Animals', better: 'Unexpected Predator vs. Prey Moments', why: 'Curiosity-driven angle with high rewatch potential' },
    { generic: 'Finance', better: '$5/Day Investing Habits That Add Up', why: 'Accessible entry point removes the "I can\'t afford to invest" objection' },
    { generic: 'Technology', better: 'AI Tools Most People Don\'t Know Exist', why: 'Positions content as exclusive knowledge worth watching' },
  ];

  return (
    <div className="ebook-page bg-gradient-chapter" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      <div style={{
        position: 'absolute', bottom: 100, right: -80, width: 350, height: 350,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
        filter: 'blur(50px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.3))', border: '1px solid rgba(139,92,246,0.4)', borderRadius: 20, padding: '6px 16px', marginBottom: 14 }}>
          <span style={{ fontSize: 10, color: '#c4b5fd', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>Chapter 01 · Continued</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>Find Your Content Angle</h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2, marginBottom: 14 }} />
      </div>

      {/* Illustration */}
      <div style={{ marginBottom: 18 }}>
        <img src="/images/content-calendar.jpg" alt="Content Angle" style={{ width: '100%', height: 110, objectFit: 'cover', borderRadius: 12, opacity: 0.7 }} />
      </div>

      {/* Key insight */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.12))',
        border: '1px solid rgba(99,102,241,0.3)',
        borderRadius: 14, padding: '16px 20px', marginBottom: 20, textAlign: 'center'
      }}>
        <p style={{ fontFamily: 'Space Grotesk', fontSize: 22, fontWeight: 800, color: 'white', marginBottom: 8 }}>
          Niche ≠ Content Angle
        </p>
        <p style={{ fontSize: 12.5, color: 'rgba(196,181,253,0.8)', lineHeight: 1.5 }}>
          Your niche is <em>what</em> you talk about. Your content angle is <em>how</em> you talk about it — and to <em>whom</em>.<br />
          A specific angle makes you memorable, easier to find, and much easier to produce consistently.
        </p>
      </div>

      {/* Generic vs Better examples */}
      <div style={{ marginBottom: 22 }}>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: '#c4b5fd', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1.5 }}>Generic vs. Specific Angles</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {examples.map((ex, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 12, padding: '12px 14px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                <div style={{
                  background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)',
                  borderRadius: 8, padding: '4px 12px', fontSize: 12, color: '#fca5a5', fontWeight: 600
                }}>Generic: {ex.generic}</div>
                <span style={{ color: '#4b5563', fontSize: 14 }}>→</span>
                <div style={{
                  background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)',
                  borderRadius: 8, padding: '4px 12px', fontSize: 12, color: '#6ee7b7', fontWeight: 600
                }}>Better: {ex.better}</div>
              </div>
              <p style={{ fontSize: 11, color: 'rgba(148,163,184,0.7)', paddingLeft: 4 }}>💡 {ex.why}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Worksheet */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(29,78,216,0.1), rgba(124,58,237,0.1))',
        border: '1px solid rgba(99,102,241,0.3)', borderRadius: 14, padding: '18px 20px'
      }}>
        <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 15, fontWeight: 800, color: 'white', marginBottom: 16 }}>
          📝 Your Channel Foundation Worksheet
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { label: 'My Niche:', placeholder: 'e.g., Personal Finance' },
            { label: 'My Target Audience:', placeholder: 'e.g., 20–35 year olds building their first savings' },
            { label: 'My Content Angle:', placeholder: 'e.g., Simple money habits explained in 60 seconds' },
            { label: 'My 3 Main Content Pillars:', placeholder: 'e.g., Saving Tips / Investing Basics / Money Mindset' },
          ].map((field, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{ minWidth: 160, fontSize: 12, fontWeight: 700, color: '#a5b4fc', paddingTop: 10 }}>{field.label}</div>
              <div style={{
                flex: 1, height: 36,
                background: 'rgba(255,255,255,0.04)', border: '1px dashed rgba(99,102,241,0.35)',
                borderRadius: 8, display: 'flex', alignItems: 'center', paddingLeft: 12
              }}>
                <span style={{ fontSize: 11, color: 'rgba(148,163,184,0.4)', fontStyle: 'italic' }}>{field.placeholder}</span>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 10.5, color: 'rgba(148,163,184,0.5)', marginTop: 14, fontStyle: 'italic' }}>
          Complete this before moving to Chapter 2. A clear foundation prevents confusion later.
        </p>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>06</span>
      </div>
    </div>
  );
};

export default Page06Angle;
