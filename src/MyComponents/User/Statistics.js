import React from 'react'
import I1 from "../../images/2.jpg";
import l1 from "../../images/alum1.jpg";
import l2 from "../../images/alum2.jpg";
import l3 from "../../images/alum3.jpg";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import "animate.css"

import { Container, Row, Col, Image } from 'react-bootstrap';

const Statistics = () => {


  const [focus, setFocus] = React.useState(false);




  
    return (
        <>
        <Container id="about" style={{ 'margin-top': '100px' }}>
            <Row >
                <Col xs={12} md={12} className="d-flex align-items-center justify-content-center animate__animated animate__lightSpeedInLeft">
                    <h1 style={{ 'margin-bottom': '50px' }} id="alum">Who We are</h1>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                    <p style={{ 'text-align': 'justify', 'padding-right': '20px' }}>
                        During this event, alumni and students from all fields participate in events like Buddy Talks (to help students in overcoming the uncertainties, distinguished alumni from different sectors like Consultancy, Finance and Banking, FMCG, IT and Software etc are invited to give a talk pertaining to their sectors), Panel Discussion (thought provoking debates by alumni from various sectors on some of the despised, desired and debated topics in the institute today makes it an event not to be missed for sure),
                    </p>

                </Col>
                <Col xs={12} md={4} >

                    <Image src={I1} rounded className="rounded mx-auto d-block pr" style={{ maxWidth: '34rem' }} />

                </Col>
            </Row>
        </Container >



        <div className="container z-depth-1 my-5 py-5 px-4 px-lg-0 " id="howwework">
<section>
  <h3 className="font-weight-bold text-center dark-grey-text pb-2  " id = "alum">How We Work</h3>
  <div className="row">
    <div className="col-lg-8 mx-auto   animate__animated animate__lightSpeedInLeft ">
      <ol className="timeline">
        <li className="timeline-element">
          <h5 className="font-weight-bold dark-grey-text mb-3" id = "alum">STEP 1</h5>
          <p className="text-muted ">Universities Contactus to orgnize the Events related to their Students and Alumnis By registering on our portal</p>
        </li>

        <li className="timeline-element">
          <h5 className="font-weight-bold dark-grey-text mb-3" id = "alum">STEP 2</h5>
          <p className="text-muted">We collect all the informations related to student and alumni of the respective University or college.</p>
        </li>

        <li className="timeline-element">
          <h5 className="font-weight-bold dark-grey-text mb-3" id = "alum">STEP 3</h5>
          <p className="text-muted">We create poll to all the student and Alumni for the Voting purpose.</p>
        </li>

        <li className="timeline-element">
          <h5 className="font-weight-bold dark-grey-text mb-3" id = "alum">STEP 4</h5>
          <p className="text-muted">After Poll result We Will respond to Universities, Students and Alumni with the confirmation of the event.</p>
        </li>
        <li className="timeline-element">
          <h5 className="font-weight-bold dark-grey-text mb-3" id = "alum">FINISH</h5>
          <p className="text-muted">We Take Feedback from Alumni and Universities after event.</p>
        </li>
      </ol>
    </div>
  </div>
</section>
</div>






{/* till now we hv coverd */}






<div class="container mt-5 pt-5 pb-3 px-5 z-depth-1 bgi pr ">
  <section class="text-center dark-grey-text" >
    <h1 style={{fontSize : "20px" , color : "#fff"}}>Till Now We Have Covered</h1>
    <div class="row text-center d-flex justify-content-center my-5">
      <div class="col-lg-3 col-md-6 mb-4 ">
        <i class="fas fa-envelope-open fa-3x mb-4 grey-text " id="alum"></i>
        <h5 class="font-weight-normal mb-3 bgw">Alumni</h5>
        <p class="counterup mb-0" id="alum">
        <CountUp start={focus ? 0 : null} end={28} duration={5} redraw={true}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
                <VisibilitySensor
                  onChange={isVisible => {
                    if (isVisible) {
                      setFocus(true);
                    } 
                  }}
                >
                  <a>k</a>
                </VisibilitySensor>
              </div>
            )}
          </CountUp>
 </p>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <i class="fas fa-layer-group fa-3x mb-4 grey-text " id = "att"></i>
        <h5 class="font-weight-normal mb-3 bgw">Attended</h5>
        <p class=" mb-0" id = "att">

        <CountUp start={focus ? 0 : null} end={10} duration={5} redraw={true}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
                <VisibilitySensor
                  onChange={isVisible => {
                    if (isVisible) {
                      setFocus(true);
                    } 
                  }}
                >
                  <a>k</a>
                </VisibilitySensor>
              </div>
            )}
          </CountUp>


        </p>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <i class="fas fa-brush fa-3x mb-4 grey-text" id = "vol"></i>
        <h5 class="font-weight-normal mb-3 bgw">Volunteers</h5>
        <p class=" mb-0" style={{color : "#46BFBD"}}>
        <CountUp start={focus ? 0 : null} end={350} duration={6} redraw={true}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
                <VisibilitySensor
                  onChange={isVisible => {
                    if (isVisible) {
                      setFocus(true);
                    } 
                  }}
                >
                </VisibilitySensor>
              </div>
            )}
          </CountUp>
        
        </p>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <i class="fas fa-puzzle-piece fa-3x mb-4 grey-text" id = "uni"></i>
        <h5 class="font-weight-normal mb-3 bgw">Universities</h5>
        <p class=" mb-0" id = "uni">

        <CountUp start={focus ? 0 : null} end={38} duration={5} redraw={true}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
                <VisibilitySensor
                  onChange={isVisible => {
                    if (isVisible) {
                      setFocus(true);
                    } 
                  }}
                >
                </VisibilitySensor>
              </div>
            )}
          </CountUp>
        </p>
      </div>
    </div>
    
  </section>
  


