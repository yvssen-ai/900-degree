import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../assets/images/deg-logo.jpg'

const links = [
  { href: '#menu', label: 'Menu' },
  { href: '#build', label: 'Build Your Own' },
  { href: '#story', label: 'Our Story' },
  { href: '#order', label: 'Order' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleLinkClick = () => setOpen(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-deg-black shadow-lg shadow-black/30">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="900° Wood Fired Eatery"
              className="h-10 w-10 rounded-full bg-deg-cream object-contain ring-2 ring-deg-red/60 sm:h-11 sm:w-11"
            />
            <span className="font-display text-lg font-semibold tracking-wide text-deg-cream sm:text-xl">
              900°
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.slice(0, 3).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm font-medium text-deg-cream/80 transition-colors hover:text-deg-red-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#order"
            className="hidden rounded-full bg-deg-red px-5 py-2.5 font-display text-sm font-semibold text-deg-cream transition-transform hover:scale-105 active:scale-95 md:inline-block"
          >
            Order Now
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full bg-deg-cream/10 md:hidden"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-5 rounded-full bg-deg-cream"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="h-0.5 w-5 rounded-full bg-deg-cream"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-5 rounded-full bg-deg-cream"
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-deg-black/98 backdrop-blur-lg md:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.4, ease: 'easeOut' }}
                className="font-display text-3xl font-semibold text-deg-cream"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
