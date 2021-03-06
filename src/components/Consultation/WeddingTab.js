import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBAnimation } from "mdbreact";
import ModalPage from '../../components/Modal'
import look1 from '../../images/THE8THBERYL-RAW.jpg';
import look2 from '../../images/banner10.jpg';
import look3 from '../../images/wedding2.jpg';
import look4 from '../../images/banner2(1).jpg';


export default function WeddingTab() {
    const [showModal, setShowModal] = useState(false);
    const [index, setIndex] = useState('');

    const openModal = tab => () => {
        setShowModal(true)
        if (index !== tab) {
         setIndex( tab );
        }
      };

   
    let title;
    let info;
    let image;
    switch (index) {
    case '1':
         title = "Full Package";
         info = 'Hello there, welcome to Eight Beryl. I am trying to test something -- full package';
         image = look4;
        break;
    case '2':
        title = "On The Day Coordination";
        info = 'Hello there, welcome to Eight Beryl. I am trying to test something -- on the day package';
        image = look2;
        break;
    case '3':
        title = "Partial Package";
        info = 'Hello there, welcome to Eight Beryl. I am trying to test something -- partial package';
        image = look3;
        break;
    default:
        title = "Wedding";
        info = 'Wedding package';
        image = look1;  
    }

    return (
        <div>
            <MDBContainer className='package-background-one'>
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
                            <MDBBtn color='amber' className='w-50 font-weight-bold' onClick={openModal("1")} >BOOK NOW</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBAnimation>
            </MDBContainer>

            <MDBContainer className='package-background-two'>
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
                            <MDBBtn color='amber' className='w-50 font-weight-bold' onClick={openModal("2")}>BOOK NOW</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBAnimation>

            </MDBContainer>


            <MDBContainer className='package-background-three'>
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
                            <MDBBtn color='amber' className='w-50 font-weight-bold' onClick={openModal("3")} >BOOK NOW</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBAnimation>
            </MDBContainer>

            <ModalPage open={showModal} close={() => setShowModal(false)}
                title={title}
                info={info}
                image={image}
            />

        </div>
    );
}
