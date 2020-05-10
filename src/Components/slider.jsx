import React, { Component } from "react";
import Slider from "react-slick";
import '../App.scss'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
        <Slider className="slider" {...settings}>

          <div>
            <img className="slider-image" src="sleepy-bagels.jpg" alt="ocean"/>
          </div>
          <div>
          <img className="slider-image" src="IMG_1723.jpg" alt="ocean"/>

          </div>
          <div>
          <img className="slider-image" src="IMG_1790.jpg" alt="ocean"/>

          </div>
          <div>
          <img className="slider-image" src="IMG_1946.jpg" alt="ocean"/>

          </div>
          <div>
          <img className="slider-image" src="grassy_bagel.jpg" alt="ocean"/>

          </div>
          <div>
          <img className="slider-image" src="baby-bagels.jpg" alt="ocean"/>

          </div>
        </Slider>
      
    );
  }
}