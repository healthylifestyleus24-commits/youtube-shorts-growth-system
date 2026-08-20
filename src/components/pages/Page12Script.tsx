import React from 'react';

const Page12Script: React.FC = () => {
  const formula = [
    { step: 'HOOK', icon: '🎣', color: '#ef4444', time: '0–3s', desc: 'Stop the scroll. Create curiosity or raise a problem.' },
    { step: 'PROMISE', icon: '🤝', color: '#f59e0b', time: '3–7s', desc: 'Tell the viewer exactly what they\'re about to get.' },
    { step: 'VALUE', icon: '💎', color: '#3b82f6', time: '7–35s', desc: 'Deliver the meat of your content. Be specific and clear.' },
    { step: 'PAYOFF', icon: '🏆', color: '#10b981', time: '35–42s', desc: 'Resolve the hook. Land the satisfying conclusion.' },
    { step: 'CTA', icon: '📣', color: '#8b5cf6', time: '42–45s', desc: 'Direct the viewer to follow, comment, or watch more.' },
  ];

  return (
    <div className="ebook-page bg-gradient-page" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      <div style={{
        position: 'absolute', bottom: 80, right: -60, width: 350, height: 350,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      <div style={{ marginBottom: 18 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.3))', border: '1px solid rgba(139,92,246,0.4)', borderRadius: 20, padding: '6px 16px', marginBottom: 14 }}>
          <span style={{ fontSize: 10, color: '#c4b5fd', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>Chapter 04 · Continued</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>The Perfect Shorts Script Formula</h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2, marginBottom: 14 }} />
      </div>

      {/* Script formula steps */}
      <div style={{ display: 'flex', gap: 6, alignItems: 'stretch', marginBottom: 22 }}>
        {formula.map((step, i) => (
          <div key={i} style={{
            flex: 1, background: 'rgba(255,255,255,0.025)', border: `1px solid ${step.color}44`,
            borderTop: `3px solid ${step.color}`, borderRadius: '0 0 12px 12px',
            padding: '12px 10px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 6
          }}>
            <div style={{ fontSize: 20 }}>{step.icon}</div>
            <div style={{ fontSize: 12, fontWeight: 800, color: step.color }}>{step.step}</div>
            <div style={{
              fontSize: 9, fontWeight: 700, color: 'rgba(148,163,184,0.7)',
              background: `${step.color}18`, borderRadius: 8, padding: '2px 6px'
            }}>{step.time}</div>
            <p style={{ fontSize: 10, color: 'rgba(203,213,225,0.65)', lineHeight: 1.4 }}>{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Sample Script */}
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 15, fontWeight: 800, color: 'white', marginBottom: 14 }}>
          📄 Sample 40-Second Script (Finance Niche)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            { label: 'HOOK', color: '#ef4444', vo: 'Most people retire broke — and it\'s because of this one mistake they make in their 20s.', screen: 'Bold text: "The Retirement Mistake No One Talks About"', visual: 'Open on dark background with glowing text' },
            { label: 'PROMISE', color: '#f59e0b', vo: 'In the next 30 seconds, I\'ll show you exactly what it is — and how to avoid it.', screen: 'Progress bar visual' , visual: 'Clock animation or timer visual' },
            { label: 'VALUE', color: '#3b82f6', vo: 'The mistake is prioritizing a high income over building assets. Most people earn more and spend more — they never convert income into investments.', screen: 'Income → Spending cycle diagram', visual: 'Simple animated graphic showing money cycle' },
            { label: 'PAYOFF', color: '#10b981', vo: 'The fix? Pay yourself first. Before any expense, move 10% to an index fund. Even $200/month becomes $400K+ over 30 years.', screen: 'Growth chart visual', visual: 'Bar chart growing upward' },
            { label: 'CTA', color: '#8b5cf6', vo: 'Follow for one financial tip every day that actually moves the needle.', screen: 'Follow button highlighted', visual: 'Animated subscribe/follow prompt' },
          ].map((section, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)',
              borderLeft: `3px solid ${section.color}`, borderRadius: '0 10px 10px 0',
              padding: '10px 14px'
            }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: 60, fontSize: 9, fontWeight: 800, color: section.color,
                  letterSpacing: 1, paddingTop: 2
                }}>{section.label}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', rowGap: 4 }}>
                    <div style={{ flex: '0 0 auto', maxWidth: '45%' }}>
                      <div style={{ fontSize: 9, color: 'rgba(148,163,184,0.5)', marginBottom: 2, letterSpacing: 0.5 }}>🎙 VOICEOVER</div>
                      <p style={{ fontSize: 11, color: 'rgba(226,232,240,0.8)', lineHeight: 1.4, fontStyle: 'italic' }}>{section.vo}</p>
                    </div>
                    <div style={{ flex: '0 0 auto', maxWidth: '54%' }}>
                      <div style={{ fontSize: 9, color: 'rgba(148,163,184,0.5)', marginBottom: 2, letterSpacing: 0.5 }}>📱 ON-SCREEN</div>
                      <p style={{ fontSize: 11, color: 'rgba(203,213,225,0.65)', lineHeight: 1.4 }}>{section.screen}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick script tips */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(6,182,212,0.08), rgba(59,130,246,0.08))',
        border: '1px solid rgba(6,182,212,0.25)', borderRadius: 12, padding: '12px 16px'
      }}>
        <h3 style={{ fontSize: 12, fontWeight: 700, color: '#67e8f9', marginBottom: 8 }}>✏️ Script Writing Rules</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
          {['Write conversationally — speak like you talk to a friend', 'One idea per Short — don\'t try to teach everything at once', 'Read it aloud before recording — if it sounds robotic, rewrite it'].map((tip, i) => (
            <div key={i} style={{ fontSize: 11, color: 'rgba(203,213,225,0.75)', lineHeight: 1.4 }}>
              <span style={{ color: '#06b6d4', marginRight: 5 }}>•</span>{tip}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>12</span>
      </div>
    </div>
  );
};

export default Page12Script;
