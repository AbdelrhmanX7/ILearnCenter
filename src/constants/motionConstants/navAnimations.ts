import { Variants } from 'framer-motion'

export const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
}
export const parentVariants: Variants = {
  open: {
    transition: {
      type: 'spring',
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
    y: -2,
    opacity: 1,
  },
  closed: {
    transition: {
      type: 'spring',
      duration: 0.3,
    },
    y: 50,
    opacity: 0,
  },
}
