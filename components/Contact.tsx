
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useT } from '../lib/LanguageContext';

const SHEETS_URL = 'https://script.google.com/macros/s/AKfycby5MdHwLdnnGSoo_21LAvKrPnhPKP8i5eAInFDnTibmrxSUraEHtxqyYvoJ4SArTgDE/exec';

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', idea: '', problem: '' });
  const t = useT();
  const ct = t.contact;
  const f = ct.form;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const params = new URLSearchParams({ name: form.name, company: form.company, email: form.email, phone: form.phone, idea: form.idea, problem: form.problem });
    fetch(`${SHEETS_URL}?${params.toString()}`, { method: 'GET', mode: 'no-cors' }).catch(() => {});
    setLoading(false);
    setSent(true);
  };

  return (
    <section id={ct.sectionId} className="py-16 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08), transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <motion.span initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="inline-block text-xs font-semibold tracking-[4px] text-[#7C3AED] uppercase mb-6">
              {ct.tag}
            </motion.span>

            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(28px, 5vw, 60px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.02em', color: '#E8ECF8', marginBottom: 32 }}>
              {ct.headline1}<br />
              <span style={{ color: '#7C3AED' }}>{ct.headline2}</span>
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-[#6B7699] text-base leading-relaxed mb-10">
              {ct.desc}
            </motion.p>

            {ct.bullets.map((bullet, i) => (
              <motion.div key={bullet} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#0EA5E9' }} />
                <span className="text-sm text-[#8892B4]">{bullet}</span>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.7 }}
            className="rounded-3xl p-5 md:p-8 relative overflow-hidden"
            style={{ background: 'linear-gradient(145deg, rgba(124,58,237,0.08), rgba(255,255,255,0.03))', border: '1px solid rgba(124,58,237,0.2)' }}>
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(59,130,246,0.3), transparent)' }} />

            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-6">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
                  <CheckCircle className="w-14 h-14" style={{ color: '#0EA5E9' }} />
                </motion.div>
                <div>
                  <p className="text-white font-bold text-xl mb-2">{ct.success.title}</p>
                  <p className="text-[#6B7699] text-sm">{ct.success.desc}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {[
                  { label: f.nameLabel, key: 'name', placeholder: f.namePlaceholder, required: true, type: 'text' },
                  { label: f.companyLabel, key: 'company', placeholder: f.companyPlaceholder, required: false, type: 'text' },
                  { label: f.emailLabel, key: 'email', placeholder: f.emailPlaceholder, required: true, type: 'email' },
                  { label: f.phoneLabel, key: 'phone', placeholder: f.phonePlaceholder, required: false, type: 'text' },
                ].map(({ label, key, placeholder, required, type }) => (
                  <div key={key} className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold tracking-wide text-[#6B7699] uppercase">{label}</label>
                    <input
                      required={required}
                      type={type}
                      value={(form as any)[key]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      placeholder={placeholder}
                      className="w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-[#3A3F5C] outline-none transition-all"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', fontFamily: "'Poppins', sans-serif" }}
                      onFocus={(e) => e.target.style.borderColor = 'rgba(124,58,237,0.5)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </div>
                ))}

                {[
                  { label: f.ideaLabel, key: 'idea', placeholder: f.ideaPlaceholder },
                  { label: f.problemLabel, key: 'problem', placeholder: f.problemPlaceholder },
                ].map(({ label, key, placeholder }) => (
                  <div key={key} className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold tracking-wide text-[#6B7699] uppercase">{label}</label>
                    <textarea
                      required
                      rows={3}
                      value={(form as any)[key]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      placeholder={placeholder}
                      className="w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-[#3A3F5C] outline-none resize-none transition-all"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', fontFamily: "'Poppins', sans-serif" }}
                      onFocus={(e) => e.target.style.borderColor = 'rgba(124,58,237,0.5)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </div>
                ))}

                <div className="relative group mt-2">
                  <div className="absolute inset-0 rounded-xl blur-lg bg-[#7C3AED] opacity-25 group-hover:opacity-50 transition-opacity duration-300" />
                  <button type="submit" disabled={loading}
                    className="relative w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-sm rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99] z-10 disabled:opacity-60 disabled:cursor-not-allowed">
                    {loading ? f.submitting : f.submit}
                    {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </div>

                <p className="text-center text-xs text-[#3A3F5C]">
                  {f.whatsappLabel}{' '}
                  <a href={`https://wa.me/5511998540063?text=${t.whatsapp}`} target="_blank" rel="noopener noreferrer"
                    className="text-[#7C3AED] hover:text-[#A855F7] transition-colors">
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
