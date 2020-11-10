import React, { useState } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer} from 'mdbreact';

import logo from '../images/THE8THBERYL-RAW.jpg'

function Navigation() {
  const [collapse, setCollapse]  = useState(false);


  function onClick() {
    setCollapse({
      collapse: !collapse,
    });
  }

    return (
      <div>
          <MDBNavbar color="white" expand="md" scrolling fixed='top' >
            <MDBContainer className='my-3'>
              <MDBNavbarBrand href="/">
                {/* <strong>8th BERYL</strong> */}
                <img src={logo} alt='logo' className='img-fluid' style={{width:'15%'}}/>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={onClick} />
              <MDBCollapse isOpen={collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem active>
                    <MDBNavLink className='text-dark' to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className='text-dark' to="/services">Services</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className='text-dark' to="/about">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink className='text-dark' to="/consultation">Consultation</MDBNavLink>
                </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className='text-dark' to="/gallery">Gallery</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className='text-dark' to="/contact">Contact</MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                 
                  </MDBNavItem>
                  
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
      </div>
    );
  };

export default Navigation;