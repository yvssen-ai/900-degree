import logo from '../assets/images/deg-logo.jpg'
import OptionWheel from './OptionWheel'

const links = [
  { href: '#menu', label: 'Menu' },
  { href: '#build', label: 'Build Your Own' },
  { href: '#story', label: 'Our Story' },
  { href: '#order', label: 'Order' },
]

export function Navbar() {
  const handleWheelChange = (index: number) => {
    document.querySelector(links[index].href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
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

      </nav>

      <div className="pointer-events-auto absolute right-1 top-1 h-56 w-44 md:hidden">
        <OptionWheel
          items={links.map((l) => l.label)}
          defaultSelected={0}
          onChange={handleWheelChange}
          textColor="rgba(245,239,228,0.45)"
          activeColor="#ff5a4e"
          side="right"
          fontSize={1}
          spacing={1.4}
          curve={1}
          tilt={9}
          blur={1.5}
          fade={0.35}
          minOpacity={0.15}
          smoothing={180}
          inset={10}
          loop
          draggable
        />
      </div>
    </header>
  )
}
