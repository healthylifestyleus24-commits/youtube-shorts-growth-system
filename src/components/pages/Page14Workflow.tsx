import React from 'react';

const Page14Workflow: React.FC = () => {
  const workflowSteps = [
    { icon: '💡', step: 'IDEA', detail: 'Pull from your content bank', color: '#3b82f6' },
    { icon: '✍️', step: 'SCRIPT', detail: 'HOOK → VALUE → PAYOFF → CTA', color: '#6366f1' },
    { icon: '🎙️', step: 'VOICE', detail: 'Record or generate voiceover', color: '#8b5cf6' },
    { icon: '🎬', step: 'VISUALS', detail: 'Film, screen record, or stock', color: '#a855f7' },
    { icon: '✂️', step: 'EDIT', detail: 'Cuts, pacing, sync to audio', color: '#ec4899' },
    { icon: '📝', step: 'CAPTIONS', detail: 'Auto-captions + style them', color: '#f59e0b' },
    { icon: '🎵', step: 'MUSIC/SFX', detail: 'Royalty-free background audio', color: '#10b981' },
    { icon: '📤', step: 'EXPORT', detail: '9:16, 1080×1920, MP4', color: '#06b6d4' },
  ];

  const tips = [
    { icon: '📐', tip: 'Film and export in 9:16 vertical format (1080×1920px). Horizontal video in Shorts gets reduced distribution.' },
    { icon: '🎯', tip: 'Your opening frame must be visually strong. Many viewers decide whether to watch based on the first visual alone.' },
    { icon: '📖', tip: 'Add large, readable captions. 85%+ of Shorts are watched without sound at first — captions hook silent viewers.' },
    { icon: '⚡', tip: 'Keep visual changes fast, especially in the first 5 seconds. Static visuals cause immediate drop-off.' },
    { icon: '🔊', tip: 'Clear, clean audio is non-negotiable. Poor audio quality causes drop-off faster than poor video quality.' },
    { icon: '🚫', tip: 'Never start with a logo intro or "welcome to my channel" screen. Cut straight to your hook.' },
    { icon: '♻️', tip: 'Maintain viewer attention by varying your visual elements every 3–5 seconds where possible.' },
  ];

  return (
    <div className="ebook-page bg-gradient-chapter" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      <div style={{
        position: 'absolute', top: -60, right: -60, width: 350, height: 350,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.3))', border: '1px solid rgba(139,92,246,0.4)', borderRadius: 20, padding: '6px 16px', marginBottom: 14 }}>
          <span style={{ fontSize: 10, color: '#c4b5fd', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>Chapter 05 · Continued</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>The Faceless Shorts<br />Production Workflow</h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2, marginBottom: 14 }} />
      </div>

      {/* Illustration */}
      <div style={{ marginBottom: 18 }}>
        <img src="/images/video-editing.jpg" alt="Workflow" style={{ width: '100%', height: 110, objectFit: 'cover', borderRadius: 12, opacity: 0.75 }} />
      </div>

      {/* Workflow steps */}
      <div style={{ marginBottom: 22 }}>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: '#c4b5fd', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1.5 }}>The 8-Step Production Workflow</h3>
        <div style={{ position: 'relative' }}>
          {/* Connecting line */}
          <div style={{
            position: 'absolute', left: 19, top: 20, bottom: 20,
            width: 2, background: 'linear-gradient(to bottom, #3b82f6, #6366f1, #8b5cf6, #a855f7, #ec4899, #f59e0b, #10b981, #06b6d4)',
            zIndex: 0
          }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {workflowSteps.map((w, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'center', paddingLeft: 0, paddingBottom: i < workflowSteps.length - 1 ? 6 : 0 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%', flexShrink: 0, zIndex: 1,
                  background: `${w.color}22`, border: `2px solid ${w.color}55`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, boxShadow: `0 0 10px ${w.color}33`
                }}>{w.icon}</div>
                <div style={{
                  flex: 1, display: 'flex', alignItems: 'center', gap: 12,
                  background: 'rgba(255,255,255,0.025)', borderRadius: 10, padding: '10px 14px'
                }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: w.color, minWidth: 60, letterSpacing: 1 }}>{w.step}</span>
                  <span style={{ fontSize: 12, color: 'rgba(203,213,225,0.75)' }}>{w.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Production tips */}
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '14px 16px' }}>
        <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 14, fontWeight: 800, color: 'white', marginBottom: 12 }}>⚡ Critical Production Rules</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {tips.map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', padding: '8px', background: 'rgba(255,255,255,0.02)', borderRadius: 8 }}>
              <span style={{ fontSize: 14, flexShrink: 0 }}>{t.icon}</span>
              <span style={{ fontSize: 11, color: 'rgba(203,213,225,0.75)', lineHeight: 1.4 }}>{t.tip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>14</span>
      </div>
    </div>
  );
};

export default Page14Workflow;
