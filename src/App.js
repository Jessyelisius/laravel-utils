import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Contact from './directory/Contact';
import MovieList from './movie/movieList';



function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route path='/contact' element={<Contact/>} />

          <Route path='/' element={<MovieList/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App