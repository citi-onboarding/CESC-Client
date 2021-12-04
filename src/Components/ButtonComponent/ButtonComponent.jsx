import React from 'react';
import './style.css';

function ButtonComponent ({className, title, id, link}) {
    return (
        <>
            <button id={id} className={className} >
                <a href={link}>
                    <p className="paragrafo">{title}</p> 
                </a>
            </button>
        </>  
    )
};

export default ButtonComponent;