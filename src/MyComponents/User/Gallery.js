import React, { Component } from 'react'
// import 'https://mdbootstrap.com/docs/b4/jquery/getting-started/cdn/';
import { Container, Row, Col, Image } from 'react-bootstrap';
import i2 from "./images/slider/DSC_3779.JPG";
import i3 from "./images/slider/DSC_3838.JPG";
import i1 from "./images/slider/image1.jpg";

const Gallery = () => {







    return (
        <>



{/* 
        <div id="gallery">

            <Container style={{ 'margin-top': '30px', 'padding': '30px' }}>
                <Row>
                    <Col xs={12} md={12} className="d-flex align-items-center justify-content-center">
                        <h1 style={{ 'margin-bottom': '0px' }}>Gallery</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <Image c thumbnail />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={6}>
                        <Image src={i1} thumbnail />
                    </Col>
                    <Col xs={6} md={6}>
                        <Image src={i3} thumbnail />
                    </Col>
                </Row>
            </Container>
        </div>


 */}





















        <div class="container mt-5" id="gallery">

<h1 style={{textAlign:"center" , marginBottom : "30px"}} >Gallery</h1>

<section>

 

  <div className="row">

    <div className="col-lg-7 col-md-12">

      <div className="news-tile view zoom z-depth-3 rounded mb-4">

        <a href="#!" className="text-white">
          <img src={i1}
               className="img-fluid pr rounded-bottom" alt="sample image" />
          <div className="mask rgba-stylish-strong">
           
          </div>
        </a>

      </div>
     

    </div>

    <div className="col-lg-4 col-md-12">

     
      <div className="news-tile view zoom z-depth-1 rounded mb-4">

        <a href="#!" className="text-white">
          <img src={i2}
               className="img-fluid pr rounded-bottom" alt="sample image" />
          <div className="mask rgba-stylish-strong">
             
            </div>
        </a>
      </div>
      <div className="news-tile view zoom z-depth-1 rounded mb-4">
        <a href="#!" className="text-white">
          <img src={i3}
               className="img-fluid pr rounded-bottom" alt="sample image" />
          {/* <div className="mask rgba-stylish-strong"> */}
              
            {/* </div> */}
          
        </a>

      </div>
      

    </div>
  

  </div>
  

</section>



</div>
</>
    )
}

export default Gallery;
