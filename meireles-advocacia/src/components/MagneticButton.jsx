import { useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function MagneticButton({ children, className = '', onClick, href, target }) {
  const ref = useRef(null)
  const x = useSpring(0, { stiffness: 280, damping: 28 })
  const y = useSpring(0, { stiffness: 280, damping: 28 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) * 0.35
    const dy = (e.clientY - cy) * 0.35
    const dist = Math.sqrt(dx * dx + dy * dy)
    const maxDist = 12
    const scale = Math.min(1, maxDist / Math.max(dist, 1))
    x.set(dx * scale)
    y.set(dy * scale)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setHovered(false)
  }

  const props = {
    ref,
    style: { x, y },
    className,
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: handleMouseLeave,
    onClick,
    whileTap: { scale: 0.97 },
  }

  if (href) {
    return (
      <motion.a href={href} target={target} {...props}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button {...props}>
      {children}
    </motion.button>
  )
}
