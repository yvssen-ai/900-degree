import { Reveal, StaggerGroup, staggerItem } from './Reveal'
import { Counter } from './Counter'
import { stats } from '../data/menu'
import storyImage from '../assets/images/deg-margherita.jpg'
import { motion } from 'framer-motion'

export function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-deg-black px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal y={40} className="relative">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={storyImage}
              alt="Fresh pizza, made the 900° way"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deg-black/50 via-transparent to-transparent" />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -right-4 rounded-2xl bg-deg-red px-5 py-4 shadow-xl sm:-right-8"
          >
            <p className="font-display text-2xl font-bold text-deg-cream">900°F</p>
            <p className="font-body text-xs text-deg-cream/80">oven heat</p>
          </motion.div>
        </Reveal>

        <div>
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-deg-red-light">
              // 03 — Our Story
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-deg-cream sm:text-5xl">
              Why We Fire at 900°
            </h2>
            <p className="mt-4 font-body text-deg-cream/65">
              900 Degree started with one idea: bring true wood-fired pizza, baked fast and
              hot the way Naples intended. We slow-proof our dough for a full day, fire it at
              nine hundred degrees, and pile on toppings we'd want to eat ourselves. No
              shortcuts, no soggy middles — just fresh, flavorful pizza, blistered to
              perfection.
            </p>
          </Reveal>

          <StaggerGroup className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2">
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem}>
                <p className="font-display text-3xl font-bold text-deg-red-light sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 font-body text-sm text-deg-cream/55">{stat.label}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
