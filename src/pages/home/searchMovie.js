import React, { Component } from "react"
import Api from '../../services/dataService'
import { MovieContext } from "../../context/movieContext"
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//     root: {
//         maxWidth: 345,
//     },
//     media: {
//         height: 140,
//     },
// });


class SearchMovie extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
        }
        this.searchMovieName = this.searchMovieName.bind(this)
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    }

    searchMovieName(e) {
        this.setState({
            value: e.target.value
        })
        console.log(this.state)
    }

    handleSearchSubmit(event) {
        event.preventDefault();
        console.log(this.state.value);
        Api.getSearch(this.state.value)
            .then(data =>
                this.setState({

                }))
    }

    render() {
        return (
            <MovieContext.Consumer>
                {
                    value => {
                        console.log(value.state)
                        return (
                            <>
                                <form onSubmit={this.handleSearchSubmit}>
                                    <input onChange={this.searchMovieName} type="text" placeholder='Search Movie....' />
                                    <button>Search</button>
                                </form>
                                {/* <Card className={useStyles.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={useStyles.media}
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Card> */}
                            </>
                        )
                    }
                }
            </MovieContext.Consumer>

        )
    }
}

export default SearchMovie