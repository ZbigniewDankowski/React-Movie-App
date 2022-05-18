import React, { useEffect } from "react";
import "./MovieDetail.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieDetail,
  getSelectedMovie,
  removeSelectedMovie,
} from "../../features/movies/movieSlice";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovie);
  useEffect(() => {
    dispatch(fetchAsyncMovieDetail(imdbID));
    dispatch(removeSelectedMovie());
  }, [dispatch, imdbID]);
  return (
    <div>
      <>
        <div className="container">
          <div className="img">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="title">{data.Title}</div>
          <div className="movie-info">
            <span className="movie-rating">
              Rating:
              <i className="fa fa-star"></i>
              {data.imdbRating}
            </span>
            <span className="movie-votes">
              Votes:
              <i className="fa fa-thumbs-up"></i>
              {data.imdbVotes}
            </span>
            <span className="movie-runtime">
              Runtime:
              <i className="fa fa-film"></i>
              {data.Runtime}
            </span>
            <span className="movie-year">
              Year:
              <i className="fa fa-calendar"></i>
              {data.Year}
            </span>
          </div>
          <div className="movie-plot">{data.Plot}</div>
          <movie className="cast-info">
            <span className="director">Director: {data.Director}</span>
            <span className="stars">Actors: {data.Actors}</span>
            <span className="generes">Genre: {data.Genre}</span>
            <span className="languages">Languages: {data.Language}</span>
            <span className="awards">Awards: {data.Awards}</span>
          </movie>
        </div>
      </>
    </div>
  );
};

export default MovieDetail;
