import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScroll } from 'framer-motion'
import MagneticButton from './MagneticButton'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'Sobre',      href: '#sobre' },
  { label: 'Serviços',   href: '#servicos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Contato',    href: '#contato' },
]

function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.92 }}
      className="w-9 h-9 flex items-center justify-center border transition-colors duration-300"
      style={{
        borderColor: 'var(--gold-30)',
        color: 'var(--gold)',
      }}
      aria-label="Alternar tema"
      title={isDark ? 'Modo claro' : 'Modo escuro'}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.svg
            key="sun"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
            className="w-4 h-4"
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 30 }}
            transition={{ duration: 0.2 }}
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1"  x2="12" y2="3"  />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22"   x2="5.64" y2="5.64"   />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1"  y1="12" x2="3"  y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"   />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"   />
          </motion.svg>
        ) : (
          <motion.svg
            key="moon"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
            className="w-4 h-4"
            initial={{ opacity: 0, rotate: 30 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -30 }}
            transition={{ duration: 0.2 }}
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', v => setScrolled(v > 50))
  }, [scrollY])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-12"
      style={{
        background: scrolled ? 'var(--bg-navbar)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
        borderBottom: scrolled ? '1px solid var(--gold-12)' : '1px solid transparent',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
      }}
    >
      <nav className="flex items-center justify-between h-[72px] max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center" style={{ border: '1px solid var(--gold-40)' }}>
            <span className="font-display text-sm font-semibold" style={{ color: 'var(--gold)' }}>M&A</span>
          </div>
          <div className="hidden sm:block">
            <div className="font-display text-[13px] font-medium leading-tight tracking-wide" style={{ color: 'var(--text-primary)' }}>
              Meireles & Associados
            </div>
            <div className="font-body text-[10px] tracking-[0.2em] uppercase" style={{ color: 'var(--text-secondary)' }}>
              Advogados
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="font-body text-sm tracking-wide transition-colors duration-300"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side: toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <MagneticButton
            href="https://wa.me/5551999990000"
            target="_blank"
            className="px-5 py-2 font-body text-sm tracking-wide transition-colors duration-300 inline-block"
            style={{
              border: '1px solid var(--gold)',
              color: 'var(--gold)',
            }}
          >
            Consulta Gratuita
          </MagneticButton>
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="flex flex-col gap-[5px] p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <motion.span animate={open ? { rotate: 45, y: 7 }  : { rotate: 0, y: 0 }}
              className="block w-6 h-[1px] origin-center" style={{ background: 'var(--gold)' }} />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[1px]" style={{ background: 'var(--gold)' }} />
            <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1px] origin-center" style={{ background: 'var(--gold)' }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="overflow-hidden md:hidden"
            style={{
              background: 'var(--bg-card)',
              borderTop: '1px solid var(--gold-12)',
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="font-body text-base tracking-wide py-1"
                  style={{ color: 'var(--text-primary)' }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="https://wa.me/5551999990000"
                target="_blank"
                rel="noreferrer"
                className="mt-2 py-3 text-sm tracking-wider text-center font-body transition-colors duration-300"
                style={{ border: '1px solid var(--gold)', color: 'var(--gold)' }}
                onClick={() => setOpen(false)}
              >
                Consulta Gratuita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
