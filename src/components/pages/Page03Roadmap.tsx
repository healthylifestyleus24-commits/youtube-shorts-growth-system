import React from 'react';

const Page03Roadmap: React.FC = () => {
  const stages = [
    { icon: '💡', label: 'START', color: '#3b82f6', desc: 'Mindset & Foundations' },
    { icon: '🏗️', label: 'BUILD', color: '#6366f1', desc: 'Channel & Branding' },
    { icon: '✍️', label: 'CREATE', color: '#8b5cf6', desc: 'Scripts & Production' },
    { icon: '📤', label: 'PUBLISH', color: '#a855f7', desc: 'Upload & SEO' },
    { icon: '📈', label: 'GROW', color: '#ec4899', desc: 'Audience & Retention' },
    { icon: '💰', label: 'MONETIZE', color: '#f59e0b', desc: 'Revenue Streams' },
    { icon: '🚀', label: 'SCALE', color: '#10b981', desc: 'Systems & Expansion' },
  ];

  return (
    <div className="ebook-page bg-gradient-page" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      {/* Decorative */}
      <div style={{
        position: 'absolute', top: -100, left: -100, width: 400, height: 400,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 10, color: '#818cf8', letterSpacing: 3, textTransform: 'uppercase', fontWeight: 700, marginBottom: 8 }}>Your Complete Journey</div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 34, fontWeight: 800, color: 'white', marginBottom: 6 }}>The Growth Roadmap</h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2 }} />
      </div>

      {/* Illustration */}
      <div style={{ marginBottom: 24 }}>
        <img src="/images/growth-funnel.jpg" alt="Growth Roadmap" style={{ width: '100%', height: 130, objectFit: 'cover', borderRadius: 12, opacity: 0.75 }} />
      </div>

      {/* Roadmap visual */}
      <div style={{ marginBottom: 24 }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 16, padding: '20px 16px', position: 'relative'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
            {/* Connecting line */}
            <div style={{
              position: 'absolute', top: '50%', left: '5%', right: '5%',
              height: 2, background: 'linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6, #a855f7, #ec4899, #f59e0b, #10b981)',
              transform: 'translateY(-50%)', zIndex: 0
            }} />
            {stages.map((stage, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 1 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: `radial-gradient(circle, ${stage.color}33 0%, ${stage.color}11 100%)`,
                  border: `2px solid ${stage.color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, boxShadow: `0 0 12px ${stage.color}44`,
                  backdropFilter: 'blur(8px)'
                }}>
                  {stage.icon}
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 9, fontWeight: 800, color: stage.color, letterSpacing: 1 }}>{stage.label}</div>
                  <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.45)', marginTop: 2, width: 60, textAlign: 'center' }}>{stage.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What you'll accomplish */}
      <div style={{ marginBottom: 22 }}>
        <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 14 }}>What You'll Accomplish</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { icon: '🎯', text: 'Identify a profitable niche with real monetization potential' },
            { icon: '⚙️', text: 'Set up a channel optimized for discoverability from day one' },
            { icon: '🎬', text: 'Build a repeatable content production system' },
            { icon: '📊', text: 'Understand analytics and what to improve' },
            { icon: '💡', text: 'Generate 30+ content ideas before you start filming' },
            { icon: '💰', text: 'Combine multiple income streams for sustainable revenue' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 10,
              background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 10, padding: '10px 12px'
            }}>
              <span style={{ fontSize: 16, flexShrink: 0 }}>{item.icon}</span>
              <span style={{ fontSize: 12, color: 'rgba(203,213,225,0.85)', lineHeight: 1.4 }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* How to use this ebook */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))',
        border: '1px solid rgba(99,102,241,0.25)',
        borderRadius: 14, padding: '18px 20px'
      }}>
        <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 15, fontWeight: 700, color: '#c4b5fd', marginBottom: 10 }}>📖 How to Use This Ebook</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          {[
            'Read each chapter in order — each one builds on the previous.',
            'Complete the action steps before moving to the next chapter.',
            'Use the 30-Day Plan (p.26) as your daily implementation guide.',
            'Return to the Final Blueprint (p.27) whenever you need a refresher.',
            'Apply one framework at a time. Consistency beats perfection.'
          ].map((tip, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <div style={{
                width: 20, height: 20, borderRadius: '50%',
                background: 'linear-gradient(135deg, #1d4ed8, #7c3aed)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 9, fontWeight: 800, color: 'white', flexShrink: 0, marginTop: 1
              }}>{i + 1}</div>
              <span style={{ fontSize: 12, color: 'rgba(226,232,240,0.8)', lineHeight: 1.5 }}>{tip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>03</span>
      </div>
    </div>
  );
};

export default Page03Roadmap;
