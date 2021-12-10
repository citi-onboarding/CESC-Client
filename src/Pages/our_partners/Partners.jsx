import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css';
import { Card } from '../../Components';

function OurPartners() {
    const [infos, setInfos] = useState([])

    const getInfos = async () => {
        const res = await axios.get('https://cesc-server.herokuapp.com/parceiros')
        const {data} = res
        setInfos(data)
        console.log(data)
    }
    useEffect(() => {
        getInfos();
    }, [])

    return(
        <>
            <div className='container'>
                <h2>Conheça nossos parceiros</h2>
                <div className='box'> 
                    <>
                        <div className="parceiros">
                            <Card changeImage ='image' changeText='' image={infos[0]?.image.url} />
                        </div>
                        
                        <div className="parceiros">
                            <Card changeImage ='image' changeText='' image={infos[1]?.image.url} />
                        </div> 

                        <div className="parceiros">
                            <Card changeImage ='image' changeText='' image={infos[2]?.image.url} />
                        </div> 

                        <div className="parceiros">
                            <Card changeImage ='image' changeText='' image={infos[3]?.image.url} />
                        </div> 

                        <div className="parceiros">
                            <Card changeImage ='image' changeText='' image={infos[4]?.image.url} />
                        </div> 

                        <div className="parceiros">
                            <Card changeImage ='image' changeText='' image={infos[5]?.image.url} />
                        </div> 

                        <div className="parceiros">
                            <Card changeImage ='image' changeText='' image={infos[6]?.image.url} />
                        </div> 

                        <div className="parceiros">
                            <Card changeImage ='image' changeText='' image={infos[7]?.image.url} />
                        </div> 

                        <div className="parceiros">
                            <Card changeImage ='image' changeText='' image={infos[8]?.image.url} />
                        </div> 
                        
                        <div className="parceiros">

                            <Card changeImage ='image' changeText='' image={infos[9]?.image.url} />
                        </div> 
                    </>
                </div>
            </div>    
        </>
    ) 
}

export default OurPartners;