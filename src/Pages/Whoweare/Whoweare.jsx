import React from 'react';
import {Card, SectionComponent} from '../../Components'
import { whowearepicture } from '../../assets';
import './style.css'
import axios from "axios"



function Whoweare (props) {
    return(
        <div className = "WhoweareSection">
                        
            <div className = "whoweare">
                <div className='titlewhoweare'>
                    <h1>Quem Somos</h1>  
                </div>
                <div className='contentwhoweare' style={{height: "250px"}}>


                    <SectionComponent titlesection = "titulo" text = "texto" section = "invert">
                        <div style= {{ height: "270px"}} >
                                <Card changeImage = "image" image = {"url"} />
                        </div>
                    </SectionComponent>    
                    <SectionComponent titlesection = "titulo" text = "texto" section = "SectionDefault">
                        <div style= {{height: "270px"}} >
                                <Card changeImage = "image" image = {"url"} />
                        </div>
                    </SectionComponent>  
                    <SectionComponent titlesection = "ttitulo" text = "texto" section = "invert">
                        <div style= {{height: "270px"}} >
                                <Card changeImage = "image" image = {"url"} />
                        </div>
                    </SectionComponent>    
                    <div className = "imagewhoweare">
                        <img className='imgwhoweare' src = {whowearepicture}></img>
                    </div>                
                </div>
                    
                </div>
        </div>
        
    )
}

export default Whoweare