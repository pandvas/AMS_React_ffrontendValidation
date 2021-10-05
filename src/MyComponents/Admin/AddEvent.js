import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import "animate.css"
import axios from 'axios';
import { useHistory } from 'react-router'

import '../../index.css';

const AddEvent = () => {

    const [name, setName] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [venue, setVenue] = useState();
    const history = useHistory();



    const[nameErr,setNam] = useState({});
    const[venueErr,setVn] = useState({}); 


    useState(()=>{
      if (localStorage.getItem('login')){

        history.push("/addEvent")
    }
    else{
      alert("Please log in to Add Add Event");
      history.push("/login")
    }
  },[])

  


    const AddEvent = async (e) => {
      e.preventDefault();

      const isValid = formValidation();

      if(isValid === true){
        let formField = new FormData();
        formField.append('name', name);
        formField.append('date', date);
        formField.append('time', time);
        formField.append('venue', venue);

        await axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/admin/addEvent/',
            data: formField

        }).then((response) => {
            console.log(response.data)
            alert("Event Added Successfully!");
            history.push('/showEvent')
            window.location.reload(false);
            
        }).catch((error) => {
            console.log(error);
            alert("Please Enter Valid Data");
    });
    }
  }


// today=new Date();
let dat = new Date().toJSON().slice(0, 10);
console.log(dat);

    const formValidation = () =>{
      const nameErr = {};
      const venueErr = {};
      let isValid = true;
      if(name.trim().length < 5){
        nameErr.nameShort = "* Event name too short";
        isValid = false;
      }
      if(name.trim().length > 20){
        nameErr.nameShort = "* Event name too long";
        isValid = false;
      }

      if(venue.trim().length > 30){
        venueErr.nameShort = "* Event venue too long";
        isValid = false;
      }

      if(venue.trim().length < 5){
        venueErr.nameShort = "* Event venue too short";
        isValid = false;
      }

      
      setNam(nameErr);
      setVn(venueErr);
      return isValid;

    }



    return (


<section class="vh-100 my-5" >
    <div class="container h-80">
      <div class="row d-flex justify-content-center align-items-center h-80">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black pr" style={{borderRadius: "25px;"}}>
            <div class="card-body p-md-2">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1   animate__animated  animate__zoomInRight">

                  <p class="text-center h1 fw-bold mb-2 mx-1 mx-md-2 mt-2">Add Event</p>

                  
                  <Form className="p-5" onSubmit={AddEvent} method="POST" method="POST">
                            
                           
                                 <Form.Group className="mb-3" controlId="formBasicEmail">
                                     <Form.Label>Event Name</Form.Label>
                                     <Form.Control type="text" placeholder="Enter Event Name" required name="name" value={name} onChange={(e) => setName(e.target.value)} />
                                 
                                     {Object.keys(nameErr).map((key)=>{
                                  return <span style={{color:"red"}}>{nameErr[key]}</span>
                                })}
                                 
                                 </Form.Group>
                                 <Form.Group className="mb-3" controlId="formBasicPassword">
                                     <Form.Label>Event Date</Form.Label>
                                     <Form.Control type="date" placeholder="Department Id" required name="date" value={date} onChange={(e) => setDate(e.target.value)} min={dat}/>
                                     {/* {Object.keys(dateErr).map((key)=>{
                                  return <span style={{color:"red"}}>{dateErr[key]}</span>
                                })} */}
                                 </Form.Group>
                                 <Form.Group className="mb-3" controlId="formBasicPassword">
                                     <Form.Label>Event Time</Form.Label>
                                     <Form.Control type="time" placeholder="Department Id" required name="time" value={time} onChange={(e) => setTime(e.target.value)} />
                                 </Form.Group>
                                 <Form.Group className="mb-3" controlId="formBasicPassword">
                                     <Form.Label>Venue</Form.Label>
                                     <Form.Control type="text" rows="5" placeholder="Venue" required name="venue" value={venue} onChange={(e) => setVenue(e.target.value)} />
                                     {Object.keys(venueErr).map((key)=>{
                                  return <span style={{color:"red"}}>{venueErr[key]}</span>
                                })}
                                 </Form.Group>
                                 <button type="submit" className="button" >
                                     Add Event
                                 </button>
                         </Form>

                  

                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                  {/* <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid" alt="Sample image" /> */}
                  <img src="https://mdbootstrap.com/img/illustrations/graphics(4).png" class="img-fluid animate__animated  animate__zoomInLeft" alt="smaple image" />

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

export default AddEvent
