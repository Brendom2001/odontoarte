/* Faixa de especialidades — fundo azul-noite, DM Mono uppercase, pausa no hover */
const especialidades = [
  'Implante Dentário',
  'Clareamento a Laser',
  'Ortodontia',
  'Estética Dental',
  'Limpeza Profissional',
  'Prótese Dentária',
  'Tratamento de Canal',
  'Facetas de Porcelana',
]

function MarqueeItem({ text }) {
  return (
    <>
      <span className="font-mono text-xs md:text-sm text-white uppercase tracking-[0.15em] whitespace-nowrap">
        {text}
      </span>
      <span className="font-mono text-xs md:text-sm text-rosa mx-6" aria-hidden="true">
        ◆
      </span>
    </>
  )
}

export default function MarqueeSection() {
  // Duplica para loop contínuo
  const items = [...especialidades, ...especialidades]

  return (
    <div
      className="py-4 overflow-hidden marquee-wrapper"
      style={{ background: '#0F1923' }}
    >
      <div className="flex animate-marquee">
        {items.map((esp, i) => (
          <MarqueeItem key={i} text={esp} />
        ))}
      </div>
    </div>
  )
}
