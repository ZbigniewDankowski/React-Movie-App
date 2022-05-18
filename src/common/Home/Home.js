import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MovieListing from "../MovieListing/MovieListing";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";
import "./Home.scss";

const Home = () => {
  const [title, setTitle] = useState("");

  const searchMovie = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(title));
    setTitle("");
  };

  const dispatch = useDispatch();
  useEffect(() => {
    const defaultText = "Harry";
    dispatch(fetchAsyncMovies(defaultText));
  }, [dispatch]);
  return (
    <div>
      <div className="search-box">
        <form
          onSubmit={(e) => {
            searchMovie(e);
          }}
        >
          <input
            type="text"
            className="search"
            placeholder="Search movie..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <button className="search-btn" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
