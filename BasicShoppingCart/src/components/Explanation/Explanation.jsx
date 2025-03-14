import LiExplanation from './LiExplanation'
import './Explanation.css'

const Explanation = () => {
  return (
    <section className="explanation">
      <h2 className="explanation__title">Explanation</h2>
      <ul className="ul__explanation">
        <LiExplanation
          stepNumber={1}
          description="Create the states for the cart and the total price."
          imgUrl="/images/initHooks.png"
          imgAlt="Code snippet for initializing the states"
        />
      </ul>
    </section>
  )
}

export default Explanation
