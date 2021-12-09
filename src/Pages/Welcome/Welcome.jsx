import React from 'react';  
import { greenstain } from '../../assets/index';
import { kidspainting } from '../../assets/index';
import './style.css';

function Welcome(){
    return(
        <div className= "welcome">
            <div className = "welcomeSection">
                <h1>Transformando Vidas,<br/>
                Resgatando Cultura,<br/>
                Arte e Cidadania</h1>
                <div className = "images">
                    <img className= "img-back" src={greenstain}></img>
                    <img className= "img-front"src={kidspainting}></img>
                </div>
            </div>
        </div>
    )
}

export default Welcome;


