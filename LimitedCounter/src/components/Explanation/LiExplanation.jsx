const LiExplanation = ({ stepNumber, description, imgUrl, imgAlt }) => {
  return (
    <li className="li__explanation">
      <p>
        <strong>{stepNumber}.</strong> {description}
        <img src={imgUrl} alt={imgAlt} />
      </p>
    </li>
  )
}

export default LiExplanation
