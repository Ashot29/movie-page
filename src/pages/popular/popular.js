import React, { Component } from "react"
import { MovieContext } from "../../context/movieContext";
import MovieCard from "../../card/movieCard";

class Popular extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <MovieContext.Consumer>
                {
                    value => {
                        const { movies } = value.state;
                        return (
                            <>
                                <h1>Top Rated Movies!</h1>
                                <div className='movie-list'>
                                    {<MovieCard data={movies} />}
                                </div>
                            </>
                        )
                    }
                }
            </MovieContext.Consumer>
        )
    }
}

export default Popular;