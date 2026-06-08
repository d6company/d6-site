
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock } from 'lucide-react';
import { useT } from '../lib/LanguageContext';

const casesMeta = [
  { accent: '#7C3AED', soon: false, image: '/case-flor.png', imageFit: 'contain' as const },
  { accent: '#10B981', soon: false, image: '/case-nexlot.png', imageFit: 'cover' as const },
  { accent: '#0EA5E9', soon: false, image: '/case-lumehub.png', imageFit: 'cover' as const },
  { accent: '#A855F7', soon: false, image: '/case-lumeacademy.png', imageFit: 'cover' as const },
];

const Cases: React.FC = () => {
  const t = useT();
  const c = t.cases;

  const cases = c.items.map((item, i) => ({ ...item, ...casesMeta[i] }));

  return (
    <section id="cases" className="py-16 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.05), transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-xs font-semibold tracking-[4px] text-[#0EA5E9] uppercase mb-5"
            >
              {c.tag}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(28px, 5.5vw, 64px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.02em', color: '#E8ECF8' }}
            >
              {c.headline1}<br />
              <span style={{ color: '#0EA5E9' }}>{c.headline2}</span>
            </motion.h2>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-5">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden group flex flex-col md:flex-row"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))',
                border: `1px solid ${item.soon ? 'rgba(255,255,255,0.05)' : `${item.accent}22`}`,
              }}
            >
              <div className="h-0.5 w-full absolute top-0 left-0 right-0"
                style={{ background: item.soon ? 'rgba(255,255,255,0.08)' : `linear-gradient(90deg, ${item.accent}, transparent)` }}
              />

              <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  {item.soon && <Lock className="w-3 h-3 text-[#6B7699]" />}
                  <span className="text-[10px] font-bold tracking-[3px] uppercase" style={{ color: item.soon ? '#6B7699' : item.accent }}>
                    {item.label}
                  </span>
                </div>

                <h3 className={`font-bold mb-3 leading-snug ${item.soon ? 'text-[#6B7699]' : 'text-white'}`}
                  style={{ fontSize: 'clamp(18px, 2vw, 22px)' }}>
                  {item.title}
                </h3>

                <p className="text-[#6B7699] text-sm leading-relaxed mb-5 max-w-md">
                  {item.desc}
                </p>

                {!item.soon && (
                  <a
                    href={t.contact.sectionId === 'contato' ? '#contato' : '#contact'}
                    className="inline-flex items-center gap-2 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: item.accent }}
                  >
                    {c.cta}
                    <ArrowRight className="w-3 h-3" />
                  </a>
                )}
              </div>

              {item.image && (
                <div className="relative md:w-[52%] flex-shrink-0 overflow-hidden"
                  style={{ minHeight: '200px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105 ${item.imageFit === 'contain' ? 'object-contain' : 'object-cover object-top'}`}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
