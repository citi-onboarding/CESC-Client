import React, {useEffect,useState} from "react";
import Slider from "react-slick";
import axios from 'axios'; 

import './style.css'

import { nextArrow } from '../../assets'
import { prevArrow } from '../../assets'
import { carouselDots } from "../../assets";
import { Childrenone } from "../../assets";
import { Childrentwo } from "../../assets";
import { Childrenthree } from "../../assets";
import { Childrenfour } from "../../assets";
import { Childrenfive } from "../../assets";
import { ChildrenStain } from "../../assets";

import { SectionComponent } from "../../Components";
import { Card } from "../../Components";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {

    const { className, onClick } = props;

    return (
        <div
          className={className}
          onClick={onClick}
          style = {{width:'100px',left:'750px',top:'300px',}}
        >
          <img src = { nextArrow }></img>
        </div>
      );
}

function SamplePrevArrow(props) {

    const { className, onClick } = props;

    return (
        <div
          className={className}
          onClick={onClick}
          style={{width:'100px',zIndex:'1',top:'300px'}}
        >
          <img src = { prevArrow }></img>
        </div>
      );
}

function Carrossel () {

    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    let slider1 = []
    let slider2 = []

    React.useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
    }, [slider1, slider2])

    const [CarrosselInfo, setCarrosselInfo] = useState([])
    console.log(CarrosselInfo)
    
    async function loadCarrosselInfo() {
        const res = await axios.get('http://localhost:1337/carrossels')
        const { data } = res;
        console.log(data)
        setCarrosselInfo(data);
    }

    useEffect(() => {
        loadCarrosselInfo();
    }, [])

    const settingsCard = {
        className: "center",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        centerMode:true,
        centerPadding: '164px',
        customPaging: i => (
          <div
            style={{
              width: "35px",
              height:'35px',
              alignItems:'center',
              paddingLeft:'92px'
            }}
          >
            <img src={carouselDots}/> 
          </div>
        )
  
      };

      const settingsText = {

        dots: false,
        prevArrow: false,
        nextArrow: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }

      return (
        <>

        <h1 className='fixed_title'>O que fazemos</h1>
      
        <div className='container' style={{width:'100%',height:'100%',position:'relative'}}>


            <div  className='maincard' style={{width:'1200px',height:'450px',marginTop:'0',justifyContent:'space-between'}}>
                <Slider {...settingsCard} className='cardSlider'
                 asNavFor={nav1}
                 ref={slider => (slider2 = slider)}
                 style={{width:'426px',
                        height:'100%'}}
                >
                    {CarrosselInfo?.map(({image}) => (
                        <div className='cards' style={{width:'426px',height:'450px'}}>
                                {image?.map(({url}) => (
                                    <div style={{width:'426px',height:'450px'}}>
                                        <Card image={url} changeImage='image' changeText=''></Card>
                                    </div>
                                ))}
                        </div>
                        ))}
                 </Slider>
                 <div style={{width:'349px'}}>
                 <Slider {...settingsText}
                   asNavFor={nav2}
                   ref={slider => (slider1 = slider)}
                 >
                    {CarrosselInfo?.map(({title,description}) => (
                        <>
                        <div className='texts' style={{width:'349px'}}>
                        <h1 className='title_carrosel'>{title}</h1>
                        <p className='description_carrossel'>{description}</p>
                        </div>
                        </>
                    ))}

                 </Slider>
                 </div>
            </div>

            <img src={ChildrenStain} style={{width:'418px',position:'absolute',left:'1100px',top:'350px'}}/>
            <img src={Childrenone} style={{position:'absolute',width:'161px',left:'1100px',top:'500px'}}/>
            <img src={Childrentwo} style={{position:'absolute',width:'120px',left:'1200px',top:'350px'}}/>
            <img src={Childrenthree} style={{position:'absolute',width:'125px',left:'1320px',top:'350px'}}/>
            <img src={Childrenfour} style={{position:'absolute',width:'99px',left:'1270px',top:'520px'}}/>
            <img src={Childrenfive} style={{position:'absolute',width:'101px',left:'1400px',top:'480px'}}/>

        </div>
        </>
      )

}

export default Carrossel;
