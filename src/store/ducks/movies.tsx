import { createActions, createReducer } from 'reduxsauce'

const INITIAL_STATE: any[] = [];

/*
 * Criando os reducer handlers
 */
const setMovies = (state = INITIAL_STATE, action: any) => action.movies
const addMovies = (state = INITIAL_STATE, action: any) => [
  ...state,
  ...action.movies,
]

/*
 * Criando action types & creators
 */
export const { Types, Creators } = createActions({
  setMovies: ['movies'],
  addMovies: ['movies']
})

export default createReducer(INITIAL_STATE, {
  [Types.SET_MOVIES]: setMovies,
  [Types.ADD_MOVIES]: addMovies
})