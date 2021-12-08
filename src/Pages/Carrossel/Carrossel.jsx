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

    const { className, style, onClick } = props;

    return (
        <div
          className={className}
          style={{ ...style,  width:"29px", height: "30px", position: "absolute" }}
          onClick={onClick}
        >
          <img src = { nextArrow }></img>
        </div>
      );
}

function SamplePrevArrow(props) {

    const { className, style, onClick } = props;

    return (
        <div
          className={className}
          style={{ ...style,  width:"29px", height: "30px", position: "absolute" }}
          onClick={onClick}
        >
          <img src = { prevArrow }></img>
        </div>
      );
}

function Carrossel () {

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

    const settings = {
        focusOnSelect: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />
      };

      return (

        <div className='content'>
            <h2 className='fixed_title'>O que fazemos</h2>
            <div>
                <Slider {...settings}>
                    {CarrosselInfo?.map(({ title , description , image}) => (
                            <div>
                            <SectionComponent title={title} text={description} section='invert'>
                                <div style={{width:"426px", height: "450px"}}>
                                    <Card image = {image.url} changeImage='image'></Card>
                                </div>
                            </SectionComponent>
                        </div>
                        ))
                    }
                 </Slider>
            </div>


        </div>
      )

}

export default Carrossel;
