
import React,{useState,useEffect} from 'react';
import {
  Link,
  useParams
} from "react-router-dom";
import { Button, Checkbox, Form,Grid,Header,Icon,Segment,Message,Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import firebase from 'firebase';
import { Redirect } from 'react-router';
import { useDispatch,useSelector } from "react-redux";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

//Component
import ChatHead from "./ChatHead";
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

export default function MessageContent({history}){
    const dispatch = useDispatch();
    const {user}  = useSelector((state)=>({...state}));
    const {room,receiverId} = useParams();
    // console.log("message content "+receiverId);
    useEffect(()=>{
        if(user==null) history.push('/');
    });
    
    return(        

    <main className="main">
        <div className="chats">
            <div className="chat-body">
                <ChatHead/>
                <ChatBody room={room} receiverId={receiverId}/>
                <ChatFooter room={room} receiverId={receiverId}/>
            </div>
            <div className="chat-info">
            <div className="d-flex h-100 flex-column">


            <div className="chat-info-header px-2">
            <div className="container-fluid">
            <ul className="nav justify-content-between align-items-center">

            <li className="text-center">
            <h5 className="text-truncate mb-0">Profile Details</h5>
            </li>

            <li className="nav-item list-inline-item">
            <a className="nav-link text-muted px-0" href="#" data-chat-info-close="">
                
                <svg className="hw-22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                

            </a>
            </li>

            </ul>
            </div>
            </div>

            <div className="hide-scrollbar flex-fill">

            <div className="text-center p-3">


            <div className="avatar avatar-xl mx-5 mb-3">
            <img className="avatar-img" src="../assets/media/avatar/2.png" alt=""/>
            </div>

            <h5 className="mb-1">Catherine Richardson</h5>
            <p className="text-muted d-flex align-items-center justify-content-center">

            <svg className="hw-18 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>

            <span>San Fransisco, CA</span>
            </p>

            <div className="d-flex align-items-center justify-content-center">
            <div className="btn btn-outline-default btn-icon rounded-circle mx-1">

            <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
            </svg>

            </div>
            <div className="btn btn-primary btn-icon rounded-circle text-light mx-1">

            <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>

            </div>
            <div className="btn btn-danger btn-icon rounded-circle text-light mx-1">

            <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
            </svg>

            </div>
            </div>
            </div>

            <div className="chat-info-group">
            <a className="chat-info-group-header" data-toggle="collapse" href="#profile-info" role="button" aria-expanded="true" aria-controls="profile-info">
            <h6 className="mb-0">User Information</h6>

            <svg className="hw-20 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>

            </a>

            <div className="chat-info-group-body collapse show" id="profile-info">
            <div className="chat-info-group-content list-item-has-padding">

            <ul className="list-group list-group-flush ">

                <li className="list-group-item border-0">
                    <p className="small text-muted mb-0">Phone</p>
                    <p className="mb-0">+01-222-364522</p>
                </li>
                
                <li className="list-group-item border-0">
                    <p className="small text-muted mb-0">Email</p>
                    <p className="mb-0">catherine.richardson@gmail.com</p>
                </li>
                
                <li className="list-group-item border-0">
                    <p className="small text-muted mb-0">Address</p>
                    <p className="mb-0">1134 Ridder Park Road, San Fransisco, CA 94851</p>
                </li>
                
            </ul>

            </div>
            </div>
            </div>

            <div className="chat-info-group">
            <a className="chat-info-group-header" data-toggle="collapse" href="#shared-media" role="button" aria-expanded="true" aria-controls="shared-media">
            <h6 className="mb-0">Last Media</h6>

            <svg className="hw-20 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>

            </a>

            <div className="chat-info-group-body collapse show" id="shared-media">
            <div className="chat-info-group-content">

            <div className="form-row">
                <div className="col-4 col-md-2 col-xl-4">
                    <a href="#">
                        <img src="../assets/media/shared-photos/01.jpg" className="img-fluid rounded border" alt=""/>
                    </a>
                </div>
                <div className="col-4 col-md-2 col-xl-4">
                    <a href="#">
                        <img src="../assets/media/shared-photos/02.jpg" className="img-fluid rounded border" alt=""/>
                    </a>
                </div>
                <div className="col-4 col-md-2 col-xl-4">
                    <a href="#">
                        <img src="../assets/media/shared-photos/03.jpg" className="img-fluid rounded border" alt=""/>
                    </a>
                </div>
            </div>
            </div>
            </div>
            </div>

            <div className="chat-info-group">
            <a className="chat-info-group-header" data-toggle="collapse" href="#shared-files" role="button" aria-expanded="true" aria-controls="shared-files">
            <h6 className="mb-0">Documents</h6>


            <svg className="hw-20 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>

            </a>

            <div className="chat-info-group-body collapse show" id="shared-files">
            <div className="chat-info-group-content list-item-has-padding">

                <ul className="list-group list-group-flush">

                <li className="list-group-item">
                    <div className="document">
                        <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">
                            
                            <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                            </svg>
                            
                        </div>

                        <div className="document-body">
                            <h6 className="text-truncate">
                                <a href="#" className="text-reset" title="effects-of-global-warming.docs">Effects-of-global-warming.docs</a>
                            </h6>

                            <ul className="list-inline small mb-0">
                                <li className="list-inline-item">
                                    <span className="text-muted">79.2 KB</span>
                                </li>
                                <li className="list-inline-item">
                                    <span className="text-muted text-uppercase">docs</span>
                                </li>
                            </ul>
                        </div>

                        <div className="document-options ml-1">
                            <div className="dropdown">
                                <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                
                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                    </svg>
                                
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Download</a>
                                    <a className="dropdown-item" href="#">Share</a>
                                    <a className="dropdown-item" href="#">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                
                <li className="list-group-item">
                    <div className="document">
                        <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">
                            
                            <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                            </svg>

                        </div>

                        <div className="document-body">
                            <h6 className="text-truncate">
                                <a href="#" className="text-reset" title="global-warming-data-2020.xlxs">Global-warming-data-2020.xlxs</a>
                            </h6>

                            <ul className="list-inline small mb-0">
                                <li className="list-inline-item">
                                    <span className="text-muted">79.2 KB</span>
                                </li>
                                <li className="list-inline-item">
                                    <span className="text-muted text-uppercase">xlxs</span>
                                </li>
                            </ul>
                        </div>

                        <div className="document-options ml-1">
                            <div className="dropdown">
                                <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    
                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                    </svg>
                                    
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">View</a>
                                    <a className="dropdown-item" href="#">Share</a>
                                    <a className="dropdown-item" href="#">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                
                <li className="list-group-item">
                    <div className="document">
                        <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">
                            
                            <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                            </svg>

                            
                        </div>

                        <div className="document-body">
                            <h6 className="text-truncate">
                                <a href="#" className="text-reset" title="great-presentation-on global-warming-2020.ppt">Great-presentation-on global-warming-2020.ppt</a>
                            </h6>

                            <ul className="list-inline small mb-0">
                                <li className="list-inline-item">
                                    <span className="text-muted">79.2 KB</span>
                                </li>
                                <li className="list-inline-item">
                                    <span className="text-muted text-uppercase">ppt</span>
                                </li>
                            </ul>
                        </div>

                        <div className="document-options ml-1">
                            <div className="dropdown">
                                <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    
                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                    </svg>
                                    
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Download</a>
                                    <a className="dropdown-item" href="#">Share</a>
                                    <a className="dropdown-item" href="#">Delete</a>
                                </div>
                            </div>
                        </div>
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
    </main>
           );
}
 