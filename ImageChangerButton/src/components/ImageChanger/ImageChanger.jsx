import { useState } from 'react'
import { IMAGES } from '../../data/images.js'

import './ImageChanger.css'

const ImageChanger = () => {
  // State to keep track of the current image index
  const [imageIndex, setImageIndex] = useState(0)

  // Function to change the image
  const changeImage = () => {
    setImageIndex((imageIndex + 1) % IMAGES.length)
  }
}

export default ImageChanger
