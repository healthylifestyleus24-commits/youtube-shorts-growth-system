import React from 'react';

const Page19Subscribers: React.FC = () => {
  const strategies = [
    { icon: '🎯', title: 'Consistent Niche', desc: 'Viewers subscribe when they know exactly what future content to expect. Niche consistency = predictable value.' },
    { icon: '📺', title: 'Series Content', desc: 'Create multi-part Shorts ("Part 2 coming Thursday") that give viewers a reason to return and subscribe.' },
    { icon: '📣', title: 'Strong CTA', desc: 'End every Short with a clear ask: "Follow for daily [niche] tips" — direct, simple, and niche-specific.' },
    { icon: '🔁', title: 'Recurring Formats', desc: '"Did You Know..." or "3 Facts About..." formats make viewers recognize your pattern and expect the next episode.' },
    { icon: '💬', title: 'Comment Engagement', desc: 'Reply to comments in the first hour after posting. Engagement boosts distribution and builds community loyalty.' },
    { icon: '📐', title: 'Viewer Expectations', desc: 'Set clear expectations in your channel header and video CTAs. Over-deliver on those expectations consistently.' },
  ];

  const journeySteps = [
    { label: 'Viewer', icon: '👁️', desc: 'Discovers your Short via algorithm', color: '#6b7280' },
    { label: 'Watcher', icon: '📺', desc: 'Watches to the end', color: '#3b82f6' },
    { label: 'Engaged', icon: '❤️', desc: 'Likes, comments, rewatches', color: '#6366f1' },
    { label: 'Subscriber', icon: '🔔', desc: 'Follows for more content', color: '#8b5cf6' },
    { label: 'Returning', icon: '🔄', desc: 'Comes back repeatedly', color: '#ec4899' },
    { label: 'Customer', icon: '💰', desc: 'Buys your offer or converts', color: '#f59e0b' },
  ];

  return (
    <div className="ebook-page bg-gradient-page" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      <div style={{
        position: 'absolute', top: -80, right: -80, width: 380, height: 380,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.13) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.3))', border: '1px solid rgba(139,92,246,0.4)', borderRadius: 20, padding: '6px 16px', marginBottom: 14 }}>
          <span style={{ fontSize: 10, color: '#c4b5fd', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>Chapter 08</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>Turn Views Into Subscribers</h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2, marginBottom: 14 }} />
        <p style={{ fontSize: 13, color: 'rgba(203,213,225,0.8)', lineHeight: 1.6 }}>
          Views are borrowed attention. Subscribers are an owned asset. Every viewer you convert into a subscriber increases the compounding value of every future video you publish.
        </p>
      </div>

      {/* Illustration */}
      <div style={{ marginBottom: 18 }}>
        <img src="/images/growth-funnel.jpg" alt="Subscriber Funnel" style={{ width: '100%', height: 100, objectFit: 'cover', borderRadius: 12, opacity: 0.7 }} />
      </div>

      {/* Strategies */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 22 }}>
        {strategies.map((s, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 10, padding: '12px 14px'
          }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
              <span style={{ fontSize: 18 }}>{s.icon}</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#c4b5fd' }}>{s.title}</span>
            </div>
            <p style={{ fontSize: 11.5, color: 'rgba(203,213,225,0.7)', lineHeight: 1.45 }}>{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Viewer Journey */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(6,182,212,0.08))',
        border: '1px solid rgba(99,102,241,0.25)', borderRadius: 16, padding: '16px 18px'
      }}>
        <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 15, fontWeight: 800, color: 'white', marginBottom: 14, textAlign: 'center' }}>
          🗺️ The Viewer Journey
        </h3>
        <div style={{ position: 'relative' }}>
          {/* Connecting line */}
          <div style={{
            position: 'absolute', top: 24, left: '8%', right: '8%',
            height: 2, background: 'linear-gradient(90deg, #6b7280, #3b82f6, #6366f1, #8b5cf6, #ec4899, #f59e0b)',
            zIndex: 0
          }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
            {journeySteps.map((step, i) => (
              <div key={i} style={{ textAlign: 'center', flex: 1 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%', margin: '0 auto 8px',
                  background: `${step.color}22`, border: `2px solid ${step.color}66`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, boxShadow: `0 0 10px ${step.color}33`,
                  backdropFilter: 'blur(4px)'
                }}>{step.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 800, color: step.color, marginBottom: 4 }}>{step.label}</div>
                <p style={{ fontSize: 9, color: 'rgba(203,213,225,0.5)', lineHeight: 1.3 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <p style={{ fontSize: 11.5, color: 'rgba(203,213,225,0.75)', textAlign: 'center', marginTop: 14, lineHeight: 1.5 }}>
          The journey from Viewer to Customer is built through consistent, valuable content — not a single viral Short.
        </p>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>19</span>
      </div>
    </div>
  );
};

export default Page19Subscribers;
