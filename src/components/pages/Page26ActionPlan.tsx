import React from 'react';

const Page26ActionPlan: React.FC = () => {
  const phases = [
    {
      range: 'Days 1–7', label: 'RESEARCH + BUILD', icon: '🔬', color: '#3b82f6',
      tasks: [
        'Complete the 5-Point Niche Test. Choose your niche.',
        'Define your content angle and target audience.',
        'Complete the Channel Foundation Worksheet (p.06).',
        'Set up your YouTube channel — name, branding, banner, About.',
        'Identify your 3–5 content pillars.',
        'Collect 30+ video ideas using the 3R Research Formula.',
        'Fill your Content Bank with ideas, hooks, formats, and CTAs.',
      ]
    },
    {
      range: 'Days 8–14', label: 'CREATE + SCRIPT', icon: '✍️', color: '#8b5cf6',
      tasks: [
        'Write scripts for your first 7 Shorts using the HOOK → VALUE → PAYOFF → CTA formula.',
        'Test at least 3 different hook types across your scripts.',
        'Record or produce visuals for your first 3–5 videos.',
        'Edit videos applying the Retention Editing Rule.',
        'Add captions, music, and SFX to all videos.',
        'Export all files in 9:16 vertical format, 1080×1920.',
        'Review each video: Does every second inform, entertain, or create curiosity?',
      ]
    },
    {
      range: 'Days 15–21', label: 'PUBLISH + TEST', icon: '📤', color: '#ec4899',
      tasks: [
        'Upload your first 5–7 Shorts with optimized titles and descriptions.',
        'Apply 3–5 relevant hashtags per video.',
        'Monitor performance after 48 hours — check retention graphs.',
        'Note which hooks drove the strongest view-through rate.',
        'Identify your earliest top performer.',
        'Begin scripting the next batch based on initial data.',
        'Engage with every comment on your earliest Shorts.',
      ]
    },
    {
      range: 'Days 22–30', label: 'OPTIMIZE + MONETIZE', icon: '🚀', color: '#f59e0b',
      tasks: [
        'Perform a Video Autopsy on your best-performing Short.',
        'Create 3 variations of your best-performing format.',
        'Build your first monetization asset (affiliate link, lead magnet, or product).',
        'Add a niche-specific CTA to all new Shorts.',
        'Establish your weekly production routine using the 5-day workflow.',
        'Document your process — begin building your first SOP.',
        'Set your 90-day performance targets and content publishing schedule.',
      ]
    },
  ];



  return (
    <div className="ebook-page bg-gradient-chapter" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      <div style={{
        position: 'absolute', top: -80, right: -80, width: 400, height: 400,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(251,191,36,0.1) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 28 }} />

      {/* Header */}
      <div style={{ marginBottom: 16 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'linear-gradient(135deg, rgba(251,191,36,0.2), rgba(245,158,11,0.15))',
          border: '1px solid rgba(251,191,36,0.4)', borderRadius: 20, padding: '6px 16px', marginBottom: 14
        }}>
          <span style={{ fontSize: 10, color: '#fde68a', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>30-Day Challenge</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 32, fontWeight: 800, color: 'white', lineHeight: 1.15, marginBottom: 6 }}>
          30-Day YouTube Shorts<br />Growth Action Plan
        </h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #f59e0b, #fbbf24)', borderRadius: 2, marginBottom: 12 }} />
        <p style={{ fontSize: 12.5, color: 'rgba(203,213,225,0.8)', lineHeight: 1.5 }}>
          This is your implementation roadmap. Work through it in order. Don't skip phases. Progress beats perfection — take action on each task, even if it's imperfect.
        </p>
      </div>

      {/* Timeline visual */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 18, alignItems: 'center' }}>
        {phases.map((p, i) => (
          <React.Fragment key={i}>
            <div style={{
              flex: 1, padding: '8px 10px', borderRadius: 10, textAlign: 'center',
              background: `${p.color}15`, border: `1px solid ${p.color}40`
            }}>
              <div style={{ fontSize: 16, marginBottom: 3 }}>{p.icon}</div>
              <div style={{ fontSize: 10, fontWeight: 800, color: p.color, lineHeight: 1.2 }}>{p.range}</div>
            </div>
            {i < 3 && <div style={{ color: '#374151', fontSize: 14 }}>→</div>}
          </React.Fragment>
        ))}
      </div>

      {/* Phases */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {phases.map((phase, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.025)', border: `1px solid ${phase.color}33`,
            borderTop: `3px solid ${phase.color}`, borderRadius: '0 0 14px 14px', padding: '14px 14px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <span style={{ fontSize: 18 }}>{phase.icon}</span>
              <div>
                <div style={{ fontSize: 10, fontWeight: 800, color: phase.color, letterSpacing: 1 }}>{phase.range}</div>
                <div style={{ fontSize: 13, fontWeight: 800, color: 'white' }}>{phase.label}</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {phase.tasks.map((task, j) => (
                <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 16, height: 16, borderRadius: 4, flexShrink: 0,
                    border: `1.5px solid ${phase.color}60`,
                    background: `${phase.color}12`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 8, color: phase.color, marginTop: 1, fontWeight: 800
                  }}>✓</div>
                  <span style={{ fontSize: 11, color: 'rgba(203,213,225,0.75)', lineHeight: 1.35 }}>{task}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Motivational note */}
      <div style={{
        marginTop: 14,
        background: 'linear-gradient(135deg, rgba(251,191,36,0.08), rgba(245,158,11,0.06))',
        border: '1px solid rgba(251,191,36,0.25)', borderRadius: 12, padding: '12px 16px'
      }}>
        <p style={{ fontSize: 12, color: 'rgba(253,230,138,0.85)', textAlign: 'center', fontWeight: 500 }}>
          🏆 <strong>Reminder:</strong> Every successful creator on YouTube started from Day 1 with zero subscribers. The only difference between where you are and where you want to be is consistent, focused action.
        </p>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>26</span>
      </div>
    </div>
  );
};

export default Page26ActionPlan;
