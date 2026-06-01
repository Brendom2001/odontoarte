import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import MagneticButton from './MagneticButton'

const ease = [0.25, 0.46, 0.45, 0.94]
const WHATSAPP = 'https://wa.me/5551999266392'

/* Ícone WhatsApp SVG inline */
function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

/* Blob decorativo */
function BlobFinal() {
  return (
    <svg
      className="absolute bottom-0 right-0 w-[400px] h-[400px] translate-x-1/3 translate-y-1/3 pointer-events-none"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="200" cy="200" rx="200" ry="180" fill="#E8437A" opacity="0.04"/>
    </svg>
  )
}

export default function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.3, once: true })

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-36 overflow-hidden text-center"
      style={{ background: '#0F1923' }}
    >
      <BlobFinal />

      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="inline-block mb-6"
        >
          <span className="bg-rosa text-white font-mono text-xs uppercase tracking-[0.12em] px-4 py-1.5 rounded-full">
            Comece hoje
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6, ease }}
          className="font-playfair font-bold text-white leading-tight mb-5"
          style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
        >
          Comece hoje seu<br />
          <span className="text-rosa">novo sorriso</span>
        </motion.h2>

        {/* Subtexto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.5, ease }}
          className="font-jakarta font-light text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto"
        >
          Um simples clique separa você de um sorriso mais bonito e saudável.
          Nossa equipe está pronta para te receber com todo o cuidado.
        </motion.p>

        {/* CTA WhatsApp */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.35, duration: 0.5, ease }}
        >
          <MagneticButton
            href={WHATSAPP}
            target="_blank"
            className="inline-flex items-center gap-3 text-white font-jakarta font-medium text-lg px-10 py-5 rounded-full transition-opacity hover:opacity-90 no-underline"
            style={{ background: '#25D366', boxShadow: '0 16px 48px rgba(37,211,102,0.25)' }}
          >
            <WhatsAppIcon />
            Agendar pelo WhatsApp
          </MagneticButton>
        </motion.div>

        {/* Info adicional */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="font-mono text-xs text-white/30 mt-6 uppercase tracking-wider"
        >
          (51) 99926-6392 · R. Afonso Pena, 49 – Centro, Sapiranga – RS
        </motion.p>
      </div>
    </section>
  )
}
