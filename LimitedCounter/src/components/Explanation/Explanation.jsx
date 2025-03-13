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

        <LiExplanation
          stepNumber={4}
          description="Create the reset function to set the count back to 0."
          imgUrl="/images/resetFunction.png"
          imgAlt="Code snippet showing the reset function."
        />

        <LiExplanation
          stepNumber={5}
          description="Create the function to set the limit value."
          imgUrl="/images/setLimitFunction.png"
          imgAlt="Code snippet showing the function to set the limit value."
        />

        <LiExplanation
          stepNumber={6}
          description="Handle the input change to update the limit."
          imgUrl="/images/handleInputValue.png"
          imgAlt="Code snippet showing the function to handle the input change."
        />

        <LiExplanation
          stepNumber={7}
          description="Render buttons to increment, decrement, and reset the count."
          imgUrl="/images/htmlBtns.png"
          imgAlt="Code snippet showing the buttons to increment, decrement, and reset the count."
        />

        <LiExplanation
          stepNumber={8}
          description="Render an input field to set the limit."
          imgUrl="/images/limitInput.png"
          imgAlt="Code snippet showing the input field to set the limit."
        />
      </ol>
    </section>
  )
}

export default Explanation
