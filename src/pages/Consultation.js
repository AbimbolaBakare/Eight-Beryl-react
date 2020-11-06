import React from "react";
import Navigation from "../components/Navigation";
import Footer from '../components/Footer'
import {MDBContainer} from 'mdbreact'
import TabsDefault from "../components/Consultation/Tabs";

export default function Consultation() {
  return (
    <div>
      <div className="pb-5 py-5">
        <Navigation />
      </div>

      <MDBContainer className="text-center mt-5 pt-5">
        <h3 className="h3-responsive title sectionSpace">BOOK A CONSULTATION TODAY</h3>
      </MDBContainer>

      <TabsDefault/>

      <Footer/>
    </div>
  );
}
