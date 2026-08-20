import React from 'react';

const Page02TOC: React.FC = () => {
  const chapters = [
    { num: '01', title: 'Choose a Profitable Shorts Niche', page: '05', sub: 'Demand · Angle · Sustainability' },
    { num: '02', title: 'Build a Channel Designed for Growth', page: '07', sub: 'Branding · Pillars · Positioning' },
    { num: '03', title: 'Find Viral Shorts Ideas', page: '09', sub: 'Research · 3R Formula · Content Bank' },
    { num: '04', title: 'Write Hooks That Stop the Scroll', page: '11', sub: 'Hook Types · Script Formula · CTA' },
    { num: '05', title: 'Create Shorts Without Expensive Gear', page: '13', sub: 'Production · Faceless Workflow' },
    { num: '06', title: 'Edit Shorts for Maximum Retention', page: '15', sub: 'Pacing · Captions · Optimization' },
    { num: '07', title: 'Upload for Maximum Discoverability', page: '17', sub: 'SEO · Titles · Publishing System' },
    { num: '08', title: 'Turn Views Into Subscribers', page: '19', sub: 'Audience Building · Viral Formats' },
    { num: '09', title: 'Monetize Your YouTube Shorts', page: '21', sub: 'Revenue Streams · $3K Model' },
    { num: '10', title: 'Analyze, Scale & Grow', page: '23', sub: 'Analytics · Autopsy · Scaling' },
  ];

  const sections = [
    { label: 'Introduction', page: '04' },
    { label: '30-Day Action Plan', page: '26' },
    { label: 'Final Blueprint', page: '27' },
  ];

  return (
    <div className="ebook-page bg-gradient-page" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: -80, right: -80, width: 400, height: 400,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
        filter: 'blur(50px)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: 100, left: -60, width: 300, height: 300,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
        filter: 'blur(50px)', pointerEvents: 'none'
      }} />

      {/* Top bar */}
      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 10, color: '#818cf8', letterSpacing: 3, textTransform: 'uppercase', fontWeight: 700, marginBottom: 8 }}>GrowthVault · Premium Guide</div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 36, fontWeight: 800, color: 'white', marginBottom: 6 }}>Table of Contents</h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2 }} />
      </div>

      {/* Illustration */}
      <div style={{ marginBottom: 24 }}>
        <img src="/images/analytics-dash.jpg" alt="Analytics" style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 12, opacity: 0.75 }} />
      </div>

      {/* Main sections */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
        {sections.map((s, i) => (
          <div key={i} style={{
            flex: 1, background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)',
            borderRadius: 10, padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
          }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#c4b5fd' }}>{s.label}</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#818cf8' }}>p.{s.page}</span>
          </div>
        ))}
      </div>

      {/* Chapter list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {chapters.map((ch, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: '10px 14px',
            background: i % 2 === 0 ? 'rgba(255,255,255,0.025)' : 'transparent',
            borderRadius: 10,
            borderLeft: '3px solid',
            borderLeftColor: ['#3b82f6','#6366f1','#8b5cf6','#a855f7','#ec4899','#06b6d4','#0ea5e9','#38bdf8','#7c3aed','#818cf8'][i]
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: 8, flexShrink: 0,
              background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.3))',
              border: '1px solid rgba(99,102,241,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Space Grotesk', fontSize: 11, fontWeight: 800, color: '#a5b4fc'
            }}>CH{ch.num}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'white', marginBottom: 2 }}>{ch.title}</div>
              <div style={{ fontSize: 10, color: 'rgba(148,163,184,0.7)', letterSpacing: 0.5 }}>{ch.sub}</div>
            </div>
            <div style={{
              fontSize: 13, fontWeight: 800, color: '#818cf8',
              fontFamily: 'Space Grotesk', minWidth: 28, textAlign: 'right'
            }}>p.{ch.page}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>02</span>
      </div>
    </div>
  );
};

export default Page02TOC;
