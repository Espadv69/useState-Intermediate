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

  // Function to set the limit
  const setLimitValue = (value) => {
    setLimit(value)
  }

  return (
    <section className="counter">
      <h1>Limited Counter</h1>

      {count}
      <div className="counter__container">
        <div className="counter__container--buttons">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>

        <div className="counter__container--input">
          <input type="number" value={limit} placeholder="Set limit" />
          <button onClick={setLimitValue(limit)}>Set Limit</button>
        </div>
      </div>
    </section>
  )
}

export default Counter
