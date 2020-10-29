import React from 'react';
import { MDBMask, Container, MDBRow, MDBCol, MDBBtn, MDBAnimation } from 'mdbreact';
import logo from '../../images/THE8THBERYL-RAW.jpg';


function BannerTwo() {
    return (
        <div id='classicformpage2' className='mb-5'>
            <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
                <Container>
                    <MDBRow>
                        <MDBCol lg='8'></MDBCol>
                        <MDBCol lg='4' className='mt-5'>
                            <MDBAnimation
                                reveal
                                type="rollIn"
                                delay=".3s"
                                className="white-text text-center"
                            >
                                <div className='text-dark h-100 serv p-5' >
                                    <h2 className="text-center" >GALLERY</h2>

                                    <div className="text-center m-5">
                                    <img src={logo} alt='logo' className='img-fluid' />
                                </div>

                                    <div className='mb-5'>
                                        <h4 className="text-center" >Unforgettable<br /> memories</h4>
                                    </div>

                                    <div className="text-center mt-5 mb-5 ">
                                        <MDBBtn outline color="dark" className='w-100'>DISCOVER</MDBBtn>
                                    </div>
                                </div>
                            </MDBAnimation>

                        </MDBCol>
                    </MDBRow>
                </Container>
            </MDBMask>

        </div>
    );
};

export default BannerTwo;