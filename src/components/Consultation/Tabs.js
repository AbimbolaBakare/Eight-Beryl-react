import React, { useState } from "react";
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import WeddingTab from "./WeddingTab";

  function TabsDefault (){

    const [activeItem, setActiveItem] = useState('1')

    const toggle = tab => e => {
      if (activeItem !== tab) {
       setActiveItem({
          activeItem: tab
        });
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
              Private Parties
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
            <p className="mt-2">
              Quisquam aperiam, pariatur. Tempora, placeat ratione porro
              voluptate odit minima. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Nihil odit magnam minima,
              soluta doloribus reiciendis molestiae placeat unde eos
              molestias.
            </p>
            <p>
              Quisquam aperiam, pariatur. Tempora, placeat ratione porro
              voluptate odit minima. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Nihil odit magnam minima,
              soluta doloribus reiciendis molestiae placeat unde eos
              molestias.
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
            <p className="mt-2">
              Quisquam aperiam, pariatur. Tempora, placeat ratione porro
              voluptate odit minima. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Nihil odit magnam minima,
              soluta doloribus reiciendis molestiae placeat unde eos
              molestias.
            </p>
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
}
export default TabsDefault;