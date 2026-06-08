
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock } from 'lucide-react';

const cases = [
  {
    label: 'Delivery · Pedidos',
    title: 'Delícias da Flor',
    desc: 'Plataforma completa de entregas e pedidos de comida — cardápio digital, gestão de pedidos em tempo real e painel administrativo.',
    metrics: [],
    accent: '#7C3AED',
    soon: false,
  },
  {
    label: 'SaaS · Imóveis',
    title: 'NexLot',
    desc: 'Plataforma SaaS para o mercado imobiliário com gestão de lotes, clientes e contratos em um único sistema.',
    metrics: [],
    accent: '#3B82F6',
    soon: false,
  },
  {
    label: 'SaaS · Gestão',
    title: 'LumeHub',
    desc: 'Hub de gestão operacional para equipes: organização de projetos, tarefas e comunicação centralizada.',
    metrics: [],
    accent: '#0EA5E9',
    soon: false,
  },
  {
    label: 'Educação · Plataforma',
    title: 'LumeAcademy',
    desc: 'Plataforma de aprendizado online com trilhas de conteúdo, progresso de alunos e área do instrutor.',
    metrics: [],
    accent: '#A855F7',
    soon: false,
  },
];

const Cases: React.FC = () => {
  return (
    <section id="cases" className="py-16 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.05), transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-xs font-semibold tracking-[4px] text-[#0EA5E9] uppercase mb-5"
            >
              Cases
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(28px, 5.5vw, 64px)',
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                color: '#E8ECF8',
              }}
            >
              O QUE JÁ<br />
              <span style={{ color: '#0EA5E9' }}>ENTREGAMOS.</span>
            </motion.h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden group"
              style={{
                background: c.soon
                  ? 'rgba(255,255,255,0.02)'
                  : 'linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))',
                border: `1px solid ${c.soon ? 'rgba(255,255,255,0.05)' : `${c.accent}22`}`,
              }}
            >
              {/* Top accent bar */}
              <div className="h-0.5 w-full"
                style={{ background: c.soon ? 'rgba(255,255,255,0.08)' : `linear-gradient(90deg, ${c.accent}, transparent)` }}
              />

              <div className="p-5 md:p-8">
                {/* Label */}
                <div className="flex items-center gap-2 mb-5">
                  {c.soon && <Lock className="w-3 h-3 text-[#6B7699]" />}
                  <span
                    className="text-[10px] font-bold tracking-[3px] uppercase"
                    style={{ color: c.soon ? '#6B7699' : c.accent }}
                  >
                    {c.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-lg font-bold mb-4 leading-snug ${c.soon ? 'text-[#6B7699]' : 'text-white'}`}>
                  {c.title}
                </h3>

                {/* Desc */}
                <p className="text-[#6B7699] text-sm leading-relaxed mb-6">
                  {c.desc}
                </p>

                {/* Metrics */}
                {c.metrics.length > 0 && (
                  <div className="flex flex-col gap-2 mb-6">
                    {c.metrics.map((m) => (
                      <div key={m} className="flex items-center gap-2.5 text-sm font-medium text-white/80">
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: c.accent }} />
                        {m}
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA */}
                {!c.soon && (
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: c.accent }}
                  >
                    Conversar sobre este projeto
                    <ArrowRight className="w-3 h-3" />
                  </a>
                )}

                {c.soon && (
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 text-xs font-medium text-[#6B7699] hover:text-white transition-colors"
                  >
                    Falar com a D6 <ArrowRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
