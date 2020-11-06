import React from "react";
import { MDBContainer } from "mdbreact";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PictureGrid from "../components/Gallery/PictureGrid";

function Gallery() {
    return (
        <div>
      <div className="pb-5 py-5">
        <Navigation />
      </div>

      <MDBContainer className="text-center mt-5 pt-5 mb-5">
        <h3 className="h3-responsive title sectionSpace">GALLERY</h3>
      </MDBContainer>

      <PictureGrid/>

      <Footer/>
    </div>
    );

}


export default Gallery;