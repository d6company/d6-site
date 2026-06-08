import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Wrench, Zap, Sparkles } from 'lucide-react';
import { useT } from '../lib/LanguageContext';

const icons = [Monitor, Wrench, Zap, Sparkles];
const accents = ['#7C3AED', '#3B82F6', '#0EA5E9', '#A855F7'];

const Services: React.FC = () => {
  const t = useT();
  const s = t.services;

  return (
    <section id={s.sectionId} className="py-16 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 pointer-events-none -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.05), transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold tracking-[4px] uppercase mb-4"
            style={{ color: '#0EA5E9' }}
          >
            {s.tag}
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-sm mb-4"
            style={{ color: '#6B7699' }}
          >
            {s.subtitle}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: 24 }}
          >
            <span style={{ color: '#E8ECF8' }}>{s.headline1}</span><br />
            <span style={{ background: 'linear-gradient(90deg, #7C3AED, #0EA5E9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {s.headline2}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: 15, color: '#6B7699', lineHeight: 1.7, maxWidth: 480 }}
          >
            {s.desc}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {s.items.map((item, i) => {
            const Icon = icons[i];
            const accent = accents[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl p-6 flex flex-col gap-4 cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderTop: `2px solid ${accent}55`,
                  transition: 'border-color 0.25s ease, background 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                  (e.currentTarget as HTMLElement).style.borderTopColor = accent;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
                  (e.currentTarget as HTMLElement).style.borderTopColor = `${accent}55`;
                }}
              >
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '3px', color: accent, opacity: 0.6 }}>
                  {item.num}
                </span>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${accent}15`, color: accent }}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 700, color: '#E8ECF8', marginBottom: 10, lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 14, color: '#6B7699', lineHeight: 1.7, marginBottom: 12 }}>{item.desc}</p>
                  <p style={{ fontSize: 12, color: '#3A3F5C', lineHeight: 1.6, fontStyle: 'italic' }}>{item.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
