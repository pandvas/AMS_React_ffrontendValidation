import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Jobsuccess = () => {
    return (
    

<>
<section class="vh-100 my-5" >
    <div class="container h-80">
      <div class="row d-flex justify-content-center align-items-center h-80">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black pr" style={{borderRadius: "25px;"}}>
            <div class="card-body p-md-2">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    
                  <p class="text-center h1 fw-bold mb-2 mx-1 mx-md-2 mt-2">Registration Successfull</p>
                  <button className = "button">
                      Log In
                  </button>
                 </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid" alt="Sample image" />
                  {/* <img src="https://mdbootstrap.com/img/illustrations/graphics(4).png" class="img-fluid" alt="smaple image" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
            
    </>
    )
}
export default Jobsuccess;
