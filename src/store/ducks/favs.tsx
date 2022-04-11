import { createActions, createReducer } from 'reduxsauce'

const INITIAL_STATE: any[] = [];

/*
 * Criando os reducer handlers
 */
const addFav = (state = INITIAL_STATE, action: any) => [...state, action.fav]
const setFavs = (state = INITIAL_STATE, action: any) => action.favs

/*
 * Criando action types & creators
 */
export const { Types, Creators } = createActions({
  addFav: ['fav'],
  setFavs: ['favs']
})

export default createReducer(INITIAL_STATE, {
  [Types.ADD_FAV]: addFav,
  [Types.SET_FAVS]: setFavs,
})