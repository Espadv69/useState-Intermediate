import { useState } from 'react'
import { data } from '../../data/data.js'

import './Shopping.css'

const Shopping = () => {
  // State for the cart
  const [cart, setCart] = useState([])
  // State for the total price
  const [total, setTotal] = useState(0)

  // Function to add an item to the cart
  const addToCart = (item) => {
    // Add the item to the cart
    setCart([...cart, item])
    // Update the total price
    setTotal(total + item.price)
  }
}

export default Shopping
