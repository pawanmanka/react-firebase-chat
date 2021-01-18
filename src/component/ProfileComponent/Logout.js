import React,{useState} from 'react';
import {
  Link
} from "react-router-dom";
import { Button, Checkbox, Form,Grid,Header,Icon,Segment,Message,Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import firebase from 'firebase';
import { Redirect } from 'react-router';
import { useDispatch,useSelector } from "react-redux";
import {  toast } from 'react-toastify';
//Component
import LeftNavBar from "../PanelComponent/LeftNavBar/LeftNavBar";
import RightNavBar from "../PanelComponent/RightNavBar/RightNavBar";

export default function Logout({history}){
    const dispatch = useDispatch();
    const {user} = useSelector(state => ({...state}));

    function logout()
    {
        firebase.auth().signOut().then(() => {
            // console.log("Logout successfully");
            dispatch({
                type:"LOGOUT",
                payload:null
            });
            toast.info('Successfully Logout!');
            history.push('/');
          }).catch((error) => {
            // An error happened.
          });
          
    }
   
    return(
        <div className="tab-pane" id="profile-content">
        <div className="d-flex flex-column h-100">
            <div className="hide-scrollbar">
               <div className="sidebar-header sticky-top p-2 mb-3">
                    <h5 className="font-weight-semibold">Profile</h5>   
                    <p className="text-muted mb-0">Personal Information & Settings</p>
                </div>
              
                <div className="container-xl">
                    <div className="row">
                        <div className="col">

                            <div className="card card-body card-bg-5">

                                <div className="d-flex flex-column align-items-center">
                                    <div className="avatar avatar-lg mb-3">
                                        <img className="avatar-img" src={(user)?user.photoURL:""} alt=""/>
                                    </div>
    
                                    <div className="d-flex flex-column align-items-center">
                                        <h5>{(user)?user.name:""}</h5>
                                    </div>

                                    <div className="d-flex">
                                        <button className="btn btn-outline-default mx-1" type="button">
                                           <svg className="hw-18 d-none d-sm-inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                                            </svg>
                                             <span onClick={logout}>Logout</span> 
                                        </button>
                                        <button className="btn btn-outline-default mx-1 d-xl-none" data-profile-edit="" type="button">
                                          
                                            <svg className="hw-18 d-none d-sm-inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                            </svg>
                                            <span>Settings</span> 
                                        </button>
                                    </div>
                                </div>
                              
                                <div className="card-options">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                            </svg>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Change Profile Picture</a>
                                            <a className="dropdown-item" href="#">Change Number</a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                           
                            <div className="card mt-3">

                                <ul className="list-group list-group-flush">
                                 
                                    <li className="list-group-item py-2">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Local Time</p>
                                                <p className="mb-0">10:25 PM</p>
                                            </div>
                                          
                                            <svg className="text-muted hw-20 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                         </div>
                                    </li>
                                  
                                    <li className="list-group-item py-2">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Birthdate</p>
                                                <p className="mb-0">20/11/1992</p>
                                            </div>
                                          
                                            <svg className="text-muted hw-20 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                            </svg>
                                        </div>
                                    </li>
                                  
                                    <li className="list-group-item py-2">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Phone</p>
                                                <p className="mb-0">+01-222-364522</p>
                                            </div>
                                          
                                            <svg className="text-muted hw-20 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                            </svg>
                                        </div>
                                    </li>
                                   
                                    <li className="list-group-item py-2">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Email</p>
                                                <p className="mb-0">catherine.richardson@gmail.com</p>
                                            </div>

                                            <svg className="text-muted hw-20 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                            </svg>
                                        </div>
                                    </li>
                                   
                                    <li className="list-group-item py-2">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Website</p>
                                                <p className="mb-0">www.catherichardson.com</p>
                                            </div>
                                           
                                            <svg className="text-muted hw-20 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                        </div>
                                    </li>
                                   
                                    <li className="list-group-item pt-2">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Address</p>
                                                <p className="mb-0">1134 Ridder Park Road, San Fransisco, CA 94851</p>
                                            </div>
                                           
                                            <svg className="text-muted hw-20 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                            </svg>
                                        </div>
                                    </li>
                                   
                                </ul>
                               
                            </div>
                          
                            <div className="card my-3">

                                <ul className="list-group list-group-flush">
                                   
                                    <li className="list-group-item py-2">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Facebook</p>
                                                <a className="font-size-sm font-weight-medium" href="#">@cathe.richardson</a>
                                            </div>
                                          
                                            <svg className="text-muted hw-20 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                            </svg>
                                        </div>
                                    </li>
                                  
                                    <li className="list-group-item py-2">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Twitter</p>
                                                <a className="font-size-sm font-weight-medium" href="#">@cathe.richardson</a>
                                            </div>
                                           
                                            <svg className="text-muted hw-20 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                            </svg>
                                        </div>
                                    </li>
                                  
                                    <li className="list-group-item py-2">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Instagram</p>
                                                <a className="font-size-sm font-weight-medium" href="#">@cathe.richardson</a>
                                            </div>
                                           
                                            <svg className="text-muted hw-20 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                            </svg>
                                        </div>
                                    </li>
                                  
                                    <li className="list-group-item py-2">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Linkedin</p>
                                                <a className="font-size-sm font-weight-medium" href="#">@cathe.richardson</a>
                                            </div>
                                            
                                            <svg className="text-muted hw-20 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                <rect x="2" y="9" width="4" height="12" />
                                                <circle cx="4" cy="4" r="2" />
                                            </svg>
                                        </div>
                                    </li>
                                    
                                </ul>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
             
            </div>
        </div>
    </div>
    );
}
   