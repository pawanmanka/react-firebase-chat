import React,{useState,useEffect} from 'react';
import {
  Link
} from "react-router-dom";
import { Loader,Button, Checkbox, Form,Grid,Header,Icon,Segment,Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import firebase from 'firebase';
import { useDispatch,useSelector } from 'react-redux';
import {  toast } from 'react-toastify';
 /* import { ToastProvider, useToasts } from 'react-toast-notifications';*/
 /* import CircularProgress from '@material-ui/core/CircularProgress';*/

export default function Login({history}){
  const [formpara, setFormpara] = useState({"email":"","password":""});    
  const [formerror, setFormerror] = useState({"email":"","password":""});
  const [loading,setLoading] = useState(false);
  const dispatch = useDispatch();
  
  const {user} = useSelector(state => ({...state}));

  useEffect(() => {    
   if(user) history.push('/@me');
  });
  /*const { addToast } = useToasts();*/
  function handlechange(e)
  { 
    const { name, value } = e.target;
    setFormpara(prevState => ({
          ...prevState,
          [name]: value
      }));    
  }
    function handleSubmit(e){
      const {email,password}=formpara;
      // addToast("hi there is working", { appearance: 'error' })
      e.preventDefault();
     
      if(email =="")
      {
        setFormerror(prevState => ({
          ...prevState,
          "email":"Email  is required"
        }));   
      }
      if(password =="")
      {
        setFormerror(prevState => ({
          ...prevState,
          "password":"password  is required"
        }));   
      }
      if(email !=="" && password !=="")
      {
        setLoading(true);
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(signIn=>{
         
          setLoading(false);
          localStorage.setItem('state', signIn.user);
          toast.info('Successfully Login');
          dispatch({ 
            type: 'LOGGED_IN_USER',
            payload:signIn.user
           });
           history.push('/@me');
           
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("Error Code : "+errorCode+" Error Message : "+errorMessage);   
          setLoading(false);
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
                    <h1 className="font-weight-bold">Sign in</h1>
                    <p className="text-dark mb-3">We are Different, We Make You Different.</p>
                    <form className="mb-3" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="email" className="sr-only">Email Address</label>
                            <input type="email" name="email" value={formpara.email} onChange={handlechange}  className="form-control form-control-md" id="email" placeholder="Enter your email"/>
                        </div>
                        <span className="error"> { formerror.email ==""?"":"* "+formerror.email}</span>
                        <div className="form-group">
                            <label for="password" className="sr-only">Password</label>
                            <input type="password" name="password" onChange={handlechange} className="form-control form-control-md" id="password" placeholder="Enter your password"/>
                        </div>
                        <span className="error"> { formerror.password ==""?"":"* "+formerror.password}</span>
              
                        <div className="form-group d-flex justify-content-between">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" checked="" id="checkbox-remember"/>
                                <label className="custom-control-label text-muted font-size-sm" for="checkbox-remember">Remember me</label>
                            </div>
                            <Link className="font-size-sm" to="/reset-password"> Reset password </Link>                            
                        </div>
                        <button className="btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold "  type="submit">{loading?"Loading...":"Sign in"}</button>
                    </form>

                    <p>Don't have an account?<Link to="/register"> Sign Up</Link>.</p>
                </div>
            </div> 
        </div>
    </div>
  </div>
    );
}
