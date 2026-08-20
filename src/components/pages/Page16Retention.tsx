import React from 'react';

const Page16Retention: React.FC = () => {
  const dropoffCauses = [
    { cause: 'Slow, unfocused intro', fix: 'Cut everything before the hook. Start on your strongest statement.' },
    { cause: 'Long pauses in speech', fix: 'Remove dead air. Use jump cuts between sentences.' },
    { cause: 'Repetitive static visuals', fix: 'Change the visual element every 3–4 seconds.' },
    { cause: 'Weak payoff or no resolution', fix: 'Make sure your hook question gets answered before the CTA.' },
    { cause: 'Confusing or overloaded content', fix: 'One clear idea per Short. Don\'t try to teach too much.' },
    { cause: 'No audio hook in first 2 seconds', fix: 'Start with a punchy statement, not background music alone.' },
  ];

  return (
    <div className="ebook-page bg-gradient-page" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      <div style={{
        position: 'absolute', bottom: 80, left: -80, width: 380, height: 380,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.13) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.3))', border: '1px solid rgba(139,92,246,0.4)', borderRadius: 20, padding: '6px 16px', marginBottom: 14 }}>
          <span style={{ fontSize: 10, color: '#c4b5fd', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>Chapter 06 · Continued</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>Retention Optimization</h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2, marginBottom: 14 }} />
        <p style={{ fontSize: 13, color: 'rgba(203,213,225,0.8)', lineHeight: 1.6 }}>
          Retention problems are the most fixable performance issues in Shorts. Once you know where viewers are dropping off — and why — you can systematically improve every future video.
        </p>
      </div>

      {/* Analytics illustration */}
      <div style={{ marginBottom: 18 }}>
        <img src="/images/analytics-dash.jpg" alt="Retention Analytics" style={{ width: '100%', height: 110, objectFit: 'cover', borderRadius: 12, opacity: 0.7 }} />
      </div>

      {/* Common drop-off causes */}
      <div style={{ marginBottom: 22 }}>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: '#c4b5fd', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1.5 }}>
          Common Drop-Off Causes & Fixes
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {dropoffCauses.map((item, i) => (
            <div key={i} style={{
              display: 'flex', gap: 12, alignItems: 'flex-start',
              background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 10, padding: '11px 14px'
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{
                    fontSize: 9, fontWeight: 700, color: '#f87171',
                    background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)',
                    borderRadius: 6, padding: '2px 8px'
                  }}>PROBLEM</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(252,165,165,0.9)' }}>{item.cause}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span style={{
                    fontSize: 9, fontWeight: 700, color: '#34d399',
                    background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)',
                    borderRadius: 6, padding: '2px 8px', flexShrink: 0
                  }}>FIX</span>
                  <span style={{ fontSize: 11.5, color: 'rgba(203,213,225,0.75)', lineHeight: 1.4 }}>{item.fix}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Retention Loop */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(6,182,212,0.08))',
        border: '1px solid rgba(99,102,241,0.25)', borderRadius: 16, padding: '18px 20px'
      }}>
        <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 15, fontWeight: 800, color: 'white', marginBottom: 14, textAlign: 'center' }}>
          📊 The Retention Signal Chain
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {[
            { label: 'HOOK RATE', icon: '🎣', color: '#ef4444', desc: '% who watch past 3 seconds' },
            { label: 'RETENTION', icon: '⏱️', color: '#f59e0b', desc: 'Avg % of video watched' },
            { label: 'REWATCH', icon: '🔄', color: '#8b5cf6', desc: 'Viewers who loop the video' },
            { label: 'ENGAGEMENT', icon: '💬', color: '#3b82f6', desc: 'Likes, comments, shares' },
          ].map((item, i) => (
            <React.Fragment key={i}>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%', margin: '0 auto 8px',
                  background: `${item.color}22`, border: `2px solid ${item.color}55`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, boxShadow: `0 0 10px ${item.color}33`
                }}>{item.icon}</div>
                <div style={{ fontSize: 10, fontWeight: 800, color: item.color, marginBottom: 4, letterSpacing: 0.5 }}>{item.label}</div>
                <p style={{ fontSize: 10, color: 'rgba(203,213,225,0.55)', lineHeight: 1.3 }}>{item.desc}</p>
              </div>
              {i < 3 && <div style={{ color: '#374151', fontSize: 18 }}>→</div>}
            </React.Fragment>
          ))}
        </div>
        <div style={{ marginTop: 14, padding: '10px 14px', background: 'rgba(255,255,255,0.03)', borderRadius: 10 }}>
          <p style={{ fontSize: 11.5, color: 'rgba(203,213,225,0.8)', textAlign: 'center' }}>
            Strong hook rate → sustained retention → rewatches → engagement → YouTube distributes more. Every metric feeds the next.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>16</span>
      </div>
    </div>
  );
};

export default Page16Retention;
