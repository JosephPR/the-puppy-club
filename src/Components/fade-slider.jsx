import React, { Component } from "react";
import Slider from "react-slick";
import '../App.scss'

export default class FadeSlider extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
        <div id="about-bagels">
               <Slider className="slider-2" {...settings}>

<div>
  <img className="slider-image-2" src="bagels.jpg" alt="ocean"/>
</div>
<div>
<img className="slider-image-2" src="IMG_1723.jpg" alt="ocean"/>

</div>
<div>
<img className="slider-image-2" src="IMG_1790.jpg" alt="ocean"/>

</div>
<div>
<img className="slider-image-2" src="IMG_1946.jpg" alt="ocean"/>

</div>
<div>
<img className="slider-image-2" src="grassy_bagel.jpg" alt="ocean"/>

</div>
</Slider>
            <p>
                More about Bagels
            </p>
        </div>
     
      
    );
  }
}