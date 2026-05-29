import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'
import RevealOnScroll from './RevealOnScroll'

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 noise-bg relative overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--gold-20), transparent)' }} />
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04]">
        <div className="absolute left-1/2 top-0 bottom-0 w-px" style={{ background: 'var(--gold)' }} />
        <div className="absolute left-1/4 top-0 bottom-0 w-px" style={{ background: 'var(--gold)' }} />
        <div className="absolute left-3/4 top-0 bottom-0 w-px" style={{ background: 'var(--gold)' }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <RevealOnScroll>
          <div className="w-14 h-px mx-auto mb-10" style={{ background: 'var(--gold)' }} />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-4"
            style={{ color: 'var(--text-primary)' }}>
            Não deixe seus direitos
          </h2>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl italic leading-[1.05] mb-8"
            style={{ color: 'var(--gold)' }}>
            prescreverem.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <p className="font-body text-base md:text-lg leading-relaxed mb-12 max-w-xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}>
            Fale agora com um advogado especialista. O prazo corre — cada dia conta.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.25} className="flex flex-wrap justify-center gap-4">
          <MagneticButton
            href="https://wa.me/5551999990000?text=Olá,%20quero%20falar%20com%20um%20advogado."
            target="_blank"
            className="px-10 py-5 font-body font-semibold text-sm tracking-wide transition-colors duration-300 inline-flex items-center gap-3"
            style={{ background: 'var(--gold)', color: 'var(--gold-cta-text)' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar no WhatsApp
          </MagneticButton>

          <MagneticButton
            href="tel:+5551999990000"
            className="px-10 py-5 font-body text-sm tracking-wide transition-all duration-300 inline-flex items-center gap-3"
            style={{ border: '1px solid var(--gold-35)', color: 'var(--gold)' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.08 9.81 19.79 19.79 0 01.07 1.16 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
            </svg>
            Ligar agora
          </MagneticButton>
        </RevealOnScroll>

        <RevealOnScroll delay={0.35} className="mt-12">
          <div className="w-14 h-px mx-auto" style={{ background: 'var(--gold-30)' }} />
        </RevealOnScroll>
      </div>
    </section>
  )
}
