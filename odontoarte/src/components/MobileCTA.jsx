import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WHATSAPP = 'https://wa.me/5551999266392'

/* Botão flutuante mobile — aparece após 300px de scroll */
export default function MobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="md:hidden fixed bottom-5 inset-x-4 z-50 flex items-center justify-center gap-2.5 bg-rosa text-white font-jakarta font-medium text-sm px-6 py-3.5 no-underline"
          style={{
            borderRadius: '999px',
            boxShadow: '0 8px 32px rgba(232,67,122,0.35)',
          }}
        >
          📅 Agendar pelo WhatsApp
        </motion.a>
      )}
    </AnimatePresence>
  )
}
