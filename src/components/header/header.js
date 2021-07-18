import React, { memo } from "react"
import Navigation from "../navigation/navigation";
import './header.css'

function Header() { 
    return (
        <header >
            <h2>Header</h2>
            <Navigation />
        </header>
    )
}

export default memo(Header);