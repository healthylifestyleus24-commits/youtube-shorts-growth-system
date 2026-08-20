import React, { useState } from 'react';

const Toolbar: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number | null>(null);

  const scrollToPage = (pageNum: number) => {
    const el = document.getElementById(`page-${pageNum}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setCurrentPage(pageNum);
    }
  };

  return (
    <div className="no-print" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: 'rgba(6,7,26,0.92)', backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(99,102,241,0.2)',
      padding: '10px 24px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    }}>
      {/* Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 28, height: 28, borderRadius: 7,
          background: 'linear-gradient(135deg, #1d4ed8, #7c3aed)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14
        }}>⚡</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 800, color: 'white', letterSpacing: 0.5, fontFamily: 'Space Grotesk' }}>GrowthVault</div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', letterSpacing: 1, textTransform: 'uppercase' }}>YouTube Shorts Guide</div>
        </div>
      </div>

      {/* Page nav */}
      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', marginRight: 6 }}>Jump to:</span>
        {[
          { label: 'Cover', page: 1 },
          { label: 'Contents', page: 2 },
          { label: 'Intro', page: 4 },
          { label: 'Niche', page: 5 },
          { label: 'Ideas', page: 9 },
          { label: 'Hooks', page: 11 },
          { label: 'Production', page: 13 },
          { label: 'Monetize', page: 21 },
          { label: '30-Day', page: 26 },
          { label: 'Blueprint', page: 27 },
        ].map((item) => (
          <button
            key={item.page}
            onClick={() => scrollToPage(item.page)}
            style={{
              background: currentPage === item.page ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.05)',
              border: `1px solid ${currentPage === item.page ? 'rgba(139,92,246,0.5)' : 'rgba(255,255,255,0.08)'}`,
              borderRadius: 8, padding: '4px 10px', cursor: 'pointer',
              fontSize: 11, color: currentPage === item.page ? '#c4b5fd' : 'rgba(255,255,255,0.55)',
              fontWeight: 600, transition: 'all 0.2s',
              fontFamily: 'Inter, sans-serif'
            }}
          >{item.label}</button>
        ))}
      </div>

      {/* Print button */}
      <button
        onClick={() => window.print()}
        style={{
          background: 'linear-gradient(135deg, #1d4ed8, #7c3aed)',
          border: 'none', borderRadius: 10, padding: '8px 18px',
          cursor: 'pointer', fontSize: 12, fontWeight: 700, color: 'white',
          display: 'flex', alignItems: 'center', gap: 6,
          boxShadow: '0 0 14px rgba(124,58,237,0.3)',
          fontFamily: 'Inter, sans-serif'
        }}
      >
        <span>🖨️</span>
        <span>Print / Save PDF</span>
      </button>
    </div>
  );
};

export default Toolbar;
