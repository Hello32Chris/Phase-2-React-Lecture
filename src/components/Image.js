import React from "react";



function Image({ name, number, surname }) {
    
    return (
        <>
            <img alt={`${name} ${surname}`}  title= {`${name} ${surname}`} src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTyya-iJrdM6II6svo4re02CEfbPDw6FAlLY_hMTAOMNe6XfV2av0nXOplFHCq4U6aWcrPr4_cIGk47T_Y" />  
            <h3 id="imageText"> Picture of {name}</h3>
        </>
    )
}

export default Image;