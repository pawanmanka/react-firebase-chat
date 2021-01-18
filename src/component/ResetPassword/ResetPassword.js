import React,{useState} from 'react';
import {
  Link
} from "react-router-dom";
import { Loader,Button, Checkbox, Form,Grid,Header,Icon,Segment,Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import firebase from 'firebase';
import { useDispatch } from 'react-redux';
import {  toast } from 'react-toastify';
export default function ResetPassword({history}){
    const [resetEmail, setResetEmail] = useState('');  
    const [loading,setLoading] = useState(false); 
    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for
        // this URL must be whitelisted in the Firebase Console.
        url: 'https://www.example.com/checkout?cartId=1234',
        // This must be true for email link sign-in.
        handleCodeInApp: true,
        iOS: {
          bundleId: 'com.example.ios',
        },
        android: {
          packageName: 'com.example.android',
          installApp: true,
          minimumVersion: '12',
        },
        // FDL custom domain.
        dynamicLinkDomain: 'coolapp.page.link',
      };
    function resetPass(e)
    {   
        e.preventDefault();
       
        if(resetEmail=="")
        {
            toast.error("Email Is required");
            return false;
        }
        setLoading(true);
        firebase
        .auth()
        .sendPasswordResetEmail(resetEmail)
        .then(function(res) {
            console.log(res);
            toast.info("Email Is Send To your inbox");
            setLoading(false);
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if(errorCode=="auth/user-not-found")
            {
                // toast.error("User Not Found ");
            }
            toast.error(errorMessage);
            setLoading(false);
          });
        console.log("email is " + resetEmail);
    }
    function handlechange(e)
    { 
        let email = e.target.value;
        setResetEmail(email);    
        
    }
    return(
    <div className="authentication-page">
    <div className="main-layout card-bg-1">
        <div className="container d-flex flex-column">
            <div className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
                <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                    <h1 className="font-weight-bold">Password Reset</h1>
                    <p className="text-dark mb-3">Enter your email address to reset password.</p>
                    <form className="mb-3" onSubmit={resetPass}>

                        <div className="form-group">
                            <label for="email" className="sr-only">Email Address</label>
                            <input type="email" name="email" value={resetEmail} onChange={handlechange} className="form-control form-control-md" id="email" placeholder="Enter your email"/>
                        </div>

                        
                        <button className="btn btn-lg btn-block btn-primary  text-uppercase font-weight-semibold" type="submit">{(loading)?"Loading...":"Send Reset Link"}</button>
                    </form>
                    <p>Already have an account ? <Link to="/"> Sign In</Link>.</p>
                </div>
            </div> 
        </div>
    </div>
  </div>
    );
}
