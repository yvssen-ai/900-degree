import logo from '../assets/images/deg-logo.jpg'

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'TikTok', href: '#' },
]

export function Footer() {
  return (
    <footer id="footer" className="bg-deg-black px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 border-b border-deg-cream/10 pb-10 sm:flex-row sm:justify-between">
          <div className="flex items-start gap-3">
            <img
              src={logo}
              alt="900° Wood Fired Eatery"
              className="h-12 w-12 rounded-full bg-deg-cream object-contain"
            />
            <div>
              <p className="font-display text-lg font-semibold text-deg-cream">
                900° Wood Fired Eatery
              </p>
              <p className="mt-1 max-w-xs font-body text-sm text-deg-cream/55">
                Nine hundred degrees, zero shortcuts. Wood-fired pizza, built your way.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:flex sm:gap-14">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-deg-cream/40">
                Explore
              </p>
              <ul className="mt-3 space-y-2 font-body text-sm text-deg-cream/70">
                <li><a href="#menu" className="hover:text-deg-red-light">Menu</a></li>
                <li><a href="#build" className="hover:text-deg-red-light">Build Your Own</a></li>
                <li><a href="#story" className="hover:text-deg-red-light">Our Story</a></li>
                <li><a href="#order" className="hover:text-deg-red-light">Order</a></li>
              </ul>
            </div>
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-deg-cream/40">
                Visit
              </p>
              <ul className="mt-3 space-y-2 font-body text-sm text-deg-cream/70">
                <li>Add Your Address Here</li>
                <li>Add Your Hours Here</li>
                <li>
                  <a href="tel:+10000000000" className="hover:text-deg-red-light">
                    (000) 000-0000
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 pt-6 sm:flex-row sm:justify-between">
          <p className="font-body text-xs text-deg-cream/40">
            © {new Date().getFullYear()} 900° Wood Fired Eatery. All rights reserved.
          </p>
          <div className="flex gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="font-body text-xs text-deg-cream/50 hover:text-deg-red-light"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
