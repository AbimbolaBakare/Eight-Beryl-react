import React from "react";
import { MDBContainer } from
  "mdbreact";
import Carousel, { consts } from 'react-elastic-carousel'

const Testimonial = () => {

  function myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? '👈' : '👉'
    return (
      <div style={{ cursor: 'pointer' }} className='mt-5' onClick={onClick} disabled={isEdge}>{pointer}</div>
    )
  }

  return (
    <MDBContainer className='mb-5 p-5'>
      <Carousel enableAutoPlay autoPlaySpeed='3000' renderArrow={myArrow} itemsToShow={1} easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={700}>
        <div className='text-center'>
          <h4 className='h3-responsive p-5 '>
          I'm a testimonial. <br/>Click to edit me and add text that says something <br/> nice about you and your services.
          </h4>
        </div>
        <div className='text-center'>
        <h4 className='h3-responsive p-5 '>
          I'm a testimonial. <br/>Click to edit me and add text that says something <br/> nice about you and your services.
          </h4>
        </div>
        <div className='text-center'>
        <h4 className='h3-responsive p-5 '>
          I'm a testimonial. <br/>Click to edit me and add text that says something <br/> nice about you and your services.
          </h4>
          
        </div>

      </Carousel>
    </MDBContainer>
  );
}

export default Testimonial;