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

        <LiExplanation
          stepNumber={2}
          description="Create the add to cart function."
          imgUrl="/images/addToCart.png"
          imgAlt="Code snippet for adding to cart"
        />

        <LiExplanation
          stepNumber={3}
          description="Create the remove from cart function."
          imgUrl="/images/removeFromCart.png"
          imgAlt="Code snippet for removing from cart"
        />

        <LiExplanation
          stepNumber={4}
          description="Render products."
          imgUrl="/images/renderProducts.png"
          imgAlt="Code snippet for rendering the products"
        />

        <LiExplanation
          stepNumber={5}
          description="Render the cart."
          imgUrl="/images/renderTotalPrice.png"
          imgAlt="Code snippet for rendering the cart"
        />
      </ul>
    </section>
  )
}

export default Explanation
