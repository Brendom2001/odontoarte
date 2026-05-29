import { motion } from 'framer-motion'
import RevealOnScroll from './RevealOnScroll'

const depoimentos = [
  { initials: 'CM', name: 'Carlos Mendonça', city: 'Porto Alegre, RS', caso: 'Rescisão indireta',   text: 'Trabalhei 8 anos sendo desrespeitado. O Dr. Rafael conseguiu minha indenização por rescisão indireta em menos de um ano. Profissionalismo impecável.' },
  { initials: 'AF', name: 'Amanda Ferreira', city: 'Canoas, RS',       caso: 'Assédio moral',       text: 'Passei anos sofrendo assédio moral e achei que não tinha saída. Com o escritório Meireles & Associados, recebi a reparação que merecia.' },
  { initials: 'RP', name: 'Roberto Pinheiro', city: 'Novo Hamburgo, RS', caso: 'Horas extras',      text: 'Fiz horas extras por anos sem receber nada. O escritório levantou tudo e consegui receber retroativos dos últimos 5 anos. Excelente trabalho.' },
  { initials: 'LS', name: 'Luciana Santos',  city: 'Porto Alegre, RS', caso: 'Acidente de trabalho', text: 'Sofri um acidente e a empresa queria me deixar na mão. O Dr. Meireles garantiu minha estabilidade e a indenização devida. Recomendo a todos.' },
  { initials: 'MO', name: 'Marcos Oliveira', city: 'São Leopoldo, RS', caso: 'FGTS não depositado', text: 'Descobri que meu FGTS não era depositado há anos. Recuperei tudo com correção monetária. Atendimento humanizado e resultado excelente.' },
  { initials: 'PC', name: 'Patrícia Costa',  city: 'Porto Alegre, RS', caso: 'Justa causa revertida', text: 'Fui demitida por justa causa sem motivo. Em 8 meses, a demissão foi revertida e recebi todas as verbas. Equipe altamente competente.' },
]

const doubled = [...depoimentos, ...depoimentos]

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 12 12" fill="var(--gold)" className="w-3 h-3">
          <path d="M6 0l1.5 4.5H12L8.5 7.5 10 12 6 9.5 2 12l1.5-4.5L0 4.5h4.5z" />
        </svg>
      ))}
    </div>
  )
}

function Avatar({ initials }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0"
      style={{ border: '1px solid var(--gold-30)', background: 'var(--bg-secondary)' }}>
      <span className="font-display text-xs font-semibold" style={{ color: 'var(--gold)' }}>{initials}</span>
    </div>
  )
}

export default function Depoimentos() {
  return (
    <section className="py-24 md:py-28 noise-bg relative overflow-hidden"
      style={{ background: 'var(--bg-alt)' }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--gold-15), transparent)' }} />

      <RevealOnScroll className="text-center mb-14 px-6">
        <p className="font-body text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--gold)' }}>
          Depoimentos
        </p>
        <h2 className="font-display text-3xl md:text-4xl" style={{ color: 'var(--text-primary)' }}>
          O que nossos clientes <em className="italic">dizem</em>
        </h2>
        <motion.div className="h-px w-14 mx-auto mt-5"
          style={{ background: 'var(--gold)', transformOrigin: 'left' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
        />
      </RevealOnScroll>

      <div className="overflow-hidden">
        <div className="marquee-track flex gap-5 w-max">
          {doubled.map((d, i) => (
            <div key={i} className="w-[320px] flex-shrink-0 p-7 transition-all duration-300"
              style={{ border: '1px solid var(--gold-12)', background: 'var(--bg-card)' }}>
              <Stars />
              <p className="font-body text-sm leading-relaxed mb-6 line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
                "{d.text}"
              </p>
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--gold-10)' }}>
                <Avatar initials={d.initials} />
                <div>
                  <div className="font-body text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{d.name}</div>
                  <div className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>{d.city} · {d.caso}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--bg-alt), transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--bg-alt), transparent)' }} />
    </section>
  )
}
