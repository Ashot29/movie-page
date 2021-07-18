import React, { PureComponent } from "react"
import Api from '../../services/dataService'
import { MovieContext } from "../../context/movieContext"

class SearchMovie extends PureComponent {
    constructor() {
        super();
        this.state = {
            value: '',
        }
        this.searchMovieName = this.searchMovieName.bind(this)
    }

    searchMovieName(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {

        console.log(this.state, 'state search')
        return (
            <MovieContext.Consumer>
                {value => {
                      const { search } = value.state;
                    return (
                        <>
                            <form onSubmit={(event) => {
                                event.preventDefault();
                                Api.getSearch(this.state.value)
                                .then(data => {
                                    value.dispatch({
                                        search: [...data.results]
                                    })
                                })
                               
                            }}>
                             {   console.log(search,"value state ")}
                            <input onChange={this.searchMovieName} type="text" placeholder='Search Movie....' />
                            <button>Search</button>
                        </form>
                        </>
        )
    }
}
            </MovieContext.Consumer >
        )
    }
}

export default SearchMovie












