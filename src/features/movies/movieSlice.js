import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY } from "../../common/API/API_KEY";
import API_URL from "../../common/API/API_URL";
const initialState = {
  movies: {},
  selectedMovie: {},
};

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (title) => {
    const response = await API_URL.get(
      `?apikey=${API_KEY}&s=${title}&type=movie`
    );
    return response.data;
  }
);
export const fetchAsyncMovieDetail = createAsyncThunk(
  "movies/fetchAsyncMovieDetail",
  async (id) => {
    const response = await API_URL.get(`?apikey=${API_KEY}&i=${id}&Plot=full`);

    return response.data;
  }
);
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovie: (state) => {
      state.movies.selectedMovie = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {},
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {},
    [fetchAsyncMovieDetail.fulfilled]: (state, { payload }) => {
      return { ...state, selectedMovie: payload };
    },
  },
});

export const { removeSelectedMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getSelectedMovie = (state) => state.movies.selectedMovie;
export default movieSlice.reducer;
