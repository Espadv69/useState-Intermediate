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

  // Get the current image
  const currentImage = IMAGES[imageIndex]

  return (
    <section className="image-changer">
      <h1>Image Changer</h1>
      <div className="image-container">
        <img src={currentImage} alt="Random pokemon image" />
      </div>
      <button onClick={changeImage}>Change Image</button>
      <p>
        Image {imageIndex + 1} of {IMAGES.length}
      </p>
    </section>
  )
}

export default ImageChanger
