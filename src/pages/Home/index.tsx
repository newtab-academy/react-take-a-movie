import { useEffect, useState } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useNavigate, Routes, Route } from 'react-router-dom'

import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'

import ProfileImg from './../../assets/imgs/profile.jpg'

import { getPopularMovies } from "../../services/movies"
import { Creators as MovieActions } from './../../store/ducks/movies'
import { Creators as FavActions } from './../../store/ducks/favs'
import { getFavs } from "../../services/favs"

const Home = (props: any) => {
  const navigate = useNavigate()
  const [currentPage] = useState<number>(1)

  useEffect((): any => {
    fetchMovies()
    fetchFavs()
  }, [])

  const fetchMovies = async () => {
    const { data } = await getPopularMovies({ page: currentPage })
    props.setMovies(data.results)
  }
  const fetchFavs = async () => {
    const favs = getFavs()
    props.setFavs(favs)
  }

  const viewMovieDetail = (id: number) => {
    navigate(`/movie/${id}`)
  }

  const changeTab = (path: string) => {
    navigate(path)
  }

  return (
    <div className='container'>
      <div className="d-flex justify-content-between mt-2">
        <h6 className="fs-4 text-light">Maju</h6>
        <i className="bi bi-box-arrow-right fs-4 text-light" onClick={() => navigate('/login')}></i>
      </div>
      <div className="d-flex gap-5 align-items-center my-4">
        <Image fluid={true} roundedCircle={true} src={ProfileImg} />
        <div className="d-flex flex-column align-items-center text-light">
          { props.favs.length || 0 }
          <br />
          <span className="fw-bold text-light">Favorites</span>
        </div>
      </div>
      <Nav fill justify variant="tabs" defaultActiveKey='all' className="mb-1">
        <Nav.Item>
          <Nav.Link className="bg-dark" eventKey="all" onClick={() => changeTab('all')}>
            All <i className="bi bi-grid"></i>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="bg-dark" eventKey="favs" onClick={() => changeTab('favs')}>
            Favs <i className="bi bi-bookmark"></i>
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Routes>
        <Route path="/all" element={
          <div className='row'>
          {
            props.movies.map((movie: any, index: number) => (
              <div key={index} className='col-12 col-sm-6 col-lg-3 p-0' onClick={() => viewMovieDetail(movie.id)}>
                <Image className="w-100" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
              </div>
            ))
          }
        </div>
        } />
        <Route path="/favs" element={
          <div className='row'>
          {
            props.favs.map((movie: any, index: number) => (
              <div key={index} className='col-12 col-sm-6 col-lg-3 p-0' onClick={() => viewMovieDetail(movie.id)}>
                <Image className="w-100" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
              </div>
            ))
          }
        </div>
        } />
      </Routes>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  movies: state.movies,
  favs: state.favs
})

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators(MovieActions, dispatch),
  ...bindActionCreators(FavActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)