
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    tag: '01',
    title: 'SaaS & Soluções Digitais',
    desc: 'Do MVP ao produto escalável — com IA integrada desde o início. Arquitetura pensada para crescer sem reescrever tudo do zero.',
    detail: 'Recorrência, multitenancy, cobrança, onboarding e automações inteligentes — entregamos o produto completo.',
    accent: '#7B5CF5',
    gradient: 'linear-gradient(135deg, rgba(123,92,245,0.12), rgba(74,159,232,0.06))',
    border: 'rgba(123,92,245,0.2)',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    tags: [],
  },
  {
    tag: '02',
    title: 'Sistemas Web Customizados',
    desc: 'ERP, CRM, portais internos, plataformas operacionais. Feito exatamente para o seu processo — não o contrário.',
    detail: 'Nada de adaptar planilha ou pagar por licença que você usa 10%.',
    accent: '#4A9FE8',
    gradient: 'linear-gradient(135deg, rgba(74,159,232,0.12), rgba(56,196,180,0.06))',
    border: 'rgba(74,159,232,0.2)',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    tags: [],
  },
  {
    tag: '03',
    title: 'Automações & Integrações',
    desc: 'Conectamos sistemas, eliminamos tarefas manuais e fazemos suas ferramentas conversarem entre si.',
    detail: 'Cada hora poupada em processo manual é hora reinvestida no que importa.',
    accent: '#38C4B4',
    gradient: 'linear-gradient(135deg, rgba(56,196,180,0.12), rgba(123,92,245,0.06))',
    border: 'rgba(56,196,180,0.2)',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    tags: [],
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-32 relative overflow-hidden">
      {/* Background nebula */}
      <div className="absolute top-1/2 right-0 w-96 h-96 pointer-events-none -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(74,159,232,0.06), transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header — asymmetric */}
        <div className="mb-20 max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold tracking-[4px] text-[#7B5CF5] uppercase mb-5"
          >
            O que fazemos
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-white font-bold text-xl mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Soluções para cada etapa do seu negócio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-black leading-[1] tracking-tight mb-6 text-white"
            style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontFamily: "'Space Grotesk', sans-serif" }}
          >
            TECNOLOGIA<br />
            <span style={{
              background: 'linear-gradient(135deg, #A78BFA, #7B5CF5, #4A9FE8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>QUE TRABALHA.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#6B7699] text-base leading-relaxed"
          >
            Não vendemos hora. Entregamos resultado. Cada projeto parte de um problema real e termina com uma solução que funciona.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="relative rounded-3xl p-8 flex flex-col group overflow-hidden cursor-default"
              style={{ background: s.gradient, border: `1px solid ${s.border}` }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 30% 30%, ${s.accent}18, transparent 60%)` }}
              />

              {/* Tag */}
              <div className="text-xs font-bold tracking-[3px] mb-6 opacity-40" style={{ color: s.accent, fontFamily: "'Space Grotesk', monospace" }}>
                {s.tag}
              </div>

              {/* Icon */}
              <div className="mb-6" style={{ color: s.accent }}>
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 leading-tight">{s.title}</h3>

              {/* Desc */}
              <p className="text-[#6B7699] text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>

              {/* Detail */}
              <p className="text-xs text-[#8892B4] italic mb-6 leading-relaxed border-l-2 pl-3" style={{ borderColor: `${s.accent}40` }}>
                {s.detail}
              </p>

              {/* Arrow */}
              <div className="flex justify-end">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                  style={{ background: `${s.accent}20`, border: `1px solid ${s.accent}35` }}
                >
                  <ArrowUpRight className="w-4 h-4" style={{ color: s.accent }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
