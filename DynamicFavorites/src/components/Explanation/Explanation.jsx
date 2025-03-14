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

        <LiExplanation
          stepNumber={4}
          description="Function to add an item to the favorites."
          imgUrl="/images/addFavorite.png"
          imgAlt="Code snippet with addFavorite function"
        />

        <LiExplanation
          stepNumber={5}
          description="Function to remove an item from the favorites."
          imgUrl="/images/removeFavorite.png"
          imgAlt="Code snippet with removeFavorite function"
        />

        <LiExplanation
          stepNumber={6}
          description="Function to remove all items from the favorites."
          imgUrl="/images/removeAllFavorites.png"
          imgAlt="Code snippet with removeAllFavorites function"
        />

        <LiExplanation
          stepNumber={7}
          description="Rendering the form with an input and a button to add an item to the list."
          imgUrl="/images/form.png"
          imgAlt="Code snippet with form"
        />

        <LiExplanation
          stepNumber={8}
          description="Rendering the list of favorites with a button to remove an item."
          imgUrl="/images/renderFavoritesList.png"
          imgAlt="Code snippet with favorite list"
        />

        <LiExplanation
          stepNumber={9}
          description="Rendering the list of items with a button to add to the favorites."
          imgUrl="/images/renderList.png"
          imgAlt="Code snippet with list"
        />

        <LiExplanation
          stepNumber={10}
          description="Rendering all HTML elements."
          imgUrl="/images/htmlStructure.png"
          imgAlt="Code snippet with all HTML elements"
        />
      </ul>
    </section>
  )
}

export default Explanation
