import React from "react";

//pass in props = {name: blogData.name}
function Header ({name}) {
    return (
        <header>
            <h1>{name}</h1>
        </header>
    )
}

export default Header