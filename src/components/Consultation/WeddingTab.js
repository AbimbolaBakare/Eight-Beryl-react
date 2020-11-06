import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBAnimation } from "mdbreact";

export default function WeddingTab() {
    return (
        <div>
            <MDBContainer>
                <hr className='mt-5' style={{ backgroundColor: '#f7c761' }} />
                <MDBAnimation
                    reveal
                    type="fadeInLeft"
                    delay=".3s"
                >
                    <MDBRow className='mt-5'>
                        <MDBCol md="2" className=' text-center'>
                            <img
                                style={{ width: "120px" }}
                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                                alt=""
                                className="rounded-circle mx-auto img-fluid m-3"
                            />
                        </MDBCol>

                        <MDBCol md="2" className='mx-auto text-center'>
                            <h4 className='title h4-responsive font-weight-bold'>Full Package</h4>
                        </MDBCol>

                        <MDBCol md="2" className='mx-auto text-center'></MDBCol>

                        <MDBCol md="2" className='mx-auto text-center'>
                            <p>1 hr</p>
                            <p>$150</p>
                        </MDBCol>

                        <MDBCol md="4" className='mx-auto text-center'>
                            <MDBBtn color='amber' className='w-50 font-weight-bold' >BOOK NOW</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBAnimation>

            </MDBContainer>



            <MDBContainer>
                <hr className='mt-5' style={{ backgroundColor: '#f7c761' }} />
                <MDBAnimation
                    reveal
                    type="fadeInRight"
                    delay=".3s"
                >
                    <MDBRow className='mt-5'>
                        <MDBCol md="2" className=' text-center'>

                            <img
                                style={{ width: "120px" }}
                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                                alt=""
                                className="rounded-circle mx-auto img-fluid m-3"
                            />
                        </MDBCol>

                        <MDBCol md="3" className='mx-auto text-center'>
                            <h4 className='title h4-responsive font-weight-bold'>On the day Coordination</h4>
                        </MDBCol>

                        <MDBCol md="1" className='mx-auto text-center'></MDBCol>

                        <MDBCol md="2" className='mx-auto text-center'>
                            <p>1 hr</p>
                            <p>$150</p>
                        </MDBCol>

                        <MDBCol md="4" className='mx-auto text-center'>
                            <MDBBtn color='amber' className='w-50 font-weight-bold' >BOOK NOW</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBAnimation>

            </MDBContainer>


            <MDBContainer>
                <hr className='mt-5' style={{ backgroundColor: '#f7c761' }} />
                <MDBAnimation
                    reveal
                    type="fadeInLeft"
                    delay=".3s"
                >
                    <MDBRow className='mt-5'>
                        <MDBCol md="2" className=' text-center'>

                            <img
                                style={{ width: "120px" }}
                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                                alt=""
                                className="rounded-circle mx-auto img-fluid m-3"
                            />
                        </MDBCol>

                        <MDBCol md="2" className='mx-auto text-center'>
                            <h4 className='title h4-responsive font-weight-bold'>Partial Package</h4>
                        </MDBCol>

                        <MDBCol md="2" className='mx-auto text-center'></MDBCol>

                        <MDBCol md="2" className='mx-auto text-center'>
                            <p>1 hr</p>
                            <p>$150</p>
                        </MDBCol>

                        <MDBCol md="4" className='mx-auto text-center'>
                            <MDBBtn color='amber' className='w-50 font-weight-bold' >BOOK NOW</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBAnimation>

            </MDBContainer>




        </div>
    );
}
