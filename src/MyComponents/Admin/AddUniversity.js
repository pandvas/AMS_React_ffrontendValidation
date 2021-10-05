import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router'

import '../../index.css';

const AddUniversity = () => {

    



    
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();




    useState(()=>{
      if (localStorage.getItem('login')){

        history.push("/addUniversity")
    }
    else{
      alert("Please log in to Add Add University");
      history.push("/login")
    }
  },[])


    const AddUniversity = async () => {
        let formField = new FormData();
        formField.append('name', name);
        formField.append('email', email);
        formField.append('address', address);
        formField.append('password', password);



  



        
      
        await axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/admin/addUniversity/',
            data: formField

        }).then((response) => {
            console.log(response.data)
            alert("University Added Successfully!");
            history.push('/showUniversity')
            window.location.reload(false);
           history.push('/')
        }).catch((error) => {
            console.log(error);
        alert("Please Enter Valid Data");
    });
     
      


    }



















    return (
    
        <>


<section class="vh-100 my-5" >
    <div class="container h-100 ">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black pr mb-20 pb-10" style={{borderRadius: "25px;"}}>
            <div class="card-body p-md-5 mb-20 pb-10">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1  animate__animated  animate__flipInY">

                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add University</p>

                  
                  <Form className="p-8" onSubmit={AddUniversity}>
                           {/* <h1>Add University</h1> */}
                            
                               <Form.Group className="mb-3" controlId="formBasicEmail">
                                   <Form.Label>University Name</Form.Label>




                                   <Form.Control type="text" placeholder="Enter University Name" name="name" required  value={name} onChange={(e) => setName(e.target.value)} />
                               </Form.Group>

                               <Form.Group className="mb-3" controlId="formBasicEmail">
                                   <Form.Label>Email</Form.Label>   
                                   <Form.Control type="email" placeholder="Enter email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                               </Form.Group>
                               <Form.Group className="mb-3" controlId="formBasicEmail">
                                   <Form.Label>Address</Form.Label>
                                   <Form.Control type="text" placeholder="Address" required name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                               </Form.Group>
                               <Form.Group className="mb-3" controlId="formBasicPassword">
                                   <Form.Label>Password</Form.Label>       
                                   <Form.Control type="password" id="password" required placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                               </Form.Group>
                               <Form.Group className="mb-3" controlId="formBasicPassword">
                                   <Form.Label>Confirm Password</Form.Label>
                                   <Form.Control type="password" id="confirmPassword" required placeholder="Confirm Password" />
                               </Form.Group>
                             

                               <button class="button">Add University</button>
                            
                         </Form>


                  

                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                  {/* <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid" alt="Sample image" /> */}
                  <img src="https://mdbootstrap.com/img/illustrations/app-user-colour.svg" class="img-fluid animate__animated  animate__rotateIn" alt="smaple image" />

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

export default AddUniversity;


