// // import React, { useState, useEffect} from 'react';
// // import { useHistory } from 'react-router-dom';
// import LoginNavigation from './LoginNavigation';
// // import {withRouter} from "react-router-dom"
// // import loggin from '../../images/loggin.jpg'
// // import stu from '../../images/stu.jpg'
// // // import Service from '../../Service';

// // function Login(){
// //         const[email,setEmail] = useState("")
// //         const[password,setPassword] = useState("")

// //         const history = useHistory();
// //         useEffect(() => {
// //             if (localStorage.getItem('user-info')){
// //               console.log(localStorage.getItem('user-info'));
// //                 history.push("/adminHome")
// //             }
// // //         },[])

// //         async function login(){
// //             console.warn(email,password)
// //             let item = {email,password};
// //             let result = await fetch("http://127.0.0.1:8000/api/admin/login/",{
// //                 method: 'POST',
// //                 headers:{
// //                     "Content-Type":"application/json",
// //                     "Accept":'application/json'
// //                 },
// //                 body: JSON.stringify(item)
                
// //             });
// //             result = await result.json();
// //             localStorage.setItem("user-info",JSON.stringify(result))
// //             // alert(result.email)
// //             history.push("/adminHome")
// //         }

// //         return(
// //             <>
// //             <LoginNavigation/>
// //             {/* // <div style={{ backgroundImage: `url(${loggin})`, backgroundRepeat: 'no-repeat',backgroundSize:"cover" }}>
// //                     // <LoginNavigation/>
// //             //     <h1 style={{marginLeft:'25%',marginTop:'10%'}}>Login Page</h1>
// //             //     <div className="col-sm-6 offset-sm-3">
// //             //         <form onSubmit={login}>
// //             //         <input type="text" placeholder="email" required onChange={(e) => setEmail(e.target.value)} className="form-control" /> <br />

// //             //         <input type="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)} className="form-control" /> <br />

// //             //         <button class="btn btn-info btn-sm"  >LOGIN</button>
// //             //         </form>

// //             //     </div>
// //             // </div> */}


//       //       <section class="vh-100 my-5" >
//       //   <div class="container h-100">
        
//       //     <div class="row d-flex justify-content-center align-items-center h-100">
//       //       <div class="col-lg-12 col-xl-11">
//       //         <div class="card text-black pr" style={{borderRadius: "25px;"}}>
//       //           <div class="card-body p-md-5">
//       //             <div class="row justify-content-center">
//       //               <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
    
//       //                 <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">SignIn</p>
    
                      
//       //                 <form onSubmit={login}>
//       //                <input type="text" placeholder="email" required onChange={(e) => setEmail(e.target.value)} className="form-control" /> <br />

//       //                <input type="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)} className="form-control" /> <br />

//       //                <button class="button"  >LOGIN</button>
//       //                </form>
    
                      
    
//       //               </div>
//       //               <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
    
//       //                 {/* <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid" alt="Sample image" /> */}
//       //                 <img src="https://mdbootstrap.com/img/illustrations/undraw_basketball_agx4.png" class="img-fluid" alt="smaple image" />

//       //               </div>
//       //             </div>
//       //           </div>
//       //         </div>
//       //       </div>
//       //     </div>
//       //   </div>
//       // </section>
// //       </>
// //         )

// // }
// // export default Login


// import { withRouter } from 'react-router'
// import { useHistory } from 'react-router-dom';
// import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
//  class Login extends Component {
//     constructor(props)
//     {
//         super(props);
//         this.state={
          
//             email:"",
//             password:""
//         }
//         this.login = this.login.bind(this);
//     }
//      login()
//      {
//          let object ={email : this.state.email , password : this.state.password};
//          console.warn("state",this.state)
//          fetch('http://127.0.0.1:8000/api/admin/login/',{
//              method:"POST",
//              headers:{
//                 "Accept":"application/json",
//                 "Content-type":"application/json"
            
//              },
//              body: JSON.stringify(object)
            
  



//          }).then((result)=>{
//              result.json().then((resp)=>{
                
//                 this.setState({ email: resp.data })
//                 this.setState({ password: resp.data })

                 
//                  localStorage.setItem("loginff",resp.access);
//                 //  history.push("/adminHome");
//                 console.log("hghghghggggggggggggggg")
//                  this.props.history.push("/adminHome");
//                  window.location.reload(false);
//              })

//          })
        
         
//      }
//     render() {
//         return (
//             <div>
                
                
// <LoginNavigation />
// <section class="vh-100 my-5" >
//         <div class="container h-100">
        
//           <div class="row d-flex justify-content-center align-items-center h-100">
//             <div class="col-lg-12 col-xl-11">
//               <div class="card text-black pr" style={{borderRadius: "25px;"}}>
//                 <div class="card-body p-md-5">
//                   <div class="row justify-content-center">
//                     <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
    
//                       <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>
    
                      
//                       <form onSubmit={()=>{this.login()}}>
//                       <input type="text" style={{margin:"5px"}} required onChange={(u)=>{this.setState({email:u.target.value})}}
//                      /><br />
//                      <input type="password" style={{margin:"5px"}} required onChange={(p)=>{this.setState({password:p.target.value})}} 
//                     /><br />
//                      <button class="button" type="submit" >LOGIN</button>
//                      </form>
    
                      
    
//                     </div>
//                     <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
    
//                     <img src="https://mdbootstrap.com/img/illustrations/undraw_Group_chat_unwm.svg" class="img-fluid animate__animated animate__bounce " alt="smaple image" />
//                     {/* <img src="https://storyset.com/illustration/online-review/pana/animate?share=29283" class="img-fluid" alt="smaple image"  /> */}
                  
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
                
//             </div>
//         )
//     }
// }
// export default withRouter(Login);


import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import LoginNavigation from './LoginNavigation';
import axios from 'axios';

const  Login =()=> {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

        const history = useHistory();

        useEffect(() => {
            if (localStorage.getItem('login')){
                history.push("/adminHome")
            }
        },[])



      const login = async (e) =>{
        e.preventDefault();

        const dat = {
          email,
          password,
        };

        axios
        .post("http://localhost:8000/api/admin/login/", dat)
        .then((res) =>{ 
          console.log("datadda")
          console.log(res.data)
          console.log(res.data.access)
          localStorage.setItem("login",res.data.access)
          history.push("/adminHome");
        })
        .catch((err) =>{ 
          console.log(err)
          alert("please enter valid credential")
          history.push('/login');
          window.location.reload(false);
         


        })
    };

      
    
        
    







        return(
            <>
   
<LoginNavigation />
<section class="vh-100 my-5" >
        <div class="container h-100">
        
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black pr" style={{borderRadius: "25px;"}}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
    
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>
    
                      
                      <form onSubmit={login}>
                      <input type="text" style={{margin:"5px"}} required onChange={(e) => setEmail(e.target.value)}                /><br />
                     <input type="password" style={{margin:"5px"}} required onChange={(e) => setPassword(e.target.value)}
                    /><br />
                     <button class="button" type="submit" >LOGIN</button>
                     </form>
    
                      
    
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
    
                    <img src="https://mdbootstrap.com/img/illustrations/undraw_Group_chat_unwm.svg" class="img-fluid" alt="smaple image" />
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
export default Login;
