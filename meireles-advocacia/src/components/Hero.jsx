import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import MagneticButton from './MagneticButton'

const headline = 'Seus Direitos Trabalhistas Foram Violados?'
const words = headline.split(' ')
const easing = [0.76, 0, 0.24, 1]

function JusticeSVG() {
  const pathProps = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: { duration: 2.5, ease: 'easeInOut', delay: 0.3 },
  }
  return (
    <motion.svg
      viewBox="0 0 200 220"
      fill="none"
      stroke="var(--gold)"
      strokeWidth="0.8"
      className="w-[400px] h-[440px] absolute right-[-40px] top-1/2 -translate-y-1/2 hidden lg:block"
      style={{ opacity: 0.07 }}
    >
      <motion.line x1="100" y1="20" x2="100" y2="190" {...pathProps} />
      <motion.line x1="60"  y1="190" x2="140" y2="190" {...pathProps} />
      <motion.line x1="40"  y1="50" x2="160" y2="50"  {...pathProps} />
      <motion.line x1="100" y1="20" x2="100" y2="50"  {...pathProps} />
      <motion.line x1="40"  y1="50" x2="30"  y2="90"  {...pathProps} />
      <motion.line x1="160" y1="50" x2="170" y2="90"  {...pathProps} />
      <motion.path d="M15,90 Q30,110 45,90"  {...pathProps} />
      <motion.path d="M155,90 Q170,110 185,90" {...pathProps} />
      <motion.circle cx="100" cy="18" r="4"  {...pathProps} />
      <motion.line x1="60"  y1="190" x2="50"  y2="205" {...pathProps} />
      <motion.line x1="140" y1="190" x2="150" y2="205" {...pathProps} />
      <motion.circle cx="100" cy="50" r="3"  {...pathProps} />
      <motion.line x1="40"  y1="50" x2="40"  y2="55" {...pathProps} />
      <motion.line x1="160" y1="50" x2="160" y2="55" {...pathProps} />
    </motion.svg>
  )
}

export default function Hero() {
  const { scrollY } = useScroll()
  const bgY      = useTransform(scrollY, [0, 600], ['0%', '30%'])
  const overlayY = useTransform(scrollY, [0, 600], ['0%', '12%'])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden noise-bg">
      {/* Parallax bg layer */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 60% 40%, var(--gold-10) 0%, transparent 70%)',
        }} />
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-1/4 left-0 right-0 h-px" style={{ background: 'var(--gold)' }} />
          <div className="absolute top-3/4 left-0 right-0 h-px" style={{ background: 'var(--gold)' }} />
          <div className="absolute left-1/4 top-0 bottom-0 w-px"  style={{ background: 'var(--gold)' }} />
        </div>
      </motion.div>

      {/* Overlay */}
      <motion.div
        style={{ y: overlayY }}
        className="absolute inset-0 z-[1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(90deg, var(--bg-primary) 0%, color-mix(in srgb, var(--bg-primary) 95%, transparent) 60%, color-mix(in srgb, var(--bg-primary) 60%, transparent) 100%)',
        }} />
      </motion.div>

      {/* Justice SVG */}
      <div className="absolute right-0 top-0 bottom-0 z-[2] flex items-center">
        <JusticeSVG />
      </div>

      {/* Content */}
      <div className="relative z-[3] max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20 w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-px" style={{ background: 'var(--gold)' }} />
          <span className="font-body text-xs tracking-[0.25em] uppercase" style={{ color: 'var(--gold)' }}>
            Advocacia Trabalhista · Porto Alegre
          </span>
        </motion.div>

        {/* Headline — stagger words */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] max-w-3xl mb-6"
          style={{ color: 'var(--text-primary)' }}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.25em]"
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.6, ease: easing }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6, ease: easing }}
          className="font-body text-base md:text-lg leading-relaxed max-w-xl mb-10"
          style={{ color: 'var(--text-secondary)' }}
        >
          Há mais de 12 anos defendendo trabalhadores em Porto Alegre.{' '}
          <span style={{ color: 'var(--text-primary)' }}>Consulta inicial gratuita</span> e sem compromisso.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.85, ease: easing }}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          <MagneticButton
            href="https://wa.me/5551999990000?text=Olá,%20gostaria%20de%20uma%20consulta%20gratuita."
            target="_blank"
            className="px-8 py-4 font-body font-semibold text-sm tracking-wide transition-colors duration-300 inline-flex items-center gap-2"
            style={{ background: 'var(--gold)', color: 'var(--gold-cta-text)' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar no WhatsApp
          </MagneticButton>

          <MagneticButton
            href="#servicos"
            className="px-8 py-4 font-body text-sm tracking-wide transition-colors duration-300 inline-block"
            style={{ border: '1px solid var(--gold-40)', color: 'var(--gold)' }}
          >
            Conheça nosso trabalho
          </MagneticButton>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.1, ease: easing }}
          className="flex flex-wrap gap-5"
        >
          {['Sem custo inicial', 'Atendimento online', '+1.200 casos'].map(badge => (
            <div key={badge} className="flex items-center gap-2">
              <span className="text-xs" style={{ color: 'var(--gold)' }}>✓</span>
              <span className="font-body text-xs tracking-wide" style={{ color: 'var(--text-secondary)' }}>{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 z-[4] pointer-events-none"
        style={{ background: 'linear-gradient(to top, var(--bg-primary), transparent)' }} />
    </section>
  )
}
