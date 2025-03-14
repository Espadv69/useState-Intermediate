const ListItem = ({ item, onAddFavorite }) => {
  return (
    <li className="list__li" key={item}>
      {item}{' '}
      <button className="list__li-button" onClick={() => onAddFavorite(item)}>
        Add
      </button>
    </li>
  )
}

export default ListItem
