
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <section id="contato" className="py-32 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,92,245,0.08), transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-xs font-semibold tracking-[4px] text-[#7B5CF5] uppercase mb-6"
            >
              Vamos conversar
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-black leading-[0.95] tracking-tight text-white mb-8"
              style={{ fontSize: 'clamp(38px, 5vw, 60px)', fontFamily: "'Space Grotesk', sans-serif" }}
            >
              SEU PROJETO<br />
              <span style={{
                background: 'linear-gradient(135deg, #C084FC, #7B5CF5, #4A9FE8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>COMEÇA AQUI.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#6B7699] text-base leading-relaxed mb-10"
            >
              Conta a sua ideia e o problema que você quer resolver. A gente cria um MVP e entra em contato em até 10 dias.
            </motion.p>

            {/* Trust points */}
            {[
              'MVP em até 10 dias',
              'Diagnóstico inicial gratuito',
              'Sem enrolação, sem compromisso',
            ].map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-3 mb-3"
              >
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#38C4B4' }} />
                <span className="text-sm text-[#8892B4]">{t}</span>
              </motion.div>
            ))}
          </div>

          {/* Right — Tally embed */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="rounded-3xl relative overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, rgba(123,92,245,0.08), rgba(255,255,255,0.03))',
              border: '1px solid rgba(123,92,245,0.2)',
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px z-10"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(123,92,245,0.5), rgba(74,159,232,0.3), transparent)' }}
            />
            <iframe
              data-tally-src="https://tally.so/embed/eq9x0O?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="500"
              title="Contato D6 Digital"
              style={{ border: 'none', borderRadius: '1.5rem' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
