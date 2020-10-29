import React from 'react';
import { Container, MDBCol, MDBRow, MDBBtn } from 'mdbreact';
import logo from '../images/THE8THBERYL-RAWf.jpg'

export default function Footer() {
    return (
        <div>
            <Container fluid className="my-5 divi" size="md">
                <MDBRow className='footer p-5'>
                    <MDBCol lg='1'> </MDBCol>
                    <MDBCol lg='2' className='text-center'>
                    <img src={logo} alt='logo' className='img-fluid'/>

                    </MDBCol>
                    <MDBCol lg='2' className='text-center'>
                        <p>Tel: 090987545678</p>
                        <p>Tel2: 090987545678</p>
                        <p>Mail: info@8thberyl.com</p>
                    </MDBCol>
                    <MDBCol lg='2' className='text-center'>
                        <p>2020 The Eight Beryl</p>
                        <p>Proudly created by</p>
                        <p>www.eightberyl.com</p>
                    </MDBCol>
                    <MDBCol lg='1'> </MDBCol>
                    <MDBCol lg='3' className='text-center'>
                        <p>Some icons will be herer</p>
                        <div className="text-center ">
                            <MDBBtn outline color="dark" className='w-100'>BOOK A CONSULTATION</MDBBtn>
                        </div>
                    </MDBCol>
                    <MDBCol lg='1'> </MDBCol>
                </MDBRow>
            </Container>
        </div>
    )
}