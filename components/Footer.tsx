
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 relative overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: '#020306' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-center">
        <p className="text-xs text-[#2A2F45]">
          © 2025 D6 Digital. Todos os direitos reservados. Feito com precisão pela{' '}
          <span style={{ color: '#7C3AED', fontWeight: 600 }}>D6 Digital</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
