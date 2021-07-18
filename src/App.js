import React, { Component } from "react"
import { MovieContext } from "./context/movieContext"
import Genre from "./pages/genre/genre"
import Home from "./pages/home/home"
import Header from "./components/header/header"
import About from "./pages/about/about"
import { BrowserRouter, Route } from "react-router-dom";
import { API_KEY, API_URL, IMG_URL } from "./config/url"
import apiHandler from "./services/apiHandler"
import Api from "./services/dataService"

class AppWrapper extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      genres: [],
      search: [],
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

    Api.getGenres()
      .then(data =>
        this.setState({
          genres: [...data.genres]
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
          <Route path="/genre" component={Genre} />
          <Route path="/about" component={About} />
        </BrowserRouter>

      </MovieContext.Provider >
    )
  }
}


export default AppWrapper;