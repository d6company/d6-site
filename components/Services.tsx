import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Wrench, Zap, Sparkles } from 'lucide-react';

const services = [
  {
    num: '01',
    icon: Monitor,
    title: 'SaaS & Soluções Digitais',
    desc: 'Da ideia ao produto escalável — com IA integrada desde o início. Arquitetura pensada para crescer sem reescrever tudo do zero.',
    detail: 'Recorrência, multitenancy, cobrança, onboarding e automações inteligentes — entregamos o produto completo.',
    accent: '#7C3AED',
  },
  {
    num: '02',
    icon: Wrench,
    title: 'Sistemas Web Customizados',
    desc: 'ERP, CRM, portais internos, plataformas operacionais. Feito exatamente para o seu processo — não o contrário.',
    detail: 'Nada de adaptar planilha ou pagar por licença que você usa 10%.',
    accent: '#3B82F6',
  },
  {
    num: '03',
    icon: Zap,
    title: 'Automações & Integrações',
    desc: 'Conectamos sistemas, eliminamos tarefas manuais e fazemos suas ferramentas conversarem entre si.',
    detail: 'Cada hora poupada em processo manual é hora reinvestida no que importa.',
    accent: '#0EA5E9',
  },
  {
    num: '04',
    icon: Sparkles,
    title: 'IA Aplicada ao Negócio',
    desc: 'Não vendemos IA como buzzword. Entregamos agentes, pipelines e modelos que resolvem problemas reais do seu negócio.',
    detail: 'Classificação, extração, geração, automação de decisão — o que fizer sentido para o seu contexto.',
    accent: '#A855F7',
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-16 md:py-32 relative overflow-hidden">

      <div className="absolute top-1/2 right-0 w-96 h-96 pointer-events-none -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.05), transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold tracking-[4px] uppercase mb-4"
            style={{ color: '#0EA5E9' }}
          >
            O que fazemos
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-sm mb-4"
            style={{ color: '#6B7699' }}
          >
            Soluções para cada etapa do seu negócio
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              marginBottom: 24,
            }}
          >
            <span style={{ color: '#E8ECF8' }}>TECNOLOGIA</span><br />
            <span style={{ background: 'linear-gradient(90deg, #7C3AED, #0EA5E9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              QUE TRABALHA.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: 15, color: '#6B7699', lineHeight: 1.7, maxWidth: 480 }}
          >
            Não vendemos hora. Entregamos resultado. Cada projeto parte de um problema real e termina com uma solução que funciona.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
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
                  borderTop: `2px solid ${s.accent}55`,
                  transition: 'border-color 0.25s ease, background 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                  (e.currentTarget as HTMLElement).style.borderTopColor = s.accent;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
                  (e.currentTarget as HTMLElement).style.borderTopColor = `${s.accent}55`;
                }}
              >
                {/* Number */}
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '3px',
                    color: s.accent,
                    opacity: 0.6,
                  }}
                >
                  {s.num}
                </span>

                {/* Icon */}
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: `${s.accent}15`, color: s.accent }}
                >
                  <Icon className="w-4 h-4" />
                </div>

                {/* Content */}
                <div>
                  <h3
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 16,
                      fontWeight: 700,
                      color: '#E8ECF8',
                      marginBottom: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ fontSize: 14, color: '#6B7699', lineHeight: 1.7, marginBottom: 12 }}>
                    {s.desc}
                  </p>
                  <p style={{ fontSize: 12, color: '#3A3F5C', lineHeight: 1.6, fontStyle: 'italic' }}>
                    {s.detail}
                  </p>
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
