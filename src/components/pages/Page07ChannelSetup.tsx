import React from 'react';

const Page07ChannelSetup: React.FC = () => {
  const checklist = [
    { item: 'Channel name is memorable, niche-relevant, and easy to spell', cat: 'Branding' },
    { item: 'Profile picture is clean, high-resolution, and recognizable at small sizes', cat: 'Branding' },
    { item: 'Channel banner communicates the content niche clearly', cat: 'Branding' },
    { item: 'About section includes keywords, niche description, and upload schedule', cat: 'SEO' },
    { item: 'Channel category is correctly set to match your content type', cat: 'SEO' },
    { item: 'All videos use consistent niche content (no random off-topic content)', cat: 'Positioning' },
    { item: 'Channel handle is claimed and matches your brand name', cat: 'Branding' },
    { item: 'Contact email (for sponsorships) is added to the About section', cat: 'Monetization' },
    { item: 'Channel links (website, social, newsletter) are added if applicable', cat: 'Growth' },
    { item: 'First 3–5 Shorts are ready to upload before going public', cat: 'Strategy' },
  ];

  const catColors: Record<string, string> = {
    'Branding': '#818cf8',
    'SEO': '#06b6d4',
    'Positioning': '#a855f7',
    'Monetization': '#f59e0b',
    'Growth': '#10b981',
    'Strategy': '#ec4899',
  };

  return (
    <div className="ebook-page bg-gradient-chapter" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      <div style={{
        position: 'absolute', top: -60, left: -60, width: 350, height: 350,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      <div style={{ marginBottom: 18 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.3))', border: '1px solid rgba(139,92,246,0.4)', borderRadius: 20, padding: '6px 16px', marginBottom: 14 }}>
          <span style={{ fontSize: 10, color: '#c4b5fd', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>Chapter 02</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>
          Build a Channel<br />Designed for Growth
        </h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2, marginBottom: 14 }} />
        <p style={{ fontSize: 13, color: 'rgba(203,213,225,0.8)', lineHeight: 1.6 }}>
          Your channel is your digital storefront. Before a single viewer watches your content, they've already formed an opinion based on your name, logo, and banner. First impressions convert casual viewers into subscribers.
        </p>
      </div>

      {/* Channel mockup illustration */}
      <div style={{ marginBottom: 18 }}>
        <img src="/images/analytics-dash.jpg" alt="Channel Setup" style={{ width: '100%', height: 110, objectFit: 'cover', borderRadius: 12, opacity: 0.65 }} />
      </div>

      {/* Key areas */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 22 }}>
        {[
          { icon: '🏷️', title: 'Channel Name', tip: 'Keep it under 20 characters. Make it niche-relevant. Avoid numbers and underscores if possible.' },
          { icon: '🖼️', title: 'Profile & Banner', tip: 'Use a simple, bold logo. Banner should communicate what you create and how often you post.' },
          { icon: '📄', title: 'About Section', tip: 'Write a clear 2–3 sentence description using niche keywords. Include your posting schedule.' },
        ].map((c, i) => (
          <div key={i} style={{
            background: 'rgba(99,102,241,0.07)', border: '1px solid rgba(99,102,241,0.2)',
            borderRadius: 12, padding: '14px'
          }}>
            <div style={{ fontSize: 22, marginBottom: 8 }}>{c.icon}</div>
            <h3 style={{ fontSize: 12, fontWeight: 700, color: '#c4b5fd', marginBottom: 6 }}>{c.title}</h3>
            <p style={{ fontSize: 11, color: 'rgba(203,213,225,0.65)', lineHeight: 1.45 }}>{c.tip}</p>
          </div>
        ))}
      </div>

      {/* Channel Setup Checklist */}
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '16px 18px' }}>
        <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 15, fontWeight: 800, color: 'white', marginBottom: 14 }}>
          ✅ Channel Setup Checklist
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {checklist.map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '8px 10px',
              background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
              borderRadius: 8
            }}>
              <div style={{
                width: 18, height: 18, borderRadius: 4, border: '1.5px solid rgba(99,102,241,0.5)',
                flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(99,102,241,0.08)'
              }}>
                <span style={{ fontSize: 10, color: '#818cf8' }}>✓</span>
              </div>
              <span style={{ fontSize: 12, color: 'rgba(203,213,225,0.8)', flex: 1 }}>{item.item}</span>
              <span style={{
                fontSize: 9, fontWeight: 700, letterSpacing: 0.5,
                color: catColors[item.cat],
                background: `${catColors[item.cat]}18`,
                border: `1px solid ${catColors[item.cat]}44`,
                borderRadius: 10, padding: '2px 8px', flexShrink: 0
              }}>{item.cat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>07</span>
      </div>
    </div>
  );
};

export default Page07ChannelSetup;
