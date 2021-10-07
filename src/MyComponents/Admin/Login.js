import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LoginNavigation from './LoginNavigation';
import axios from 'axios';
import GLogin from './GLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import test from './test.css';


const Login = () => {
  // for sucess msg
  const diffToast = () => {
    toast.success("Login successful ", {
      position: "top-right"

    });
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory();

  useEffect(() => {
    if ((localStorage.getItem('login')) || (localStorage.getItem('glogin'))) {
      history.push("/adminHome")
    }

  }, [])



  const login = async (e) => {
    e.preventDefault();

    const dat = {
      email,
      password,
    };

    axios
      .post("http://localhost:8000/api/admin/login/", dat)
      .then((res) => {
        console.log("datadda")
        console.log(res.data)
        console.log(res.data.access)
        localStorage.setItem("login", res.data.access)
        history.push("/adminHome");
      })
      .catch((err) => {
        console.log(err)
        alert("please enter valid credential")
        history.push('/login');
        window.location.reload(false);



      })
  };













  return (
    <>

      <LoginNavigation />
      <section class="vh-100 my-5" >
        <div class="container h-100">

          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black pr" style={{ borderRadius: "25px;" }}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>


                      <form onSubmit={login}>
                        <input type="text" style={{ margin: "5px" }} required onChange={(e) => setEmail(e.target.value)} /><br />
                        <input type="password" style={{ margin: "5px" }} required onChange={(e) => setPassword(e.target.value)}
                        /><br /> 
                        <button class="button" onClick={diffToast}>LOGIN</button>
                        <GLogin />
                      </form>



                    </div>
                    <ToastContainer />

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

