import { motion } from 'framer-motion'
import RevealOnScroll from './RevealOnScroll'

const servicos = [
  { icon: '⚖', title: 'Rescisão Contratual',       desc: 'Aviso prévio, férias proporcionais, 13º salário, multa do FGTS e todas as verbas rescisórias devidas.' },
  { icon: '🛡', title: 'Assédio e Dano Moral',       desc: 'Ambientes de trabalho hostis, humilhações, discriminação e reparação por danos à dignidade do trabalhador.' },
  { icon: '⏱', title: 'Horas Extras e Adicionais',  desc: 'Cobrança de horas extras, adicional noturno, periculosidade, insalubridade e intervalos suprimidos.' },
  { icon: '🏥', title: 'Acidente de Trabalho',       desc: 'Indenização por lesões, doenças ocupacionais, desvio de função e reintegração com estabilidade acidentária.' },
  { icon: '📋', title: 'Estabilidade no Emprego',    desc: 'Proteção de gestantes, membros de CIPA, portadores de doenças graves e reintegração ao emprego.' },
  { icon: '💰', title: 'Revisão de FGTS e INSS',     desc: 'Levantamento de depósitos em atraso, correção monetária e regularização da situação previdenciária.' },
]

export default function Servicos() {
  return (
    <section id="servicos" className="py-24 md:py-32 noise-bg relative"
      style={{ background: 'var(--bg-secondary)' }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--gold-15), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <RevealOnScroll className="mb-16">
          <div className="flex items-start gap-8 flex-wrap justify-between">
            <div>
              <p className="font-body text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--gold)' }}>
                Especialidades
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl" style={{ color: 'var(--text-primary)' }}>
                Áreas de Atuação
              </h2>
              <motion.div
                className="h-px w-14 mt-5"
                style={{ background: 'var(--gold)', transformOrigin: 'left' }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
              />
            </div>
            <p className="font-body text-sm leading-relaxed max-w-xs self-end" style={{ color: 'var(--text-secondary)' }}>
              Atuação focada e especializada em todas as vertentes do direito trabalhista.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicos.map((s, i) => (
            <RevealOnScroll key={i} delay={0.1 + i * 0.08}>
              <motion.div
                className="p-8 relative group overflow-hidden cursor-default"
                style={{ border: '1px solid var(--gold-10)', background: 'var(--bg-primary)' }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px var(--gold-12)' }}
                transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(135deg, var(--gold-10), transparent)' }} />

                <motion.div
                  className="text-2xl mb-5 grayscale group-hover:grayscale-0 transition-all duration-300"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                >
                  {s.icon}
                </motion.div>
                <h3 className="font-display text-xl mb-3" style={{ color: 'var(--text-primary)' }}>{s.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{s.desc}</p>

                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-body text-xs tracking-wider" style={{ color: 'var(--gold)' }}>Saiba mais</span>
                  <svg viewBox="0 0 16 16" fill="none" strokeWidth="1.2" className="w-3 h-3" style={{ stroke: 'var(--gold)' }}>
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
