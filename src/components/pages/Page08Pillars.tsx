import React from 'react';

const Page08Pillars: React.FC = () => {
  const pillars = [
    {
      num: 1, icon: '🎓', label: 'Educational',
      color: '#3b82f6',
      desc: 'Teach your audience something valuable. How-tos, tips, explanations, tutorials.',
      example: '"3 things beginners get wrong about investing"',
    },
    {
      num: 2, icon: '🎭', label: 'Entertainment',
      color: '#8b5cf6',
      desc: 'Create content that\'s enjoyable to watch, even without a practical takeaway.',
      example: '"Animals doing unexpected things — explained"',
    },
    {
      num: 3, icon: '🔍', label: 'Curiosity',
      color: '#06b6d4',
      desc: 'Open a loop in the viewer\'s mind that they need to close by watching to the end.',
      example: '"What happens if you never sleep for 11 days?"',
    },
    {
      num: 4, icon: '📰', label: 'Trending',
      color: '#ec4899',
      desc: 'Tie your niche content to a current event, trend, or viral moment.',
      example: '"How the Fed rate cut affects your savings account"',
    },
    {
      num: 5, icon: '📖', label: 'Storytelling',
      color: '#f59e0b',
      desc: 'Use narrative structure to create emotional connection with your audience.',
      example: '"I saved $20,000 in 12 months doing this one thing"',
    },
  ];

  return (
    <div className="ebook-page bg-gradient-chapter" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      <div style={{
        position: 'absolute', top: -80, right: -80, width: 380, height: 380,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      <div style={{ marginBottom: 18 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.3))', border: '1px solid rgba(139,92,246,0.4)', borderRadius: 20, padding: '6px 16px', marginBottom: 14 }}>
          <span style={{ fontSize: 10, color: '#c4b5fd', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>Chapter 02 · Continued</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>Create Your Content Pillars</h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2, marginBottom: 14 }} />
        <p style={{ fontSize: 13, color: 'rgba(203,213,225,0.8)', lineHeight: 1.6 }}>
          Content pillars are the 3–5 categories your channel lives within. They give you a pre-defined idea library to draw from — so you never stare at a blank page wondering what to create next.
        </p>
      </div>

      {/* Illustration */}
      <div style={{ marginBottom: 18 }}>
        <img src="/images/content-calendar.jpg" alt="Content Pillars" style={{ width: '100%', height: 100, objectFit: 'cover', borderRadius: 12, opacity: 0.7 }} />
      </div>

      {/* Pillars */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
        {pillars.map((p, i) => (
          <div key={i} style={{
            display: 'flex', gap: 14, alignItems: 'flex-start',
            background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)',
            borderLeft: `4px solid ${p.color}`,
            borderRadius: '0 12px 12px 0', padding: '12px 14px'
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10, flexShrink: 0,
              background: `${p.color}22`, border: `1px solid ${p.color}44`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18
            }}>{p.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 10, fontWeight: 800, color: p.color, letterSpacing: 1 }}>PILLAR {p.num}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'white' }}>{p.label}</span>
              </div>
              <p style={{ fontSize: 12, color: 'rgba(203,213,225,0.7)', lineHeight: 1.45, marginBottom: 4 }}>{p.desc}</p>
              <div style={{
                display: 'inline-block', background: `${p.color}15`,
                border: `1px solid ${p.color}30`, borderRadius: 8,
                padding: '3px 10px', fontSize: 11, color: p.color, fontStyle: 'italic'
              }}>Example: {p.example}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Why pillars prevent burnout */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(6,182,212,0.08))',
        border: '1px solid rgba(16,185,129,0.25)', borderRadius: 14, padding: '16px 18px'
      }}>
        <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 14, fontWeight: 800, color: '#6ee7b7', marginBottom: 10 }}>
          🌱 Why Pillars Prevent Creator Burnout
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            'You always know what to create next — no idea paralysis.',
            'Your channel stays cohesive even when you mix content types.',
            'Viewers know what to expect, which improves subscription rate.',
            'Batch production becomes easier when ideas fall into categories.',
          ].map((tip, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <span style={{ color: '#10b981', flexShrink: 0, marginTop: 2, fontSize: 14 }}>✓</span>
              <span style={{ fontSize: 12, color: 'rgba(203,213,225,0.8)', lineHeight: 1.45 }}>{tip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>08</span>
      </div>
    </div>
  );
};

export default Page08Pillars;
