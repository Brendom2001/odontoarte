import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RevealOnScroll from './RevealOnScroll'

const faqs = [
  { q: 'Quanto custa a consulta inicial?',            a: 'A consulta inicial é totalmente gratuita e sem compromisso. Nela analisamos seu caso, esclarecemos seus direitos e apresentamos as melhores opções para sua situação.' },
  { q: 'Qual o prazo para entrar com ação trabalhista?', a: 'O prazo prescricional para reclamar direitos trabalhistas é de 2 anos após o término do contrato de trabalho. Durante o vínculo, o trabalhador pode reclamar os últimos 5 anos de verbas não pagas. Não espere — entre em contato o quanto antes.' },
  { q: 'Preciso comparecer presencialmente?',          a: 'Não necessariamente. Atendemos online para todo o Brasil via videoconferência. Os documentos podem ser enviados digitalmente. Para clientes em Porto Alegre, também oferecemos atendimento presencial em nosso escritório no Centro Histórico.' },
  { q: 'Quanto tempo dura um processo trabalhista?',   a: 'O prazo médio varia conforme a complexidade do caso e a vara trabalhista. Em geral, casos com acordo levam de 3 a 6 meses; ações que vão a julgamento podem levar de 1 a 2 anos.' },
  { q: 'Vou precisar pagar se perder a causa?',        a: 'Em regra, não. Na Justiça do Trabalho, trabalhadores com insuficiência de recursos têm direito à gratuidade da justiça. Nossos honorários são pactuados de forma transparente antes do início do processo.' },
  { q: 'Posso entrar com ação mesmo tendo assinado a rescisão?', a: 'Sim. A assinatura de documentos de rescisão não implica renúncia a todos os direitos trabalhistas. É possível questionar judicialmente verbas não pagas, irregularidades e violações de direitos mesmo após a assinatura dos termos.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-24 md:py-32 noise-bg relative"
      style={{ background: 'var(--bg-secondary)' }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--gold-15), transparent)' }} />

      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <RevealOnScroll className="text-center mb-14">
          <p className="font-body text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--gold)' }}>
            Tire suas dúvidas
          </p>
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: 'var(--text-primary)' }}>
            Perguntas <em className="italic">Frequentes</em>
          </h2>
          <motion.div className="h-px w-14 mx-auto mt-5"
            style={{ background: 'var(--gold)', transformOrigin: 'left' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
          />
        </RevealOnScroll>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <RevealOnScroll key={i} delay={i * 0.06}>
              <div className="overflow-hidden" style={{ border: '1px solid var(--gold-10)' }}>
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 transition-colors duration-200"
                  style={{ background: 'transparent' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-10)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-body text-[15px] font-medium leading-snug" style={{ color: 'var(--text-primary)' }}>
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.76, 0, 0.24, 1] }}
                    className="text-xl leading-none flex-shrink-0 font-light"
                    style={{ color: 'var(--gold)' }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1" style={{ borderTop: '1px solid var(--gold-10)' }}>
                        <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
