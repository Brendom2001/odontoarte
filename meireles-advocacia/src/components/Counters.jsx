import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import RevealOnScroll from './RevealOnScroll'

function useCounter(target, duration = 2200, started = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let startTime = null
    const numeric = typeof target === 'number' ? target : parseInt(target.replace(/\D/g, ''))
    const easing = t => 1 - Math.pow(1 - t, 3)

    const step = ts => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      setCount(Math.floor(easing(progress) * numeric))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(numeric)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return count
}

function StatCard({ value, label, prefix = '', suffix = '', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const numeric = parseInt(String(value).replace(/\D/g, ''))
  const count = useCounter(numeric, 2200, inView)

  return (
    <RevealOnScroll delay={delay}>
      <div ref={ref} className="text-center px-6 py-8 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--gold-30))' }} />
        <div className="font-display text-5xl md:text-6xl font-semibold mb-3 tabular-nums" style={{ color: 'var(--gold)' }}>
          {prefix}{count.toLocaleString('pt-BR')}{suffix}
        </div>
        <div className="font-body text-sm tracking-wider uppercase" style={{ color: 'var(--text-secondary)' }}>{label}</div>
      </div>
    </RevealOnScroll>
  )
}

export default function Counters() {
  return (
    <section id="resultados" className="py-24 md:py-32 noise-bg relative"
      style={{ background: 'var(--bg-secondary)' }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--gold-20), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--gold-20), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <RevealOnScroll className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--gold)' }}>
            Nossa Trajetória
          </p>
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: 'var(--text-primary)' }}>
            Números que provam <em className="italic">resultados</em>
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-4"
          style={{ borderLeft: '1px solid var(--gold-12)' }}>
          {[
            { prefix: '+', value: 1200, suffix: '',   label: 'Casos atendidos',  delay: 0 },
            { prefix: '',  value: 12,   suffix: ' anos', label: 'De experiência', delay: 0.1 },
            { prefix: '',  value: 97,   suffix: '%',  label: 'Taxa de êxito',    delay: 0.2 },
            { prefix: 'R$ ', value: 8,  suffix: 'M',  label: 'Recuperados',      delay: 0.3 },
          ].map((s, i) => (
            <div key={i} style={{ borderRight: '1px solid var(--gold-12)' }}>
              <StatCard {...s} />
            </div>
          ))}
        </div>

        <RevealOnScroll delay={0.4} className="mt-16 max-w-2xl mx-auto">
          <div className="pl-6" style={{ borderLeft: '2px solid var(--gold-30)' }}>
            <blockquote className="font-display text-lg md:text-xl italic leading-relaxed mb-4"
              style={{ color: 'var(--text-primary)', opacity: 0.85 }}>
              "Cada processo é uma história de vida. Nosso compromisso é garantir que ela tenha um desfecho justo."
            </blockquote>
            <cite className="font-body text-sm not-italic tracking-wide" style={{ color: 'var(--gold)' }}>
              — Dr. Rafael Meireles, OAB/RS 45.231
            </cite>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
