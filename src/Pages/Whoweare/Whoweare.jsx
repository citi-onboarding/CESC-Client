import React, { useEffect, useState } from 'react';
import {Card, SectionComponent} from '../../Components'
import  whowearepicture  from '../assets/whowearepicture.svg';
import './style.css'
import axios from "axios"



function Whoweare (props) {
     
    const [Whoweareinfos, setWhoweareInfos] = useState([])
    
    console.log(Whoweareinfos)

    async function loadWhoweareInfos () {
        const res = await axios.get("http://localhost:1337/quem-somos")
        const {data} = res;
        console.log(data)
        setWhoweareInfos(data);
    }

    useEffect (() =>{
        setWhoweareInfos();
    }, [])
  
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
                        <div style= {{ height: "270px"}} >
                                <Card changeImage = "image" image = {"url"} />
                        </div>
                    </SectionComponent>  
                    <SectionComponent titlesection = "titulo" text = "texto" section = "invert">
                        <div style= {{ height: "270px"}} >
                                <Card changeImage = "image" image = {"url"} />
                        </div>
                    </SectionComponent>                      
                   
                    {/* <div className = "imagewhoweare">
                        <img className='imgwhoweare' src = {whowearepicture}></img>
                    </div> */}           
                </div>
                    
                </div>
        </div>
        
    )
}

export default Whoweare