</div>      





{/* blog */}


<div class="container mt-5" id="blog">


 
  <section class="dark-grey-text text-center">

  
    <h2 class="font-weight-bold mb-4 pb-2 slideLeft" id = "alum">Our Recent Blogs</h2>
   
      {/* <p class="text-center mx-auto w-responsive mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p> */}

  	
    <div class="row">

    
      <div class="col-lg-4 col-md-12 mb-4">

  
        <div class="view overlay rounded z-depth-2 mb-4">
          <img class="img-fluid pr" src={l1} alt="Sample image" />
          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>

       
        <a href="#!" class="pink-text">
          <h6 class="font-weight-bold mb-3" id = "uni"><i class="fas fa-map pr-2"></i></h6>
        </a>
       
        <h4 class="font-weight-bold mb-3"><strong>Golden Jubilee Alumni Meet:</strong></h4>
      
       
        <p class="dark-grey-text">Every year, new students enter the institute and old students bid farewell. An institution’s network is widespread in terms on numerous alumni spread across different cities and countries.
        Connections with all the alumni over the years is difficult to maintain unless the institute involves  into keeping in touch.</p>
        <a class="btn btn-info btn-rounded btn-md pr">Read more</a>

      </div>
    

    
      <div class="col-lg-4 col-md-6 mb-4">

  
        <div class="view overlay rounded z-depth-2 mb-4">
          <img class="img-fluid pr" src={l2} alt="Sample image" />
          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>

       
        <a href="#!" class="deep-orange-text" id="vol">
          <h6 class="font-weight-bold mb-3"><i class="fas fa-graduation-cap pr-2"></i></h6>
        </a>
       
        <h4 class="font-weight-bold mb-3"><strong>Silver Jubilee Alumni Meet:</strong></h4>
      
       
        <p class="dark-grey-text">Celebrating 25 years of the institute with its alumni is another type of reunion. The policies, mission and vision of the institute can be reflected upon and a small talk on how 25 years of the institute have shaped and cultivated its discipline in the students is one of the things that can be planned for a silver jubilee reunion..</p>
        <a class="btn btn-info btn-rounded btn-md pr">Read more</a>

      </div>
    

    
      <div class="col-lg-4 col-md-6 mb-4">

  
        <div class="view overlay rounded z-depth-2 mb-4">
          <img class="img-fluid pr" src={l3} alt="Sample image" />
          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>

       
        <a href="#!" class="blue-text">
          <h6 class="font-weight-bold mb-3" id="voli"><i class="fas fa-fire pr-2"></i></h6>
        </a>
       
        <h4 class="font-weight-bold mb-3"><strong>Homecomming</strong></h4>
      
       
        <p class="dark-grey-text">Several institutions organise alumni meet frequently at specific intervals. These reunions aren’t specific to any particular batch; it can be organised for one batch or for all. Alumni from different batches come together and walk down the lane of nostalgia..</p>
        <a class="btn btn-info btn-rounded btn-md pr">Read more</a>

      </div>
    

    </div>


  </section>
 


</div>


</>
    )
}

export default Statistics
