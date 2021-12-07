import React from 'react';
import './style.css';

function ButtonComponent (props) {
    return (
        <>
            <button  className={`${props.classButton}`} onClick={props.onClick}>
                    <p>{props.title}</p> 
            </button>
        </>  
    )
};


export default ButtonComponent;