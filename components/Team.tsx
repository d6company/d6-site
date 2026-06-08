
import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Bruna',
    role: 'Head de IA',
    accent: '#A855F7',
    border: 'rgba(168,85,247,0.3)',
    photo: '/team/bruna.png',
  },
  {
    name: 'Deusa',
    role: 'Gestora de Projetos',
    accent: '#3B82F6',
    border: 'rgba(59,130,246,0.3)',
    photo: '/team/deusa.png',
  },
  {
    name: 'Ale',
    role: 'Head de Desenvolvimento',
    accent: '#0EA5E9',
    border: 'rgba(14,165,233,0.3)',
    photo: '/team/ale.png',
  },
  {
    name: 'Many',
    role: 'Especialista de Qualidade',
    accent: '#7C3AED',
    border: 'rgba(124,58,237,0.3)',
    photo: '/team/many.png',
  },
];

const Team: React.FC = () => {
  return (
    <section id="equipe" className="py-16 md:py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.05), transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-20 max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold tracking-[4px] text-[#A855F7] uppercase mb-5"
          >
            Fundadores
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
              marginBottom: 24,
            }}
          >
            OS<br />
            <span style={{ color: '#A855F7' }}>FUNDADORES.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#6B7699] text-base leading-relaxed"
          >
            As pessoas que construíram a D6 do zero. Cada um especialista no que faz.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden group"
              style={{ border: `1px solid ${member.border}` }}
            >
              {/* Photo */}
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay at bottom */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(3,4,12,0.95) 0%, rgba(3,4,12,0.4) 40%, transparent 70%)',
                  }}
                />
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, ${member.accent}, transparent)` }}
                />
                {/* Name & role over photo */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    className="text-xl font-black text-white mb-1"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-xs font-bold tracking-[2px] uppercase"
                    style={{ color: member.accent }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
