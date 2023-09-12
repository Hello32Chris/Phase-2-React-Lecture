import React from "react";

//the smoothest way to destructure vvv
function Footer( { name, number, surname } ) {
// function Footer(props) {

    console.log("footer component")


    // one way to destructure to avoid overtyping -- you dont need this if you type the variable names as parameters inside squirly brackets instead of props   vvvv
    // const { name, number, surname} = props

    // console.log(props)
    return (
        <footer>
            <h5>This is {name}'s Footer</h5>
            <p>This is my {number}nd time with react</p>
            <p>Copyright of {surname}</p>
        </footer>

    )
}

export default Footer;