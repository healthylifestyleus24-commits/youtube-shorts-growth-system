import React from 'react';

const Page11Hooks: React.FC = () => {
  const hookTypes = [
    { type: 'Curiosity', icon: '🔍', examples: ['Most people don\'t know this about...', 'The reason no one talks about this is...'] },
    { type: 'Unexpected Fact', icon: '😮', examples: ['This animal has never lost a battle in history.', 'Eating this one food reduces anxiety by 40%.'] },
    { type: 'Challenge', icon: '⚡', examples: ['I tried saving $1,000 in 30 days. Here\'s what happened.', 'We sent 50 cold emails. Only one worked.'] },
    { type: 'Problem', icon: '😤', examples: ['You\'re building habits wrong — and it\'s costing you.', 'This is why your content never goes viral.'] },
    { type: 'Result', icon: '🏆', examples: ['I made $3,000 this month with one simple system.', 'This workout routine gave me visible abs in 6 weeks.'] },
    { type: 'Contrarian', icon: '🔄', examples: ['Stop using cold showers for productivity — here\'s why.', 'Working harder is not the answer. This is.'] },
    { type: 'Story', icon: '📖', examples: ['Three years ago I was completely broke. Then I discovered...', 'Nobody believed this would work. They were wrong.'] },
  ];

  const hookPairs = [
    { weak: 'In this video I\'m going to show you how to save money.', strong: 'You\'re losing $400 a month to this one habit — and you don\'t even know it.' },
    { weak: 'Today we\'re talking about investing for beginners.', strong: 'Investing $10 a day starting at 25 makes you a millionaire. Here\'s the math.' },
    { weak: 'Here are some fitness tips for you.', strong: 'I asked 3 personal trainers the same question. None of them agreed.' },
  ];

  return (
    <div className="ebook-page bg-gradient-page" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      <div style={{
        position: 'absolute', top: -60, right: -60, width: 350, height: 350,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.3))', border: '1px solid rgba(139,92,246,0.4)', borderRadius: 20, padding: '6px 16px', marginBottom: 14 }}>
          <span style={{ fontSize: 10, color: '#c4b5fd', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>Chapter 04</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>Write Hooks That Stop the Scroll</h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2, marginBottom: 10 }} />
        <div style={{
          background: 'linear-gradient(135deg, rgba(239,68,68,0.1), rgba(220,38,38,0.08))',
          border: '1px solid rgba(239,68,68,0.3)', borderRadius: 12, padding: '12px 16px'
        }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#fca5a5', lineHeight: 1.5 }}>
            The first 1–3 seconds determine whether a viewer continues or scrolls past forever. Your hook is the most important part of any Short — more than production quality, music, or editing.
          </p>
        </div>
      </div>

      {/* Hook types */}
      <div style={{ marginBottom: 18 }}>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: '#c4b5fd', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1.5 }}>7 Hook Formulas That Work</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {hookTypes.map((h, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 10, padding: '10px 12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 16 }}>{h.icon}</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#c4b5fd' }}>{h.type} Hook</span>
              </div>
              {h.examples.map((ex, j) => (
                <p key={j} style={{ fontSize: 11, color: 'rgba(203,213,225,0.65)', lineHeight: 1.4, fontStyle: 'italic', marginBottom: 3 }}>"{ex}"</p>
              ))}
            </div>
          ))}
          {/* Filler for odd grid */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(6,182,212,0.08))',
            border: '1px solid rgba(99,102,241,0.25)', borderRadius: 10, padding: '10px 12px',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'
          }}>
            <span style={{ fontSize: 24, marginBottom: 6 }}>✋</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#818cf8' }}>Avoid Clichés</span>
            <p style={{ fontSize: 11, color: 'rgba(203,213,225,0.6)', lineHeight: 1.4, marginTop: 4 }}>Overused openers like "You won't believe..." lose impact. Test fresh variations instead.</p>
          </div>
        </div>
      </div>

      {/* Weak vs Strong */}
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '14px 16px' }}>
        <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 14, fontWeight: 800, color: 'white', marginBottom: 12 }}>
          ❌ Weak Hook → ✅ Strong Hook
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {hookPairs.map((pair, i) => (
            <div key={i} style={{ display: 'flex', gap: 8 }}>
              <div style={{ flex: 1, background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 8, padding: '8px 12px' }}>
                <div style={{ fontSize: 9, color: '#f87171', fontWeight: 700, marginBottom: 4, letterSpacing: 1 }}>WEAK</div>
                <p style={{ fontSize: 11, color: 'rgba(252,165,165,0.8)', lineHeight: 1.4, fontStyle: 'italic' }}>{pair.weak}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', color: '#4b5563', fontSize: 16 }}>→</div>
              <div style={{ flex: 1, background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: 8, padding: '8px 12px' }}>
                <div style={{ fontSize: 9, color: '#34d399', fontWeight: 700, marginBottom: 4, letterSpacing: 1 }}>STRONG</div>
                <p style={{ fontSize: 11, color: 'rgba(110,231,183,0.85)', lineHeight: 1.4, fontStyle: 'italic' }}>{pair.strong}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>11</span>
      </div>
    </div>
  );
};

export default Page11Hooks;
