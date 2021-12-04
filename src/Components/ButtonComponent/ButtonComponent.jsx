import React from 'react';
import './style.css';

function ButtonComponent ({className, title, id, f_click}) {
    return (
        <>
            <button id={id} className={className} onClick={f_click}>
                    <p className="paragrafo">{title}</p> 
            </button>
        </>  
    )
};


export default ButtonComponent;