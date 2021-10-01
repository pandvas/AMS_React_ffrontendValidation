import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import shubhamSingh from './images/shubhamSingh.png'
import prateek from './images/prateek.jpg'
import neeraj from './images/neeraj.jpg'
import faizan from '../../images/IMG-1074-Original.jpg'
import sandeep from './images/sandeep.jpg'

const Ourteam = () => {
    return (
        <>
        {/* <div id="ourteam">
            <Container style={{ 'margin-top': '50px' }}>
                <Row >
                    <Col xs={12} md={12} className="d-flex align-items-center justify-content-center hoverable">
                        <h1 style={{ 'margin-bottom': '50px' }}>Our Team</h1>
                    </Col>
                </Row>

                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={shubhamSingh} width="10px" />
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ border: 'none' }}>
                                    <Card.Body>
                                        <Card.Title>Shubham Singh</Card.Title>
                                        <h3 style={{ 'color': 'grey' }}>Full Stack</h3>
                                        <Card.Text>
                                            Work Experiance on Diffrent Technologies like django, React, Javascript, Html, Css, Rest API, Machine Learning
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={prateek} width="10px" />
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ border: 'none' }}>
                                    <Card.Body>
                                        <Card.Title>Prateek Chaurasiya</Card.Title>
                                        <h3 style={{ 'color': 'grey' }}>Full Stack</h3>
                                        <Card.Text>
                                            Work Experiance on Diffrent Technologies like django, React, Javascript, Html, Css, Rest API, Machine Learning
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div style={{ 'padding': '100px;' }}> &nbsp;</div>
                <hr />
                <div style={{ 'padding': '100px;' }}> &nbsp;</div>
                <Row xs={1} md={2} className="g-4" >
                    <Col>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={neeraj} width="10px" />
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ border: 'none' }}>
                                    <Card.Body>
                                        <Card.Title>Neeraj Tiwari</Card.Title>
                                        <h3 style={{ 'color': 'grey' }}>Data Scientist</h3>
                                        <Card.Text>
                                            Work Experiance on Diffrent Technologies like django, React, Javascript, Html, Css, Rest API, Machine Learning
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={faizan} width="10px" />
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ border: 'none' }}>
                                    <Card.Body>
                                        <Card.Title>Faizan</Card.Title>
                                        <h3 style={{ 'color': 'grey' }}>UI Lead</h3>
                                        <Card.Text>
                                            Work Experiance on Diffrent Technologies like django, React, Javascript, Html, Css, Rest API, Machine Learning
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div style={{ 'padding': '100px;' }}> &nbsp;</div>
                <hr />
                <div style={{ 'padding': '100px;' }}> &nbsp;</div>
                <Row xs={1} md={2} className="g-4" >
                    <Col>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={sandeep} width="10px" />
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ border: 'none' }}>
                                    <Card.Body>
                                        <Card.Title>Sandeep</Card.Title>
                                        <h3 style={{ 'color': 'grey' }}>Full Stack </h3>
                                        <Card.Text>
                                            Work Experiance on Diffrent Technologies like django, React, Javascript, Html, Css, Rest API, Machine Learning
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <div style={{ 'padding-top': '120px;' }}> &nbsp;</div>
            </Container >

        </div>

 */}

























        <div class="container my-5" id="ourteam">



<section class="team-section text-center dark-grey-text">

 
  <h3 class="font-weight-bold pb-2 mb-4">Our amazing team</h3>

  <hr style={{    borderRadius : "3px solod" , borderBlock: "5px solid #ccc" }} / >

  <p class="text-muted w-responsive mx-auto mb-5"></p>


  <div class="row text-center text-md-left">

  
    <div class="col-lg-6 col-md-12 mb-5 d-md-flex justify-content-between">
      <div class="avatar mb-md-0 mb-4 mx-4">
        <img src={shubhamSingh} class="rounded z-depth-1 pr" style={{width : "200px", height : "200px"}} alt="Sample avatar" />
      </div>
      <div class="mx-4">
        <h4 class="font-weight-bold mb-3" >Shubham Singh</h4>
        <h6 class="font-weight-bold grey-text mb-3 " id="uni">Full Stack Developer</h6>
        <p class="grey-text">Work Experiance on Diffrent Technologies like django, React, Javascript, Html, Css, Rest API, Machine Learning.</p>
      
        <a class="p-2 fa-lg fb-ic">
          <i class="fab fa-facebook-f"> </i>
        </a>
       
        <a class="p-2 fa-lg tw-ic">
          <i class="fab fa-twitter"  id="alum"> </i>
        </a>
      
        <a class="p-2 fa-lg dribbble-ic">
          <i class="fab fa-dribbble"  id="uni"> </i>
        </a>
      </div>
    </div>
  
    <div class="col-lg-6 col-md-12 mb-5 d-md-flex justify-content-between">
      <div class="avatar mb-md-0 mb-4 mx-4">
        <img src={faizan} style={{width : "200px", height : "200px"}} class="rounded z-depth-1 pr" alt="Sample avatar" />
      </div>
      <div class="mx-4">
        <h4 class="font-weight-bold mb-3">Faizan Arif</h4>
        <h6 class="font-weight-bold grey-text mb-3" id="uni">UI Lead</h6>
        <p class="grey-text">Work Experiance on Diffrent Technologies like django, React, Javascript, Html, Css, Rest API, Machine Learning.</p>
        
        <a class="p-2 fa-lg fb-ic" >
          <i class="fab fa-facebook-f" ></i>
        </a>
       
        <a class="p-2 fa-lg yt-ic"  style={{color:"#FF0000;"}}>
          <i class="fab fa-youtube" id='uni'> </i>
        </a>
   
        <a class="p-2 fa-lg ins-ic">
          <i class="fab fa-instagram" id="uni"> </i>
        </a>
      </div>
    </div>
 

  </div>



  <div class="row text-center text-md-left">
    <div class="col-lg-6 col-md-12 mb-5 d-md-flex justify-content-between">
      <div class="avatar mb-md-0 mb-4 mx-4">
        <img src={prateek} style={{width : "450px", height : "200px"}} class="rounded z-depth-1 img-fluid pr" 
          alt="Sample avatar" />
      </div>
      <div class="mx-4">
        <h4 class="font-weight-bold mb-3">Prateek Chaurasiya</h4>
        <h6 class="font-weight-bold grey-text mb-3" id="uni">API Developer</h6>
        <p class="grey-text">Work Experiance on Diffrent Technologies like django, React, Javascript, Html, Css, Rest API, Machine Learning.</p>
        <a class="p-2 fa-lg gplus-ic">
          <i class="fab fa-google-plus-g" id="uni"> </i>
        </a>
        <a class="p-2 fa-lg li-ic">
          <i class="fab fa-linkedin-in"  id="alum"> </i>
        </a>
        <a class="p-2 fa-lg email-ic">
          <i class="fas fa-envelope" id="vol"> </i>
        </a>
      </div>
    </div>
    <div class="col-lg-6 col-md-12 mb-5 d-md-flex justify-content-between">
      <div class="avatar mb-md-0 mb-4 mx-4">
        <img src={neeraj} style={{width : "450px", height : "200px"}} class="rounded z-depth-1 img-fluid pr" 
          alt="Sample avatar" />
      </div>
      <div class="mx-4">
        <h4 class="font-weight-bold mb-3">Niraj Tiwari</h4>
        <h6 class="font-weight-bold grey-text mb-3" id="uni">Backend Developer</h6>
        <p class="grey-text">Work Experiance on Diffrent Technologies like django, React, Javascript, Html, Css, Rest API, Machine Learning.</p>
        <a class="p-2 fa-lg gplus-ic">
          <i class="fab fa-google-plus-g" id="uni"> </i>
        </a>
        <a class="p-2 fa-lg li-ic">
          <i class="fab fa-linkedin-in"  id="alum"> </i>
        </a>
        <a class="p-2 fa-lg email-ic">
          <i class="fas fa-envelope" id="vol"> </i>
        </a>
      </div>
    </div>
    <div class="col-lg-6 col-md-12 mb-5 d-md-flex justify-content-between">
      <div class="avatar mb-md-0 mb-4 mx-4">
        <img src={sandeep} style={{width : "450px", height : "200px"}} class="rounded z-depth-1 img-fluid pr" 
          alt="Sample avatar" />
      </div>
      <div class="mx-4">
        <h4 class="font-weight-bold mb-3">Sandeep Kumar</h4>
        <h6 class="font-weight-bold grey-text mb-3" id="uni">Backend Developer</h6>
        <p class="grey-text">Work Experiance on Diffrent Technologies like django, React, Javascript, Html, Css, Rest API, Machine Learning.</p>
        
        <a class="p-2 fa-lg gplus-ic">
          <i class="fab fa-google-plus-g" id="uni"> </i>
        </a>
        <a class="p-2 fa-lg li-ic">
          <i class="fab fa-linkedin-in" id="alum"> </i>
        </a>
        <a class="p-2 fa-lg email-ic">
          <i class="fas fa-envelope" id="vol"> </i>
        </a>
      </div>
    </div>
  </div>
 </section>
 </div> 

</>
    )
}

export default Ourteam;
