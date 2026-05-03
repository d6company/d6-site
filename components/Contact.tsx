
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const SHEETS_URL = 'https://script.google.com/macros/s/AKfycby5MdHwLdnnGSoo_21LAvKrPnhPKP8i5eAInFDnTibmrxSUraEHtxqyYvoJ4SArTgDE/exec';
const WA_NOTIFY = '5511921354533';

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', idea: '', problem: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } catch (_) {}

    const msg = encodeURIComponent(
      `🚀 Novo contato no site D6!\n\n*Nome:* ${form.name}\n*Empresa:* ${form.company || '—'}\n*Email:* ${form.email}\n*Telefone:* ${form.phone || '—'}`
    );
    window.open(`https://wa.me/${WA_NOTIFY}?text=${msg}`, '_blank');

    setLoading(false);
    setSent(true);
  };

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

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, rgba(123,92,245,0.08), rgba(255,255,255,0.03))',
              border: '1px solid rgba(123,92,245,0.2)',
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(123,92,245,0.5), rgba(74,159,232,0.3), transparent)' }}
            />

            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <CheckCircle className="w-14 h-14" style={{ color: '#38C4B4' }} />
                </motion.div>
                <div>
                  <p className="text-white font-bold text-xl mb-2">Ideia recebida!</p>
                  <p className="text-[#6B7699] text-sm">Vamos criar um MVP e entrar em contato em até 10 dias.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold tracking-wide text-[#6B7699] uppercase">Seu nome</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="João Silva"
                    className="w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-[#3A3F5C] outline-none transition-all"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', fontFamily: "'Inter', sans-serif" }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(123,92,245,0.5)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold tracking-wide text-[#6B7699] uppercase">Empresa</label>
                  <input
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Acme Ltda"
                    className="w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-[#3A3F5C] outline-none transition-all"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', fontFamily: "'Inter', sans-serif" }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(123,92,245,0.5)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold tracking-wide text-[#6B7699] uppercase">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="joao@empresa.com"
                    className="w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-[#3A3F5C] outline-none transition-all"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', fontFamily: "'Inter', sans-serif" }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(123,92,245,0.5)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold tracking-wide text-[#6B7699] uppercase">Telefone</label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-[#3A3F5C] outline-none transition-all"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', fontFamily: "'Inter', sans-serif" }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(123,92,245,0.5)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold tracking-wide text-[#6B7699] uppercase">Qual é a sua ideia?</label>
                  <textarea
                    required
                    rows={3}
                    value={form.idea}
                    onChange={(e) => setForm({ ...form, idea: e.target.value })}
                    placeholder="Descreva o produto ou solução que você imagina construir..."
                    className="w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-[#3A3F5C] outline-none resize-none transition-all"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', fontFamily: "'Inter', sans-serif" }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(123,92,245,0.5)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold tracking-wide text-[#6B7699] uppercase">Qual problema você quer resolver?</label>
                  <textarea
                    required
                    rows={3}
                    value={form.problem}
                    onChange={(e) => setForm({ ...form, problem: e.target.value })}
                    placeholder="O que está travando o seu negócio hoje? Qual dor você quer eliminar?"
                    className="w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-[#3A3F5C] outline-none resize-none transition-all"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', fontFamily: "'Inter', sans-serif" }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(123,92,245,0.5)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>

                <div className="relative group mt-2">
                  <div className="absolute inset-0 rounded-xl blur-lg bg-[#7B5CF5] opacity-25 group-hover:opacity-50 transition-opacity duration-300" />
                  <button
                    type="submit"
                    disabled={loading}
                    className="relative w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#7B5CF5] hover:bg-[#6B4CE5] text-white font-bold text-sm rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99] z-10 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Enviando...' : 'Quero meu MVP em 10 dias'}
                    {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </div>

                <p className="text-center text-xs text-[#3A3F5C]">
                  Prefere mandar mensagem?{' '}
                  <a
                    href="https://wa.me/5511986794062?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20D6%20Digital%20e%20gostaria%20de%20conversar%20sobre%20um%20produto."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7B5CF5] hover:text-[#A78BFA] transition-colors"
                  >
                    WhatsApp
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
