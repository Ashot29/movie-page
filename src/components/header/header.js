import React, { memo } from "react"
import Navigation from "../navigation/navigation";

function Header() {
    return (
        <div>
            <h2>Header</h2>
            <Navigation />
        </div>
    )
}

export default memo(Header);