import { motion } from 'framer-motion'
import RevealOnScroll from './RevealOnScroll'

const credenciais = [
  'OAB/RS 45.231',
  'Pós-graduado em Direito do Trabalho — PUC/RS',
  'Ex-assessor jurídico TRT-RS (4ª Região)',
  'Membro da Comissão de Direito do Trabalho — OAB/RS',
  'Docente convidado em cursos de pós-graduação',
]

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 md:py-32 noise-bg relative"
      style={{ background: 'var(--bg-primary)' }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--gold-15), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <RevealOnScroll y={40}>
            <div className="relative">
              <div className="aspect-[3/4] flex items-center justify-center relative overflow-hidden max-w-sm mx-auto lg:mx-0"
                style={{ border: '1px solid var(--gold-10)', background: 'var(--bg-secondary)' }}>
                <div className="text-center z-10">
                  <div className="w-28 h-28 flex items-center justify-center mx-auto mb-4"
                    style={{ border: '1px solid var(--gold-30)' }}>
                    <span className="font-display text-4xl font-medium" style={{ color: 'var(--gold)' }}>RM</span>
                  </div>
                  <p className="font-body text-sm tracking-wide" style={{ color: 'var(--text-secondary)' }}>Dr. Rafael Meireles</p>
                  <p className="font-body text-xs tracking-[0.2em] uppercase mt-1" style={{ color: 'var(--gold)' }}>OAB/RS 45.231</p>
                </div>
                <div className="absolute top-4 left-4 w-8 h-8" style={{ borderTop: '1px solid var(--gold-25)', borderLeft: '1px solid var(--gold-25)' }} />
                <div className="absolute bottom-4 right-4 w-8 h-8" style={{ borderBottom: '1px solid var(--gold-25)', borderRight: '1px solid var(--gold-25)' }} />
              </div>
              <div className="absolute -left-3 top-8 bottom-8 w-px hidden lg:block"
                style={{ background: 'linear-gradient(to bottom, transparent, var(--gold-40), transparent)' }} />
            </div>
          </RevealOnScroll>

          <div>
            <RevealOnScroll delay={0.1}>
              <p className="font-body text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--gold)' }}>
                Sobre o Escritório
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-3 leading-tight" style={{ color: 'var(--text-primary)' }}>
                Dr. Rafael Meireles
              </h2>
              <p className="font-display text-lg italic mb-6" style={{ color: 'var(--text-secondary)' }}>
                Mais de uma década ao lado do trabalhador
              </p>
              <motion.div className="h-px w-14 mb-8"
                style={{ background: 'var(--gold)', transformOrigin: 'left' }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
              />
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="font-body text-[15px] leading-[1.9] space-y-4 mb-8" style={{ color: 'var(--text-secondary)' }}>
                <p>
                  Com formação pela Faculdade de Direito da UFRGS e especialização em Direito do Trabalho pela PUC/RS, Dr. Rafael Meireles construiu uma carreira sólida ao lado de quem mais precisa: o trabalhador.
                </p>
                <p>
                  Antes de fundar o Meireles & Associados, atuou como assessor jurídico no Tribunal Regional do Trabalho da 4ª Região, experiência que lhe deu uma visão única sobre como os processos funcionam por dentro.
                </p>
                <p>
                  Hoje, lidera uma equipe de advogados especializados com o mesmo compromisso:{' '}
                  <span style={{ color: 'var(--text-primary)' }}>rigor técnico e humanidade no trato com cada cliente.</span>
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <div className="space-y-3">
                {credenciais.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: 'var(--gold)' }} />
                    <span className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>{c}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
