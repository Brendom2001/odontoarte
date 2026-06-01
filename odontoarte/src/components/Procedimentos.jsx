import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]
const WHATSAPP = 'https://wa.me/5551999266392'

/* Ícones SVG inline — criados do zero sem biblioteca */
const icons = {
  implante: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="13" y="2" width="6" height="12" rx="3" fill="#E8437A" opacity="0.2"/>
      <rect x="14.5" y="2" width="3" height="14" rx="1.5" fill="#E8437A"/>
      <path d="M10 16H22L20 30H12L10 16Z" fill="#E8437A" opacity="0.15" stroke="#E8437A" strokeWidth="1.5" strokeLinejoin="round"/>
      <line x1="16" y1="18" x2="16" y2="28" stroke="#E8437A" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  clareamento: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="7" fill="#E8437A" opacity="0.15" stroke="#E8437A" strokeWidth="1.5"/>
      <circle cx="16" cy="16" r="3" fill="#E8437A"/>
      <line x1="16" y1="4" x2="16" y2="7" stroke="#E8437A" strokeWidth="2" strokeLinecap="round"/>
      <line x1="16" y1="25" x2="16" y2="28" stroke="#E8437A" strokeWidth="2" strokeLinecap="round"/>
      <line x1="4" y1="16" x2="7" y2="16" stroke="#E8437A" strokeWidth="2" strokeLinecap="round"/>
      <line x1="25" y1="16" x2="28" y2="16" stroke="#E8437A" strokeWidth="2" strokeLinecap="round"/>
      <line x1="7.8" y1="7.8" x2="9.9" y2="9.9" stroke="#E8437A" strokeWidth="2" strokeLinecap="round"/>
      <line x1="22.1" y1="22.1" x2="24.2" y2="24.2" stroke="#E8437A" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  ortodontia: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 14C6 10 8 8 11 8C13 8 14.5 9 16 9C17.5 9 19 8 21 8C24 8 26 10 26 14C26 18 24 24 21 24C19.5 24 18 22 16 22C14 22 12.5 24 11 24C8 24 6 18 6 14Z" fill="#E8437A" opacity="0.12" stroke="#E8437A" strokeWidth="1.5"/>
      <line x1="8" y1="16" x2="24" y2="16" stroke="#E8437A" strokeWidth="1.5"/>
      <circle cx="11" cy="16" r="2" fill="#E8437A"/>
      <circle cx="16" cy="16" r="2" fill="#E8437A"/>
      <circle cx="21" cy="16" r="2" fill="#E8437A"/>
    </svg>
  ),
  estetica: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4C16 4 8 9 8 16C8 20.4 11.6 24 16 24C20.4 24 24 20.4 24 16C24 9 16 4 16 4Z" fill="#E8437A" opacity="0.15" stroke="#E8437A" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M12 17C12 17 13.5 20 16 20C18.5 20 20 17 20 17" stroke="#E8437A" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="13" cy="14" r="1.5" fill="#E8437A"/>
      <circle cx="19" cy="14" r="1.5" fill="#E8437A"/>
      <path d="M22 5L25 2M24 8L28 7M20 3L21 0" stroke="#E8437A" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  limpeza: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 8C8 8 10 6 16 6C22 6 24 8 24 8L22 26C22 26 20 28 16 28C12 28 10 26 10 26L8 8Z" fill="#E8437A" opacity="0.12" stroke="#E8437A" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M8 12H24" stroke="#E8437A" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 16H23" stroke="#E8437A" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 20H22" stroke="#E8437A" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 24H20" stroke="#E8437A" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  protese: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12C4 9 6 7 9 7C11 7 12.5 8.5 14 8.5H18C19.5 8.5 21 7 23 7C26 7 28 9 28 12C28 15 26 19 24 22C22.5 24 21 25 18 25C16.5 25 15.5 24 14 24C12.5 24 11.5 25 10 25C7 25 5.5 24 4 22C2 19 0 15 4 12Z" fill="none" stroke="#E8437A" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M4 12H28" stroke="#E8437A" strokeWidth="1.5"/>
      <path d="M9 7V12M14 8.5V12M18 8.5V12M23 7V12" stroke="#E8437A" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
}

const procedimentos = [
  {
    id: 'implante',
    nome: 'Implante Dentário',
    desc: 'Substitua dentes perdidos com naturalidade e conforto. Tecnologia de ponta para um resultado duradouro.',
    badge: 'Mais Procurado',
    badgeColor: 'bg-rosa',
  },
  {
    id: 'clareamento',
    nome: 'Clareamento a Laser',
    desc: 'Dentes brancos em uma sessão. Clareamento seguro, eficaz e com resultado imediato e duradouro.',
    badge: null,
  },
  {
    id: 'ortodontia',
    nome: 'Ortodontia',
    desc: 'Aparelhos convencionais e alinhadores invisíveis para o sorriso que você sempre sonhou.',
    badge: 'Invisível Disponível',
    badgeColor: 'bg-azul',
  },
  {
    id: 'estetica',
    nome: 'Estética Dental',
    desc: 'Facetas, lentes de contato e recontorno para transformar o seu sorriso com precisão artística.',
    badge: null,
  },
  {
    id: 'limpeza',
    nome: 'Limpeza Profissional',
    desc: 'Profilaxia completa que remove tártaro e placa bacteriana, mantendo sua saúde bucal em dia.',
    badge: null,
  },
  {
    id: 'protese',
    nome: 'Prótese Dentária',
    desc: 'Próteses fixas e removíveis com alta estética e função. Devolvemos seu sorriso com dignidade.',
    badge: null,
  },
]

/* Variante de scroll reveal para os cards */
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.6, ease },
  }),
}

export default function Procedimentos() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.1, once: true })
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { threshold: 0.3, once: true })

  return (
    <section id="procedimentos" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header da seção */}
        <div ref={titleRef} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="inline-block"
          >
            <span className="bg-rosa text-white font-mono text-xs uppercase tracking-[0.12em] px-4 py-1.5 rounded-full">
              Nossos Serviços
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6, ease }}
            className="font-playfair font-bold text-texto mt-5 leading-tight"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
          >
            O que fazemos{' '}
            <em className="italic text-rosa not-italic font-bold" style={{ fontStyle: 'italic' }}>
              com cuidado e precisão
            </em>
          </motion.h2>
        </div>

        {/* Grid de cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {procedimentos.map((proc, i) => (
            <motion.div
              key={proc.id}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 16px 48px rgba(232,67,122,0.18)',
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
              className="bg-white rounded-2xl p-7 border cursor-default"
              style={{ borderColor: '#FFE4EF' }}
            >
              {/* Ícone + badge */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: '#FDF6F9' }}
                >
                  {icons[proc.id]}
                </div>
                {proc.badge && (
                  <span
                    className={`${proc.badgeColor} text-white font-mono text-[10px] uppercase tracking-wide px-3 py-1 rounded-full`}
                  >
                    {proc.badge}
                  </span>
                )}
              </div>

              <h3 className="font-playfair font-bold text-texto text-lg mb-2">
                {proc.nome}
              </h3>
              <p className="font-jakarta font-light text-texto-sec text-sm leading-relaxed">
                {proc.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5, ease }}
          className="text-center mt-12"
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-rosa text-rosa font-jakarta font-medium text-base px-8 py-3.5 rounded-full hover:bg-acento transition-colors no-underline"
          >
            Ver todos os procedimentos
          </a>
        </motion.div>

      </div>
    </section>
  )
}
