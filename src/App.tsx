import React from 'react';
import './index.css';
import Toolbar from './components/Toolbar';
import Page01Cover from './components/pages/Page01Cover';
import Page02TOC from './components/pages/Page02TOC';
import Page03Roadmap from './components/pages/Page03Roadmap';
import Page04Intro from './components/pages/Page04Intro';
import Page05Niche from './components/pages/Page05Niche';
import Page06Angle from './components/pages/Page06Angle';
import Page07ChannelSetup from './components/pages/Page07ChannelSetup';
import Page08Pillars from './components/pages/Page08Pillars';
import Page09Ideas from './components/pages/Page09Ideas';
import Page10ContentBank from './components/pages/Page10ContentBank';
import Page11Hooks from './components/pages/Page11Hooks';
import Page12Script from './components/pages/Page12Script';
import Page13Production from './components/pages/Page13Production';
import Page14Workflow from './components/pages/Page14Workflow';
import Page15Editing from './components/pages/Page15Editing';
import Page16Retention from './components/pages/Page16Retention';
import Page17Upload from './components/pages/Page17Upload';
import Page18Publishing from './components/pages/Page18Publishing';
import Page19Subscribers from './components/pages/Page19Subscribers';
import Page20ViralFormats from './components/pages/Page20ViralFormats';
import Page21Monetize from './components/pages/Page21Monetize';
import Page22RevenueModel from './components/pages/Page22RevenueModel';
import Page23Analytics from './components/pages/Page23Analytics';
import Page24Autopsy from './components/pages/Page24Autopsy';
import Page25Scaling from './components/pages/Page25Scaling';
import Page26ActionPlan from './components/pages/Page26ActionPlan';
import Page27Blueprint from './components/pages/Page27Blueprint';
import Page28BackCover from './components/pages/Page28BackCover';

const pages = [
  { id: 1, Component: Page01Cover },
  { id: 2, Component: Page02TOC },
  { id: 3, Component: Page03Roadmap },
  { id: 4, Component: Page04Intro },
  { id: 5, Component: Page05Niche },
  { id: 6, Component: Page06Angle },
  { id: 7, Component: Page07ChannelSetup },
  { id: 8, Component: Page08Pillars },
  { id: 9, Component: Page09Ideas },
  { id: 10, Component: Page10ContentBank },
  { id: 11, Component: Page11Hooks },
  { id: 12, Component: Page12Script },
  { id: 13, Component: Page13Production },
  { id: 14, Component: Page14Workflow },
  { id: 15, Component: Page15Editing },
  { id: 16, Component: Page16Retention },
  { id: 17, Component: Page17Upload },
  { id: 18, Component: Page18Publishing },
  { id: 19, Component: Page19Subscribers },
  { id: 20, Component: Page20ViralFormats },
  { id: 21, Component: Page21Monetize },
  { id: 22, Component: Page22RevenueModel },
  { id: 23, Component: Page23Analytics },
  { id: 24, Component: Page24Autopsy },
  { id: 25, Component: Page25Scaling },
  { id: 26, Component: Page26ActionPlan },
  { id: 27, Component: Page27Blueprint },
  { id: 28, Component: Page28BackCover },
];

const App: React.FC = () => {
  return (
    <>
      <Toolbar />
      <div className="ebook-wrapper" style={{ paddingTop: 70 }}>
        {pages.map(({ id, Component }) => (
          <div
            key={id}
            id={`page-${id}`}
            style={{ scrollMarginTop: 70 }}
          >
            <Component />
          </div>
        ))}

        {/* Footer note */}
        <div className="no-print" style={{
          padding: '32px 24px',
          textAlign: 'center',
          maxWidth: 794,
          width: '100%'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 16, padding: '20px 24px'
          }}>
            <p style={{ fontSize: 12, color: 'rgba(148,163,184,0.6)', lineHeight: 1.6, marginBottom: 8 }}>
              <strong style={{ color: 'rgba(196,181,253,0.8)' }}>Disclaimer:</strong> This ebook provides educational content about YouTube Shorts growth strategies. Income figures mentioned (such as "$3,000/month") are illustrative examples only and do not represent guaranteed earnings. Actual results depend on niche selection, content quality, audience engagement, geography, platform policy changes, monetization methods, consistency, and many other factors outside the author's control. GrowthVault makes no income guarantees.
            </p>
            <p style={{ fontSize: 11, color: 'rgba(148,163,184,0.4)' }}>
              © GrowthVault · How to Make $3,000/Month with YouTube Shorts: A Step-by-Step Growth System · All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
