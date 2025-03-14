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

        <LiExplanation
          stepNumber={2}
          description="Initializing the states with the initial data and the state to handle input."
          imgUrl="/images/initHooks.png"
          imgAlt="Code snippet with useState and initial data"
        />

        <LiExplanation
          stepNumber={3}
          description="Function to add an item to the list."
          imgUrl="/images/addList.png"
          imgAlt="Code snippet with addToList function"
        />
      </ul>
    </section>
  )
}

export default Explanation
