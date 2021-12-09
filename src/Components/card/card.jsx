import React from 'react';  
import './style.css';

function Card (props) {
    return(
        <div className = "card">
            
            <img className= {`image${props.changeImage}`}src={props.image}/>
           
            <div className = {`none${props.changeText}`}>
                <h3 className="title"> {props.title} </h3>
                <p className="description"> {props.description} </p>

            </div>
            
        </div>
    );
}

export default Card;
