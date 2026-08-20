import React from 'react';

const Page22RevenueModel: React.FC = () => {
  const streams = [
    { label: 'Affiliate Revenue', amount: '$1,000', icon: '🔗', color: '#3b82f6', bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.25)', pct: 33, detail: 'Promote 2–3 high-quality products/tools your audience actually uses. Focus on programs with recurring commissions.' },
    { label: 'Digital Products', amount: '$1,000', icon: '📦', color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)', border: 'rgba(139,92,246,0.25)', pct: 33, detail: 'An ebook, template pack, or mini-course priced at $15–$49. Just 25–70 sales/month reaches $1K with the right pricing.' },
    { label: 'Sponsors / Services', amount: '$1,000', icon: '🤝', color: '#10b981', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)', pct: 34, detail: 'One mid-size sponsorship deal, or 2–3 coaching clients, or a service offer driven by inbound leads from your channel.' },
  ];

  return (
    <div className="ebook-page bg-gradient-chapter" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      <div style={{
        position: 'absolute', top: -60, left: -60, width: 380, height: 380,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(251,191,36,0.12) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.3))', border: '1px solid rgba(139,92,246,0.4)', borderRadius: 20, padding: '6px 16px', marginBottom: 14 }}>
          <span style={{ fontSize: 10, color: '#c4b5fd', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>Chapter 09 · Continued</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>The $3,000/Month<br />Revenue Model</h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2, marginBottom: 14 }} />
      </div>

      {/* Disclaimer box */}
      <div style={{
        background: 'rgba(251,191,36,0.08)', border: '2px solid rgba(251,191,36,0.35)',
        borderRadius: 14, padding: '14px 18px', marginBottom: 20, textAlign: 'center'
      }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: '#fde68a', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>
          ⚠️ ILLUSTRATIVE EXAMPLE — NOT A GUARANTEE
        </div>
        <p style={{ fontSize: 12, color: 'rgba(253,230,138,0.85)', lineHeight: 1.6 }}>
          The numbers below are a <strong>hypothetical example</strong> of how $3,000/month <em>could</em> be structured across multiple income streams. Actual results vary widely based on niche, content quality, audience size, geography, engagement, RPM/CPM rates, and consistency. There are no guaranteed earnings in content creation.
        </p>
      </div>

      {/* Illustration */}
      <div style={{ marginBottom: 18 }}>
        <img src="/images/monetization.jpg" alt="Revenue Model" style={{ width: '100%', height: 100, objectFit: 'cover', borderRadius: 12, opacity: 0.7 }} />
      </div>

      {/* Revenue stack */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 22 }}>
        {streams.map((s, i) => (
          <div key={i} style={{
            background: s.bg, border: `1px solid ${s.border}`,
            borderRadius: 14, padding: '16px 20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 20 }}>{s.icon}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'white' }}>{s.label}</div>
                  <div style={{ fontSize: 11, color: 'rgba(203,213,225,0.6)' }}>{s.detail}</div>
                </div>
              </div>
              <div style={{
                fontSize: 20, fontWeight: 900, color: s.color,
                fontFamily: 'Space Grotesk', minWidth: 80, textAlign: 'right'
              }}>{s.amount}</div>
            </div>
            {/* Progress bar */}
            <div style={{ height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3, overflow: 'hidden' }}>
              <div style={{
                height: '100%', width: `${s.pct}%`,
                background: `linear-gradient(90deg, ${s.color}, ${s.color}88)`,
                borderRadius: 3
              }} />
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.1))',
        border: '2px solid rgba(251,191,36,0.4)', borderRadius: 16, padding: '18px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20
      }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(253,230,138,0.7)', letterSpacing: 1, marginBottom: 4 }}>ILLUSTRATIVE MONTHLY TOTAL</div>
          <div style={{ fontSize: 13, color: 'rgba(253,230,138,0.6)' }}>3 diversified income streams combined</div>
        </div>
        <div style={{
          fontSize: 38, fontWeight: 900, fontFamily: 'Space Grotesk',
          background: 'linear-gradient(90deg, #fbbf24, #f59e0b)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}>$3,000</div>
      </div>

      {/* Key insight */}
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '14px 16px' }}>
        <p style={{ fontSize: 12.5, color: 'rgba(203,213,225,0.85)', lineHeight: 1.6, textAlign: 'center' }}>
          <strong style={{ color: '#c4b5fd' }}>The key insight:</strong> Diversification removes dependence on ad revenue alone. A creator who combines affiliate, products, and sponsors can reach meaningful income targets even with a mid-size audience — but results always depend on execution, niche, and consistency.
        </p>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>22</span>
      </div>
    </div>
  );
};

export default Page22RevenueModel;
