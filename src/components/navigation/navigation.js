import React from "react"
import { Link } from "react-router-dom"
import './navigation.css'
function Navigation() {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/genre">Genre</Link></li>
            <li><Link to="/about">About</Link></li> 

        </ul>
    )
}

export default Navigation;