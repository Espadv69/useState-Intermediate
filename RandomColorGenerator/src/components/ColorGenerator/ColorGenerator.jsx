import { useState } from 'react'
import { COLORS } from '../../data/colors'

import './ColorGenerator.css'

const ColorGenerator = () => {
  // State to keep track of the current color index
  const [colorIndex, setColorIndex] = useState(0)
  // State to keep track of the current color
  const [color, setColor] = useState(COLORS[colorIndex])

  // Function to generate a random color
  const generateRandomColor = () => {
    // Generate a random index between 0 and COLORS.length
    const randomIndex = Math.floor(Math.random() * COLORS.length)

    // Set the colorIndex to the random index
    setColorIndex(randomIndex)
    // Set the color to the color at the random index
    setColor(COLORS[randomIndex])
  }

  return (
    <section className="color-generator">
      <h1 style={{ color: color }}>Random Color Generator</h1>

      <div className="color-box" style={{ backgroundColor: color }}></div>

      <button className="generate-button" onClick={generateRandomColor}>
        Generate Random Color
      </button>

      <p className="color-code">{color}</p>
    </section>
  )
}

export default ColorGenerator
