import { useState } from 'react'
import './Counter.css'

const Counter = () => {
  // Initialize count and limit state variables
  const [count, setCount] = useState(0)
  const [limit, setLimit] = useState(10)

  // Function to increment the count
  const increment = () => {
    if (count < limit) {
      setCount(count + 1)
    } else {
      alert('Limit reached!')
    }
  }

  // Function to decrement the count
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  // Function to reset the count
  const reset = () => {
    setCount(0)
  }
}

export default Counter
