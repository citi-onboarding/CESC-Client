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
        loadWhoweareInfos();
    }, [])
  
    return(
        <div className = "WhoweareSection">
                        
            <div className = "whoweare">
                
                <p className="title-we">Quem Somos</p>  
                
              
                <div className='contentwhoweare'>

              

                    <SectionComponent 
                    titlesection = {Whoweareinfos[0]?.title} 
                    text = {Whoweareinfos[0]?.description} 
                    section = "invert">
                        {Whoweareinfos[0]?.image?.map(({url}) =>(
                            <div className="card-we">
                                <Card changeImage = "image" image = {url} changeText="" />
                            </div>
                        ))}     
                    </SectionComponent>
                    <SectionComponent titlesection = {Whoweareinfos[1]?.title} text = {Whoweareinfos[1]?.description}  section = "SectionDefault">
                        {Whoweareinfos[1]?.image?.map(({url}) =>(
                            <div className="card-we">
                                <Card changeImage = "image" image = {url} changeText="" />
                            </div>
                        ))}  
                    </SectionComponent>  
                    <SectionComponent titlesection = {Whoweareinfos[2]?.title} text = {Whoweareinfos[2]?.description}  section = "invert">
                        {Whoweareinfos[2]?.image?.map(({url}) =>(
                            <div className="card-we">
                                <Card changeImage = "image" image = {url} changeText="" />
                            </div>
                        ))}  
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