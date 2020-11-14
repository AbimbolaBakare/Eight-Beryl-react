import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import look1 from '../../images/THE8THBERYL-RAW.jpg';
import "../../css/carousel.css"

export default function Testimonial() {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6000}
    >
      <div className='m-5'>
        <img src={look1} className='img-fluid' alt='testimonial' />
        <div className="myCarousel">
          <h3>Mr. Segun</h3>
          <h4>Lagos</h4>
          <p>
            8th Beryl planned my son's first birthday party and they performed beyond expectation. I highly recommend
            </p>
        </div>
      </div>

      <div>
        <img src={look1} alt='testimonial'/>
        <div className="myCarousel">
          <h3>Kiki </h3>
          <h4>London</h4>
          <p>
            My wedding was perfect, tho I wasn't around during the planning time. All thanks to 8th Beryl
            </p>
        </div>
      </div>

      <div>
        <img src={look1} alt='testimonial'/>
        <div className="myCarousel">
          <h3>Charles</h3>
          <h4>Lagos</h4>
          <p>
            Outstanding and perfect. They give you peace of mind and value for money spent.
            </p>
        </div>
      </div>
    </Carousel>
  );
}