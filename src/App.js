import React , { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/Movies/MovieList'

function App() {
  const [movies, setMovies] = useState([]);
  
   const fetchMovies = async() => {
       const res = await fetch(`https://www.omdbapi.com/?s=movies&apikey=66ec4406`);
       const data = await res.json();
       if(data.Search) setMovies(data.Search);
     }

    fetchMovies();


  return (
    <div className='App'>
        <MovieList  movies={movies} />
    </div>
  );
}

export default App;