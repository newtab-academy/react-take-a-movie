const FAV_KEY = 'fav'

const addFav = (fav: any) => {
  const favs = JSON.parse(sessionStorage.getItem(FAV_KEY) || '[]')
  sessionStorage.setItem(FAV_KEY, JSON.stringify([...favs, fav]))
}

const getFavs = () => JSON.parse(sessionStorage.getItem(FAV_KEY) || '[]')

const isFav = (id: number | string) => {
  const favs = JSON.parse(sessionStorage.getItem(FAV_KEY) || '[]')
  return favs.some((movie: any) => movie.id === id)
}

export {
  addFav,
  getFavs,
  isFav
}