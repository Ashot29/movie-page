import React, { Component } from "react"
import { MovieContext } from "../../context/movieContext";
import MovieCard from "../../card/movieCard";

class NowPlaying extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <MovieContext.Consumer>
                {
                    value => {
                        const { nowPlayingMovies } = value.state;
                        return (
                            <>
                                <h1>Now Playing Movies!</h1>
                                <div className='movie-list'>
                                    {<MovieCard data={nowPlayingMovies} />}
                                </div>
                            </>
                        )
                    }
                }
            </MovieContext.Consumer>
        )
    }
}


export default NowPlaying;