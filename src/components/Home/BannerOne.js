import React from 'react';
import {MDBMask, MDBAnimation } from 'mdbreact';

export default function BannerOne() {
    return (
        <>
            <div id='classicformpage'>
            <MDBMask overlay="black-light" className="flex-center flex-column text-center">
              <MDBAnimation
                type="rollIn"
                delay=".3s"
                className=" text-center space"
              >
                <h1 className="h1-responsive text-warning font-weight-bold  ">
                  An
                   </h1>
              </MDBAnimation>

              <MDBAnimation
                type="fadeInRight"
                delay=".3s"
                className="text-center space"
              >
                <h1 className=" h1-responsive text-warning font-weight-bold ">
                  Indescribable
                   </h1>
              </MDBAnimation>

              <MDBAnimation
                type="fadeInLeft"
                delay=".3s"
                className="text-center space"
              >
                <h1 className="h1-responsive text-warning font-weight-bold">
                  Exprience
                   </h1>
              </MDBAnimation>

            </MDBMask>
        </div>
        </>
    )
}