import React, { useState } from "react";
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import WeddingTab from "./WeddingTab";
import PrivatePartyTab from "./PrivatePartyTab";
import CorporateEventTab from "./CorporateEventTab";

  function TabsDefault (){

    const [activeItem, setActiveItem] = useState('1')

    const toggle = tab => () => {
      if (activeItem !== tab) {
       setActiveItem( tab );
      
      }
    };

      return (
        <MDBContainer>
        <MDBNav tabs className=" nav-tabs nav-justified mt-5" color="primary">
        
          <MDBNavItem>
            <MDBNavLink link to="#" active={activeItem === "1"} onClick={toggle("1")} role="tab" >
              Weddings
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={activeItem === "2"} onClick={toggle("2")} role="tab" >
            Social Events
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={activeItem === "3"} onClick={toggle("3")} role="tab" >
              Corporate Events
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={activeItem} >
          <MDBTabPane tabId="1" role="tabpanel">
            <WeddingTab/>
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
           <PrivatePartyTab/>
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
            <CorporateEventTab/>
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
}
export default TabsDefault;