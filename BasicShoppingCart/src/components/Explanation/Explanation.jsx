import LiExplanation from './LiExplanation'

const Explanation = () => {
  return (
    <section className="explanation">
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
