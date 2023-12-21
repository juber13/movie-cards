import React from "react";
import './Movies.css'
const MovieList = (props) => {
  return (
    <div className="moviesList">
      {props.movies.map((movie) => {
        return (
          <>
          <div className="movie">
            <img src={movie.Poster} alt="movie"  />
            <div className="title">
              <h1 style={{marginTop:"10px"}}>{movie.Title}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eius omnis explicabo quibusdam provident minus consequatur commodi eveniet dolorem reprehenderit sint quis reiciendis consectetur dolores blanditiis repudiandae qui. Expedita, iusto?</p>
               <p style={{color: "green"}}> Year ({movie.Year})</p>
               <small style={{color: "green"}}> Rating 5 star</small>
              </div>
          </div>
        </>
        );
      })}
       
    </div>
  );
};

export default MovieList;
