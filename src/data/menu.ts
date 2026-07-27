export type MenuItem = {
  id: string
  name: string
  description: string
  price: number
  tag?: string
  image?: string
}

export const signaturePizzas: MenuItem[] = [
  {
    id: 'margherita-900',
    name: 'Margherita 900',
    description: 'San Marzano tomato, fior di latte, torn basil, extra virgin olive oil',
    price: 16,
  },
  {
    id: 'manzo-e-olive',
    name: 'Manzo e Olive',
    description: 'Slow-braised beef, taleggio, kalamata olives, shaved red onion',
    price: 24,
    tag: 'Best Seller',
  },
  {
    id: 'rocket-and-beet',
    name: 'Rocket & Beet',
    description: 'Roasted beets, wild rocket, whipped ricotta, aged parmesan',
    price: 20,
    tag: "Chef's Pick",
  },
]

export const alsoOnMenu: MenuItem[] = [
  {
    id: 'four-cheese',
    name: 'Four Cheese',
    description: 'Mozzarella, gorgonzola, parmesan, fontina',
    price: 19,
  },
  {
    id: 'diavola',
    name: 'Diavola',
    description: 'Spicy salami, chilli honey, mozzarella',
    price: 18,
  },
  {
    id: 'funghi-e-tartufo',
    name: 'Funghi e Tartufo',
    description: 'Wild mushroom, truffle oil, mozzarella, thyme',
    price: 21,
  },
]

export const stats = [
  { value: 900, suffix: '°F', label: 'Oven heat' },
  { value: 8, suffix: 'min', label: 'Fire to table' },
  { value: 24, suffix: 'h', label: 'Slow-proofed dough' },
  { value: 4, suffix: '', label: 'Ingredients per pie, minimum fuss' },
]
