
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Cases', href: '#cases' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'top-4 mx-4 md:mx-auto md:max-w-xl'
            : 'top-0 px-6 py-5'
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled
              ? 'bg-[#0D0E1A]/90 backdrop-blur-xl border border-white/[0.07] rounded-full px-5 py-3 shadow-[0_0_50px_rgba(123,92,245,0.08)]'
              : 'max-w-6xl mx-auto'
          }`}
        >
          {/* Logo — symbol only */}
          <a href="#" className="flex items-center">
            <img
              src="https://res.cloudinary.com/dj6p7x8p3/image/upload/LOGO_D6_jsdd8a.png"
              alt="D6"
              width={isScrolled ? 28 : 34}
              height={isScrolled ? 28 : 34}
              style={{ objectFit: 'contain' }}
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-[#6B7699] hover:text-white transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contato"
            className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95 ${
              isScrolled
                ? 'bg-[#7B5CF5] text-white'
                : 'border border-white/10 text-white/80 hover:text-white hover:border-[#7B5CF5]/50 bg-white/[0.04]'
            }`}
          >
            Falar com a D6
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className="w-5 h-px bg-white/80 block" />
            <span className="w-5 h-px bg-white/80 block" />
            <span className="w-3 h-px bg-white/80 block" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[#030408]/98 backdrop-blur-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <img
                src="https://res.cloudinary.com/dj6p7x8p3/image/upload/LOGO_D6_jsdd8a.png"
                alt="D6" width={32} height={32} style={{ objectFit: 'contain' }}
              />
              <button onClick={() => setOpen(false)} className="p-2 text-white/50 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col items-start justify-center flex-1 gap-8 px-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-4xl font-bold text-white/70 hover:text-white transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contato"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.22 }}
                className="mt-6 px-8 py-4 bg-[#7B5CF5] text-white font-bold text-lg rounded-full"
              >
                Falar com a D6
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
