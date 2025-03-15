import LiExplanation from './LiExplanation'
import './Explanation.css'

const Explanation = () => {
  return (
    <section className="explanation">
      <h2>How to use</h2>

      <ul className="ul__explanation">
        <LiExplanation
          stepNumber={1}
          description="Import COLORS array from the colors.js file."
          imgUrl="/images/importColors.png"
          imgAlt="Code snippet showing how to import COLORS array from the colors.js file."
        />

        <LiExplanation
          stepNumber={2}
          description="State to keep track of the current color index and the current color."
          imgUrl="/images/initHooks.png"
          imgAlt="Code snippet showing how to initialize the state hooks."
        />

        <LiExplanation
          stepNumber={3}
          description="Function to generate a random color."
          imgUrl="/images/generateColorFunction.png"
          imgAlt="Code snippet showing how to generate a random color."
        />
      </ul>
    </section>
  )
}

export default Explanation
