import LiExplanation from './LiExplanation'
import './Explanation.css'

const Explanation = () => {
  return (
    <section className="explanation">
      <h1>How to use</h1>

      <ul className="ul__explanation">
        <LiExplanation
          stepNumber={1}
          description="Import COLORS array from the colors.js file."
          imgUrl="/images/importColors.png"
          imgAlt="Code snippet showing how to import COLORS array from the colors.js file."
        />
      </ul>
    </section>
  )
}

export default Explanation
