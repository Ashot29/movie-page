import React from "react"
import { Link } from "react-router-dom"
import './navigation.css'
function Navigation() {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/popular">Popular</Link></li>
            <li><Link to="/upComing">Up Coming</Link> </li>
            <li><Link to="/nowPlaying">Now Playing</Link> </li>
            <li><Link to="/topRated">Top Rated</Link> </li>
        </ul>
    )
}

export default Navigation;