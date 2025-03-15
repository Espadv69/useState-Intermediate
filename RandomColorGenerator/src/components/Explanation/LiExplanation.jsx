const LiExplanation = ({ stepNumber, description, imgUrl, imgAlt }) => {
  return (
    <li className="li__explanation">
      <p>
        <strong>{stepNumber}.</strong> {description}
      </p>
      <img src={imgUrl} alt={imgAlt} />
    </li>
  )
}

export default LiExplanation
