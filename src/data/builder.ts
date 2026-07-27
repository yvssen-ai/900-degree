export type Size = {
  id: string
  label: string
  cm: number
  price: number
}

export type Topping = {
  id: string
  name: string
  price: number
  icon: string
}

export const sizes: Size[] = [
  { id: 'small', label: 'Small', cm: 26, price: 14 },
  { id: 'medium', label: 'Medium', cm: 30, price: 18 },
  { id: 'large', label: 'Large', cm: 34, price: 22 },
]

export const toppings: Topping[] = [
  { id: 'pepperoni', name: 'Pepperoni', price: 3, icon: '🍕' },
  { id: 'mozzarella', name: 'Extra Mozzarella', price: 4, icon: '🧀' },
  { id: 'mushroom', name: 'Mushroom', price: 3, icon: '🍄' },
  { id: 'olives', name: 'Olives', price: 2, icon: '🫒' },
  { id: 'jalapeno', name: 'Jalapeños', price: 3, icon: '🌶️' },
  { id: 'rocket', name: 'Rocket & Parmesan', price: 3, icon: '🌿' },
  { id: 'chilli-honey', name: 'Chilli Honey', price: 2, icon: '🍯' },
  { id: 'artichoke', name: 'Artichoke', price: 4, icon: '🍂' },
]
