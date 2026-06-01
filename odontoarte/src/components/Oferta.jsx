import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]
const WHATSAPP = 'https://wa.me/5551999266392'

export default function Oferta() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.3, once: true })

  return (
    <section ref={ref} className="bg-rosa overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Texto */}
          <div className="text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease }}
              className="font-mono text-xs uppercase tracking-[0.15em] text-white/70 mb-2"
            >
              Oferta especial
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6, ease }}
              className="font-playfair font-bold text-white leading-tight"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}
            >
              Consulta de avaliação gratuita este mês
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5, ease }}
              className="font-jakarta font-light text-white/80 mt-2 text-base"
            >
              Agende agora pelo WhatsApp e garanta sua consulta
            </motion.p>
          </div>

          {/* CTA */}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5, ease }}
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex-shrink-0 bg-white text-rosa font-jakarta font-medium text-base px-8 py-4 rounded-full hover:opacity-95 transition-opacity no-underline inline-block text-center"
            style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
          >
            Garantir minha consulta grátis
          </motion.a>

        </div>
      </div>
    </section>
  )
}
