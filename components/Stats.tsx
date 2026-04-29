
import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { value: '+40', label: 'Projetos entregues', sub: 'sistemas & SaaS' },
  { value: '98%', label: 'Satisfação dos clientes', sub: 'avaliação média' },
  { value: '3×', label: 'Mais rápido', sub: 'que o mercado médio' },
  { value: '100%', label: 'On time', sub: 'entregas no prazo' },
];

const Stats: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Divider line top */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(123,92,245,0.3), rgba(74,159,232,0.2), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative px-8 py-10 text-center group"
            >
              {/* Vertical divider between items */}
              {i !== metrics.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-white/6" />
              )}

              <div
                className="font-black mb-2 leading-none"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(40px, 6vw, 64px)',
                  background: i % 2 === 0
                    ? 'linear-gradient(135deg, #A78BFA, #7B5CF5)'
                    : 'linear-gradient(135deg, #4A9FE8, #38C4B4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {m.value}
              </div>
              <div className="text-[#E8ECF8] font-semibold text-sm mb-1">{m.label}</div>
              <div className="text-[#6B7699] text-xs tracking-wide">{m.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(123,92,245,0.2), rgba(74,159,232,0.15), transparent)' }}
      />
    </section>
  );
};

export default Stats;
