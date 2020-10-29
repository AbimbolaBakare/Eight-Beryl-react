import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBAnimation } from "mdbreact";
import image from '../../images/wedding2.jpg';
import logo from '../../images/THE8THBERYL-RAWf.jpg'


export default function ContentSection() {
    return (
        <>
            <MDBContainer fluid className="my-5 divi" size="md">
                <MDBRow>
                    <MDBCol lg='4' md="12" sm='12' >
                        <MDBAnimation
                            reveal
                            type="fadeInLeft"
                            delay=".3s"
                        >
                            <div className='text-dark h-100 serv p-5' >
                                <h2 className="text-center" >SERVICES</h2>

                                <div className="text-center m-5">
                                    <img src={logo} alt='logo' className='img-fluid' />
                                </div>

                                <div className='mb-5'>
                                    <h4 className="text-center" >Turn your dream <br /> into a reality</h4>
                                </div>

                                <div className="text-center mt-5 mb-5 ">
                                    <MDBBtn outline color="dark" className='w-100'>DISCOVER</MDBBtn>
                                </div>
                            </div>
                        </MDBAnimation>

                    </MDBCol>
                    <MDBCol md="1" ></MDBCol>
                    <MDBCol lg='7' md="12" sm='12' >
                        <MDBAnimation
                            reveal
                            type="fadeInRight"
                            delay=".3s"
                        >
                            <div className='h-100'>
                                <img className="img-fluid" src={image} alt='services' />
                            </div>
                        </MDBAnimation>


                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
}
