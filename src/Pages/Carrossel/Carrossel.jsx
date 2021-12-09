import React, {useEffect,useState} from "react";
import Slider from "react-slick";
import axios from 'axios'; 

import './style.css'

import { nextArrow } from '../../assets'
import { prevArrow } from '../../assets'

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
        focusOnSelect: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        centerMode:true,
        centerPadding: '60px',
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
        <div className='container' style={{width:'100%',height:'100%'}}>
            <div  className='maincard' style={{width:'980px',height:'450px',marginTop:'0',justifyContent:'space-between'}}>
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
                                        <Card image={url} changeImage='image'></Card>
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


        </div>
        </>
      )

}

export default Carrossel;
