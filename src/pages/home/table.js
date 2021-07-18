import React from 'react'

class Table extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { movies, genres } = this.props
        return (
            <table>
                <thead>
                    <tr style={{background: 'lightGray'}}>
                        <td style={{color: 'red', fontWeight: 700}}>Title</td>
                        <td style={{color: 'red', fontWeight: 700}}>Popularity</td>
                        <td style={{color: 'red', fontWeight: 700}}>Genres</td>
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
        )
    }
}

export default Table
