import React from 'react';

const Page09Ideas: React.FC = () => {
  const sources = [
    { icon: '▶️', source: 'YouTube Shorts', tip: 'Search your niche keyword and filter by Shorts. Study what has the most views and engagement.' },
    { icon: '🔍', source: 'YouTube Search', tip: 'Type your niche keyword and watch the auto-suggest results. These reveal exactly what people search for.' },
    { icon: '📊', source: 'Google Trends', tip: 'Compare niche topics by search volume over time. Find rising topics before they peak.' },
    { icon: '👀', source: 'Competitor Channels', tip: 'Sort competitor videos by "Most Popular." Study their top performers — then create your own version.' },
    { icon: '💬', source: 'Comments Section', tip: 'Viewer comments reveal unanswered questions, confusions, and desired content. Gold for ideas.' },
    { icon: '🗣️', source: 'Reddit & Forums', tip: 'Find the top questions in niche subreddits. Real audience pain points = proven content demand.' },
    { icon: '❓', source: 'FAQ Research', tip: '"People also ask" on Google shows the exact questions your audience types daily.' },
    { icon: '🔥', source: 'Trending Topics', tip: 'Use Twitter/X trends, Google News, and TikTok to spot topics gaining momentum in your niche.' },
  ];

  return (
    <div className="ebook-page bg-gradient-page" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      <div style={{
        position: 'absolute', top: -60, right: -80, width: 380, height: 380,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      <div style={{ marginBottom: 18 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.3))', border: '1px solid rgba(139,92,246,0.4)', borderRadius: 20, padding: '6px 16px', marginBottom: 14 }}>
          <span style={{ fontSize: 10, color: '#c4b5fd', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>Chapter 03</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>Find Viral Shorts Ideas</h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2, marginBottom: 14 }} />
        <p style={{ fontSize: 13, color: 'rgba(203,213,225,0.8)', lineHeight: 1.6 }}>
          Viral Shorts don't start with luck — they start with research. Understanding what already works in your niche eliminates guesswork and gives you a clear template to improve upon.
        </p>
      </div>

      {/* Research sources */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9, marginBottom: 22 }}>
        {sources.map((s, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 10, padding: '11px 13px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
              <span style={{ fontSize: 15 }}>{s.icon}</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#c4b5fd' }}>{s.source}</span>
            </div>
            <p style={{ fontSize: 11, color: 'rgba(203,213,225,0.65)', lineHeight: 1.45 }}>{s.tip}</p>
          </div>
        ))}
      </div>

      {/* 3R Formula */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(6,182,212,0.08))',
        border: '1px solid rgba(99,102,241,0.25)', borderRadius: 16, padding: '18px 20px'
      }}>
        <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 16, fontWeight: 800, color: 'white', marginBottom: 16, textAlign: 'center' }}>
          ⚡ The 3R Idea Formula
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0 }}>
          {[
            { icon: '🔬', step: 'RESEARCH', color: '#3b82f6', desc: 'Find high-performing content in your niche. Understand why it worked.' },
            null,
            { icon: '📦', step: 'REPACKAGE', color: '#8b5cf6', desc: 'Adapt the format, angle, or hook to fit your voice and audience.' },
            null,
            { icon: '✨', step: 'REINVENT', color: '#06b6d4', desc: 'Add your perspective, update the information, or go deeper.' },
          ].map((item, i) =>
            item === null ? (
              <div key={i} style={{ fontSize: 20, color: '#4b5563', margin: '0 12px', marginBottom: 30 }}>→</div>
            ) : (
              <div key={i} style={{ textAlign: 'center', maxWidth: 150 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14, margin: '0 auto 10px',
                  background: `${item.color}22`, border: `2px solid ${item.color}55`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, boxShadow: `0 0 14px ${item.color}33`
                }}>{item.icon}</div>
                <div style={{ fontSize: 12, fontWeight: 800, color: item.color, marginBottom: 6, letterSpacing: 1 }}>{item.step}</div>
                <p style={{ fontSize: 11, color: 'rgba(203,213,225,0.65)', lineHeight: 1.4 }}>{item.desc}</p>
              </div>
            )
          )}
        </div>
        <div style={{
          marginTop: 16, background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.25)',
          borderRadius: 10, padding: '10px 14px'
        }}>
          <p style={{ fontSize: 11.5, color: 'rgba(253,230,138,0.85)', textAlign: 'center', fontWeight: 500 }}>
            ⚠️ <strong>Important:</strong> Never copy another creator's video directly. Use research as inspiration — then create something original that reflects your voice and perspective.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>09</span>
      </div>
    </div>
  );
};

export default Page09Ideas;
