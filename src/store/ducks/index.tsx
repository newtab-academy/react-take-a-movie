import { combineReducers } from 'redux'

import movies from './movies'
import favs from './favs'

export default combineReducers({
  movies,
  favs
})