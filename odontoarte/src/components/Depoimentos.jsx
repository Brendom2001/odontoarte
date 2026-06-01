import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]

const depoimentos = [
  {
    texto:
      'Clínica de ótimo atendimento, profissionais muito bons! A Dra. Kelen é super atenciosa e cuidadosa. Me senti muito bem acolhida desde o primeiro dia.',
    nome: 'Ana Paula S.',
    tratamento: 'Clareamento a Laser',
    avatar: 'A',
  },
  {
    texto:
      'Sou de Belo Horizonte e vim até Sapiranga especialmente para fazer meu tratamento na Odontoarte — valeu cada quilômetro! Resultado incrível, atendimento humano e acolhedor.',
    nome: 'Ricardo M.',
    tratamento: 'Implante Dentário',
    avatar: 'R',
  },
  {
    texto:
      'Total cuidado e zelo pelos seus pacientes. A equipe inteira transmite confiança e carinho. Meu sorriso nunca esteve tão bonito. Recomendo de olhos fechados!',
    nome: 'Fernanda L.',
    tratamento: 'Estética Dental',
    avatar: 'F',
  },
]

function Estrelas() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 1L9.85 5.25L14.5 5.97L11.25 9.13L12.05 13.76L8 11.5L3.95 13.76L4.75 9.13L1.5 5.97L6.15 5.25L8 1Z"
            fill="#E8437A"
          />
        </svg>
      ))}
    </div>
  )
}

export default function Depoimentos() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.1, once: true })
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { threshold: 0.3, once: true })

  return (
    <section
      id="depoimentos"
      className="py-24 md:py-32"
      style={{ background: '#FDF6F9' }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div ref={titleRef} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="inline-block mb-5"
          >
            <span className="bg-rosa text-white font-mono text-xs uppercase tracking-[0.12em] px-4 py-1.5 rounded-full">
              O que nossos pacientes dizem
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6, ease }}
            className="font-playfair font-bold text-texto leading-tight"
            style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}
          >
            Sorrisos que falam por si
          </motion.h2>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {depoimentos.map((dep, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 12px 40px rgba(232,67,122,0.12)',
              }}
              className="bg-white rounded-2xl p-7 cursor-default"
              style={{
                border: '1px solid #FFE4EF',
                boxShadow: '0 4px 20px rgba(232,67,122,0.06)',
              }}
            >
              <Estrelas />

              <p className="font-jakarta font-light text-texto-sec leading-relaxed mb-6 text-sm">
                "{dep.texto}"
              </p>

              <div className="flex items-center gap-3">
                {/* Avatar inicial */}
                <div className="w-10 h-10 rounded-full bg-rosa flex items-center justify-center flex-shrink-0">
                  <span className="font-playfair font-bold text-white text-sm">
                    {dep.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-jakarta font-medium text-texto text-sm">{dep.nome}</p>
                  <p className="font-mono text-[11px] text-texto-sec">{dep.tratamento}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badge Google */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5, ease }}
          className="flex justify-center mt-10"
        >
          <div
            className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-3"
            style={{ boxShadow: '0 4px 20px rgba(232,67,122,0.1)', border: '1px solid #FFE4EF' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="font-jakarta font-medium text-texto text-sm">
              5,0 estrelas · 28 avaliações no Google
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
