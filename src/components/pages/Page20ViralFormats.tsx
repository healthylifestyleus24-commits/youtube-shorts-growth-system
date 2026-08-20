import React from 'react';

const Page20ViralFormats: React.FC = () => {
  const formats = [
    { format: '"3 Things You Didn\'t Know About..."', icon: '🔢', color: '#3b82f6', why: 'List structure sets clear viewer expectations. Curiosity gap keeps them watching to see all three.', variations: ['"5 facts most people get wrong"', '"3 habits that changed everything"'] },
    { format: '"What Happens When..."', icon: '🔬', color: '#8b5cf6', why: 'Experiment or scenario format drives extreme curiosity. Great for science, finance, nature, and social niches.', variations: ['"What happens if you invest $1 for 40 years"', '"What happens when a shark attacks a whale"'] },
    { format: '"Before vs. After..."', icon: '🔄', color: '#06b6d4', why: 'Transformation content is the most emotionally engaging format. Works in fitness, finance, productivity, and business.', variations: ['"Before and after my morning routine"', '"Before vs after 6 months of investing"'] },
    { format: '"Can You Guess..."', icon: '❓', color: '#ec4899', why: 'Interactive prompt invites participation. Viewers comment to guess — boosting engagement metrics instantly.', variations: ['"Can you guess how much this person earns?"', '"Can you guess the fastest land animal?"'] },
    { format: '"The Truth About..."', icon: '💡', color: '#f59e0b', why: 'Contrarian positioning immediately disrupts expectations. Strong hook for niches where misinformation exists.', variations: ['"The truth about passive income nobody says"', '"The truth about how models eat"'] },
  ];

  return (
    <div className="ebook-page bg-gradient-chapter" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      <div style={{
        position: 'absolute', bottom: 80, right: -80, width: 380, height: 380,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.3))', border: '1px solid rgba(139,92,246,0.4)', borderRadius: 20, padding: '6px 16px', marginBottom: 14 }}>
          <span style={{ fontSize: 10, color: '#c4b5fd', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>Chapter 08 · Continued</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>Build a Repeatable<br />Viral Format</h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2, marginBottom: 14 }} />
        <p style={{ fontSize: 13, color: 'rgba(203,213,225,0.8)', lineHeight: 1.6 }}>
          Chasing random viral moments is unsustainable. The most consistent creators build a recognizable format — and then make variations of it endlessly. Viewers learn what to expect and return for more.
        </p>
      </div>

      {/* Key insight callout */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1))',
        border: '1px solid rgba(99,102,241,0.3)', borderRadius: 12, padding: '12px 16px', marginBottom: 18
      }}>
        <p style={{ fontSize: 13, color: 'rgba(196,181,253,0.9)', fontWeight: 500, textAlign: 'center' }}>
          <strong>Build formats — not one-off videos.</strong><br />
          A viral format can produce 50+ variations. A viral moment produces one.
        </p>
      </div>

      {/* Format cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
        {formats.map((f, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)',
            borderLeft: `3px solid ${f.color}`, borderRadius: '0 12px 12px 0', padding: '12px 14px'
          }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 18, flexShrink: 0 }}>{f.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: f.color, marginBottom: 4 }}>{f.format}</div>
                <p style={{ fontSize: 11.5, color: 'rgba(203,213,225,0.7)', lineHeight: 1.4, marginBottom: 6 }}>{f.why}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {f.variations.map((v, j) => (
                    <span key={j} style={{
                      fontSize: 10, color: 'rgba(148,163,184,0.8)',
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 8, padding: '3px 10px', fontStyle: 'italic'
                    }}>{v}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Format System Tip */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(6,182,212,0.08))',
        border: '1px solid rgba(16,185,129,0.25)', borderRadius: 14, padding: '14px 16px'
      }}>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: '#34d399', marginBottom: 8 }}>🔑 How to Build Your Own Format</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            'Find a format from this list that fits your niche naturally.',
            'Create 3 variations of it and measure which performs best.',
            'Double down on the winner — create 10 more variations of that specific format.',
            'Only expand to a new format once your current one is optimized.',
          ].map((tip, i) => (
            <div key={i} style={{ display: 'flex', gap: 8 }}>
              <span style={{ color: '#10b981', fontWeight: 800, flexShrink: 0 }}>{i + 1}.</span>
              <span style={{ fontSize: 12, color: 'rgba(203,213,225,0.8)', lineHeight: 1.4 }}>{tip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>20</span>
      </div>
    </div>
  );
};

export default Page20ViralFormats;
