import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.jpg'

const WHATSAPP = 'https://wa.me/5551999266392'

/* Ícone dente SVG inline */
function ToothIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.5 4C7.5 4 5 5.5 4.5 8C4 10.5 5 12 5 14C5 16 4 18 4 20C4 22 5.5 24 7 24C8.5 24 9 22 10 20C11 22 11.5 24 14 24C16.5 24 17 22 18 20C19 22 19.5 24 21 24C22.5 24 24 22 24 20C24 18 23 16 23 14C23 12 24 10.5 23.5 8C23 5.5 20.5 4 18.5 4C17 4 15.5 5 14 5C12.5 5 11 4 9.5 4Z"
        fill="#E8437A"
        stroke="#E8437A"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Procedimentos', href: '#procedimentos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fecha menu ao redimensionar para desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-soft' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center no-underline">
            <img src={logo} alt="Odontoarte" className="h-10 md:h-12 w-auto object-contain" />
          </a>

          {/* Links desktop */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-jakarta text-sm font-medium text-texto-sec hover:text-rosa transition-colors no-underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-rosa text-white font-jakarta text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity no-underline"
          >
            Agendar pelo WhatsApp
          </a>

          {/* Hambúrguer mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-texto rounded-full"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-texto rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-texto rounded-full"
            />
          </button>
        </nav>
      </header>

      {/* Menu mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: 'rgba(253, 246, 249, 0.97)' }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  onClick={() => setMenuOpen(false)}
                  className="font-playfair text-3xl font-bold text-texto hover:text-rosa transition-colors no-underline"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.4 }}
                onClick={() => setMenuOpen(false)}
                className="bg-rosa text-white font-jakarta font-medium px-8 py-3 rounded-full no-underline mt-2"
              >
                Agendar pelo WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
