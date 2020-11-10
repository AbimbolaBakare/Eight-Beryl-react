import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

function ModalPage(props) {

    return (
        <MDBContainer>
            <MDBModal isOpen={props.open} toggle={props.close} size='md' centered>
                <MDBModalHeader tag='h3' className='title' >{props.title}</MDBModalHeader>
                <MDBModalBody>
                    <p className='text-center font-weight-bold'>{props.info}</p>
                    <div>
                        <img src={props.image} className='img-fluid' alt='modal' />
                    </div>

                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn onClick={props.close} color="danger" >Close</MDBBtn>
                    <MDBBtn color="warning" onClick={()=>alert('This will redirect to whatsapp as said earlier')}>Book Now</MDBBtn>
                </MDBModalFooter>
            </MDBModal>

        </MDBContainer>
    );
};

export default ModalPage;