import React, { Component } from "react"
import { MovieContext } from "../../context/movieContext";
import MovieCard from "../../card/movieCard";

class TopRated extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <MovieContext.Consumer>
                {
                    value => {
                        const { topRatedMovies } = value.state;
                        return (
                            <>
                                <h1>Top Rated Movies!</h1>
                                <div className='movie-list'>
                                    {<MovieCard data={topRatedMovies} />}
                                </div>
                            </>
                        )
                    }
                }
            </MovieContext.Consumer>
        )
    }
}

export default TopRated;