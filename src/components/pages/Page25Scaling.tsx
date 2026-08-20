import React from 'react';

const Page25Scaling: React.FC = () => {
  const scalingSteps = [
    { step: 1, icon: '✅', title: 'Validate First', desc: 'Don\'t scale chaos. Only systematize a process that already produces consistent results. Scaling a broken system just creates bigger problems faster.', color: '#ef4444' },
    { step: 2, icon: '📋', title: 'Create SOPs', desc: 'Document your exact production process step-by-step. A Standard Operating Procedure allows someone else to execute your workflow with your quality standards.', color: '#f59e0b' },
    { step: 3, icon: '✂️', title: 'Hire an Editor', desc: 'Your time is highest-value on strategy and scripting — not on timeline editing. A skilled editor (Fiverr, Upwork, or referrals) can cost $20–$80 per video.', color: '#10b981' },
    { step: 4, icon: '✍️', title: 'Add a Scriptwriter', desc: 'Once your format is proven, a good scriptwriter can produce 80% of the script from a topic brief. You add the final polish and voice.', color: '#3b82f6' },
    { step: 5, icon: '📅', title: 'Systemize Content Calendar', desc: 'Use tools like Notion, Airtable, or Trello to manage your content pipeline across ideation, scripting, production, editing, and publishing.', color: '#8b5cf6' },
    { step: 6, icon: '💰', title: 'Multiply Revenue Streams', desc: 'Scaling income means adding new monetization layers — not just more views. Launch a product, add an affiliate offer, or open a service offer once your audience trusts you.', color: '#ec4899' },
  ];

  const repurposeTips = [
    'Turn a top Short into a long-form video with deeper detail',
    'Convert your best scripts into ebook chapters or newsletter posts',
    'Clip long-form content back into new Shorts',
    'Bundle your best educational Shorts into a free lead magnet',
  ];

  return (
    <div className="ebook-page bg-gradient-page" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      <div style={{
        position: 'absolute', top: -80, left: -60, width: 380, height: 380,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.3))', border: '1px solid rgba(139,92,246,0.4)', borderRadius: 20, padding: '6px 16px', marginBottom: 14 }}>
          <span style={{ fontSize: 10, color: '#c4b5fd', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>Chapter 10 · Continued</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>Scale From One Channel<br />to a Shorts Business</h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2, marginBottom: 14 }} />
        <p style={{ fontSize: 13, color: 'rgba(203,213,225,0.8)', lineHeight: 1.6 }}>
          Scaling is not about doing more — it's about doing the right things with better leverage. When your system works, you bring in support to increase output without reducing quality.
        </p>
      </div>

      {/* Scaling illustration */}
      <div style={{ marginBottom: 16 }}>
        <img src="/images/scaling-business.jpg" alt="Business Scaling" style={{ width: '100%', height: 100, objectFit: 'cover', borderRadius: 12, opacity: 0.75 }} />
      </div>

      {/* Scaling steps */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
        {scalingSteps.map((s, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)',
            borderTop: `3px solid ${s.color}`, borderRadius: '0 0 12px 12px', padding: '12px 14px'
          }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
              <div style={{
                width: 28, height: 28, borderRadius: 6, flexShrink: 0,
                background: `${s.color}22`, border: `1px solid ${s.color}44`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14
              }}>{s.icon}</div>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'white' }}>Step {s.step}: {s.title}</span>
            </div>
            <p style={{ fontSize: 11, color: 'rgba(203,213,225,0.65)', lineHeight: 1.45 }}>{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Content repurposing */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(6,182,212,0.08))',
        border: '1px solid rgba(16,185,129,0.25)', borderRadius: 14, padding: '14px 18px'
      }}>
        <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 14, fontWeight: 800, color: '#34d399', marginBottom: 10 }}>
          ♻️ Repurpose Your Best Content
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {repurposeTips.map((tip, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <span style={{ color: '#10b981', fontSize: 14, flexShrink: 0 }}>→</span>
              <span style={{ fontSize: 12, color: 'rgba(203,213,225,0.8)', lineHeight: 1.4 }}>{tip}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 14, padding: '10px 14px', background: 'rgba(255,255,255,0.04)', borderRadius: 10 }}>
          <p style={{ fontSize: 11.5, color: 'rgba(203,213,225,0.75)', textAlign: 'center' }}>
            <strong style={{ color: '#34d399' }}>Golden rule:</strong> Only scale after a repeatable format is validated. A system that works at 1× will thrive at 3×. A system that doesn't work at 1× will collapse under pressure.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>25</span>
      </div>
    </div>
  );
};

export default Page25Scaling;
