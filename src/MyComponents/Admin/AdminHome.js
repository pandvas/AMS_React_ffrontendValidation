// import React from 'react'
// import { Container } from 'react-bootstrap'
// import download from '../../images/download.png'
// import manage from '../../images/alimage.png'

// const AdminHome = () => {
//     return (
//         <div className="text-center mt-5 pb-5 mb-5">
//             {/* <Container> */}
//                 <h1 className="mb-5 mt-5">Admin Home Page</h1>
//                 <div className="row">

//                     <div className="col">
//                 <img src={download} style={{width:"73%",marginRight:"11%"}}/>
//                 <p>Alumni management software enables organizations, typically universities and colleges, 
//                         to stay in touch with their alumni, engage them through communications and events, and
//                          solicit donations.</p>
//                 </div>
//                 <div className="col">
//                 <p>AMS is a complete alumni management system, making it easy for members to stay 
//                     engaged and connected. Manage contacts,register event, send out emails,
//                     and more. With a self serve design and a user friendly web or mobile 
//                     interface, you have the freedom to customize every aspect of your alumni network. 
//                     If you need help at any step of the way, our support team and community of experts are 
//                     ready to help guide you and share their best practices</p>
//                     <img src={manage} style={{width:"60%",marginRight:"9%",marginTop:"10%"}}/>

//                     </div>
                    

//                     </div>
//                 {/* <h2 className="mb-5 mt-5">Please Select Option for Admin Work</h2> */}
//             {/* </Container> */}
//         </div>
//     )
// }

// export default AdminHome


import { useEffect } from "react";
import React from "react";
import { useHistory } from "react-router";
// import { Container } from 'react-bootstrap'

const AdminHome = () => {

  const history = useHistory();




  useEffect(() => {
    if ((localStorage.getItem('login')) || (localStorage.getItem('glogin'))){

        history.push("/adminHome")
    }
    
    
    else{
      alert("Please log in ")
      history.push("/login")
    }
},[])

    return(
<>

<div class="view grey lighten-3">
    <div class="mask">
      <div class="container h-100">
      
        <div class="row align-items-center h-100 animate__animated   animate__wobble">
        
          <div class="col-md-6  animate__animated animate__wobble">
            <h1 class="mb-4">Welcome to <span class="text-warning">AMS</span><br/><span class="cyan-text" style={{color : "#74D5DE"}}>Admin</span> Dashboard</h1>
            <p class="mb-4 pb-2 dark-grey-text">Dear Alumnus, Back in the year 20's you used to sit in the class and dream of a future where success and prosperity would be yours. We hope you have achieved your dreams. But now is the time to sit back and think of the times gone by. Revisit the days gone by at the Alumni Meet.</p>
          	
          </div>
          <div class="col-md-6">
            <img src="https://mdbootstrap.com/img/illustrations/hiker-man-colour.svg" alt="" class="img-fluid  animate__animated   animate__wobble" style={{marginTop:"3%"}} />

          </div>
        
        </div>
      
      </div>
    </div>
  </div>
</>
    )
}
export default AdminHome;