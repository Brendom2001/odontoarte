import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]
const MAPS_URL = 'https://maps.google.com/?q=R.+Afonso+Pena,+49,+Centro,+Sapiranga,+RS'
const MAPS_EMBED =
  'https://maps.google.com/maps?q=R.+Afonso+Pena+49+Sapiranga+RS&t=&z=15&ie=UTF8&iwloc=&output=embed'

const horarios = [
  { dia: 'Segunda a Sexta', hora: '08:00 – 19:00' },
  { dia: 'Sábado', hora: '08:00 – 13:00' },
  { dia: 'Domingo', hora: 'Fechado' },
]

/* Ícones SVG inline de localização e horário */
function IconPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2C6.69 2 4 4.69 4 8C4 12.5 10 18 10 18C10 18 16 12.5 16 8C16 4.69 13.31 2 10 2Z" stroke="#E8437A" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="10" cy="8" r="2.5" stroke="#E8437A" strokeWidth="1.5"/>
    </svg>
  )
}

function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.5" stroke="#E8437A" strokeWidth="1.5"/>
      <path d="M10 6V10L13 12" stroke="#E8437A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Localizacao() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.1, once: true })

  return (
    <section id="contato" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

          {/* Informações */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="md:w-[340px] flex-shrink-0"
          >
            {/* Label */}
            <span className="bg-rosa text-white font-mono text-xs uppercase tracking-[0.12em] px-4 py-1.5 rounded-full inline-block mb-6">
              Localização
            </span>

            <h2 className="font-playfair font-bold text-texto leading-tight mb-8"
              style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}
            >
              Venha nos visitar em Sapiranga
            </h2>

            {/* Endereço */}
            <div className="flex items-start gap-3 mb-6">
              <div className="mt-0.5 flex-shrink-0">
                <IconPin />
              </div>
              <div>
                <p className="font-jakarta font-medium text-texto text-sm mb-0.5">Endereço</p>
                <p className="font-jakarta font-light text-texto-sec text-sm leading-relaxed">
                  R. Afonso Pena, 49 – Centro<br />
                  Sapiranga – RS, 93800-246
                </p>
              </div>
            </div>

            {/* Horários */}
            <div className="flex items-start gap-3 mb-8">
              <div className="mt-0.5 flex-shrink-0">
                <IconClock />
              </div>
              <div className="w-full">
                <p className="font-jakarta font-medium text-texto text-sm mb-3">Horário de Funcionamento</p>
                {horarios.map((h) => (
                  <div key={h.dia} className="flex justify-between items-center py-1.5 border-b last:border-b-0"
                    style={{ borderColor: '#FFE4EF' }}
                  >
                    <span className="font-jakarta font-light text-texto-sec text-sm">{h.dia}</span>
                    <span
                      className="font-mono text-xs"
                      style={{ color: h.hora === 'Fechado' ? '#6B7280' : '#E8437A' }}
                    >
                      {h.hora}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Maps */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-rosa text-white font-jakarta font-medium text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity no-underline"
            >
              <IconPin />
              Ver no Google Maps
            </a>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease }}
            className="flex-1 w-full"
          >
            <div
              className="w-full rounded-3xl overflow-hidden"
              style={{
                height: 'clamp(300px, 45vw, 440px)',
                boxShadow: '0 20px 60px rgba(43,108,176,0.15)',
              }}
            >
              <iframe
                title="Odontoarte no Google Maps"
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
