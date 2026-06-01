import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]

const perguntas = [
  {
    q: 'Quero fazer implante dentário, como funciona?',
    a: 'O implante dentário substitui a raiz do dente por um pino de titânio inserido no osso. Na Odontoarte, realizamos avaliação completa com planejamento digital antes de qualquer procedimento. O processo envolve a inserção do implante, período de osseointegração (2-6 meses) e fixação da coroa. É indolor com anestesia e o resultado é natural e duradouro.',
  },
  {
    q: 'O clareamento dental é seguro?',
    a: 'Sim! O clareamento a laser realizado por profissionais é completamente seguro. Utilizamos géis específicos com concentrações controladas e protegemos a gengiva durante o procedimento. A sensibilidade após o tratamento é temporária e passageira. O resultado pode clarear de 4 a 8 tons dependendo da cor natural dos seus dentes.',
  },
  {
    q: 'A Odontoarte atende crianças também?',
    a: 'Sim, atendemos pacientes de todas as idades! Temos cuidado especial com crianças, criando um ambiente acolhedor para que a primeira experiência com o dentista seja positiva. Recomendamos que a primeira consulta infantil seja por volta dos 12 meses de vida ou assim que surgir o primeiro dentinho.',
  },
  {
    q: 'Com que frequência devo fazer limpeza?',
    a: 'Recomendamos a profilaxia (limpeza profissional) a cada 6 meses. Ela remove o tártaro e a placa bacteriana que a escovação diária não consegue eliminar totalmente, prevenindo cáries, gengivite e outros problemas bucais. Pacientes com ortodontia ou histórico de doença gengival podem precisar de limpezas mais frequentes.',
  },
  {
    q: 'Como agendar uma consulta de avaliação?',
    a: 'É simples e rápido! Clique no botão do WhatsApp nesta página e mande uma mensagem para (51) 99926-6392. Nossa equipe responde rapidamente durante o horário comercial e agenda o melhor horário para você. Atendemos de segunda a sexta das 8h às 19h e sábados das 8h às 13h.',
  },
]

function AccordionItem({ pergunta, index, isOpen, onToggle }) {
  return (
    <div
      className="border-b last:border-b-0"
      style={{ borderColor: '#FFE4EF' }}
    >
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-jakarta font-medium text-texto text-base pr-6 group-hover:text-rosa transition-colors">
          {pergunta.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease }}
          className="flex-shrink-0 w-7 h-7 rounded-full bg-acento flex items-center justify-center"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <line x1="6" y1="1" x2="6" y2="11" stroke="#E8437A" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="1" y1="6" x2="11" y2="6" stroke="#E8437A" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            style={{ overflow: 'hidden' }}
          >
            <p className="font-jakarta font-light text-texto-sec text-sm leading-relaxed pb-5 pr-8">
              {pergunta.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.1, once: true })
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { threshold: 0.3, once: true })

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="flex flex-col md:flex-row gap-12 md:gap-20">

          {/* Coluna esquerda — título e intro */}
          <div ref={titleRef} className="md:w-[380px] flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease }}
              className="inline-block mb-5"
            >
              <span className="bg-rosa text-white font-mono text-xs uppercase tracking-[0.12em] px-4 py-1.5 rounded-full">
                Perguntas Frequentes
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.6, ease }}
              className="font-playfair font-bold text-texto leading-tight mb-5"
              style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
            >
              Perguntas{' '}
              <em className="text-rosa" style={{ fontStyle: 'italic' }}>
                &amp; Respostas
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.5, ease }}
              className="font-jakarta font-light text-texto-sec leading-relaxed"
            >
              Ficou com alguma dúvida? Aqui estão as perguntas mais comuns que recebemos.
              Se não encontrar o que procura, fale com a gente pelo WhatsApp.
            </motion.p>
          </div>

          {/* Coluna direita — acordeão */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease }}
            className="flex-1"
          >
            {perguntas.map((pergunta, i) => (
              <AccordionItem
                key={i}
                pergunta={pergunta}
                index={i}
                isOpen={openIndex === i}
                onToggle={toggle}
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
