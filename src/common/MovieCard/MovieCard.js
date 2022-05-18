import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  return (
    <div className="card">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="movie-img">
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className="movie-info">
          <div className="movie-title">{data.Title}</div>
          <div className="movie-year">{data.Year}</div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
