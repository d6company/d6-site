
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Cases from './components/Cases';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './lib/LanguageContext';
import { Lang } from './lib/i18n';
import { useT } from './lib/LanguageContext';

const AppInner: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useT();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#03040C] text-[#E8ECF8] overflow-x-hidden">
      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero />
        <Services />
        <Cases />
        <Team />
        <Contact />
      </main>
      <Footer />

      {/* WhatsApp floating button */}
      <div style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 9999 }}>
        <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'rgba(37,211,102,0.4)', animation: 'wa-pulse 2s ease-out infinite' }} />
        <a
          href={`https://wa.me/5511998540063?text=${t.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          style={{ position: 'relative', width: 56, height: 56, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 24px rgba(37,211,102,0.35)', transition: 'transform 0.2s, box-shadow 0.2s' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 6px 32px rgba(37,211,102,0.55)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(37,211,102,0.35)'; }}
        >
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.663 4.61 1.81 6.51L4 29l7.697-1.79A12.93 12.93 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3z" fill="white"/>
            <path d="M21.5 18.5c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51H12c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" fill="#25D366"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

const App: React.FC<{ lang?: Lang }> = ({ lang = 'pt' }) => (
  <LanguageProvider lang={lang}>
    <AppInner />
  </LanguageProvider>
);

export default App;
