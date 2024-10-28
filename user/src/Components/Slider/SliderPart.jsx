import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from "../Card/Data";
import Card from "../Card/Card";

function Responsive() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
 
    

    return (
      <div className=" xsm:w-[95vw]">
      <div className="slider-container">
        <Slider {...settings} >{
        data.map((item) => (
        <Card key={item.id} name={item.name} date={item.date} loc={item.loc} img={item.img} price={item.price} />
      ))}
        </Slider>
      </div>
      </div>
    );
  }
  
  export default Responsive;


