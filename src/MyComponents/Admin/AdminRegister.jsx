import { React, useState, useEffect } from 'react'
import UserFooter from "./AdminFooter";
import axios from 'axios';
import { useHistory } from 'react-router';

import UserNavigationMenu from "./LoginNavigation";
import {  Form, Button  } from 'react-bootstrap'

const AdminRegister = () => {





    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory ();


    const AddAdmin = async () => {
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirm_password').value;
       
        if (password === confirmPassword && password !== "" && confirmPassword !== "") {
            let formField = new FormData();
            formField.append('name', name);
            formField.append('email', email);
            formField.append('password', password);
            
            await axios({
                method: 'POST',
                url: 'http://127.0.0.1:8000/api/admin/register/',
                data: formField
            }).then((response) => {
                console.log(response.data)
                alert('successfully register')
                history.push("/login")
            }).catch((error) => {
                console.log(error);
                alert("Invalid data")
            });
        }
        else{
            alert("password not match");
        }
        
    }









    return (
<>
<UserNavigationMenu />
<section class="vh-100 my-5" >
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black pr" style={{borderRadius: "25px;"}}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" id="voli">Register Admin</p>
                      {/* onClick={AddAdmin} */}
                      <Form onSubmit={AddAdmin}>
                        <Form.Group className="mb-3">
                            <Form.Label>Enter Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" required name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control id="password" type="password" placeholder="Password" required name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control id="confirm_password" type="password" required placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="btnning pr" >
                            Register
                        </Button>
                    
                        <div id="error"></div>
                    </Form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 ">
                    {/* <img src="https://mdbootstrap.com/img/illustrations/undraw_Group_chat_unwm.svg" class="img-fluid" alt="smaple image" /> */}
                    <img src="https://mdbootstrap.com/img/illustrations/undraw_connected_world_wuay.svg" class="img-fluid " alt="smaple image" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<UserFooter />
</>
    )
}
export default AdminRegister;