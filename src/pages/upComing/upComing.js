import React, { Component } from "react"
import { MovieContext } from "../../context/movieContext";
import MovieCard from "../../card/movieCard";
import './upComing.css'

class UpComing extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <MovieContext.Consumer>
                {
                    value => {
                        const { upcomingMovies } = value.state;
                        console.log(upcomingMovies)
                        return (
                            <>
                                <h1>UP COMING MOVIES!</h1>
                                <div className='movie-list'>
                                    {<MovieCard data={upcomingMovies} />}
                                </div>
                            </>
                        )
                    }
                }
            </MovieContext.Consumer>
        )
    }
}

export default UpComing;