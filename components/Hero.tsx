import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useT } from '../lib/LanguageContext';

const StarField: React.FC = () => {
  const stars = useMemo(() => {
    const rng = (min: number, max: number) => Math.random() * (max - min) + min;
    return Array.from({ length: 220 }).map((_, i) => {
      const size = rng(0.6, 2.4);
      const hue = Math.random() > 0.7 ? `hsl(${rng(210, 240)}, 60%, 92%)` : '#FFFFFF';
      const opacity = rng(0.12, 0.7);
      const hasGlow = size > 1.6;
      return { i, x: rng(0, 100), y: rng(0, 100), size, hue, opacity, hasGlow, dur: rng(4, 14), delay: rng(-14, 0) };
    });
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {stars.map((s) => (
        <motion.div
          key={s.i}
          className="absolute rounded-full"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.x}%`,
            top: `${s.y}%`,
            background: s.hue,
            opacity: s.opacity,
            boxShadow: s.hasGlow ? `0 0 ${s.size * 3}px ${s.size * 1.2}px rgba(190,215,255,0.28)` : 'none',
          }}
          animate={{ opacity: [s.opacity, Math.min(s.opacity * 1.9, 0.95), s.opacity] }}
          transition={{ duration: s.dur, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
        />
      ))}
    </div>
  );
};

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const t = useT();
  const h = t.hero;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#03040C' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
          backgroundSize: '90px 90px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 10%, transparent 80%)',
        }}
      />
      <StarField />
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '-20%', left: '-15%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 65%)', filter: 'blur(70px)' }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: 560, height: 560, borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 65%)', filter: 'blur(70px)' }} />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-28 pb-12 md:pb-16" style={{ zIndex: 10 }}>
        <motion.div style={{ y: textY, opacity }} className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full"
            style={{ background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.2)' }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0EA5E9', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '3px', color: '#A855F7', textTransform: 'uppercase' }}>
              {h.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(52px, 10vw, 120px)', fontWeight: 900, lineHeight: 0.88, letterSpacing: '-2px', marginBottom: 32 }}
          >
            <span style={{ display: 'block', color: '#E8ECF8' }}>{h.headline1}</span>
            <span style={{ display: 'block', color: '#7C3AED' }}>{h.headline2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            style={{ fontSize: 'clamp(14px, 2.5vw, 17px)', color: '#6B7699', lineHeight: 1.7, marginBottom: 48, maxWidth: 420 }}
          >
            {h.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.72 }}
            className="flex items-center gap-5"
          >
            <div className="relative group">
              <div className="absolute inset-0 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300" style={{ background: '#7C3AED', filter: 'blur(18px)', transform: 'scale(0.85)' }} />
              <a
                href={h.ctaHref}
                className="relative flex items-center gap-3 rounded-full font-bold text-sm text-white transition-transform hover:scale-[1.02] active:scale-95"
                style={{ background: '#7C3AED', padding: '14px 30px', zIndex: 1 }}
              >
                {h.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <a
              href={h.secondaryHref}
              className="text-sm font-medium transition-colors"
              style={{ color: '#6B7699' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#A855F7')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7699')}
            >
              {h.secondary}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: 160, background: 'linear-gradient(to bottom, transparent, #030408)', zIndex: 10 }} />
    </section>
  );
};

export default Hero;
