
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Loader2, Zap, Clock, Code2, Calendar, Lightbulb } from 'lucide-react';
import { analyzeProcess, ProcessAnalysis } from '../services/processService';

/* ── Potential badge ────────────────────────────────────────────────────── */
const PotentialBadge: React.FC<{ value: ProcessAnalysis['potencial'] }> = ({ value }) => {
  const map = {
    alto: { label: 'Alto potencial', color: '#38C4B4', bg: 'rgba(56,196,180,0.1)', border: 'rgba(56,196,180,0.25)' },
    medio: { label: 'Médio potencial', color: '#4A9FE8', bg: 'rgba(74,159,232,0.1)', border: 'rgba(74,159,232,0.25)' },
    baixo: { label: 'Baixo potencial', color: '#A78BFA', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.25)' },
  };
  const { label, color, bg, border } = map[value] ?? map.medio;
  return (
    <span
      className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
      style={{ color, background: bg, border: `1px solid ${border}` }}
    >
      {label}
    </span>
  );
};

/* ── Result card ────────────────────────────────────────────────────────── */
const ResultCard: React.FC<{ result: ProcessAnalysis }> = ({ result }) => {
  const items = [
    {
      icon: <Clock className="w-4 h-4" />,
      label: 'Horas economizadas/mês',
      value: `~${result.horas_economizadas}h`,
      color: '#38C4B4',
    },
    {
      icon: <Calendar className="w-4 h-4" />,
      label: 'Horas recuperadas/ano',
      value: `${result.custo_anual}h`,
      color: '#4A9FE8',
    },
    {
      icon: <Code2 className="w-4 h-4" />,
      label: 'Prazo estimado',
      value: `${result.prazo_semanas} semanas`,
      color: '#A78BFA',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-8 rounded-3xl overflow-hidden"
      style={{ border: '1px solid rgba(123,92,245,0.2)', background: 'linear-gradient(145deg, rgba(123,92,245,0.07), rgba(255,255,255,0.025))' }}
    >
      {/* Top bar gradient */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, #7B5CF5, #4A9FE8, #38C4B4)' }} />

      <div className="p-8 md:p-10">
        {/* Potential + insight */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-5">
            <PotentialBadge value={result.potencial} />
            <span className="text-xs text-[#4A5175] font-medium">de automação</span>
          </div>

          <div
            className="flex items-start gap-3 rounded-2xl p-5"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <Lightbulb className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#A78BFA' }} />
            <p className="text-sm leading-relaxed" style={{ color: '#A0AAC8' }}>
              {result.insight}
            </p>
          </div>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 text-center"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <div className="flex justify-center mb-2" style={{ color: item.color }}>{item.icon}</div>
              <div
                className="font-black mb-1 leading-none"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(20px, 3vw, 28px)',
                  color: item.color,
                }}
              >
                {item.value}
              </div>
              <div className="text-[10px] font-medium uppercase tracking-wide" style={{ color: '#4A5175' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Technical approach */}
        <div
          className="rounded-2xl p-5 mb-8"
          style={{ background: 'rgba(123,92,245,0.06)', border: '1px solid rgba(123,92,245,0.15)' }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Code2 className="w-3.5 h-3.5" style={{ color: '#7B5CF5' }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#7B5CF5' }}>
              Como a D6 faria
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: '#8892B4' }}>
            {result.abordagem}
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative group w-full sm:w-auto">
            <div
              className="absolute inset-0 rounded-full opacity-30 group-hover:opacity-60 transition-opacity"
              style={{ background: '#7B5CF5', filter: 'blur(16px)' }}
            />
            <a
              href="#contato"
              className="relative flex items-center justify-center gap-2 rounded-full font-bold text-sm text-white transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-auto"
              style={{ background: '#7B5CF5', padding: '14px 28px', zIndex: 1 }}
            >
              Quero a D6 construindo isso
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <span className="text-xs" style={{ color: '#3A3F5C' }}>
            Diagnóstico inicial gratuito · sem compromisso
          </span>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Skeleton loader ────────────────────────────────────────────────────── */
const Skeleton: React.FC = () => (
  <div className="mt-8 rounded-3xl overflow-hidden" style={{ border: '1px solid rgba(123,92,245,0.15)' }}>
    <div className="h-px" style={{ background: 'linear-gradient(90deg, #7B5CF5, #4A9FE8)' }} />
    <div className="p-8 space-y-4">
      {[80, 60, 100, 50].map((w, i) => (
        <div
          key={i}
          className="h-3 rounded-full animate-pulse"
          style={{ width: `${w}%`, background: 'rgba(123,92,245,0.1)' }}
        />
      ))}
      <div className="grid grid-cols-3 gap-4 pt-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-20 rounded-2xl animate-pulse"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          />
        ))}
      </div>
    </div>
  </div>
);

/* ── Main component ─────────────────────────────────────────────────────── */
const ProcessAnalyzer: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ProcessAnalysis | null>(null);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    setLoading(true);
    setResult(null);
    setError(false);
    try {
      const analysis = await analyzeProcess(input.trim());
      setResult(analysis);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const examples = [
    'Reconcilio planilhas financeiras manualmente toda semana — leva ~5h',
    'Preencho relatórios de vendas copiando dados de 3 sistemas diferentes',
    'Envio propostas comerciais manualmente para cada lead por e-mail',
  ];

  return (
    <section
      id="ia"
      className="py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #03040C, #04061A 50%, #03040C)' }}
    >
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(123,92,245,0.09) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-3xl mx-auto px-6 relative" style={{ zIndex: 10 }}>
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
            style={{ background: 'rgba(123,92,245,0.08)', border: '1px solid rgba(123,92,245,0.2)' }}
          >
            <Zap className="w-3.5 h-3.5 fill-current" style={{ color: '#A78BFA' }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '3px', color: '#A78BFA', textTransform: 'uppercase' }}>
              MVP Gratuito
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-1px',
              marginBottom: 20,
              color: '#FFFFFF',
            }}
          >
            DESCUBRA QUANTO<br />
            <span
              style={{
                background: 'linear-gradient(135deg, #A78BFA, #7B5CF5, #4A9FE8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              TEMPO VOCÊ PERDE.
            </span>
          </motion.h2>

        </div>

        {/* Input form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          <form onSubmit={handleSubmit}>
            <div
              className="rounded-3xl p-2 transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(123,92,245,0.2)',
              }}
            >
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ex: Todo mês levo 4 horas reconciliando planilhas financeiras com o sistema de gestão..."
                rows={3}
                className="w-full bg-transparent outline-none resize-none"
                style={{
                  padding: '16px 20px',
                  color: '#E8ECF8',
                  fontSize: 15,
                  lineHeight: 1.6,
                  fontFamily: "'Inter', sans-serif",
                }}
                onInput={(e) => {
                  const t = e.currentTarget;
                  t.style.height = 'auto';
                  t.style.height = t.scrollHeight + 'px';
                }}
              />
              <div className="flex items-center justify-between px-3 pb-2">
                <span style={{ fontSize: 11, color: '#2A2F45' }}>{input.length}/500</span>
                <div className="relative group">
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity"
                    style={{ background: '#7B5CF5', filter: 'blur(12px)' }}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || loading}
                    className="relative flex items-center gap-2 rounded-2xl font-bold text-sm text-white transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ background: '#7B5CF5', padding: '12px 22px', zIndex: 1 }}
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        Analisar <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>

          {/* Example chips */}
          {!result && !loading && (
            <div className="flex flex-wrap gap-2 mt-4">
              {examples.map((ex) => (
                <button
                  key={ex}
                  onClick={() => setInput(ex)}
                  className="text-xs px-3 py-1.5 rounded-full transition-all"
                  style={{
                    color: '#4A5175',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#A78BFA';
                    e.currentTarget.style.borderColor = 'rgba(123,92,245,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#4A5175';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  }}
                >
                  {ex.length > 55 ? ex.slice(0, 55) + '…' : ex}
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Result / Loading */}
        <AnimatePresence mode="wait">
          {loading && <Skeleton key="skeleton" />}
          {result && !loading && <ResultCard key="result" result={result} />}
          {error && !loading && (
            <motion.p
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 text-center text-sm"
              style={{ color: '#E24B4A' }}
            >
              Algo deu errado. Tente novamente ou{' '}
              <a href="#contato" style={{ color: '#A78BFA' }}>
                fale diretamente com a D6
              </a>
              .
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProcessAnalyzer;
