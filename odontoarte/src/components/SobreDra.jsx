import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]
const WHATSAPP = 'https://wa.me/5551999266392'

const DRA_IMG =
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80'

export default function SobreDra() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.2, once: true })

  return (
    <section id="sobre" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="flex-shrink-0 w-full md:w-[400px]"
          >
            <div className="relative mx-auto w-[280px] md:w-full">
              {/* Decoração de fundo */}
              <div
                className="absolute -inset-5 rounded-[40px] -rotate-3"
                style={{ background: 'linear-gradient(135deg, #FFE4EF 60%, #FDF6F9 100%)' }}
              />
              <img
                src={DRA_IMG}
                alt="Dra. Kelen — Responsável Técnica Odontoarte"
                className="relative rounded-[28px] w-full object-cover"
                style={{
                  height: 'clamp(320px, 50vw, 500px)',
                  boxShadow: '0 20px 60px rgba(232,67,122,0.15)',
                }}
              />
              {/* Badge experiência */}
              <div
                className="absolute -top-3 -right-3 bg-rosa text-white rounded-2xl px-4 py-2 text-center"
                style={{ boxShadow: '0 8px 24px rgba(232,67,122,0.3)' }}
              >
                <span className="block font-playfair font-bold text-2xl leading-none">10+</span>
                <span className="block font-mono text-[10px] uppercase tracking-wide">Anos</span>
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <div className="flex-1 max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5, ease }}
            >
              <span className="bg-rosa text-white font-mono text-xs uppercase tracking-[0.12em] px-4 py-1.5 rounded-full">
                Responsável Técnica
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6, ease }}
              className="font-playfair font-bold text-texto mt-5 mb-5 leading-tight"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}
            >
              Especialista em transformar sorrisos
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5, ease }}
              className="font-jakarta font-light text-texto-sec leading-relaxed mb-4"
            >
              A Dra. Kelen é cirurgiã-dentista com mais de 10 anos de experiência em odontologia
              estética e reabilitadora. Fundou a Odontoarte em 2014 com uma missão clara: oferecer
              tratamento de excelência com o calor humano que cada paciente merece.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5, ease }}
              className="font-jakarta font-light text-texto-sec leading-relaxed mb-8"
            >
              Especializada em implantodontia, ortodontia e estética dental, ela lidera uma equipe
              comprometida com resultados reais — sempre respeitando o tempo e a história de cada pessoa.
            </motion.p>

            {/* Destaque quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.5, ease }}
              className="border-l-4 border-rosa pl-5 mb-8"
              style={{ borderLeftColor: '#E8437A' }}
            >
              <p className="font-playfair font-bold italic text-texto text-lg leading-snug">
                "Desde 2014, especialistas em cuidar de gente,<br />
                não apenas de dente!"
              </p>
              <cite className="font-mono text-xs text-texto-sec not-italic block mt-2">
                — Dra. Kelen, Odontoarte
              </cite>
            </motion.blockquote>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65, duration: 0.5, ease }}
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-rosa text-rosa font-jakarta font-medium text-base px-7 py-3.5 rounded-full hover:bg-acento transition-colors no-underline"
            >
              Conheça nossa história
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  )
}
