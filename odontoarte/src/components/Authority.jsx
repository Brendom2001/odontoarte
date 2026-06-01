import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]

/* Counter animado com rAF + cubic ease-out */
function useCounter(end, duration = 2000, active) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active || end === null) return
    const startTime = performance.now()
    const easeOut = (t) => 1 - Math.pow(1 - t, 3)
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setCount(Math.round(easeOut(progress) * end))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, end, duration])
  return count
}

/* Blob SVG azul decorativo */
function BlobAzulDark() {
  return (
    <svg
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="#2B6CB0"
        opacity="0.05"
        d="M300,-450C383.7,-450 450,-383.7 450,-300C450,-216.3 383.7,-150 300,-150C216.3,-150 150,-216.3 150,-300C150,-383.7 216.3,-450 300,-450Z"
        transform="translate(300 300)"
      />
    </svg>
  )
}

function Metrica({ valor, numerico, sufixo, label, active, delay }) {
  const count = useCounter(numerico, 2000, active)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease }}
      className="text-center px-6 md:px-10"
    >
      <div
        className="font-playfair font-bold text-rosa mb-2"
        style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}
      >
        {numerico !== null ? `${count}${sufixo}` : valor}
      </div>
      <div className="font-mono text-xs text-white/50 uppercase tracking-[0.15em]">
        {label}
      </div>
    </motion.div>
  )
}

const metricas = [
  { valor: null, numerico: 10, sufixo: '+', label: 'Anos de experiência' },
  { valor: null, numerico: 28, sufixo: '', label: 'Avaliações 5★' },
  { valor: '100%', numerico: null, sufixo: '', label: 'Comprometimento' },
  { valor: 'Dra. Kelen', numerico: null, sufixo: '', label: 'À frente da clínica' },
]

export default function Authority() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.3, once: true })

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#0F1923' }}
    >
      <BlobAzulDark />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="inline-block mb-6"
        >
          <span className="bg-rosa text-white font-mono text-xs uppercase tracking-[0.12em] px-4 py-1.5 rounded-full">
            Números que Falam
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6, ease }}
          className="font-playfair font-bold text-white mb-16 leading-tight"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
        >
          A confiança de Sapiranga desde 2014
        </motion.h2>

        {/* Métricas */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-0 flex-wrap">
          {metricas.map((m, i) => (
            <div key={i} className="flex items-center">
              <Metrica
                {...m}
                active={inView}
                delay={0.3 + i * 0.1}
              />
              {i < metricas.length - 1 && (
                <div className="hidden sm:block w-px h-16 bg-white/10 mx-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
