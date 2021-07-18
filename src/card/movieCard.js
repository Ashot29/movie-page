import React, { Component } from "react"
import Card from '@material-ui/core/Card';
import { IMG_URL } from "../config/url";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './card.css'

class MovieCard extends Component {
    constructor() {
        super()
    }


    render() {
        const { search } = this.props;
        return (
            <div className="card_container">
                {
                    search.map((element) => {
                        console.log(element, 'element')
                        return (
                            <Card key={element.id} style={{ maxWidth: "345px" }}>
                                <CardActionArea>
                                    <CardMedia
                                        style={{ height: "140px" }}
                                        image={`${IMG_URL}${element.backdrop_path}`}
                                        title= {element.title}
                                        alt={element.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {element.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                          {element.overview}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}


export default MovieCard;