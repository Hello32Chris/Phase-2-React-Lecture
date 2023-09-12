import React from "react";

// import necessary components from files

import Header from "./components/Header";
import Footer from "./components/Footer";


import "./components/stylesheet.css";


function App () {

    console.log("app component");

    const name = "Chris";
    const number = "2";
    const surname = "Orth";

    return (
        <>
            <Header name = {name} number = {number} surname = {surname}/>
            <Footer name = {name} number = {number} surname = {surname}/>
            
        </>
    )

}

// export components so that files may be imported elsewhere
export default App;