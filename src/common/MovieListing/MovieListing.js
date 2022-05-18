import React from "react";
import Slider from "react-slick";
import { Settings } from "../assets/sliderSettings";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let moviesToRender = movies.Response ? (
    movies.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
  ) : (
    <div className="movie-err">
      <h3>{movies.Error}</h3>
    </div>
  );

  return (
    <div className="movies-wrapper">
      <div className="movie-list">
        <h2 className="title">Movies</h2>
        <div className="movies-container">
          <Slider {...Settings}>{moviesToRender}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
