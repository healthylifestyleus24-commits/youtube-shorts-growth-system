import React from 'react';

const Page24Autopsy: React.FC = () => {
  const autopsySteps = [
    { label: 'HOOK', icon: '🎣', color: '#ef4444', question: 'What made people stop scrolling?', subpoints: ['What was the first visual frame?', 'What did the first 3 words of the voiceover say?', 'Was there a curiosity gap, problem statement, or pattern interrupt?'] },
    { label: 'RETENTION', icon: '⏱️', color: '#f59e0b', question: 'Where did viewers watch vs. drop off?', subpoints: ['At what timestamp did the biggest drop occur?', 'Was there a visual change or audio shift near that point?', 'Was the information clear or confusing at that moment?'] },
    { label: 'PAYOFF', icon: '🏆', color: '#10b981', question: 'Did the ending satisfy the hook?', subpoints: ['Did the video answer the question it raised?', 'Was the conclusion clear and strong?', 'Would someone feel they wasted their time watching?'] },
    { label: 'ENGAGEMENT', icon: '💬', color: '#3b82f6', question: 'What triggered likes, comments, and shares?', subpoints: ['Was there a polarizing claim that drove debate?', 'Was there a share-worthy stat or fact?', 'Did the CTA drive a specific action?'] },
    { label: 'SUBSCRIBERS', icon: '🔔', color: '#8b5cf6', question: 'Did viewers want more from this channel?', subpoints: ['Was the niche angle clear enough to inspire a follow?', 'Was the CTA niche-specific?', 'Can this concept become a series?'] },
  ];

  const checklist = [
    'What made viewers stop scrolling? (Hook quality)',
    'Where did viewers drop off? (Retention issues)',
    'What created curiosity or opened a loop? (Engagement driver)',
    'What triggered the most comments? (Debate or question)',
    'What caused people to rewatch? (Payoff quality)',
    'Can the concept be turned into a repeatable series?',
    'What would make the next version 10% better?',
  ];

  return (
    <div className="ebook-page bg-gradient-chapter" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      <div style={{
        position: 'absolute', bottom: 100, right: -80, width: 380, height: 380,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.3))', border: '1px solid rgba(139,92,246,0.4)', borderRadius: 20, padding: '6px 16px', marginBottom: 14 }}>
          <span style={{ fontSize: 10, color: '#c4b5fd', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>Chapter 10 · Continued</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>The Viral Video Autopsy</h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2, marginBottom: 14 }} />
        <p style={{ fontSize: 13, color: 'rgba(203,213,225,0.8)', lineHeight: 1.6 }}>
          When a Short outperforms your average, don't move on immediately. Dissect it. Understand <em>exactly</em> why it worked — then replicate the ingredients in future videos.
        </p>
      </div>

      {/* Autopsy steps */}
      <div style={{ display: 'flex', gap: 0, marginBottom: 20, position: 'relative' }}>
        {/* Vertical connecting bar */}
        <div style={{
          position: 'absolute', left: 23, top: 20, bottom: 20, width: 2,
          background: 'linear-gradient(to bottom, #ef4444, #f59e0b, #10b981, #3b82f6, #8b5cf6)',
          zIndex: 0
        }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
          {autopsySteps.map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%', flexShrink: 0, zIndex: 1,
                background: `${step.color}22`, border: `2px solid ${step.color}66`,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: 1, boxShadow: `0 0 10px ${step.color}33`, backdropFilter: 'blur(4px)'
              }}>
                <span style={{ fontSize: 14 }}>{step.icon}</span>
                <span style={{ fontSize: 7, fontWeight: 800, color: step.color, letterSpacing: 0.5 }}>{step.label}</span>
              </div>
              <div style={{
                flex: 1, background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 10, padding: '10px 14px'
              }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: step.color, marginBottom: 6 }}>{step.question}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {step.subpoints.map((sp, j) => (
                    <div key={j} style={{ display: 'flex', gap: 6, width: '100%' }}>
                      <span style={{ color: step.color, opacity: 0.6, fontSize: 10, flexShrink: 0 }}>•</span>
                      <span style={{ fontSize: 11, color: 'rgba(203,213,225,0.65)', lineHeight: 1.35 }}>{sp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analysis checklist */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(6,182,212,0.08))',
        border: '1px solid rgba(99,102,241,0.25)', borderRadius: 14, padding: '14px 18px'
      }}>
        <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 14, fontWeight: 800, color: 'white', marginBottom: 12 }}>
          🔍 Viral Video Analysis Checklist
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
          {checklist.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <div style={{
                width: 18, height: 18, borderRadius: 4, border: '1.5px solid rgba(99,102,241,0.5)',
                flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(99,102,241,0.1)', fontSize: 10, color: '#818cf8', marginTop: 1
              }}>✓</div>
              <span style={{ fontSize: 11, color: 'rgba(203,213,225,0.75)', lineHeight: 1.4 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>24</span>
      </div>
    </div>
  );
};

export default Page24Autopsy;
