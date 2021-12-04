import React from 'react';  
import './style.css';

function card (props) {
    return(
        <div className = "card">
            
            <img className="image-big"  src={ require(props.image-big).default }/>

            <img className="image-small"  src={ require(props.image-small).default }/>

            <img className="image-carousel"  src={ require(props.image-carousel).default }/>
            
            <div className = "card-text">
                <h3 className="title"> {props.title} </h3>
                <p className="description"> {props.description} </p>
            </div>
            
        </div>
    );
}

export default card;
