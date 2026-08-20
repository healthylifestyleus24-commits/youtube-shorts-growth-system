import React from 'react';

const Page23Analytics: React.FC = () => {
  const metrics = [
    { icon: '👁️', metric: 'Views', what: 'Total number of times your Short was watched', why: 'Indicates reach and distribution. Doesn\'t tell you about quality alone.', color: '#3b82f6' },
    { icon: '⏱️', metric: 'Average View Duration', what: 'How long viewers watch on average', why: 'The most important retention metric. Higher = YouTube shows it to more people.', color: '#8b5cf6' },
    { icon: '📊', metric: 'Audience Retention', what: 'Second-by-second viewer drop-off graph', why: 'Shows exactly where you lose viewers. Use this to fix specific edit points.', color: '#06b6d4' },
    { icon: '❤️', metric: 'Engagement Rate', what: 'Likes, comments, and shares relative to views', why: 'High engagement tells YouTube the content is worth promoting further.', color: '#ec4899' },
    { icon: '🔔', metric: 'Subscribers Gained', what: 'New subscribers per video', why: 'Measures conversion. Low subs despite high views = weak CTA or unfocused niche.', color: '#f59e0b' },
    { icon: '🚦', metric: 'Traffic Sources', what: 'Where your views are coming from', why: 'Helps you understand whether growth is algorithm-driven or community-driven.', color: '#10b981' },
    { icon: '🔄', metric: 'Returning Viewers', what: '% of viewers who have watched your channel before', why: 'Measures audience loyalty. A growing returning viewer % = real community building.', color: '#818cf8' },
    { icon: '🏆', metric: 'Top Content Patterns', what: 'Which video types, formats, lengths perform best', why: 'Tells you what to create more of. Let data guide your strategy.', color: '#a855f7' },
  ];

  return (
    <div className="ebook-page bg-gradient-page" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      <div style={{
        position: 'absolute', top: -80, right: -80, width: 380, height: 380,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.13) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.3))', border: '1px solid rgba(139,92,246,0.4)', borderRadius: 20, padding: '6px 16px', marginBottom: 14 }}>
          <span style={{ fontSize: 10, color: '#c4b5fd', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>Chapter 10</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>Analyze What Is Working</h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2, marginBottom: 14 }} />
      </div>

      {/* Key principle */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(6,182,212,0.1))',
        border: '1px solid rgba(99,102,241,0.3)', borderRadius: 12, padding: '14px 18px', marginBottom: 16, textAlign: 'center'
      }}>
        <p style={{ fontFamily: 'Space Grotesk', fontSize: 22, fontWeight: 800, color: 'white', marginBottom: 6 }}>
          Don't Guess. Measure.
        </p>
        <p style={{ fontSize: 13, color: 'rgba(196,181,253,0.8)' }}>
          Every answer to "why isn't my channel growing?" lives inside YouTube Analytics. The creators who succeed are the ones who read the data and act on it — not the ones who post and hope.
        </p>
      </div>

      {/* Analytics illustration */}
      <div style={{ marginBottom: 16 }}>
        <img src="/images/analytics-dash.jpg" alt="Analytics Dashboard" style={{ width: '100%', height: 110, objectFit: 'cover', borderRadius: 12, opacity: 0.75 }} />
      </div>

      {/* Metrics grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 20 }}>
        {metrics.map((m, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 10, padding: '10px 12px', display: 'flex', gap: 10
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: 8, flexShrink: 0,
              background: `${m.color}18`, border: `1px solid ${m.color}40`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16
            }}>{m.icon}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: m.color, marginBottom: 3 }}>{m.metric}</div>
              <div style={{ fontSize: 10, color: 'rgba(203,213,225,0.5)', marginBottom: 3, lineHeight: 1.3 }}>{m.what}</div>
              <p style={{ fontSize: 10.5, color: 'rgba(203,213,225,0.7)', lineHeight: 1.35 }}>{m.why}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics routine */}
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '14px 16px' }}>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: 'white', marginBottom: 10 }}>📋 Weekly Analytics Routine</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {[
            'Check retention graph on every new Short within 48 hours',
            'Identify your top 3 performing videos from the past 30 days',
            'Note what hook style, format, or topic the winners shared',
            'Plan next week\'s content based on what data shows working',
          ].map((tip, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <span style={{ color: '#06b6d4', fontSize: 14, flexShrink: 0 }}>→</span>
              <span style={{ fontSize: 11.5, color: 'rgba(203,213,225,0.75)', lineHeight: 1.4 }}>{tip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>23</span>
      </div>
    </div>
  );
};

export default Page23Analytics;
