const FavoriteItem = ({ item, onRemove }) => {
  return (
    <li className="favorite__li" key={item}>
      {item}{' '}
      <button className="favorite__li-button" onClick={() => onRemove(item)}>
        Remove
      </button>
    </li>
  )
}

export default FavoriteItem
