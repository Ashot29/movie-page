import React, { Component } from "react"
import { MovieContext } from "./context/movieContext"
import Home from "./pages/home/home"
import Header from "./components/header/header"
import { BrowserRouter, Route } from "react-router-dom";
import { API_KEY, API_URL, IMG_URL } from "./config/url"
import Popular from "./pages/popular/popular"
import apiHandler from "./services/apiHandler"
import UpComing from "./pages/upComing/upComing"
import NowPlaying from './pages/nowPlaying/nowPlaying'
import TopRated from "./pages/topRated/topRated";
import Api from "./services/dataService"

class AppWrapper extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      genres: [],
      search: [],
      upcomingMovies: [],
      topRatedMovies: [],
      nowPlayingMovies: [],
      language: "us",
      translations: {},
      isAuth: false,
      isLoading: false,
      pricing: [],
    };
    this.setState = this.setState.bind(this)
  }
  componentDidMount() {
    Api.getMovies('popular', 1)
      .then(data =>
        this.setState({
          movies: [...data.results]
        }));

    Api.getMovies('upcoming', 1)
      .then(data =>
        this.setState({
          upcomingMovies: [...data.results]
        }));
    Api.getMovies('top_rated', 1)
      .then(data =>
        this.setState({
          topRatedMovies: [...data.results]
        }));

    Api.getGenres()
      .then(data =>
        this.setState({
          genres: [...data.genres]
        }));

    Api.getMovies('now_playing', 1)
      .then(data =>
        this.setState({
          nowPlayingMovies: [...data.results]
        }));


  }

  render() {
    console.log(this.state, 'state')
    return (
      <MovieContext.Provider value={{
        state: this.state,
        dispatch: this.setState
      }}>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/popular" component={Popular} />
          <Route path="/upComing" component={UpComing} />
          <Route path="/nowPlaying" component={NowPlaying} />
          <Route path="/topRated" component={TopRated} />
        </BrowserRouter>
      </MovieContext.Provider >
    )
  }
}


export default AppWrapper;