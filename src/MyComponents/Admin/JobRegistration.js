import React,{ useState} from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import { useHistory } from 'react-router'



const JobRegistration = () => {


    const [username, setusername] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();

    const history = useHistory();


  


    const register = async (e) =>{
        e.preventDefault();

        const dat = {
          username,
          email,
          password,
        };

        axios
        .post("http://localhost:8080/RegisterViewsPost/", dat) //port no change 8080
        .then((res) =>{ 
          console.log("datadda")
          console.log(res.data);
          history.push("/jobreg");
        //   console.log(res.data)
        //   console.log(res.data.access)
        //   localStorage.setItem("login",res.data.access)
        //   history.push("/adminHome");
        })
        .catch((err) =>{ 
          console.log(err)
          alert("please enter valid data")
        //   history.push('/login');
        //   window.location.reload(false);
         


        })
    };



    return(
        <>
<section class="vh-100 my-5" >
    <div class="container h-80">
      <div class="row d-flex justify-content-center align-items-center h-80">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black pr" style={{borderRadius: "25px;"}}>
            <div class="card-body p-md-2">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-2 mx-1 mx-md-2 mt-2">Registration Form</p>
                  <Form className="p-5" onSubmit={register} >
                                 <Form.Group className="mb-3" controlId="formBasicEmail">
                                     <Form.Label> Name</Form.Label>
                                     <Form.Control type="text" placeholder=" Name" onChange={(e) => setusername(e.target.value)} required name="name"  />
                                 </Form.Group>
                                 <Form.Group className="mb-3" controlId="formBasicPassword">
                                     <Form.Label>Email</Form.Label>
                                     <Form.Control type="email" placeholder="Email" onChange={(e) => setemail(e.target.value)} required name="email"  />
                                 </Form.Group>


                                 <Form.Group className="mb-3" controlId="formBasicPassword">
                                     <Form.Label>PASSWORD</Form.Label>
                                     <Form.Control type="password" placeholder="Paasword" onChange={(e) => setpassword(e.target.value)} required name="password"  />
                                 </Form.Group>
                                 
                                 <button type="submit" className="button" >
                                     Register
                                 </button>
                         </Form>
                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  {/* <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid" alt="Sample image" /> */}
                  <img src="https://mdbootstrap.com/img/illustrations/graphics(4).png" class="img-fluid" alt="smaple image" />
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
export default JobRegistration;
