import React from 'react';

const Page05Niche: React.FC = () => {
  const niches = [
    { emoji: '💸', label: 'Finance' }, { emoji: '💪', label: 'Fitness' }, { emoji: '🍳', label: 'Food' },
    { emoji: '🔥', label: 'Motivation' }, { emoji: '💻', label: 'Technology' }, { emoji: '🤖', label: 'AI' },
    { emoji: '🐾', label: 'Animals' }, { emoji: '⚽', label: 'Sports' }, { emoji: '🎭', label: 'Entertainment' },
    { emoji: '📚', label: 'Education' }, { emoji: '🧠', label: 'Facts' }, { emoji: '🎮', label: 'Gaming' },
  ];

  const nicheTest = [
    { num: 1, label: 'Demand', icon: '📊', desc: 'Are people actively searching for and watching this type of content?' },
    { num: 2, label: 'Competition', icon: '🎯', desc: 'Is the space competitive enough to validate demand but not so saturated you cannot enter?' },
    { num: 3, label: 'Content Supply', icon: '♾️', desc: 'Can you create 100+ video ideas in this niche without repeating yourself?' },
    { num: 4, label: 'Monetization', icon: '💰', desc: 'Do sponsors, affiliate programs, or digital products exist in this space?' },
    { num: 5, label: 'Personal Sustainability', icon: '🌱', desc: 'Can you stay consistent in this topic for 12+ months without burning out?' },
  ];

  return (
    <div className="ebook-page bg-gradient-chapter" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      <div style={{
        position: 'absolute', top: -80, right: -60, width: 380, height: 380,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      {/* Chapter badge */}
      <div style={{ marginBottom: 18 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.3))', border: '1px solid rgba(139,92,246,0.4)', borderRadius: 20, padding: '6px 16px', marginBottom: 14 }}>
          <span style={{ fontSize: 10, color: '#c4b5fd', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>Chapter 01</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>
          Choose a Profitable<br />Shorts Niche
        </h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2, marginBottom: 14 }} />
        <p style={{ fontSize: 13, color: 'rgba(203,213,225,0.8)', lineHeight: 1.6 }}>
          Your niche is the foundation of everything. The right niche gives you a clear direction, helps YouTube show your content to the right audience, and makes monetization significantly easier.
        </p>
      </div>

      {/* Niche grid */}
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: '#c4b5fd', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1.5 }}>Proven Niche Categories</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 8 }}>
          {niches.map((n, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 10, padding: '10px 6px', textAlign: 'center'
            }}>
              <div style={{ fontSize: 20, marginBottom: 4 }}>{n.emoji}</div>
              <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(203,213,225,0.7)' }}>{n.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Important note */}
      <div style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.25)', borderRadius: 12, padding: '12px 16px', marginBottom: 20 }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <span style={{ fontSize: 18, flexShrink: 0 }}>⚠️</span>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#fde68a', marginBottom: 4 }}>Don't Chase Trends Blindly</div>
            <p style={{ fontSize: 11.5, color: 'rgba(253,230,138,0.75)', lineHeight: 1.5 }}>
              Trending niches can disappear in months. Choose a niche that has <strong>long-term audience demand</strong>, not just a moment of viral attention. Sustainability beats short-term spikes.
            </p>
          </div>
        </div>
      </div>

      {/* 5-Point Niche Test */}
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '16px 18px' }}>
        <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 16, fontWeight: 800, color: 'white', marginBottom: 14 }}>
          ✅ The 5-Point Niche Test
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {nicheTest.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 12px', background: 'rgba(255,255,255,0.025)', borderRadius: 10 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                background: 'linear-gradient(135deg, #1d4ed8, #7c3aed)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, boxShadow: '0 0 10px rgba(124,58,237,0.3)'
              }}>{item.icon}</div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                  <span style={{ fontSize: 10, fontWeight: 800, color: '#818cf8', letterSpacing: 1 }}>0{item.num}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: 'white' }}>{item.label}</span>
                </div>
                <p style={{ fontSize: 11.5, color: 'rgba(203,213,225,0.7)', lineHeight: 1.45 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>05</span>
      </div>
    </div>
  );
};

export default Page05Niche;
