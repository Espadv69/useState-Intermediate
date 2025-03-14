import { useState } from 'react'
import { INITIAL_FAVORITES, INITIAL_LIST } from '../../utils/data.js'

import FavoriteItem from './FavoriteItem'
import ListItem from './ListItem'
import './FavoriteList.css'

const FavoriteList = () => {
  // State with initial data
  const [favorites, setFavorites] = useState(INITIAL_FAVORITES)
  const [list, setList] = useState(INITIAL_LIST)
  const [newItem, setNewItem] = useState('')

  // Function to add to list
  const addToList = (newItem) => {
    if (!list.includes(newItem) && newItem !== '') {
      setList([...list, newItem])
      setNewItem('')
    } else {
      alert('Item already in list or empty input')
    }
  }

  // Function to add a favorite
  const addFavorite = (newItem) => {
    if (!favorites.includes(newItem)) {
      setFavorites([...favorites, newItem])
    } else {
      alert('Item already in favorites')
    }
  }

  // Function to remove a favorite
  const removeFavorite = (item) => {
    // Filter out the item to remove
    const newList = favorites.filter((favorite) => favorite !== item)
    setFavorites(newList)
  }

  // Function to remove all favorites
  const removeAllFavorites = () => {
    setFavorites([])
  }

  return (
    <section className="container">
      <div className="form">
        <label>
          New Item:
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button onClick={() => addToList(newItem)}>Add to List</button>
        </label>
      </div>

      <h1>Favorite List</h1>
      <ul className="favorite__ul">
        {favorites.map((favorite) => (
          <FavoriteItem item={favorite} onRemove={removeFavorite} />
        ))}
      </ul>

      <button onClick={removeAllFavorites}>Remove All</button>
      <h2>List</h2>

      <ul className="list">
        {list.map((item) => (
          <ListItem item={item} onAddFavorite={addFavorite} />
        ))}
      </ul>
    </section>
  )
}

export default FavoriteList
