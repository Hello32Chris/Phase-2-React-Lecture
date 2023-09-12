import React from "react";


import Image from "./Image"

function Header(
    { 
        name, 
        number, 
        surname
    }
    ) {

    return (
        <header>
            <h1>This is {name}'s Header</h1>
            <Image name = {name} number = {number} surname = {surname}/>
        </header>
    )
}

export default Header;