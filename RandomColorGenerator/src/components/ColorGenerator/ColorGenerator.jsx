import { useState } from 'react'
import { COLORS } from '../../data/colors'

import './ColorGenerator.css'

const ColorGenerator = () => {
  // State to keep track of the current color index
  const [colorIndex, setColorIndex] = useState(0)
  // State to keep track of the current color
  const [color, setColor] = useState(COLORS[colorIndex])
}

export default ColorGenerator
