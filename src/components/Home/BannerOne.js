import React from 'react';
import {MDBMask, MDBAnimation } from 'mdbreact';

export default function BannerOne() {
    return (
        <>
            <div id='classicformpage'>
            <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
              <MDBAnimation
                type="rollIn"
                delay=".3s"
                className="white-text text-center space"
              >
                <h1 className="h1-responsive ">
                  Creating
                   </h1>
              </MDBAnimation>

              <MDBAnimation
                type="fadeInRight"
                delay=".3s"
                className="white-text text-center space"
              >
                <h1 className="h1-responsive">
                  Unforgettable
                   </h1>
              </MDBAnimation>

              <MDBAnimation
                type="fadeInLeft"
                delay=".3s"
                className="white-text text-center space"
              >
                <h1 className="h1-responsive">
                  Memories
                   </h1>
              </MDBAnimation>

            </MDBMask>
        </div>
        </>
    )
}