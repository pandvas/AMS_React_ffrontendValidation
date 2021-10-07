import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../index.css';


const AddHod = () => {
   // for sucess msg
   const diffToast = () => {
    toast.success("Hod Added successful ", {
      position: "top-right"

    });
  }

    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [id_hod, setIddepartment] = useState();
    const [address, setAddress] = useState();



//validations 
    const[nameErr,setNam] = useState({});
    // const[phoneErr,setPh] = useState({});
    // const[emailErr,setEm] = useState({});
    const[addressErr,setAdd] = useState({});


    const history = useHistory();


    useState(()=>{
      if (localStorage.getItem('login')){

        history.push("/addHod")
    }
    else{
      alert("Please log in to Add Add HOD");
      history.push("/login")
    }
  },[])

    const AddHod = async (e) => {
      e.preventDefault();
      const isValid = formValidation();
        if(isValid === true)
        {
        let formField = new FormData();
        formField.append('name', name);
        formField.append('phone', phone);
        formField.append('email', email);
        formField.append('address', address);
        formField.append('id_hod', id_hod);
        await axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/admin/addHod/',
            data: formField
        }).then((response) => {
            console.log(response.data)
            // alert("hOD Added Successfully!");
            history.push('/showHod')
            window.location.reload(false);
        }).catch((error) => {
            console.log(error);
            alert("Please Enter Valid Data");
    });
    }
  }
    const formValidation = () =>{
      const nameErr = {};
      const addressErr = {};
      // const phoneErr = {};
      // const emailErr = {};
      let isValid = true;
      if(name.trim().length < 5){
        nameErr.nameShort = "* Name too short";
        isValid = false;
      }
      if(name.trim().length > 20){
        nameErr.nameShort = "* Name too long";
        isValid = false;
      }
      if(address.trim().length < 5){
        addressErr.addressShort = "* Address too short";
        isValid = false;
      }
      if(address.trim().length > 10){
        addressErr.addressShort = "* Address too long";
        isValid = false;
      }
      // if(phone.trim().length < 10){
      //   phoneErr.addressShort = "* Invalid No";
      //   isValid = false;
      // }
      setNam(nameErr);
      setAdd(addressErr);
      // setPh(phoneErr);
      return isValid;

    }



return(
    <section class="vh-100 my-3" >
    <div class="container h-80">
      <div class="row d-flex justify-content-center align-items-center h-80">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black pr" style={{borderRadius: "25px;"}}>
            <div class="card-body p-md-3">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1  animate__animated  animate__rubberBand">

                  <p class="text-center h1 fw-bold mb-2 mx-1 mx-md-2 mt- ">Add Hod</p>

                  
                                  <Form className="p-5" onSubmit={AddHod}>
                        
                             <Form.Group className="mb-3" controlId="formBasicName">
                                 <Form.Label>Hod Name</Form.Label>
                                 <Form.Control type="text" placeholder="Enter Hod Name" required name="name" value={name} onChange={(e) => setName(e.target.value)} />
                                 {Object.keys(nameErr).map((key)=>{
                                  return <div style={{color:"red"}}>{nameErr[key]}</div>
                                })}
                             
                             </Form.Group>
                             <Form.Group className="mb-3" controlId="formBasicEmail">
                                 <Form.Label>Hod Email</Form.Label>
                                 <Form.Control type="email" id="emt" placeholder="Enter email" required name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                             
                                 {/* {Object.keys(emailErr).map((key)=>{
                                  return <div style={{color:"red"}}>{emailErr[key]}</div>
                                })} */}
                             
                             </Form.Group>
                             <Form.Group className="mb-3" controlId="formBasicPhone">
                                 <Form.Label>Hod Phone</Form.Label>
                                 <Form.Control id="txtPhoneNo" type="text" placeholder="Enter Phone Number" required name="phone"  value={phone} onChange={(e) => setPhone(e.target.value)} />
                                 {/* {Object.keys(phoneErr).map((key)=>{
                                  return <div style={{color:"red"}}>{phoneErr[key]}</div>
                                })} */}
                             
                             </Form.Group>

                             <Form.Group className="mb-3" controlId="formBasicEmail">
                                 <Form.Label>Address</Form.Label>
                                 <Form.Control type="text" placeholder="Address" required name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                             
                                 {Object.keys(addressErr).map((key)=>{
                                  return <div style={{color:"red"}}>{addressErr[key]}</div>
                                })}
                             
                             </Form.Group>
                             <Form.Group className="mb-3" controlId="formBasicPassword" >
                                 <Form.Label>Department Id</Form.Label>
                                 <Form.Control type="number" placeholder="Department Id" required name="id_hod" value={id_hod} onChange={(e) => setIddepartment(e.target.value)} />
                            </Form.Group>
                            <button type="submit" onClick={diffToast} class="button" >
                                Add Hod
                            </button>
                        
                    </Form>

                  

                </div>
                <ToastContainer />

                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                  {/* <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid" alt="Sample image" /> */}
                  <img src="https://mdbootstrap.com/img/illustrations/drawkit-phone-conversation-colour.svg" class="img-fluid  animate__animated  animate__wobble" alt="smaple image" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
}

export default AddHod
