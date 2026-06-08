
import React from 'react';
import { useT } from '../lib/LanguageContext';

const Footer: React.FC = () => {
  const t = useT();
  return (
    <footer className="py-8 relative overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: '#020306' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-center">
        <p className="text-xs text-[#2A2F45]">
          {t.footer.text}{' '}
          <span style={{ color: '#7C3AED', fontWeight: 600 }}>{t.footer.brand}</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
