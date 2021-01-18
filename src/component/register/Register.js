import React,{ useState,useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import { Button, Checkbox, Form,Grid,Header,Icon,Segment,Message } from 'semantic-ui-react';
import './Register.css';  
import {db} from '../../services/Firebase';
import firebase from 'firebase';
import md5 from 'md5';
import { useDispatch,useSelector } from 'react-redux';

import {  toast } from 'react-toastify';
export default function Register({history}){
  
    const [formpara, setFormpara] = useState({email:"",password:"",cpassword:""});    
    const {email,password,cpassword} =formpara;
    const [loading,setLoading] = useState(false);
    
    const {user} = useSelector(state => ({...state}));

    useEffect(() => {     
     if(user) history.push('/@me');
    });
    function handlechange(e)
    { 
      const { name, value } = e.target;
      setFormpara(prevState => ({
            ...prevState,
            [name]: value
        }));   
    }
    function handleSubmit(event) {
     
      const {email,password,cpassword}=formpara;
      event.preventDefault();
      if(email=="" || password=="" || cpassword=="")
      {
        toast.error("Please fill the required field");
        return false;
      }
      if(password!=cpassword)
      {
        toast.error("Password or confirm password not match");
        return false;
      }
      
      if(email.length && password.length && cpassword.length  ){
        setLoading(true);
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(createdUser=>{
          console.log(createdUser);
          let username=email.split("@");
          console.log("username is "+username);
          let photo =`http://gravatar.com/avatar/${md5(email)}?d=identicon`;

          createdUser.user.updateProfile({
                displayName: "username",
                photoURL:photo
            }).then(() => {
              // createdUser.sendEmailVerification().then(
              //       () => {
              //           firebase.auth().signOut()
              //           this.complete = true
              //       }).catch(function(err) {
              //       console.log(err.message)
              //   })
              firebase.database().ref("users").child(createdUser.user.uid).set({
                name:username[0],
                uid:createdUser.user.uid,
                role:"subscriber",
                photoURL:photo
              });
            });
          setLoading(false);
          toast.info("Successfully Register..");
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          toast.error(errorMessage);
                
        });
      }
     
    }
    return(
      <div className="authentication-page">
            <div className="main-layout card-bg-1">
              <div className="container d-flex flex-column">
                  <div className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
                      <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                          <h1 className="font-weight-bold">Sign up</h1>
                          <p className="text-dark mb-3">We are Different, We Make You Different.</p>
                          <form className="mb-3" onSubmit={handleSubmit}>
                            
                              <div className="form-group">
                                  <label for="email" className="sr-only">Email Address</label>
                                  <input type="email" name="email" onChange={handlechange} value={email} className="form-control form-control-md" id="email" placeholder="Enter your email" />
                              </div>
                              <div className="form-group">
                                  <label for="password" className="sr-only">Password</label>
                                  <input type="password" name="password" onChange={handlechange} value={password} className="form-control form-control-md" id="password" placeholder="Enter your password" />
                              </div>
                               <div className="form-group">
                                  <label for="cpassword" className="sr-only">Confirm Password</label>
                                  <input type="password" name="cpassword" onChange={handlechange} value={cpassword} className="form-control form-control-md" id="cpassword" placeholder="Confirm Password" />
                              </div>
                              <button className="btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold" type="submit">{(loading)?"Loading...":"Sign up"}</button>
                          </form>

                          <p>Already have an account ? <Link to="/"> Sign In</Link>.</p>
                      </div>
                  </div> 
              </div>
            </div>
          </div>  
    
    );
    
}
