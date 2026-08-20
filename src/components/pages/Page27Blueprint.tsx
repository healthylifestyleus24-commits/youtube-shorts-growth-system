import React from 'react';

const Page27Blueprint: React.FC = () => {
  const steps = [
    { num: 1, icon: '🎯', title: 'Choose a Niche', desc: 'Apply the 5-Point Niche Test. Validate demand, competition, and monetization potential.', color: '#3b82f6' },
    { num: 2, icon: '🔍', title: 'Find Demand', desc: 'Research what already works. Use the 3R Formula. Build a 30-idea content bank.', color: '#4f46e5' },
    { num: 3, icon: '🎣', title: 'Create Better Hooks', desc: 'Test 3+ hook types. Strong first 3 seconds = foundation of every Short that performs.', color: '#7c3aed' },
    { num: 4, icon: '🎬', title: 'Produce Consistently', desc: 'Follow the 8-step workflow. Batch production weekly. Quality over frequency.', color: '#9333ea' },
    { num: 5, icon: '⏱️', title: 'Optimize Retention', desc: 'Apply the Retention Editing Rule. Every second should inform, entertain, or create curiosity.', color: '#a855f7' },
    { num: 6, icon: '📤', title: 'Publish Strategically', desc: 'Optimize titles, descriptions, and hashtags. Maintain a sustainable weekly schedule.', color: '#ec4899' },
    { num: 7, icon: '📊', title: 'Study Analytics', desc: 'Check retention graphs within 48 hours. Weekly analytics review. Don\'t guess — measure.', color: '#f43f5e' },
    { num: 8, icon: '🏆', title: 'Double Down on Winners', desc: 'Perform a Video Autopsy on top Shorts. Create 10+ variations of your best format.', color: '#f97316' },
    { num: 9, icon: '👥', title: 'Build an Audience', desc: 'Convert viewers to subscribers. Create series content. Build a recognizable format.', color: '#f59e0b' },
    { num: 10, icon: '💰', title: 'Monetize + Scale', desc: 'Layer 3+ income streams. Build SOPs. Hire support. Expand to a sustainable business.', color: '#10b981' },
  ];

  return (
    <div className="ebook-page bg-gradient-chapter" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: -80, right: -80, width: 400, height: 400,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: 80, left: -80, width: 350, height: 350,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 28 }} />

      {/* Header */}
      <div style={{ marginBottom: 18, textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.3))',
          border: '1px solid rgba(139,92,246,0.4)', borderRadius: 20, padding: '6px 18px', marginBottom: 14
        }}>
          <span style={{ fontSize: 10, color: '#c4b5fd', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>Final Blueprint</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 800, color: 'white', lineHeight: 1.15, marginBottom: 6 }}>
          Your YouTube Shorts Growth System
        </h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2, margin: '0 auto 12px' }} />
        <p style={{ fontSize: 13, color: 'rgba(203,213,225,0.75)', maxWidth: 500, margin: '0 auto' }}>
          Every chapter distilled into one repeatable system. Return to this page whenever you need a reminder of where to focus next.
        </p>
      </div>

      {/* Blueprint illustration */}
      <div style={{ marginBottom: 18 }}>
        <img src="/images/scaling-business.jpg" alt="Blueprint" style={{ width: '100%', height: 100, objectFit: 'cover', borderRadius: 12, opacity: 0.65 }} />
      </div>

      {/* Steps - two columns */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 20 }}>
        {steps.map((s, i) => (
          <div key={i} style={{
            display: 'flex', gap: 10, alignItems: 'flex-start',
            background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)',
            borderLeft: `3px solid ${s.color}`, borderRadius: '0 10px 10px 0', padding: '10px 12px'
          }}>
            <div style={{
              width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
              background: `${s.color}22`, border: `2px solid ${s.color}55`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 14, boxShadow: `0 0 8px ${s.color}33`
            }}>{s.icon}</div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
                <span style={{ fontSize: 9, fontWeight: 800, color: s.color, letterSpacing: 0.5 }}>{String(s.num).padStart(2, '0')}</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: 'white' }}>{s.title}</span>
              </div>
              <p style={{ fontSize: 11, color: 'rgba(203,213,225,0.65)', lineHeight: 1.35 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Growth Loop */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(6,182,212,0.1))',
        border: '1px solid rgba(99,102,241,0.3)', borderRadius: 16, padding: '16px 20px', marginBottom: 18
      }}>
        <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 13, fontWeight: 800, color: 'white', marginBottom: 10, textAlign: 'center' }}>The Core Growth Loop</h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
          {['PUBLISH', '→', 'MEASURE', '→', 'LEARN', '→', 'IMPROVE', '→', 'REPUBLISH'].map((item, i) => (
            <span key={i} style={{
              fontSize: item === '→' ? 14 : 11,
              fontWeight: item === '→' ? 400 : 800,
              color: item === '→' ? '#374151' : '#818cf8',
              background: item === '→' ? 'transparent' : 'rgba(129,140,248,0.1)',
              border: item === '→' ? 'none' : '1px solid rgba(129,140,248,0.25)',
              borderRadius: 8, padding: item === '→' ? '0 2px' : '4px 10px'
            }}>{item}</span>
          ))}
        </div>
      </div>

      {/* Final motivational message */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(251,191,36,0.1), rgba(245,158,11,0.07))',
        border: '1px solid rgba(251,191,36,0.3)', borderRadius: 16, padding: '18px 22px', textAlign: 'center'
      }}>
        <p style={{ fontFamily: 'Space Grotesk', fontSize: 18, fontWeight: 800, color: 'white', marginBottom: 10, lineHeight: 1.3 }}>
          You now have the complete system.<br />
          <span style={{ background: 'linear-gradient(90deg, #fbbf24, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>What you do next determines everything.</span>
        </p>
        <p style={{ fontSize: 12.5, color: 'rgba(253,230,138,0.8)', lineHeight: 1.6 }}>
          Growth doesn't happen from reading guides — it happens from execution. Start with your niche. Write your first script. Upload your first Short. Then improve. Then repeat. The creators who succeed aren't the most talented — they're the most consistent.
        </p>
        <div style={{ marginTop: 14, fontSize: 13, fontWeight: 700, color: '#c4b5fd' }}>— GrowthVault</div>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>27</span>
      </div>
    </div>
  );
};

export default Page27Blueprint;
