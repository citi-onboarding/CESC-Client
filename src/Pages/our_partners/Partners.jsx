import React from 'react';
import './style.css';
import '../../Components/card/card';
import Card from '../../Components/card/card';

function OurPartners(props) {
    return(
        <>
        
        <div className='container'>
            <h2>Conheça os nossos parceiros</h2>
            <div className='box'>
                <div className="parceiros"><Card image='Logo.sgv' /></div> 
                <div className="parceiros"><Card image='Logo.png' /></div> 
                <div className="parceiros"><Card image='Logo.png' /></div> 
                <div className="parceiros"><Card image='Logo.png' /></div> 
                <div className="parceiros"><Card image='Logo.png' /></div> 
                <div className="parceiros"><Card image='Logo.png' /></div> 
                <div className="parceiros"><Card image='Logo.png' /></div> 
                <div className="parceiros"><Card image='Logo.png' /></div> 
                <div className="parceiros"><Card image='Logo.png' /></div> 
                <div className="parceiros"><Card image='Logo.png' /></div> 
            </div>
        </div>    
       
        </>
    )
    
}

export default OurPartners;