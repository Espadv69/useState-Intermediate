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
      </ul>
    </section>
  )
}

export default Explanation
