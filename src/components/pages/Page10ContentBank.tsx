import React from 'react';

const Page10ContentBank: React.FC = () => {
  const bankItems = [
    { idea: 'The #1 budgeting mistake killing your savings', hook: 'Most people are doing this wrong…', format: 'Education', pillar: 'Educational', cta: 'Follow for more', status: '✅ Ready' },
    { idea: '5 foods that reduce stress in 20 minutes', hook: 'Feeling anxious? Eat this first', format: 'List', pillar: 'Educational', cta: 'Save this', status: '✅ Ready' },
    { idea: 'What AI can do that most people don\'t know', hook: 'This AI tool changed my workflow', format: 'Reveal', pillar: 'Curiosity', status: '🔄 Scripting', cta: 'Try it yourself' },
    { idea: 'Before vs. after: $0 to $1K/month side hustle', hook: 'I started with literally nothing…', format: 'Story', pillar: 'Storytelling', cta: 'Watch part 2', status: '📝 Idea' },
    { idea: 'The animal that has never lost a fight in history', hook: 'You won\'t believe which animal this is', format: 'Curiosity', pillar: 'Curiosity', cta: 'Follow for facts', status: '✅ Ready' },
    { idea: 'How compound interest turns $10/day into $1M', hook: 'The math is insane — watch this', format: 'Visual', pillar: 'Educational', cta: 'Start today', status: '📝 Idea' },
  ];

  return (
    <div className="ebook-page bg-gradient-page" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      <div style={{
        position: 'absolute', bottom: 80, left: -80, width: 380, height: 380,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      <div style={{ marginBottom: 18 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.3))', border: '1px solid rgba(139,92,246,0.4)', borderRadius: 20, padding: '6px 16px', marginBottom: 14 }}>
          <span style={{ fontSize: 10, color: '#c4b5fd', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>Chapter 03 · Continued</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>Build Your 30-Day Content Bank</h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2, marginBottom: 14 }} />
        <p style={{ fontSize: 13, color: 'rgba(203,213,225,0.8)', lineHeight: 1.6 }}>
          Successful creators don't improvise content on posting day. They work from a bank of pre-developed ideas — so every session is productive instead of stressful.
        </p>
      </div>

      {/* Illustration */}
      <div style={{ marginBottom: 18 }}>
        <img src="/images/content-calendar.jpg" alt="Content Bank" style={{ width: '100%', height: 100, objectFit: 'cover', borderRadius: 12, opacity: 0.7 }} />
      </div>

      {/* Batch production tip */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(6,182,212,0.08))',
        border: '1px solid rgba(16,185,129,0.25)', borderRadius: 12, padding: '12px 16px', marginBottom: 18
      }}>
        <p style={{ fontSize: 12.5, color: 'rgba(203,213,225,0.85)', lineHeight: 1.5 }}>
          <strong style={{ color: '#34d399' }}>💡 Pro tip:</strong> Batch your ideas before you start filming. Once you have 30 ideas planned, you can schedule an entire month of production in a few focused sessions — no daily decision fatigue.
        </p>
      </div>

      {/* Content Bank Table */}
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: '#c4b5fd', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1.5 }}>
          📋 Example Content Bank (6 of 30 shown)
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['Idea', 'Hook', 'Pillar', 'CTA', 'Status'].map((h, i) => (
                  <th key={i} style={{
                    background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.25))',
                    padding: '9px 10px', textAlign: 'left',
                    fontSize: 10, fontWeight: 700, letterSpacing: 1,
                    textTransform: 'uppercase', color: '#c4b5fd',
                    borderBottom: '1px solid rgba(99,102,241,0.3)'
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bankItems.map((item, i) => (
                <tr key={i}>
                  <td style={{ padding: '8px 10px', fontSize: 11, color: 'rgba(226,232,240,0.85)', borderBottom: '1px solid rgba(255,255,255,0.04)', maxWidth: 160, lineHeight: 1.3 }}>{item.idea}</td>
                  <td style={{ padding: '8px 10px', fontSize: 11, color: 'rgba(203,213,225,0.7)', borderBottom: '1px solid rgba(255,255,255,0.04)', fontStyle: 'italic', maxWidth: 120 }}>{item.hook}</td>
                  <td style={{ padding: '8px 10px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <span style={{
                      fontSize: 9, fontWeight: 700, color: '#818cf8',
                      background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.3)',
                      borderRadius: 8, padding: '2px 8px'
                    }}>{item.pillar}</span>
                  </td>
                  <td style={{ padding: '8px 10px', fontSize: 11, color: 'rgba(203,213,225,0.7)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{item.cta}</td>
                  <td style={{ padding: '8px 10px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <span style={{ fontSize: 11 }}>{item.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* How to generate 30 ideas */}
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '14px 16px' }}>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: 'white', marginBottom: 10 }}>Generate 30 Ideas Fast</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {[
            '6 ideas from YouTube search auto-suggest',
            '6 ideas from top competitor Shorts',
            '6 ideas from Reddit/community questions',
            '6 ideas based on your content pillars',
            '3 ideas from trending topics in your niche',
            '3 ideas that remix your own past performance',
          ].map((tip, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <span style={{
                width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                background: 'linear-gradient(135deg, #1d4ed8, #7c3aed)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 9, fontWeight: 800, color: 'white', marginTop: 1
              }}>{i + 1}</span>
              <span style={{ fontSize: 11.5, color: 'rgba(203,213,225,0.75)', lineHeight: 1.4 }}>{tip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>10</span>
      </div>
    </div>
  );
};

export default Page10ContentBank;
