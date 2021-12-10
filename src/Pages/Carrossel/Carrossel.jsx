import React, {useEffect,useState} from "react";
import Slider from "react-slick";
import axios from 'axios'; 

import './style.css'

import nextArrow  from '../assets/nextArrow.svg'
import prevArrow from '../assets/prevArrow.svg'
import carouselDots from "../assets/carouselDot.svg";
import Childrenone from "../assets/Childreone.svg";
import Childrentwo from "../assets/Childrentwo.svg";
import Childrenthree from "../assets/Childrenthree.svg";
import Childrenfour from "../assets/Childrenfour.svg";
import Childrenfive from "../assets/Childrenfive.svg";
import ChildrenStain from "../assets/ChildrenStain.svg";

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
          style = {{width:'20px',left:'760px'}}
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
          style={{width:'20px'}}
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
        centerPadding:'150px',
        customPaging: i => (
          <div
            style={{
              width: "15px",
              height:'15px',
              position:'absolute',
              left:'-100px'
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
        <div className='everything' style={{width:'1000px'}}>
          <p className='fixed_title'>O que fazemos</p>
      
          <div className='container1' style={{position:'relative',width:'700px'}}>


              <div  className='maincard' style={{height:'450px'}}>
                  <Slider {...settingsCard} className='cardSlider'
                  asNavFor={nav1}
                  ref={slider => (slider2 = slider)}
                  style={{width:'754px',
                          height:'100%',
                          paddingTop:'20px',
                          margin:'10px',
                          marginRight:'50px'
                          }}
                    >
                      {CarrosselInfo?.map(({image}) => (
                          <div className='cards_carrossel' style={{height:'450px'}}>
                                  {image?.map(({url}) => (
                                      <div style={{height:'450px',width:'426px'}}>
                                          <Card image={url} changeImage='image' changeText=''></Card>
                                      </div>
                                  ))}
                          </div>
                          ))}
                  </Slider>
                  <div className='carrossel2'>
                    <Slider {...settingsText}
                      asNavFor={nav2}
                      ref={slider => (slider1 = slider)}
                    >
                        {CarrosselInfo?.map(({title,description}) => (
                            <>
                            <div className='texts_carrossel'>
                              <p className='title_carrossel2'>{title}</p>
                              <p className-='text_carrossel2' style={{fontFamily:'Varela Round',height:'400px',fontSize:'20px'}}>{description}</p>
                            </div>
                            
                            </>
                        ))}

                    </Slider>
                  </div>
              </div>

              <img src={ChildrenStain} style={{width:'418px',position:'absolute',left:'550px',top:'350px'}}/>
              <img src={Childrenone} style={{position:'absolute',width:'161px',left:'520px',top:'470px'}}/>
              <img src={Childrentwo} style={{position:'absolute',width:'120px',left:'650px',top:'350px'}}/>
              <img src={Childrenthree} style={{position:'absolute',width:'125px',left:'760px',top:'350px'}}/>
              <img src={Childrenfour} style={{position:'absolute',width:'99px',left:'700px',top:'510px'}}/>
              <img src={Childrenfive} style={{position:'absolute',width:'101px',left:'810px',top:'480px'}}/>

          </div>
        </div>
        </>
      )

}

export default Carrossel;
