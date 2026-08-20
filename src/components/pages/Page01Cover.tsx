import React from 'react';

const Page01Cover: React.FC = () => {
  return (
    <div className="ebook-page bg-gradient-cover" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden' }}>
      {/* Background image */}
      <img
        src="/images/cover-bg.jpg"
        alt=""
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', opacity: 0.55, mixBlendMode: 'screen'
        }}
      />

      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: -120, right: -80, width: 500, height: 500,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: 100, left: -100, width: 450, height: 450,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)',
        filter: 'blur(50px)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', top: '40%', left: '30%', width: 350, height: 350,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none'
      }} />

      {/* Top bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 4,
        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4, #ec4899)'
      }} />

      {/* GrowthVault brand top */}
      <div style={{ position: 'absolute', top: 36, left: 50, right: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 16, boxShadow: '0 0 15px rgba(139,92,246,0.5)'
          }}>⚡</div>
          <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: 2, color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase', fontFamily: 'Space Grotesk' }}>GrowthVault</span>
        </div>
        <div style={{
          fontSize: 10, color: 'rgba(196,181,253,0.7)', letterSpacing: 2,
          textTransform: 'uppercase', fontWeight: 600,
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(139,92,246,0.3)',
          borderRadius: 20, padding: '5px 14px'
        }}>Premium Guide</div>
      </div>

      {/* Play button decorative */}
      <div style={{
        position: 'absolute', top: 155, right: 60,
        width: 70, height: 70, borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(239,68,68,0.9), rgba(220,38,38,0.8))',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 0 30px rgba(239,68,68,0.5), 0 0 60px rgba(239,68,68,0.2)',
        border: '2px solid rgba(255,255,255,0.2)'
      }}>
        <div style={{ fontSize: 26, marginLeft: 4 }}>▶</div>
      </div>

      {/* Floating metric badges */}
      <div style={{
        position: 'absolute', top: 200, right: 145,
        background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)',
        borderRadius: 20, padding: '6px 14px', backdropFilter: 'blur(10px)'
      }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: '#34d399' }}>📈 +2.4M Views</span>
      </div>
      <div style={{
        position: 'absolute', top: 250, left: 42,
        background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.35)',
        borderRadius: 20, padding: '6px 14px', backdropFilter: 'blur(10px)'
      }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: '#60a5fa' }}>👥 +18K Subs</span>
      </div>

      {/* Main title content - centered */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -52%)',
        width: '88%', textAlign: 'center'
      }}>
        {/* Top label */}
        <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(239,68,68,0.2), rgba(220,38,38,0.15))',
            border: '1px solid rgba(239,68,68,0.5)',
            borderRadius: 30, padding: '7px 20px',
            display: 'inline-flex', alignItems: 'center', gap: 8
          }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444', boxShadow: '0 0 6px #ef4444' }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#fca5a5', letterSpacing: 2, textTransform: 'uppercase' }}>YouTube Shorts Monetization</span>
          </div>
        </div>

        {/* Main title */}
        <h1 style={{
          fontFamily: 'Space Grotesk',
          fontSize: 62,
          fontWeight: 900,
          lineHeight: 1.05,
          marginBottom: 16,
          background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 30%, #c4b5fd 65%, #93c5fd 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: 'none',
          letterSpacing: -1
        }}>
          How to Make<br />
          <span style={{
            background: 'linear-gradient(90deg, #fbbf24, #f59e0b, #fcd34d)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: 72
          }}>$3,000/Month</span>
        </h1>

        <h2 style={{
          fontFamily: 'Space Grotesk',
          fontSize: 32,
          fontWeight: 700,
          color: 'rgba(255,255,255,0.9)',
          marginBottom: 8,
          letterSpacing: -0.5
        }}>with YouTube Shorts</h2>

        {/* Accent line */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <div style={{ width: 120, height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2 }} />
        </div>

        <p style={{
          fontSize: 18,
          fontWeight: 500,
          color: 'rgba(196,181,253,0.85)',
          letterSpacing: 3,
          textTransform: 'uppercase',
          marginBottom: 40
        }}>A Step-by-Step Growth System</p>

        {/* Stats row */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 48 }}>
          {[
            { label: 'Chapters', value: '10' },
            { label: 'Pages', value: '28' },
            { label: 'Strategies', value: '50+' },
          ].map((stat, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 12, padding: '12px 22px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#818cf8', fontFamily: 'Space Grotesk' }}>{stat.value}</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Author section at bottom */}
      <div style={{
        position: 'absolute', bottom: 55, left: 50, right: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 48, height: 48, borderRadius: '50%',
            background: 'linear-gradient(135deg, #1d4ed8, #7c3aed)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 22, boxShadow: '0 0 20px rgba(124,58,237,0.5)',
            border: '2px solid rgba(196,181,253,0.3)'
          }}>⚡</div>
          <div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, marginBottom: 2 }}>Author</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: 'white', fontFamily: 'Space Grotesk' }}>GrowthVault</div>
          </div>
        </div>

        {/* Bottom right decorative element */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4
        }}>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: 1, textTransform: 'uppercase' }}>Beginner-Friendly</div>
          <div style={{ display: 'flex', gap: 4 }}>
            {['⭐','⭐','⭐','⭐','⭐'].map((s, i) => (
              <span key={i} style={{ fontSize: 10 }}>{s}</span>
            ))}
          </div>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: 1 }}>Premium Edition</div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
        background: 'linear-gradient(to top, rgba(5,5,20,0.8), transparent)',
        pointerEvents: 'none'
      }} />

      {/* Bottom color bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 4,
        background: 'linear-gradient(90deg, #1d4ed8, #7c3aed, #06b6d4)'
      }} />
    </div>
  );
};

export default Page01Cover;
