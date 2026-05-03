
import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/* ─── Real galaxy star field ────────────────────────────────────────────── */
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
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 140% 30% at 50% 48%, rgba(200,220,255,0.028) 0%, transparent 70%)',
        }}
      />
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
            boxShadow: s.hasGlow
              ? `0 0 ${s.size * 3}px ${s.size * 1.2}px rgba(190,215,255,0.28)`
              : 'none',
          }}
          animate={{ opacity: [s.opacity, Math.min(s.opacity * 1.9, 0.95), s.opacity] }}
          transition={{ duration: s.dur, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
        />
      ))}
    </div>
  );
};

/* ─── Orbital blade ─────────────────────────────────────────────────────── */
// Each ring is a sweeping "blade" — conic-gradient arc on a 3D-tilted plane,
// matching the three metallic blades described in the D6 logo identity.
interface BladeProps {
  size: number;      // diameter px
  tilt: number;      // rotateX degrees (orbital plane angle)
  dur: number;       // rotation duration in seconds
  delay?: number;
  color: string;     // hex
  glow: string;      // rgba for box-shadow
  strokeW?: number;  // ring stroke width px
}

const OrbitalBlade: React.FC<BladeProps> = ({
  size, tilt, dur, delay = 0, color, glow, strokeW = 2,
}) => (
  <div
    className="absolute inset-0 flex items-center justify-center pointer-events-none"
    style={{ perspective: 900 }}
  >
    <div
      style={{
        width: size,
        height: size,
        transform: `rotateX(${tilt}deg)`,
        position: 'relative',
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: dur, repeat: Infinity, ease: 'linear', delay }}
        style={{ width: size, height: size, position: 'relative' }}
      >
        {/* Blade sweep — conic-gradient masked to a ring */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: `conic-gradient(from 0deg,
              transparent 48%,
              ${color}10 58%,
              ${color}35 70%,
              ${color}75 83%,
              ${color}cc 93%,
              ${color} 100%)`,
            WebkitMask: `radial-gradient(farthest-side,
              transparent calc(100% - ${strokeW * 2.5}px),
              black       calc(100% - ${strokeW * 2.5}px))`,
            mask: `radial-gradient(farthest-side,
              transparent calc(100% - ${strokeW * 2.5}px),
              black       calc(100% - ${strokeW * 2.5}px))`,
          }}
        />

        {/* Blade tip — glowing dot at top (0°) */}
        <div
          style={{
            position: 'absolute',
            top: strokeW * 0.25,
            left: '50%',
            transform: 'translateX(-50%)',
            width: strokeW * 4,
            height: strokeW * 4,
            borderRadius: '50%',
            background: color,
            boxShadow: `0 0 ${strokeW * 5}px ${strokeW * 2}px ${glow}`,
          }}
        />
      </motion.div>
    </div>
  </div>
);

const CosmicVisual: React.FC = () => (
  <div className="relative w-full h-full flex items-center justify-center" style={{ minHeight: 440 }}>

    {/* Core glow — pulses subtly like the energy nucleus */}
    <motion.div
      animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute"
      style={{
        width: 260,
        height: 260,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(123,92,245,0.32) 0%, rgba(74,159,232,0.14) 45%, transparent 70%)',
        filter: 'blur(28px)',
      }}
    />

    {/* Blade 1 — violet, largest, slowest */}
    <OrbitalBlade
      size={310} tilt={64} dur={12}
      color="#7B5CF5" glow="rgba(123,92,245,0.7)"
      strokeW={2}
    />

    {/* Blade 2 — blue, medium */}
    <OrbitalBlade
      size={370} tilt={46} dur={19} delay={-6}
      color="#4A9FE8" glow="rgba(74,159,232,0.65)"
      strokeW={1.5}
    />

    {/* Blade 3 — teal, tightest, fastest */}
    <OrbitalBlade
      size={250} tilt={76} dur={8} delay={-2}
      color="#38C4B4" glow="rgba(56,196,180,0.65)"
      strokeW={1.5}
    />

    {/* Logo */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      style={{ position: 'relative', zIndex: 2 }}
    >
      <img
        src="https://res.cloudinary.com/dj6p7x8p3/image/upload/LOGO_D6_jsdd8a.png"
        alt="D6"
        width={200}
        height={200}
        style={{
          objectFit: 'contain',
          filter:
            'drop-shadow(0 0 30px rgba(123,92,245,0.85)) drop-shadow(0 0 65px rgba(74,159,232,0.40))',
        }}
      />
    </motion.div>
  </div>
);

/* ─── Hero ───────────────────────────────────────────────────────────────── */
const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#03040C' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)',
          backgroundSize: '90px 90px',
          maskImage:
            'radial-gradient(ellipse 70% 70% at 50% 50%, black 10%, transparent 80%)',
        }}
      />

      <StarField />

      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-15%',
            width: 700,
            height: 700,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(91,63,214,0.16) 0%, transparent 65%)',
            filter: 'blur(70px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            right: '-10%',
            width: 560,
            height: 560,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(56,196,180,0.1) 0%, transparent 65%)',
            filter: 'blur(70px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '40%',
            right: '20%',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(74,159,232,0.1) 0%, transparent 65%)',
            filter: 'blur(90px)',
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 pt-20 md:pt-24 pb-12 md:pb-16" style={{ zIndex: 10 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          <motion.div style={{ y: textY, opacity }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full"
              style={{ background: 'rgba(123,92,245,0.08)', border: '1px solid rgba(123,92,245,0.22)' }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#38C4B4',
                  display: 'inline-block',
                  animation: 'pulse 2s infinite',
                }}
              />
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '3px', color: '#A78BFA', textTransform: 'uppercase' }}>
                D6 Digital
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(44px, 9vw, 110px)',
                fontWeight: 900,
                lineHeight: 0.88,
                letterSpacing: '-2px',
                marginBottom: 28,
              }}
            >
              <span style={{ display: 'block', color: '#FFFFFF' }}>RÁPIDO.</span>
              <span
                style={{
                  display: 'block',
                  background: 'linear-gradient(135deg, #A78BFA 0%, #7B5CF5 45%, #4A9FE8 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                CERTO.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              style={{
                fontSize: 'clamp(14px, 3vw, 17px)',
                color: '#4A5175',
                lineHeight: 1.65,
                marginBottom: 44,
                maxWidth: 380,
                fontWeight: 400,
              }}
            >
              Sistemas web, SaaS e automações entregues no prazo — sem concessões de qualidade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.72 }}
              className="flex items-center gap-4"
            >
              <div className="relative group">
                <div
                  className="absolute inset-0 rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                  style={{ background: '#7B5CF5', filter: 'blur(18px)', transform: 'scale(0.85)' }}
                />
                <a
                  href="#contato"
                  className="relative flex items-center gap-3 rounded-full font-bold text-sm text-white transition-all hover:scale-[1.02] active:scale-95"
                  style={{ background: '#7B5CF5', padding: '14px 30px', zIndex: 1 }}
                >
                  Falar com a D6
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <a
                href="#ia"
                className="text-sm font-medium transition-colors"
                style={{ color: '#4A5175' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#A78BFA')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#4A5175')}
              >
                MVP Gratuito →
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="hidden md:block"
          >
            <CosmicVisual />
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: 160,
          background: 'linear-gradient(to bottom, transparent, #03040C)',
          zIndex: 10,
        }}
      />
    </section>
  );
};

export default Hero;
