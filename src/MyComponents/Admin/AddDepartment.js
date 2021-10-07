import React, { useState } from 'react'
import { Container, Form, Button,Spinner, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router'
import '../../index.css';
// import tagit from '../../images/tagit.png'
const AddDepartment = () => {

    const [name, setName] = useState();
    const history = useHistory();
    
    const[nameErr,setNam] = useState({});




    useState(()=>{
      if (localStorage.getItem('login')){

        history.push("/addDepartment")
    }
    else{
      alert("Please log in to Add Add Department");
      history.push("/login")
    }
  },[])

    const AddDepartment = async (e) => {
      e.preventDefault();
      const isValid = formValidation();
        if(isValid === true)
        {
        let formField = new FormData();
        formField.append('name', name);

        await axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/admin/addDepartment/',
            data: formField
        }).then((response) => {
            console.log(response.data)
            alert("Department Added Successfully!");
            history.push('/showDepartment')
            window.location.reload(false);
            
        }).catch((error) => {
            console.log(error);
            alert("Please Enter Valid Data");
    });
  }


    }


    const formValidation = () =>{
      const nameErr = {};
      let isValid = true;
      if(name.trim().length < 5){
        nameErr.nameShort = "* Department name too short";
        isValid = false;
      }
      if(name.trim().length > 20){
        nameErr.nameShort = "* Department name too long";
        isValid = false;
      }
      setNam(nameErr);
      return isValid;

    }

    return (
        <section class="vh-100" >
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black pr" style={{borderRadius: "25px;"}}>
            <div class="card-body p-md-5">
              <div class="row justify-content-center">

                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 animate__animated  animate__slideInDown">


                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Department</p>


                  <Form className="p-5" onSubmit={AddDepartment} method="POST">

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Department Name</Form.Label>
                                    <Form.Control type="text" required placeholder="Enter Department Name" required name="name" value={name} onChange={(e) => setName(e.target.value)} />
                                {Object.keys(nameErr).map((key)=>{
                                  return <span style={{color:"red"}}>{nameErr[key]}</span>
                                })}
                                </Form.Group>
                                <button type="submit" class="button">
                                    
                                    Add Department
                                </button>

                        </Form>

                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">


                  <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid  animate__animated animate__slideInUp" alt="Sample image" />


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

export default AddDepartment;


// import axios from "axios";
// import React, { Component } from "react";

// class AddDepartment extends Component {
//   constructor() {
//     super();
//     this.state = {
//       form: {
//         name: "",
//       },
//       formErrors: {
//         name: null,
        
//       }
//     };
  
//   }

//   validateNumber = evt => {
//     var theEvent = evt || window.event;

//     if (theEvent.type === "paste") {
//       key = theEvent.clipboardData.getData("text/plain");
//     } else {
      
//       var key = theEvent.keyCode || theEvent.which;
//       key = String.fromCharCode(key);
//     }
//     var regex = /[0-9]|\./;
//     if (!regex.test(key)) {
//       theEvent.returnValue = false;
//       if (theEvent.preventDefault) theEvent.preventDefault();
//     }
//   };

//   handleChange = e => {
//     const { name, value, checked } = e.target;
//     const { form, formErrors } = this.state;
//     let formObj = {};
//     if (name === "language") {

//       if (checked) {
//         formObj = { ...form };
//         formObj[name].push(value);
//       } else {

//         formObj = {
//           ...form,
//           [name]: form[name].filter(x => x !== value)
//         };
//       }
//     } else {

//       formObj = {
//         ...form,
//         [name]: value
//       };
//     }
//     this.setState({ form: formObj }, () => {
//       if (!Object.keys(formErrors).includes(name)) return;
//       let formErrorsObj = {};
      
//       this.setState({ formErrors: formErrorsObj });
//     });
//   };

//   validateField = (name, value) => {
//     let errorMsg = null;
//     switch (name) {
//       case "name":
//         if (!value) errorMsg = "Please enter Name.";
//         break;
//       default:
      
//     }
//     return errorMsg;
//   };

//   validateForm = (form, formErrors, validateFunc) => {
//     const errorObj = {};
//     Object.keys(formErrors).map(x => {
//       let refValue = null;
      
//       const msg = validateFunc(x, form[x], refValue);
//       if (msg) errorObj[x] = msg;
//     });
//     return errorObj;
//   };

//   handleSubmit = () => {
//     const { form, formErrors } = this.state;
//     const errorObj = this.validateForm(form, formErrors, this.validateField);
//     if (Object.keys(errorObj).length !== 0) {
//       this.setState({ formErrors: { ...formErrors, ...errorObj } });
//       return false;
//     }
//     console.log("Data: ", form);
//   };





//   componentDidMount() {
  
//       axios
//         .post("http://127.0.0.1:8000/api/admin/addDepartment/")
//         .then((res) => {
//            this.setState({ data: res.data })
//              console.log(res.data);
//         })
//         .catch((err) => console.error(err));
//     }








//   render() {
//     const { form, formErrors } = this.state;
//     return (
//       <>
//         <div className="signup-box">
//           <p className="title">Sign up</p>
//           <div className="row">
//             <div className="col-md-6">
//               <div className="form-group">
//                 <label>
//                   Name:<span className="asterisk">*</span>
//                 </label>
//                 <input
//                   className="form-control"
//                   type="text"
//                   name="name"
//                   value={form.name}
//                   onChange={this.handleChange}
//                   onBlur={this.handleChange}
//                 />
//                 {formErrors.name && (
//                   <span className="err">{formErrors.name}</span>
//                 )}
//               </div>
              
              
//             </div>
//             <div className="col-md-6">
              
              
//             </div>
//           </div>

//           <div className="form-group">
//             <input
//               type="button"
//               className="btn btn-primary"
//               value="Submit"
//               onClick={this.handleSubmit}
//             />
//           </div>
//         </div>
        
//       </>
//     );
//   }
// }

// export default AddDepartment;
