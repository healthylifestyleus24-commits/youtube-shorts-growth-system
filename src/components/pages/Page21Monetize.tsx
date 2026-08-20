import React from 'react';

const Page21Monetize: React.FC = () => {
  const streams = [
    {
      num: 1, icon: '▶️', title: 'YouTube Partner Program (YPP)',
      desc: 'Ad revenue from YouTube once eligibility thresholds are met. Requirements change — always verify the current criteria directly on YouTube\'s official help pages before planning around this.',
      level: 'Foundation', color: '#ef4444'
    },
    {
      num: 2, icon: '🔗', title: 'Affiliate Marketing',
      desc: 'Promote products or services with a trackable link. Earn a commission for each sale. Works in virtually every niche — finance tools, fitness products, tech, courses, and more.',
      level: 'Recommended', color: '#3b82f6'
    },
    {
      num: 3, icon: '📦', title: 'Digital Products',
      desc: 'Sell your own ebooks, templates, guides, presets, or courses. High margin. No inventory. Works especially well once your audience trusts your expertise.',
      level: 'High-Margin', color: '#8b5cf6'
    },
    {
      num: 4, icon: '🤝', title: 'Sponsorships & Brand Deals',
      desc: 'Brands pay creators to feature their product in videos. Possible even at smaller channel sizes in profitable niches. Requires a media kit and outreach.',
      level: 'Scalable', color: '#f59e0b'
    },
    {
      num: 5, icon: '💼', title: 'Services (Coaching / Consulting)',
      desc: 'Use your Shorts channel to attract clients for 1:1 or group services. Highly effective if your content demonstrates your expertise.',
      level: 'High-Ticket', color: '#10b981'
    },
    {
      num: 6, icon: '🌐', title: 'Traffic to Website / Newsletter',
      desc: 'Drive viewers to owned channels — an email list or website — where you monetize via ads, products, affiliate offers, or paid communities.',
      level: 'Long-Term', color: '#06b6d4'
    },
    {
      num: 7, icon: '🎨', title: 'Templates & Resources',
      desc: 'Sell Notion templates, Canva designs, scripts, or creative assets your audience actually uses. Low cost to create. Highly scalable.',
      level: 'Passive', color: '#ec4899'
    },
    {
      num: 8, icon: '📚', title: 'Ebooks & Paid Guides',
      desc: 'Package your expertise into a premium digital guide — exactly like this one. Promote it naturally at the end of your most educational Shorts.',
      level: 'Passive', color: '#818cf8'
    },
  ];

  return (
    <div className="ebook-page bg-gradient-page" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      <div style={{
        position: 'absolute', top: -60, right: -80, width: 380, height: 380,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(251,191,36,0.1) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.3))', border: '1px solid rgba(139,92,246,0.4)', borderRadius: 20, padding: '6px 16px', marginBottom: 14 }}>
          <span style={{ fontSize: 10, color: '#c4b5fd', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>Chapter 09</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>Monetize Your YouTube Shorts</h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2, marginBottom: 14 }} />
        <p style={{ fontSize: 13, color: 'rgba(203,213,225,0.8)', lineHeight: 1.6 }}>
          The most resilient YouTube businesses don't rely on ad revenue alone. They layer multiple income streams — each one feeding the next. Your Shorts channel is the engine that drives traffic to all of them.
        </p>
      </div>

      {/* Illustration */}
      <div style={{ marginBottom: 16 }}>
        <img src="/images/monetization.jpg" alt="Monetization" style={{ width: '100%', height: 100, objectFit: 'cover', borderRadius: 12, opacity: 0.75 }} />
      </div>

      {/* Revenue streams */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16 }}>
        {streams.map((s, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 10, padding: '10px 12px', display: 'flex', gap: 10, alignItems: 'flex-start'
          }}>
            <div style={{
              width: 34, height: 34, borderRadius: 8, flexShrink: 0,
              background: `${s.color}18`, border: `1px solid ${s.color}40`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16
            }}>{s.icon}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: 'white' }}>{s.num}. {s.title}</span>
                <span style={{
                  fontSize: 8, fontWeight: 700, color: s.color,
                  background: `${s.color}18`, border: `1px solid ${s.color}40`,
                  borderRadius: 6, padding: '1px 6px', flexShrink: 0
                }}>{s.level}</span>
              </div>
              <p style={{ fontSize: 11, color: 'rgba(203,213,225,0.65)', lineHeight: 1.4 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* YPP disclaimer */}
      <div style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.25)', borderRadius: 12, padding: '12px 16px' }}>
        <p style={{ fontSize: 11.5, color: 'rgba(253,230,138,0.85)', lineHeight: 1.5 }}>
          <strong>⚠️ Important:</strong> YouTube Partner Program eligibility requirements and platform policies can change. Always verify the latest thresholds and terms directly on YouTube's official Creator Academy or Help Center before making any decisions based on YPP eligibility.
        </p>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>21</span>
      </div>
    </div>
  );
};

export default Page21Monetize;
