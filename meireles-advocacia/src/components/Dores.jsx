import { motion } from 'framer-motion'
import RevealOnScroll from './RevealOnScroll'

const dores = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6"><path d="M9 14l-4-4 4-4M5 10h14M15 10l4 4-4 4" /></svg>,
    title: 'Demitido sem receber todas as verbas',
    desc: 'Rescisão incompleta, saldo de salário retido ou FGTS não sacado.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6"><path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /></svg>,
    title: 'Assédio moral ou sexual no trabalho',
    desc: 'Ambiente hostil, humilhações ou situações constrangedoras.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
    title: 'Horas extras não pagas',
    desc: 'Trabalhou além da jornada sem receber a remuneração devida.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>,
    title: 'FGTS não depositado',
    desc: 'Empresa não realizou os depósitos mensais obrigatórios do FGTS.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M9 11l3 3L22 4" /></svg>,
    title: 'Acidente de trabalho sem suporte',
    desc: 'Sofreu acidente e a empresa não tomou as providências necessárias.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>,
    title: 'Demissão por justa causa injusta',
    desc: 'Dispensado com justa causa sem motivo legítimo ou provas.',
  },
]

export default function Dores() {
  return (
    <section id="dores" className="py-24 md:py-32 noise-bg relative overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--gold-20), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <RevealOnScroll className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--gold)' }}>
            Reconhece alguma situação?
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4" style={{ color: 'var(--text-primary)' }}>
            Você está passando por alguma<br />
            <em className="italic">dessas situações?</em>
          </h2>
          <div className="w-14 h-px mx-auto mt-5" style={{ background: 'var(--gold)' }} />
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dores.map((item, i) => (
            <RevealOnScroll key={i} delay={0.05 + i * 0.05}>
              <motion.div
                className="p-7 group relative overflow-hidden"
                style={{ border: '1px solid var(--gold-10)', background: 'var(--bg-card)' }}
                whileHover={{ scale: 1.025, boxShadow: '0 0 30px var(--gold-12)' }}
                transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              >
                <div className="absolute top-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(90deg, transparent, var(--gold-40), transparent)' }} />

                <motion.div
                  className="mb-4"
                  style={{ color: 'var(--gold)' }}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="font-display text-lg mb-2 leading-snug" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.desc}
                </p>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.4} className="mt-12 text-center">
          <p className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
            Se identificou com alguma dessas situações?{' '}
            <a
              href="https://wa.me/5551999990000"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 transition-colors duration-300"
              style={{ color: 'var(--gold)', textDecorationColor: 'var(--gold-40)' }}
            >
              Fale agora com nossa equipe.
            </a>
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
