import React from 'react';

const Page13Production: React.FC = () => {
  const methods = [
    {
      icon: '📱', title: 'Smartphone Filming',
      desc: 'Modern phones shoot excellent vertical video. Hold steady, use natural light, and film in a quiet space.',
      cost: 'Free', tag: 'Most Popular'
    },
    {
      icon: '🖥️', title: 'Screen Recording',
      desc: 'Record your computer screen to show tutorials, data, tools, or software walkthroughs.',
      cost: 'Free', tag: 'Faceless'
    },
    {
      icon: '🎬', title: 'Stock Footage',
      desc: 'Use royalty-free clips from Pexels, Pixabay, or Mixkit. Pair with voiceover for faceless content.',
      cost: 'Free–Low', tag: 'Faceless'
    },
    {
      icon: '🎙️', title: 'Voiceover Only',
      desc: 'Use AI voices (ElevenLabs, Murf) or record your own voice over text-based or visual Shorts.',
      cost: 'Free–Low', tag: 'Faceless'
    },
    {
      icon: '🤖', title: 'AI-Generated Visuals',
      desc: 'AI image/video tools can generate visuals for educational or storytelling Shorts efficiently.',
      cost: 'Free–Mid', tag: 'Advanced'
    },
    {
      icon: '📝', title: 'Text-Based Videos',
      desc: 'Bold text on a gradient background with music. Simple, fast to produce, and high-retention when done well.',
      cost: 'Free', tag: 'Beginner'
    },
  ];

  const tools = [
    { category: 'Editing', tools: ['CapCut (free)', 'DaVinci Resolve (free)', 'InShot (free)'] },
    { category: 'Voiceover', tools: ['ElevenLabs', 'Murf.ai', 'Your own mic'] },
    { category: 'Stock Footage', tools: ['Pexels', 'Pixabay', 'Mixkit'] },
    { category: 'Thumbnails', tools: ['Canva (free)', 'Adobe Express'] },
  ];

  return (
    <div className="ebook-page bg-gradient-chapter" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      <div style={{
        position: 'absolute', top: -80, left: -60, width: 380, height: 380,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.13) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.3))', border: '1px solid rgba(139,92,246,0.4)', borderRadius: 20, padding: '6px 16px', marginBottom: 14 }}>
          <span style={{ fontSize: 10, color: '#c4b5fd', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>Chapter 05</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>Create Shorts Without<br />Expensive Equipment</h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2, marginBottom: 14 }} />
        <p style={{ fontSize: 13, color: 'rgba(203,213,225,0.8)', lineHeight: 1.6 }}>
          The equipment barrier to YouTube Shorts is close to zero. The most important asset you have is a clear idea, a strong script, and a consistent workflow — not a camera that costs $2,000.
        </p>
      </div>

      {/* Illustration */}
      <div style={{ marginBottom: 16 }}>
        <img src="/images/smartphone-shorts.jpg" alt="Production Setup" style={{ width: '100%', height: 100, objectFit: 'cover', borderRadius: 12, opacity: 0.75 }} />
      </div>

      {/* Production methods */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 20 }}>
        {methods.map((m, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 12, padding: '14px 12px', position: 'relative'
          }}>
            <div style={{
              position: 'absolute', top: 10, right: 10,
              fontSize: 9, fontWeight: 700, color: '#818cf8',
              background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.25)',
              borderRadius: 8, padding: '2px 8px'
            }}>{m.tag}</div>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{m.icon}</div>
            <h3 style={{ fontSize: 12, fontWeight: 700, color: '#c4b5fd', marginBottom: 6 }}>{m.title}</h3>
            <p style={{ fontSize: 11, color: 'rgba(203,213,225,0.65)', lineHeight: 1.45, marginBottom: 8 }}>{m.desc}</p>
            <div style={{
              fontSize: 10, fontWeight: 700, color: '#10b981',
              background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)',
              borderRadius: 8, padding: '2px 10px', display: 'inline-block'
            }}>Cost: {m.cost}</div>
          </div>
        ))}
      </div>

      {/* Free Tool Stack */}
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '14px 16px' }}>
        <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 14, fontWeight: 800, color: 'white', marginBottom: 12 }}>
          🛠️ Free & Low-Cost Production Stack
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {tools.map((t, i) => (
            <div key={i} style={{
              background: 'rgba(99,102,241,0.07)', border: '1px solid rgba(99,102,241,0.18)',
              borderRadius: 10, padding: '10px 12px'
            }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: '#818cf8', marginBottom: 6, letterSpacing: 0.5 }}>{t.category}</div>
              {t.tools.map((tool, j) => (
                <div key={j} style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 3 }}>
                  <span style={{ color: '#06b6d4', fontSize: 12 }}>→</span>
                  <span style={{ fontSize: 12, color: 'rgba(203,213,225,0.8)' }}>{tool}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>13</span>
      </div>
    </div>
  );
};

export default Page13Production;
