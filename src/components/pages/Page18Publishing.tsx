import React from 'react';

const Page18Publishing: React.FC = () => {
  const approaches = [
    {
      icon: '📅', title: '1 Short/Day',
      pros: 'Fast data collection. Algorithm signals you\'re active.', cons: 'High workload. Risk of quality dip if not batched.',
      suitable: 'Best for creators with pre-built content banks'
    },
    {
      icon: '🚀', title: '2 Shorts/Day',
      pros: 'Accelerated growth phase. Great for channel launch.', cons: 'Demanding. Must be pre-batched to sustain quality.',
      suitable: 'Suitable for launch periods or batch production phases'
    },
    {
      icon: '🗓️', title: 'Batch + Schedule',
      pros: 'Balanced. Protects quality. Reduces daily decision fatigue.', cons: 'Requires planning ahead.',
      suitable: 'Best long-term approach for sustainable growth'
    },
  ];

  const weeklyWorkflow = [
    { day: 'Monday', task: '🔬 Research', desc: 'Pull 5–7 new ideas from your bank. Review last week\'s analytics.' },
    { day: 'Tuesday', task: '✍️ Scripts', desc: 'Write scripts for 3–5 videos. Apply HOOK → VALUE → PAYOFF → CTA.' },
    { day: 'Wednesday', task: '🎬 Production', desc: 'Film or gather all visuals. Record voiceovers. Batch in one session.' },
    { day: 'Thursday', task: '✂️ Editing', desc: 'Edit all videos. Add captions, SFX, music. Apply retention rules.' },
    { day: 'Friday', task: '📤 Scheduling', desc: 'Upload and schedule all videos. Optimize titles and descriptions.' },
    { day: 'Weekend', task: '📊 Analytics', desc: 'Review performance data. Note what worked. Generate new ideas.' },
  ];

  return (
    <div className="ebook-page bg-gradient-chapter" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      <div style={{
        position: 'absolute', top: -60, left: -80, width: 380, height: 380,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.3))', border: '1px solid rgba(139,92,246,0.4)', borderRadius: 20, padding: '6px 16px', marginBottom: 14 }}>
          <span style={{ fontSize: 10, color: '#c4b5fd', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>Chapter 07 · Continued</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>Build a Consistent<br />Publishing System</h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2, marginBottom: 14 }} />
        <p style={{ fontSize: 13, color: 'rgba(203,213,225,0.8)', lineHeight: 1.6 }}>
          Consistency doesn't mean posting as many videos as possible. It means maintaining a schedule your audience can rely on — and one that you can sustain without burning out.
        </p>
      </div>

      {/* Posting approaches */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 20 }}>
        {approaches.map((a, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 12, padding: '14px 12px', position: 'relative'
          }}>
            <div style={{ fontSize: 22, marginBottom: 8 }}>{a.icon}</div>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: '#c4b5fd', marginBottom: 8 }}>{a.title}</h3>
            <div style={{ marginBottom: 6 }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: '#34d399', letterSpacing: 0.5 }}>✅ PROS: </span>
              <span style={{ fontSize: 11, color: 'rgba(203,213,225,0.65)' }}>{a.pros}</span>
            </div>
            <div style={{ marginBottom: 8 }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: '#f87171', letterSpacing: 0.5 }}>⚠️ CONS: </span>
              <span style={{ fontSize: 11, color: 'rgba(203,213,225,0.65)' }}>{a.cons}</span>
            </div>
            <div style={{
              fontSize: 10, color: '#818cf8',
              background: 'rgba(129,140,248,0.1)', border: '1px solid rgba(129,140,248,0.25)',
              borderRadius: 8, padding: '4px 8px', lineHeight: 1.3
            }}>{a.suitable}</div>
          </div>
        ))}
      </div>

      {/* Weekly workflow */}
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '16px 18px' }}>
        <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 15, fontWeight: 800, color: 'white', marginBottom: 14 }}>
          📅 Sample Weekly Production Workflow
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {weeklyWorkflow.map((w, i) => {
            const colors = ['#3b82f6', '#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];
            return (
              <div key={i} style={{
                display: 'flex', gap: 12, alignItems: 'flex-start',
                padding: '9px 12px',
                background: 'rgba(255,255,255,0.02)', borderRadius: 10,
                borderLeft: `3px solid ${colors[i]}`
              }}>
                <div style={{ minWidth: 72, fontSize: 11, fontWeight: 700, color: colors[i], paddingTop: 2 }}>{w.day}</div>
                <div style={{ minWidth: 80, fontSize: 12, fontWeight: 600, color: 'white' }}>{w.task}</div>
                <div style={{ flex: 1, fontSize: 11.5, color: 'rgba(203,213,225,0.7)', lineHeight: 1.4 }}>{w.desc}</div>
              </div>
            );
          })}
        </div>
        <div style={{
          marginTop: 12, padding: '10px 12px',
          background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(6,182,212,0.08))',
          border: '1px solid rgba(16,185,129,0.25)', borderRadius: 10
        }}>
          <p style={{ fontSize: 11.5, color: 'rgba(203,213,225,0.8)' }}>
            <strong style={{ color: '#34d399' }}>Key principle:</strong> Quality over volume. One excellent Short outperforms five mediocre ones. Never sacrifice content quality to hit an arbitrary posting quota.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>18</span>
      </div>
    </div>
  );
};

export default Page18Publishing;
