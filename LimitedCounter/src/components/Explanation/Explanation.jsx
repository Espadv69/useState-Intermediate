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

        <LiExplanation
          stepNumber={2}
          description="Create the increment function to increase the count."
          imgUrl="/images/incrementFunction.png"
          imgAlt="Code snippet showing the increment function."
        />

        <LiExplanation
          stepNumber={3}
          description="Create the decrement function to decrease the count."
          imgUrl="/images/decrementFunction.png"
          imgAlt="Code snippet showing the decrement function."
        />
      </ol>
    </section>
  )
}

export default Explanation
