import React from 'react';

const Page15Editing: React.FC = () => {
  const editingElements = [
    { icon: '⚡', label: 'Pacing', desc: 'Cut out every unnecessary pause. Your editing rhythm creates energy.' },
    { icon: '✂️', label: 'Jump Cuts', desc: 'Remove dead space between sentences. Keeps the viewer alert.' },
    { icon: '📝', label: 'Captions', desc: 'On-screen text reinforces the voiceover and hooks silent viewers.' },
    { icon: '🎬', label: 'B-Roll', desc: 'Relevant visuals cut on top of your main footage add depth.' },
    { icon: '🔀', label: 'Pattern Interrupts', desc: 'Change the visual every few seconds to prevent attention fatigue.' },
    { icon: '🔊', label: 'Sound Effects', desc: 'Strategic SFX add emphasis. Whooshes, pings, and alerts direct attention.' },
    { icon: '🎵', label: 'Music', desc: 'Subtle background music creates mood without distracting from the content.' },
    { icon: '🎯', label: 'Remove Dead Time', desc: 'Every second must serve the viewer. Remove anything that doesn\'t.' },
  ];

  return (
    <div className="ebook-page bg-gradient-page" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      <div style={{
        position: 'absolute', top: -80, right: -60, width: 380, height: 380,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.13) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.3))', border: '1px solid rgba(139,92,246,0.4)', borderRadius: 20, padding: '6px 16px', marginBottom: 14 }}>
          <span style={{ fontSize: 10, color: '#c4b5fd', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>Chapter 06</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>Edit Shorts for<br />Maximum Retention</h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2, marginBottom: 14 }} />
        <p style={{ fontSize: 13, color: 'rgba(203,213,225,0.8)', lineHeight: 1.6 }}>
          Editing is where a good idea becomes a great Short. Retention — the percentage of viewers who watch until the end — is one of YouTube's most important ranking signals. The better your editing, the higher your average view duration.
        </p>
      </div>

      {/* Illustration */}
      <div style={{ marginBottom: 18 }}>
        <img src="/images/video-editing.jpg" alt="Editing" style={{ width: '100%', height: 110, objectFit: 'cover', borderRadius: 12, opacity: 0.75 }} />
      </div>

      {/* Editing elements */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 22 }}>
        {editingElements.map((el, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 10, padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'flex-start'
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: 8, flexShrink: 0,
              background: 'linear-gradient(135deg, rgba(29,78,216,0.25), rgba(124,58,237,0.25))',
              border: '1px solid rgba(99,102,241,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16
            }}>{el.icon}</div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#c4b5fd', marginBottom: 4 }}>{el.label}</div>
              <p style={{ fontSize: 11, color: 'rgba(203,213,225,0.65)', lineHeight: 1.4 }}>{el.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* The Retention Editing Rule */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.12))',
        border: '1px solid rgba(99,102,241,0.3)', borderRadius: 16, padding: '18px 20px'
      }}>
        <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 16, fontWeight: 800, color: 'white', marginBottom: 14, textAlign: 'center' }}>
          ⚙️ The Retention Editing Rule
        </h3>
        <p style={{ fontSize: 12.5, color: 'rgba(203,213,225,0.8)', textAlign: 'center', marginBottom: 16 }}>
          Before you approve any edit, ask this about every single moment:
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
          {[
            { icon: '📚', label: 'INFORM', color: '#3b82f6', desc: 'Does this moment teach or add value?' },
            { icon: '😂', label: 'ENTERTAIN', color: '#8b5cf6', desc: 'Does this create an emotional response?' },
            { icon: '❓', label: 'CREATE CURIOSITY', color: '#06b6d4', desc: 'Does this make them want to see what\'s next?' },
          ].map((item, i) => (
            <div key={i} style={{ flex: 1, textAlign: 'center' }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12, margin: '0 auto 8px',
                background: `${item.color}22`, border: `2px solid ${item.color}55`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, boxShadow: `0 0 12px ${item.color}33`
              }}>{item.icon}</div>
              <div style={{ fontSize: 12, fontWeight: 800, color: item.color, marginBottom: 6 }}>{item.label}</div>
              <p style={{ fontSize: 11, color: 'rgba(203,213,225,0.6)', lineHeight: 1.35 }}>{item.desc}</p>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 16, padding: '10px 14px',
          background: 'rgba(255,255,255,0.04)', borderRadius: 10, textAlign: 'center'
        }}>
          <p style={{ fontSize: 12, color: 'rgba(226,232,240,0.85)' }}>
            If a moment doesn't inform, entertain, OR create curiosity — <strong style={{ color: '#c4b5fd' }}>cut it.</strong>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>15</span>
      </div>
    </div>
  );
};

export default Page15Editing;
