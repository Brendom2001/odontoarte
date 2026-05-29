import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import RevealOnScroll from './RevealOnScroll'

const steps = [
  { num: '01', title: 'Consulta Gratuita', desc: 'Agende sua consulta sem custo. Analisamos seu caso com atenção e sigilo total, online ou presencialmente.' },
  { num: '02', title: 'Análise do Caso',   desc: 'Levantamento completo dos seus direitos, documentos e estratégia processual personalizada para sua situação.' },
  { num: '03', title: 'Ação e Resultado',  desc: 'Movemos a ação com agilidade e transparência, mantendo você informado em cada etapa até a conquista dos seus direitos.' },
]

function ConnectorLine() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <div ref={ref} className="hidden lg:flex flex-1 items-center px-4 mt-[-40px]">
      <svg viewBox="0 0 120 2" className="w-full" preserveAspectRatio="none" height="2">
        <motion.line x1="0" y1="1" x2="120" y2="1"
          stroke="var(--gold)" strokeWidth="1" strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 0.4 } : {}}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.6 }}
        />
      </svg>
    </div>
  )
}

export default function ComoFunciona() {
  return (
    <section className="py-24 md:py-32 noise-bg relative overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--gold-15), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <RevealOnScroll className="text-center mb-20">
          <p className="font-body text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--gold)' }}>
            Processo Simples
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl" style={{ color: 'var(--text-primary)' }}>
            Como <em className="italic">Funciona</em>
          </h2>
          <motion.div className="h-px w-14 mx-auto mt-5"
            style={{ background: 'var(--gold)', transformOrigin: 'left' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
          />
        </RevealOnScroll>

        <div className="flex flex-col lg:flex-row items-start gap-0">
          {steps.map((step, i) => (
            <>
              <RevealOnScroll key={step.num} delay={i * 0.18} className="flex-1 relative">
                <div className="p-8 group">
                  <div className="font-display text-6xl md:text-7xl font-bold mb-4 leading-none transition-colors duration-500"
                    style={{ color: 'var(--gold-12)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--gold-20)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--gold-12)'}
                  >
                    {step.num}
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:border-[var(--gold)]"
                    style={{ border: '1px solid var(--gold-30)' }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: 'var(--gold)' }} />
                  </div>
                  <h3 className="font-display text-xl mb-3" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                </div>
              </RevealOnScroll>
              {i < steps.length - 1 && <ConnectorLine key={`line-${i}`} />}
            </>
          ))}
        </div>

        <RevealOnScroll delay={0.5} className="mt-16 text-center">
          <a
            href="https://wa.me/5551999990000?text=Quero%20agendar%20minha%20consulta%20gratuita."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 font-body font-semibold text-sm tracking-wide transition-colors duration-300"
            style={{ background: 'var(--gold)', color: 'var(--gold-cta-text)' }}
          >
            Agendar consulta gratuita
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </RevealOnScroll>
      </div>
    </section>
  )
}
