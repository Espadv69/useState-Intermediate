import LiExplanation from './LiExplanation'
import './Explanation.css'

const Explanation = () => {
  return (
    <section className="explanation">
      <ol className="ol__explanation">
        <LiExplanation
          stepNumber={1}
          description="Initialize the states for the counter and the limit."
          imgUrl="/images/initHooks.png"
          imgAlt="Code snippet showing the initialization of the counter and limit states."
        />
      </ol>
    </section>
  )
}

export default Explanation
