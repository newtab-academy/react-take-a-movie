import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3/'

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: process.env.REACT_APP_TMDB_API_KEY
  }
})

const getPopularMovies = (params: {page: number}) => (
  instance.get('movie/popular', {
    params
  })
)

const getMovieById = (id: number | string) => instance.get(`movie/${id}`)

export {
  getPopularMovies,
  getMovieById
}