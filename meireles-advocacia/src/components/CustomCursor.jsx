import { useEffect, useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const dotX = useSpring(0, { stiffness: 600, damping: 35 })
  const dotY = useSpring(0, { stiffness: 600, damping: 35 })
  const ringX = useSpring(0, { stiffness: 120, damping: 20 })
  const ringY = useSpring(0, { stiffness: 120, damping: 20 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsMobile(true)
      return
    }

    const move = (e) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
      ringX.set(e.clientX)
      ringY.set(e.clientY)
    }

    const enterHover = () => setIsHovering(true)
    const leaveHover = () => setIsHovering(false)

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
      el.addEventListener('mouseenter', enterHover)
      el.addEventListener('mouseleave', leaveHover)
    })

    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
        el.addEventListener('mouseenter', enterHover)
        el.addEventListener('mouseleave', leaveHover)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', move)
      observer.disconnect()
    }
  }, [dotX, dotY, ringX, ringY])

  if (isMobile) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 40 : 8,
          height: isHovering ? 40 : 8,
          background: '#C9A84C',
          mixBlendMode: isHovering ? 'difference' : 'normal',
          transition: 'width 0.25s ease, height 0.25s ease, mix-blend-mode 0.25s ease',
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full border border-[#C9A84C]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 0 : 32,
          height: isHovering ? 0 : 32,
          opacity: isHovering ? 0 : 0.4,
          transition: 'width 0.25s ease, height 0.25s ease, opacity 0.25s ease',
        }}
      />
    </>
  )
}
