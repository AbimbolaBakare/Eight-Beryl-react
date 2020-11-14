import React, { useState } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import logo from '../images/THE8THBERYL-RAW.jpg'

function Navigation () {
const [collapse, setCollapse] = useState(false)
   
 function onClick() {
    setCollapse((collapse=> !collapse))
  } 
    const bgWhite = { backgroundColor: '#fff' }
    return (
      <div>
          <header>
            <MDBNavbar style={bgWhite} dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/">
                <img src={logo} alt='logo' style={{ maxWidth: '15%', maxHeight:'100%' }} />      
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
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
      </div>
    );
  }

export default Navigation;