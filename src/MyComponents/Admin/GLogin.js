import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useEffect } from 'react';

const clientId = "886840610340-j7rirct3cis0gn52q98ed9uu7gp840on.apps.googleusercontent.com";

function GLogin() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const history = useHistory();



    useEffect(() =>{
        if (localStorage.getItem('login')){
            
        setShowloginButton(false);
        setShowlogoutButton(true);

        }

    }
    
    )




    const onLoginSuccess = (res) => {
        
        // console.log('Login Success:', res.profileObj);
        
        setShowloginButton(false);
        setShowlogoutButton(true);
        console.log("Profile object ");
        console.log(res.profileObj)
        console.log(res.profileObj.givenName);
        localStorage.setItem("glogin",res.accessToken)
        localStorage.setItem("name",res.profileObj.givenName)
        localStorage.setItem("image",res.profileObj.imageUrl)
        // console.log(res.accessToken);
        history.push('/adminHome');
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        
        console.clear();
        
        setShowloginButton(true);
        setShowlogoutButton(false);
        localStorage.clear();
        history.push('/login');
    };

    return (
        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
    );
}
export default GLogin;