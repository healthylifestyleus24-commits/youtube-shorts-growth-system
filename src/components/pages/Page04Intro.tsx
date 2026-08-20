import React from 'react';

const Page04Intro: React.FC = () => {
  return (
    <div className="ebook-page bg-gradient-page" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      <div style={{
        position: 'absolute', top: -60, right: -60, width: 350, height: 350,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
        filter: 'blur(50px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <div style={{
          display: 'inline-block', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)',
          borderRadius: 20, padding: '5px 14px', marginBottom: 12
        }}>
          <span style={{ fontSize: 10, color: '#818cf8', letterSpacing: 3, fontWeight: 700, textTransform: 'uppercase' }}>Introduction</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 32, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>
          The YouTube Shorts<br />Opportunity
        </h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2 }} />
      </div>

      {/* Illustration */}
      <div style={{ marginBottom: 20 }}>
        <img src="/images/smartphone-shorts.jpg" alt="YouTube Shorts" style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 12, opacity: 0.8 }} />
      </div>

      {/* Intro text */}
      <div style={{ marginBottom: 20 }}>
        <p style={{ fontSize: 13, color: 'rgba(203,213,225,0.85)', lineHeight: 1.65, marginBottom: 12 }}>
          YouTube Shorts is one of the most powerful content distribution platforms available right now. Every day, billions of Shorts views occur — and the algorithm actively pushes new creators to fresh audiences, regardless of subscriber count.
        </p>
        <p style={{ fontSize: 13, color: 'rgba(203,213,225,0.85)', lineHeight: 1.65 }}>
          This means a beginner with zero subscribers can publish a Short today and reach thousands — even millions — of people within 48 hours. That kind of exposure traditionally required a large budget or an existing fanbase.
        </p>
      </div>

      {/* Key differences grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
        <div style={{ background: 'rgba(59,130,246,0.07)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: 12, padding: '14px 16px' }}>
          <div style={{ fontSize: 20, marginBottom: 8 }}>📱</div>
          <h3 style={{ fontSize: 13, fontWeight: 700, color: '#93c5fd', marginBottom: 6 }}>Shorts vs. Long-Form</h3>
          <p style={{ fontSize: 11.5, color: 'rgba(203,213,225,0.7)', lineHeight: 1.5 }}>
            Long-form videos rely on existing subscribers. Shorts are discovery-first — the algorithm delivers your content to new viewers who've never heard of you.
          </p>
        </div>
        <div style={{ background: 'rgba(139,92,246,0.07)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: 12, padding: '14px 16px' }}>
          <div style={{ fontSize: 20, marginBottom: 8 }}>⚡</div>
          <h3 style={{ fontSize: 13, fontWeight: 700, color: '#c4b5fd', marginBottom: 6 }}>Why Consistency Matters</h3>
          <p style={{ fontSize: 11.5, color: 'rgba(203,213,225,0.7)', lineHeight: 1.5 }}>
            The algorithm rewards channels that publish regularly. Consistency tells YouTube you're a reliable creator — which leads to more frequent distribution.
          </p>
        </div>
        <div style={{ background: 'rgba(6,182,212,0.07)', border: '1px solid rgba(6,182,212,0.2)', borderRadius: 12, padding: '14px 16px' }}>
          <div style={{ fontSize: 20, marginBottom: 8 }}>🎯</div>
          <h3 style={{ fontSize: 13, fontWeight: 700, color: '#67e8f9', marginBottom: 6 }}>No Equipment Barrier</h3>
          <p style={{ fontSize: 11.5, color: 'rgba(203,213,225,0.7)', lineHeight: 1.5 }}>
            Successful Shorts are created with a smartphone, free editing software, or even screen recordings with voiceovers. Production value matters less than value delivered.
          </p>
        </div>
        <div style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.2)', borderRadius: 12, padding: '14px 16px' }}>
          <div style={{ fontSize: 20, marginBottom: 8 }}>💡</div>
          <h3 style={{ fontSize: 13, fontWeight: 700, color: '#fde68a', marginBottom: 6 }}>Views ≠ Income (Alone)</h3>
          <p style={{ fontSize: 11.5, color: 'rgba(203,213,225,0.7)', lineHeight: 1.5 }}>
            Views are the starting point, not the destination. Real income comes from combining multiple monetization channels alongside your Shorts growth.
          </p>
        </div>
      </div>

      {/* The Core Framework Funnel */}
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: '16px 20px' }}>
        <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 14, fontWeight: 700, color: 'white', marginBottom: 14, textAlign: 'center' }}>The Core Framework</h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0 }}>
          {[
            { icon: '👁️', label: 'ATTENTION', color: '#3b82f6' },
            { icon: '→', label: '', color: 'transparent', isArrow: true },
            { icon: '👥', label: 'AUDIENCE', color: '#6366f1' },
            { icon: '→', label: '', color: 'transparent', isArrow: true },
            { icon: '🤝', label: 'TRUST', color: '#8b5cf6' },
            { icon: '→', label: '', color: 'transparent', isArrow: true },
            { icon: '💰', label: 'MONETIZATION', color: '#f59e0b' },
          ].map((step, i) => (
            step.isArrow ? (
              <div key={i} style={{ color: '#4b5563', fontSize: 18, margin: '0 4px', marginBottom: 20 }}>→</div>
            ) : (
              <div key={i} style={{ textAlign: 'center', minWidth: 80 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%', margin: '0 auto 6px',
                  background: `radial-gradient(circle, ${step.color}22, ${step.color}08)`,
                  border: `2px solid ${step.color}55`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, boxShadow: `0 0 10px ${step.color}33`
                }}>{step.icon}</div>
                <div style={{ fontSize: 9, fontWeight: 800, color: step.color, letterSpacing: 1 }}>{step.label}</div>
              </div>
            )
          ))}
        </div>
        <p style={{ fontSize: 11, color: 'rgba(148,163,184,0.7)', textAlign: 'center', marginTop: 12, lineHeight: 1.5 }}>
          Every chapter in this ebook moves you further along this framework.
        </p>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>04</span>
      </div>
    </div>
  );
};

export default Page04Intro;
