import { useState } from 'react'
import './FavoriteList.css'

// Initial data
const INITIAL_FAVORITES = ['React', 'Angular', 'Vue']
const INITIAL_LIST = [...INITIAL_FAVORITES, 'Svelte', 'Ember', 'Preact']

const FavoriteList = () => {
  // State with initial data
  const [favorites, setFavorites] = useState(INITIAL_FAVORITES)
  const [list, setList] = useState(INITIAL_LIST)

  // Function to add a favorite
  const addFavorite = (newItem) => {
    if (!favorites.includes(newItem)) {
      setFavorites([...favorites, newItem])
    } else {
      alert('Item already in favorites')
    }
  }
}

export default FavoriteList
