import React from "react";
import data from "./data";

function Carousel(props) {  
    // const slide = props.image;
    // const url = Object.values(slide)[0];
    // console.log(url);

    return <div className="slide">
        <img src={props.image} alt="carousel" />
    </div>
}
    

export default Carousel;
