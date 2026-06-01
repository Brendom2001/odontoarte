import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import MagneticButton from './MagneticButton'

const WHATSAPP = 'https://wa.me/5551999266392'
const HERO_IMG =
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700&auto=format&fit=crop&q=80'

const headline = 'Cuide do seu sorriso com quem realmente se importa'
const words = headline.split(' ')

/* Blob SVG decorativo rosa */
function BlobRosa() {
  return (
    <svg
      className="absolute top-0 right-0 w-[420px] h-[420px] -translate-y-1/4 translate-x-1/4 pointer-events-none"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="#E8437A"
        opacity="0.07"
        d="M318,-66.6C375.1,-10.3,374.9,91.5,327.6,161.8C280.3,232.1,185.8,270.9,97.7,272.5C9.6,274.1,-72.1,238.6,-141.8,181.3C-211.4,124,-269.1,44.9,-267.8,-35.9C-266.5,-116.8,-206.2,-199.3,-133.2,-246.9C-60.2,-294.6,25.5,-307.3,103.4,-285.5C181.4,-263.8,261,-123,318,-66.6Z"
        transform="translate(200 200)"
      />
    </svg>
  )
}

/* Blob SVG decorativo azul secundário */
function BlobAzul() {
  return (
    <svg
      className="absolute bottom-0 left-0 w-[300px] h-[300px] translate-y-1/4 -translate-x-1/4 pointer-events-none"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="#2B6CB0"
        opacity="0.05"
        d="M120.5,-157.6C153.9,-141.5,174.3,-101.3,183.1,-60C192,−18.7,189.2,23.7,173.1,61.1C157.1,98.5,127.8,130.9,91.5,149.8C55.2,168.7,12,174.1,-28.1,165.1C-68.2,156.1,-105.2,132.7,-134.7,100.4C-164.1,68.1,-186.1,26.9,-183.8,-13.2C-181.6,-53.3,-155.2,-92.3,-122.4,-108.9C-89.5,-125.6,-50.2,-119.9,-10.1,-107.3C30,-94.7,87.1,-73.7,120.5,-157.6Z"
        transform="translate(200 200)"
      />
    </svg>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.15, once: true })

  const ease = [0.25, 0.46, 0.45, 0.94]

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: 'linear-gradient(160deg, #FDF6F9 0%, #ffffff 60%)' }}
    >
      <BlobRosa />
      <BlobAzul />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full py-16 md:py-0">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

          {/* Conteúdo de texto */}
          <div className="flex-1 text-center md:text-left max-w-xl">
            {/* Badge Google */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease }}
              className="inline-flex items-center gap-2 bg-acento text-rosa font-mono text-xs font-normal px-4 py-1.5 rounded-full mb-6"
            >
              ⭐ 5,0 no Google · 28 avaliações
            </motion.div>

            {/* Headline palavra a palavra */}
            <h1 className="font-playfair font-bold text-texto leading-tight mb-5"
              style={{ fontSize: 'clamp(38px, 5vw, 62px)' }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.5, ease }}
                  style={{ display: 'inline-block', marginRight: '0.28em' }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.75, duration: 0.5, ease }}
              className="font-jakarta font-light text-texto-sec text-lg leading-relaxed mb-8 max-w-md mx-auto md:mx-0"
            >
              Na Odontoarte, cada sorriso é tratado com atenção única. Desde 2014 cuidando de gente em Sapiranga com carinho, técnica e dedicação.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.85, duration: 0.5, ease }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10"
            >
              <MagneticButton
                href={WHATSAPP}
                target="_blank"
                className="bg-rosa text-white font-jakarta font-medium text-base px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity no-underline inline-block text-center"
              >
                Agendar Consulta
              </MagneticButton>
              <a
                href="#procedimentos"
                className="border-2 border-rosa text-rosa font-jakarta font-medium text-base px-7 py-3.5 rounded-full hover:bg-acento transition-colors no-underline text-center"
              >
                Ver Procedimentos
              </a>
            </motion.div>

            {/* Counters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.95, duration: 0.5, ease }}
              className="flex items-center gap-0 justify-center md:justify-start"
            >
              {[
                { valor: '10+', label: 'Anos' },
                { valor: '2014', label: 'Desde' },
                { valor: '5★', label: 'Google' },
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="text-center px-5 first:pl-0">
                    <span className="block font-playfair font-bold text-rosa text-2xl">
                      {item.valor}
                    </span>
                    <span className="block font-mono text-xs text-texto-sec uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                  {i < 2 && <div className="w-px h-8 bg-acento" />}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease }}
            className="flex-shrink-0 w-full md:w-[440px]"
          >
            <div className="relative mx-auto w-[280px] md:w-full">
              {/* Decoração circular rosa atrás da imagem */}
              <div
                className="absolute -inset-4 rounded-[40px]"
                style={{ background: 'linear-gradient(135deg, #FFE4EF 0%, #FDF6F9 100%)' }}
              />
              <img
                src={HERO_IMG}
                alt="Dra. Kelen — Odontoarte Clínica Odontológica Sapiranga"
                className="relative rounded-[32px] w-full object-cover"
                style={{
                  height: 'clamp(300px, 50vw, 520px)',
                  boxShadow: '0 20px 60px rgba(232,67,122,0.15)',
                }}
              />
              {/* Badge flutuante */}
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
                style={{ boxShadow: '0 8px 32px rgba(232,67,122,0.12)' }}
              >
                <span className="text-2xl">😊</span>
                <div>
                  <p className="font-jakarta font-medium text-texto text-sm leading-tight">Sorriso transformado</p>
                  <p className="font-mono text-xs text-texto-sec">Sapiranga – RS</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
