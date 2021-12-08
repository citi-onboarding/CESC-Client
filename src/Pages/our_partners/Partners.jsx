import React from 'react';
import './style.css';
import '../../Components/card/card';
import Card from '../../Components/card/card';

function OurPartners(props) {
    return(
        <>
        
        <div className='container'>
            <h2>{props.title}</h2>
            <div className='box'>
                <div className="parceiros"><Card image='Logo.svg' /></div> 
                <div className="parceiros"><Card image='Logo1.svg' /></div> 
                <div className="parceiros"><Card image='Logo2.svg' /></div> 
                <div className="parceiros"><Card image='Log3.svg' /></div> 
                <div className="parceiros"><Card image='Logo4.svg' /></div> 
                <div className="parceiros"><Card image='Logo5.svg' /></div> 
                <div className="parceiros"><Card image='img.svg' /></div> 
                <div className="parceiros"><Card image='img.svg' /></div> 
                <div className="parceiros"><Card image='img.svg' /></div> 
                <div className="parceiros"><Card image='img.svg' /></div> 
            </div>
        </div>    
       
        </>
    ) 
}

export default OurPartners;