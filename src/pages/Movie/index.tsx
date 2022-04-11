import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as FavActions } from "../../store/ducks/favs"

import Button from 'react-bootstrap/Button'

import { getMovieById } from "../../services/movies"
import { addFav, isFav } from "../../services/favs"

const Movie = (props: any) => {
  const params = useParams()
  const navigate = useNavigate()

  const [movie, setMovie] = useState<any>({})
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  useEffect(() => {
    fetchMovie()
    setIsFavorite(isFav(Number(params.id) || ''))
  }, [])

  const fetchMovie = async () => {
    const { data } = await getMovieById(params.id || '')
    setMovie(data)
  }

  const submitFavMovie = () => {
    addFav(movie)
    props.addFav(movie)
    setIsFavorite(isFav(Number(params.id) || ''))
  }

  return (
    <>
      <div className='w-100 p-2' style={{
          height: '500px',
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}>
        <i className="bi bi-caret-left text-light fs-1" onClick={() => navigate(-1)}></i>
      </div>
      <div className='container py-4'>
        
        <div className='d-flex gap-2 justify-content-between'>
          <div>
            <h1 className="text-light">{ movie.title } ({ new Date(movie.release_date).getFullYear() })</h1>
          </div>
          <div className="d-flex gap-1 align-items-center text-primary">
            { movie.vote_average }
            <i className="bi-star-fill"></i>
          </div>
        </div>
        <h4 className="text-light">{ movie.tagline }</h4>
        
        <div className="d-flex gap-1">
          { movie.adult && <div className='alert alert-danger'>+18</div>}
          <div className='alert alert-primary'>{ movie.release_date }</div>
          { movie.genres && <div className='alert alert-success'>{ movie.genres[0].name }</div>}
          <div className='alert alert-warning'>{ movie.runtime } min</div>
        </div>
        
        <div>
          <h4 className="text-light">Sinopse</h4>
          <p className="text-light">{ movie.overview }</p>
        </div>
        <div className="d-flex justify-content-center gap-2">
          <Button>Take</Button>
          <Button onClick={submitFavMovie} disabled={isFavorite}>Favoritar</Button>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state: any) => ({
  favs: state.favs
})

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators(FavActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie)