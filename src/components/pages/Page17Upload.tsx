import React from 'react';

const Page17Upload: React.FC = () => {
  const titleExamples = [
    { weak: 'Fitness tips for weight loss', strong: 'I Lost 12 Pounds in 30 Days (No Gym Required)', why: 'Specific result + removes the biggest objection' },
    { weak: 'How to save money every month', strong: 'The $5/Day Habit That Saves $1,800/Year', why: 'Concrete numbers make the benefit tangible and clickable' },
    { weak: 'AI tools to try', strong: '5 AI Tools That Work Better Than ChatGPT for Content Creation', why: 'Comparison hook + specific niche targeting' },
  ];

  const uploadElements = [
    { icon: '📌', label: 'Title', tips: ['Use the most compelling part of your hook as the title', 'Include your primary keyword naturally (don\'t stuff)', 'Keep under 60 characters for full display', 'Numbers and specifics outperform vague titles'] },
    { icon: '📝', label: 'Description', tips: ['Write 2–3 sentences that expand on the title', 'Include 3–5 relevant keywords naturally', 'Add relevant links if applicable'] },
    { icon: '#️⃣', label: 'Hashtags', tips: ['Use 3–5 highly relevant hashtags', 'Mix niche-specific and broader tags', 'Avoid tag-stuffing — quality over quantity'] },
  ];

  return (
    <div className="ebook-page bg-gradient-chapter" style={{ width: 794, minHeight: 1123, position: 'relative', overflow: 'hidden', padding: '52px 50px 80px' }}>
      <div style={{
        position: 'absolute', top: -80, right: -60, width: 380, height: 380,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none'
      }} />

      <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)', borderRadius: 2, marginBottom: 32 }} />

      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, rgba(29,78,216,0.3), rgba(124,58,237,0.3))', border: '1px solid rgba(139,92,246,0.4)', borderRadius: 20, padding: '6px 16px', marginBottom: 14 }}>
          <span style={{ fontSize: 10, color: '#c4b5fd', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>Chapter 07</span>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>Upload for Maximum<br />Discoverability</h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', borderRadius: 2, marginBottom: 14 }} />
        <p style={{ fontSize: 13, color: 'rgba(203,213,225,0.8)', lineHeight: 1.6 }}>
          Your title, description, and hashtags give YouTube context about who should see your video. While strong content is primary, metadata removes friction between your Short and the right audience.
        </p>
      </div>

      {/* Illustration */}
      <div style={{ marginBottom: 16 }}>
        <img src="/images/analytics-dash.jpg" alt="Upload Screen" style={{ width: '100%', height: 100, objectFit: 'cover', borderRadius: 12, opacity: 0.65 }} />
      </div>

      {/* Upload elements */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 20 }}>
        {uploadElements.map((el, i) => (
          <div key={i} style={{
            background: 'rgba(99,102,241,0.07)', border: '1px solid rgba(99,102,241,0.2)',
            borderRadius: 12, padding: '14px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <span style={{ fontSize: 18 }}>{el.icon}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#c4b5fd' }}>{el.label}</span>
            </div>
            {el.tips.map((tip, j) => (
              <div key={j} style={{ display: 'flex', gap: 6, marginBottom: 5 }}>
                <span style={{ color: '#818cf8', fontSize: 12, flexShrink: 0 }}>•</span>
                <span style={{ fontSize: 11, color: 'rgba(203,213,225,0.7)', lineHeight: 1.4 }}>{tip}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Title examples */}
      <div style={{ marginBottom: 16 }}>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: '#c4b5fd', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1.5 }}>Weak Title → Strong Title</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {titleExamples.map((ex, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '10px 14px' }}>
              <div style={{ display: 'flex', gap: 10, marginBottom: 5, flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: 11, color: 'rgba(252,165,165,0.9)', padding: '3px 10px',
                  background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 6
                }}>❌ {ex.weak}</span>
                <span style={{ color: '#4b5563', fontSize: 14, alignSelf: 'center' }}>→</span>
                <span style={{
                  fontSize: 11, color: 'rgba(110,231,183,0.9)', padding: '3px 10px',
                  background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: 6
                }}>✅ {ex.strong}</span>
              </div>
              <p style={{ fontSize: 10.5, color: 'rgba(148,163,184,0.65)', fontStyle: 'italic' }}>💡 {ex.why}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Important note */}
      <div style={{
        background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.25)',
        borderRadius: 12, padding: '12px 16px'
      }}>
        <p style={{ fontSize: 12, color: 'rgba(253,230,138,0.85)', lineHeight: 1.5 }}>
          <strong>🔑 Key reminder:</strong> Metadata helps YouTube route your content — but it cannot replace a strong video. A mediocre Short with a perfect title will still underperform. A great Short with a mediocre title will still find its audience eventually. Prioritize content quality first.
        </p>
      </div>

      {/* Footer */}
      <div className="page-footer">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>GrowthVault · YouTube Shorts Growth System</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>17</span>
      </div>
    </div>
  );
};

export default Page17Upload;
