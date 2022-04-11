import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Movie from '../pages/Movie'

function main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home/*' element={<Home />} />
        <Route path='/movie/:id' element={<Movie />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Login /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default main