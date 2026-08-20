import React from 'react';

const Page28BackCover: React.FC = () => {
  return (
    <div className="ebook-page bg-gradient-cover" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden' }}>
      {/* Background image */}
      <img
        src="/images/back-cover-bg.jpg"
        alt=""
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', opacity: 0.5, mixBlendMode: 'screen'
        }}
      />

      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: -100, right: -100, width: 500, height: 500,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
        filter: 'blur(50px)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: -80, left: -100, width: 450, height: 450,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.22) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', top: '45%', right: '30%', width: 300, height: 300,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none'
      }} />

      {/* Top bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 4,
        background: 'linear-gradient(90deg, #1d4ed8, #7c3aed, #06b6d4)'
      }} />

      {/* Main content - centered vertically */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '82%', textAlign: 'center'
      }}>
        {/* Abstract geometric decoration */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 40 }}>
          {[
            { size: 14, color: '#3b82f6' }, { size: 20, color: '#7c3aed' },
            { size: 26, color: '#06b6d4' }, { size: 20, color: '#ec4899' }, { size: 14, color: '#818cf8' }
          ].map((dot, i) => (
            <div key={i} style={{
              width: dot.size, height: dot.size, borderRadius: '50%',
              background: dot.color, boxShadow: `0 0 ${dot.size}px ${dot.color}88`,
              alignSelf: 'center'
            }} />
          ))}
        </div>

        {/* Main message */}
        <h1 style={{
          fontFamily: 'Space Grotesk',
          fontSize: 52,
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: 16,
          background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 40%, #c4b5fd 75%, #93c5fd 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: -1
        }}>
          Your First Viral Short<br />Starts With<br />
          <span style={{
            background: 'linear-gradient(90deg, #fbbf24, #f59e0b, #fcd34d)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>One Idea.</span>
        </h1>

        {/* Accent line */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
          <div style={{ width: 80, height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2 }} />
        </div>

        {/* Action mantra */}
        <div style={{
          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 20, padding: '20px 32px', marginBottom: 44,
          backdropFilter: 'blur(12px)'
        }}>
          <p style={{
            fontFamily: 'Space Grotesk',
            fontSize: 20,
            fontWeight: 600,
            color: 'rgba(255,255,255,0.85)',
            letterSpacing: 1,
            lineHeight: 1.8
          }}>
            Build. Publish. Analyze.<br />Improve. Repeat.
          </p>
        </div>

        {/* CTA */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(29,78,216,0.25), rgba(124,58,237,0.25))',
          border: '1px solid rgba(139,92,246,0.4)', borderRadius: 16,
          padding: '16px 32px', marginBottom: 40,
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{ fontSize: 15, fontWeight: 600, color: '#c4b5fd', marginBottom: 4 }}>
            Start Your YouTube Shorts Growth Journey Today
          </p>
          <p style={{ fontSize: 12, color: 'rgba(196,181,253,0.6)' }}>
            Return to Chapter 1. Complete the worksheet. Upload your first Short.
          </p>
        </div>
      </div>

      {/* GrowthVault branding at bottom */}
      <div style={{
        position: 'absolute', bottom: 50, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: 'linear-gradient(135deg, #1d4ed8, #7c3aed)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20, boxShadow: '0 0 20px rgba(124,58,237,0.5)',
            border: '1.5px solid rgba(196,181,253,0.3)'
          }}>⚡</div>
          <div>
            <div style={{
              fontFamily: 'Space Grotesk',
              fontSize: 22, fontWeight: 800, color: 'white', letterSpacing: 1
            }}>GrowthVault</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: 2, textTransform: 'uppercase' }}>YouTube Shorts Growth System</div>
          </div>
        </div>
        <div style={{
          display: 'flex', gap: 16, alignItems: 'center',
          borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 12
        }}>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>© GrowthVault</span>
          <div style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>How to Make $3,000/Month with YouTube Shorts</span>
          <div style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>Page 28</span>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 4,
        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4, #ec4899)'
      }} />
    </div>
  );
};

export default Page28BackCover;
