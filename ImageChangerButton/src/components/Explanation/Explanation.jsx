import LiExplanation from './LiExplanation'
import './Explanation.css'

const Explanation = () => {
  return (
    <section className="explanation">
      <h2 className="explanation__title">Explanation</h2>
      <ul className="ul__explanation">
        <LiExplanation
          stepNumber={1}
          description="Init hook to set the initial state of the image"
          imgUrl="/images/initHook.png"
          alt="Code snippet of the init hook"
        />

        <LiExplanation
          stepNumber={2}
          description="Function to change the image"
          imgUrl="/images/changeImageFunction.png"
          alt="Code snippet of the changeImage function"
        />

        <LiExplanation
          stepNumber={3}
          description="Get the current image"
          imgUrl="/images/getCurrentImage.png"
          alt="Code snippet of getting the current image"
        />
      </ul>
    </section>
  )
}

export default Explanation
