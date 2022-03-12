import React from 'react';
import { useState, useEffect } from 'react';

import './App.css';
import SearchIons from './search.svg';

import MovieCard from './MovieCard';

//Api-Key = 680e09f4

const API_URL = 'http://www.omdbapi.com?apikey=680e09f4';


const movie1 = {
  "Title": "Spiderman in Cannes",
    "Year": "2016",
      "imdbID": "tt5978586",
        "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"
}



const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => { 
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman')

  }, []);
  return (
    <div className="app">
      <h1> MovieLand </h1>

      <div className="search">
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIons}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        movies.length > 0
          ?(
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }
    </div>
  );
}

export default App;