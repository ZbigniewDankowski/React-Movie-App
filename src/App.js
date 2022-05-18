import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";

import Header from "./common/Header/Header.js";
import Home from "./common/Home/Home.js";
import MovieDetail from "./common/MovieDetail/MovieDetail.js";
import PageNotFound from "./common/PageNotFound/PageNotFound.js";
import Footer from "./common/Footer/Footer.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route element={<PageNotFound />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
