import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";
import image from '../../images/wedding1.jpg'


export default function SectionOne() {
    return (
        <>
            <MDBContainer fluid className="my-5 divi" size="md">
                <MDBRow>
                    <MDBCol lg='4' md="12" sm='12' >
                        <MDBAnimation
                            reveal
                            type="fadeInRight"
                            delay=".3s"
                        >
                            <div className='h-100'>
                                <img style={{width:'100%', height:'59vh'}} src={image} alt='services' />
                            </div>
                        </MDBAnimation>


                    </MDBCol>
                    <MDBCol md="1" ></MDBCol>
                    <MDBCol lg='7' md="12" sm='12' >
                        <MDBAnimation
                            reveal
                            type="fadeInLeft"
                            delay=".3s"
                        >
                            <div className='text-dark h-100 section p-5' >
                                <h2 className=" h2-responsive text-center sectionSpace" >
                                    Making Dreams <br /> Come True
                                </h2>

                                <div className='mb-5 mt-4'>
                                    <p>
                                        I'm a paragraph. Click here to add your own text<br /> and edit me.
                                        It’s easy. Just click “Edit Text” or <br /> double click me to add your own content and<br /> make changes to the font.
                                </p>
                                </div>


                                <div className='mb-5 title'>
                                    <h5>Olaleye Juliana</h5>
                                    <h5>Creative Director & Founder</h5>
                                </div>


                            </div>
                        </MDBAnimation>


                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
}
