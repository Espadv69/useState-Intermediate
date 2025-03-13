import { useState } from 'react'
import './FavoriteList.css'

// Initial data
const INITIAL_FAVORITES = ['React', 'Angular', 'Vue']
const INITIAL_LIST = [...INITIAL_FAVORITES, 'Svelte', 'Ember', 'Preact']

const FavoriteList = () => {
  // State with initial data
  const [favorites, setFavorites] = useState(INITIAL_FAVORITES)
  const [list, setList] = useState(INITIAL_LIST)
}

export default FavoriteList
