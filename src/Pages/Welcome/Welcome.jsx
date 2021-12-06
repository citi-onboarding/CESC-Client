import React from 'react';  
import image1 from "./assets";
import image2 from "./assets";
import './style.css';

function Welcome(){
    return(
        <div className= "welcome">
            <h1>Transformando Vidas,<br/>
            Resgatando Cultura,<br/>
            Arte e Cidadania</h1>
            <div className = "images">
                <img className= "img-back" src={image1}></img>
                <img className= "img-front"src={image2}></img>
            </div>
        </div>
    )
}

export default Welcome;


