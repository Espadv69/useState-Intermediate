import LiExplanation from './LiExplanation'
import './Explanation.css'

const Explanation = () => {
  return (
    <section className="explanation">
      <h2 className="explanation__title">How to use</h2>
      <ul className="ul__explanation">
        <LiExplanation
          stepNumber={1}
          description="Initializing data in JavaScript using constants and arrays."
          imgUrl="/images/initialData.png"
          imgAlt="Code snippet with initial data"
        />
      </ul>
    </section>
  )
}

export default Explanation
