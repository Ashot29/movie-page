import React, { Component } from "react"
import './home.css'
import { MovieContext } from "../../context/movieContext"
import SearchMovie from "./searchMovie";
class Home extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <MovieContext.Consumer>
                {
                    value => {
                        const { movies, genres } = value.state;
                        console.log(movies, genres, 'moviesgenres')
                        return (
                            <div className="home-page">
                                <SearchMovie  />

                                <table>
                                    <thead>
                                        <tr>
                                            <td>Title</td>
                                            <td>Popularity</td>
                                            <td>Genres</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {

                                            movies.map(movie => {
                                                const arr = [];
                                                genres.forEach(genre => {
                                                    if (movie.genre_ids.includes(genre.id)) {
                                                        arr.push(genre.name)
                                                    }
                                                });
                                                let genreData = arr.join(', ')
                                                return (
                                                    <tr key={movie.id}>
                                                        <td>{movie.title}</td>
                                                        <td>{Math.trunc(movie.popularity)}</td>
                                                        <td> {genreData} </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        )
                    }
                }
            </MovieContext.Consumer >
        )
    }
}

export default Home;