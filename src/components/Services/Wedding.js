import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBAnimation } from "mdbreact";
import wedding1 from '../../images/wedding1.jpg'
import wedding2 from '../../images/wedding2.jpg'

const Wedding = () => {
    return (
        <MDBContainer fluid className='divi'>
            <section className="text-center my-5">
                <h2 className="h2-responsive font-weight-bold title sectionSpace my-5">
                    WEDDINGS
                </h2>
                {/* <p className="dark-grey-text w-responsive mx-auto mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                    error amet numquam iure provident voluptate esse quasi, veritatis
                    totam voluptas nostrum quisquam eum porro a pariatur veniam.
                </p> */}
                <MDBRow>
                    <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                        <MDBAnimation
                            reveal
                            type="fadeInLeft"
                            delay=".3s"
                        >
                            <MDBCard border="white" className='wedding-card p-5'>
                                <img
                                    style={{  width: '160px', height: '160px' }}
                                    src={wedding1}
                                    alt=""
                                    className="rounded-circle mx-auto img-fluid m-3"
                                />
                                <MDBCardBody>
                                    <h4 className="font-weight-bold mb-4 title">Full Package</h4>

                                    <p className="dark-grey-text mt-3 title-small p-3">

                                        I'm a paragraph. Click here to add your own text and edit me.
                                        I’m a great place for you to tell a story and let your users know more.
                                </p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBAnimation>
                    </MDBCol>

                    <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
                        <MDBAnimation
                            reveal
                            type="fadeInRight"
                            delay=".3s"
                        >
                            <MDBCard border="white" className='wedding-card p-5' >

                                <img
                                    style={{ width: '160px', height: '160px'}}
                                    src={wedding2}
                                    alt=""
                                    className="rounded-circle mx-auto img-fluid m-3"
                                />

                                <MDBCardBody>
                                    <h4 className="font-weight-bold mb-4 title">Partial Package</h4>

                                    <p className="dark-grey-text mt-3 title-small p-3">

                                        I'm a paragraph. Click here to add your own text and edit me.
                                        I’m a great place for you to tell a story and let your users know more.
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBAnimation>

                    </MDBCol>
                    <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
                        <MDBAnimation
                            reveal
                            type="fadeInLeft"
                            delay=".3s"
                        >
                            <MDBCard border="white" className='wedding-card p-5' >
                                <img
                                    style={{ width: '160px', height: '160px'}}
                                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                                    alt=""
                                    className="rounded-circle mx-auto img-fluid m-3"
                                />

                                <MDBCardBody>
                                    <h4 className="font-weight-bold mb-4 title">On the Day</h4>

                                    <p className="dark-grey-text mt-3 title-small p-3">

                                        I'm a paragraph. Click here to add your own text and edit me.
                                        I’m a great place for you to tell a story and let your users know more.
                                </p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBAnimation>

                    </MDBCol>
                </MDBRow>
            </section>
        </MDBContainer>
    );
}

export default Wedding;