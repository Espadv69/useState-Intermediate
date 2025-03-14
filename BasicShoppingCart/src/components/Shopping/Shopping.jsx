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

  // Function to remove an item from the cart
  const removeFromCart = (item) => {
    // Find index
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id)

    // Remove the item from the cart
    cart.splice(itemIndex, 1)

    // Update the cart
    setCart([...cart])
  }

  return (
    <section className="shopping">
      <h1>Shopping Cart</h1>

      <div className="products__list">
        {data.map((item) => (
          <div key={item} className="product">
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} />
            <p>{item.description}</p>
            <p>
              Price: <strong>${item.price}</strong>
            </p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}{' '}
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
        <h3>Total: ${total}</h3>
      </div>
    </section>
  )
}

export default Shopping
