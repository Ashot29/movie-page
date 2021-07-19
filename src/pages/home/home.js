import React, { Component } from "react"
import { MovieContext } from "../../context/movieContext"
import SearchMovie from "./searchMovie";
import MovieCard from "../../card/movieCard"
import Table from './table'
import './home.css'

class Home extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <MovieContext.Consumer>
                {
                    value => {
                        const { movies, genres, search } = value.state;
                        return (
                            <div className="home-page">
                                <SearchMovie />
                                {
                                    search.length > 0 ? <MovieCard data={search}/> : <Table movies={movies} genres={genres}/>
                                }
                            </div>
                        )
                    }
                }
            </MovieContext.Consumer >
        )
    }
}

export default Home;