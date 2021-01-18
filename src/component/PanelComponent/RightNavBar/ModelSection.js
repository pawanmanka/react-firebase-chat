import React,{useState} from 'react';
import {
  Link
} from "react-router-dom";
import { Button, Checkbox, Form,Grid,Header,Icon,Segment,Message,Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import firebase from 'firebase';
import { Redirect } from 'react-router';
import { useDispatch } from "react-redux";

export default function ModelSection({history}){
    const dispatch = useDispatch();
   
    return(
        <>
        
        <div className="modal modal-lg-fullscreen fade" id="startConversation" tabindex="-1" role="dialog" aria-labelledby="startConversationLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-zoom">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="startConversationLabel">New Chat</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body p-0 hide-scrollbar">
                    <div className="row">
                        <div className="col-12">
                           
                            <form className="form-inline w-100 p-2 border-bottom">
                                <div className="input-group w-100 bg-light">
                                    <input type="text" className="form-control form-control-md search border-right-0 transparent-bg pr-0" placeholder="Search..." />
                                    <div className="input-group-append">
                                        <div className="input-group-text transparent-bg border-left-0" role="button">
                                            <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                            </svg>   
                                        </div>
                                    </div>
                                </div>
                            </form>                          
                        </div>

                        <div className="col-12">
                               
                                <ul className="list-group list-group-flush">

                                <li className="list-group-item">
                                    <div className="media">
                                        <div className="avatar avatar-online mr-2">
                                            <img src="../assets/media/avatar/1.png" alt="" />
                                        </div>

                                        <div className="media-body">
                                            <h6 className="text-truncate">
                                                <a href="#" className="text-reset">Catherine Richardson</a>
                                            </h6>

                                            <p className="text-muted mb-0">Online</p>
                                        </div>
                                    </div>
                                </li>
                                
                                <li className="list-group-item">
                                    <div className="media">
                                        <div className="avatar avatar-online mr-2">
                                            <img src="../assets/media/avatar/2.png" alt="" />
                                        </div>

                                        <div className="media-body">
                                            <h6 className="text-truncate">
                                                <a href="#" className="text-reset">Katherine Schneider</a>
                                            </h6>

                                            <p className="text-muted mb-0">Online</p>
                                        </div>
                                    </div>
                                </li>
                              
                                <li className="list-group-item">
                                    <div className="media">
                                        <div className="avatar avatar-offline mr-2">
                                            <img src="../assets/media/avatar/3.png" alt="" />
                                        </div>

                                        <div className="media-body">
                                            <h6 className="text-truncate">
                                                <a href="#" className="text-reset">Brittany K. Williams</a>
                                            </h6>

                                            <p className="text-muted mb-0">Offline</p>
                                        </div>
                                    </div>
                                </li>
                                
                                <li className="list-group-item">
                                    <div className="media">
                                        <div className="avatar avatar-busy mr-2">
                                            <img src="../assets/media/avatar/4.png" alt="" />
                                        </div>
                                        <div className="media-body">
                                            <h6 className="text-truncate"><a href="#" className="text-reset">Christina Turner</a></h6>
                                            <p className="text-muted mb-0">Busy</p>
                                        </div>
                                    </div>
                                </li>
                              
                                <li className="list-group-item">
                                    <div className="media">
                                        <div className="avatar avatar-away mr-2">
                                            <img src="../assets/media/avatar/5.png" alt="" />
                                        </div>

                                        <div className="media-body">
                                            <h6 className="text-truncate"><a href="#" className="text-reset">Annie Richardson</a></h6>
                                            <p className="text-muted mb-0">Away</p>
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

        <div className="modal modal-lg-fullscreen fade" id="createGroup" tabindex="-1" role="dialog" aria-labelledby="createGroupLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-zoom">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title js-title-step" id="createGroupLabel">&nbsp;</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body py-0 hide-scrollbar">
                        <div className="row hide pt-2" data-step="1" data-title="Create a New Group">
                            
                            <div className="col-12">
                                <div className="form-group">
                                    <label for="groupName">Group name</label>
                                    <input type="text" className="form-control form-control-md" id="groupName" placeholder="Type group name here" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label>Choose profile picture</label>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="profilePictureInput" accept="image/*" />
                                        <label className="custom-file-label" for="profilePictureInput">Choose file</label>
                                        </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group mb-0">
                                        <label>Group privacy</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group rounded p-2 border">
                                        <div className="custom-control custom-radio">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                            <label className="form-check-label" for="exampleRadios1">
                                                Public group
                                            </label>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group rounded p-2 border">
                                        <div className="custom-control custom-radio">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                            <label className="form-check-label" for="exampleRadios2">
                                                Private group
                                            </label>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        
                        </div>

                        <div className="row hide pt-2" data-step="2" data-title="Add Group Members">
                            <div className="col-12 px-0">
                             
                                <form className="form-inline w-100 px-2 pb-2 border-bottom">
                                    <div className="input-group w-100 bg-light">
                                        <input type="text" className="form-control form-control-md search border-right-0 transparent-bg pr-0" placeholder="Search..." />
                                        <div className="input-group-append">
                                            <div className="input-group-text transparent-bg border-left-0" role="button">
                                               <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                                </svg>   

                                            </div>
                                        </div>
                                    </div>
                                </form>
                             
                            </div>

                            <div className="col-12 px-0">
                              
                                <ul className="list-group list-group-flush">

                                   
                                    <li className="list-group-item">
                                        <div className="media">
                                            <div className="avatar avatar-online mr-2">
                                                <img src="../assets/media/avatar/1.png" alt=""/>
                                            </div>

                                            <div className="media-body">
                                                <h6 className="text-truncate">
                                                    <a href="#" className="text-reset">Catherine Richardson</a>
                                                </h6>

                                                <p className="text-muted mb-0">Online</p>
                                            </div>

                                            <div className="media-options">
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" type="checkbox" value="" id="chx-user-1" checked=""/>
                                                    <label className="custom-control-label" for="chx-user-1"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <label className="media-label" for="chx-user-1"></label>
                                    </li>
                                   
                                    <li className="list-group-item">
                                        <div className="media">
                                            <div className="avatar avatar-online mr-2">
                                                <img src="../assets/media/avatar/2.png" alt=""/>
                                            </div>

                                            <div className="media-body">
                                                <h6 className="text-truncate">
                                                    <a href="#" className="text-reset">Katherine Schneider</a>
                                                </h6>

                                                <p className="text-muted mb-0">Online</p>
                                            </div>

                                            <div className="media-options">
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" type="checkbox" value="" id="chx-user-2" checked=""/>
                                                    <label className="custom-control-label" for="chx-user-2"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <label className="media-label" for="chx-user-2"></label>
                                    </li>
                                    
                                    <li className="list-group-item">
                                        <div className="media">
                                            <div className="avatar avatar-offline mr-2">
                                                <img src="../assets/media/avatar/3.png" alt=""/>
                                            </div>

                                            <div className="media-body">
                                                <h6 className="text-truncate">
                                                    <a href="#" className="text-reset">Brittany K. Williams</a>
                                                </h6>

                                                <p className="text-muted mb-0">Offline</p>
                                            </div>
                                            <div className="media-options">
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" type="checkbox" value="" id="chx-user-3"/>
                                                    <label className="custom-control-label" for="chx-user-3"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <label className="media-label" for="chx-user-3"></label>
                                    </li>
                                   
                                    <li className="list-group-item">
                                        <div className="media">
                                            <div className="avatar avatar-busy mr-2">
                                                <img src="../assets/media/avatar/4.png" alt=""/>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="text-truncate"><a href="#" className="text-reset">Christina Turner</a></h6>
                                                <p className="text-muted mb-0">Busy</p>
                                            </div>
                                            <div className="media-options">
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" type="checkbox" value="" id="chx-user-4" checked=""/>
                                                    <label className="custom-control-label" for="chx-user-4"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <label className="media-label" for="chx-user-4"></label>
                                    </li>
                                   
                                    <li className="list-group-item">
                                        <div className="media">
                                            <div className="avatar avatar-away mr-2">
                                                <img src="../assets/media/avatar/5.png" alt=""/>
                                            </div>

                                            <div className="media-body">
                                                <h6 className="text-truncate"><a href="#" className="text-reset">Annie Richardson</a></h6>
                                                <p className="text-muted mb-0">Away</p>
                                            </div>
                                            <div className="media-options">
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" type="checkbox" value="" id="chx-user-5"/>
                                                    <label className="custom-control-label" for="chx-user-5"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <label className="media-label" for="chx-user-5"></label>
                                    </li>
                                   
                                </ul>
                               
                            </div>
                        </div>

                        <div className="row pt-2 h-100 hide" data-step="3" data-title="Finished">
                            <div className="col-12">
                                <div className="d-flex justify-content-center align-items-center flex-column h-100">
                                    <div className="btn btn-success btn-icon rounded-circle text-light mb-3">
                                       
                                        <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                        
                                    </div>
                                    <h6>Group Created Successfully</h6>
                                    <p className="text-muted text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores cumque laborum fugiat vero pariatur provident!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-link text-muted js-btn-step mr-auto" data-orientation="cancel" data-dismiss="modal"></button>
                        <button type="button" className="btn btn-secondary  js-btn-step" data-orientation="previous"></button>
                        <button type="button" className="btn btn-primary js-btn-step" data-orientation="next"></button>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal modal-lg-fullscreen fade" id="inviteOthers" tabindex="-1" role="dialog" aria-labelledby="inviteOthersLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-zoom">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="inviteOthersLabel">Invite Others</h5>
                        
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body hide-scrollbar">
                        <form>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label for="inviteEmailAddress">Email address</label>
                                        <input type="email" className="form-control form-control-md" id="inviteEmailAddress" placeholder="Type email address here" value=""/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label for="inviteMessage">Invitation message</label>
                                        <textarea className="form-control form-control-md no-resize hide-scrollbar" id="inviteMessage" placeholder="Write your message here" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-link text-muted" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Send Invitation</button>
                        </div>
                </div>
            </div>
        </div>
 
        <div className="modal modal-lg-fullscreen fade" id="notificationModal" tabindex="-1" role="dialog" aria-labelledby="notificationModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-zoom">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="notificationModalLabel">Notifications</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body p-0 hide-scrollbar">
                        <div className="row">

                            <div className="col-12">
                                   
                                    <ul className="list-group list-group-flush  py-2">

                                    <li className="list-group-item">
                                        <div className="media">
                                            <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">
                                               
                                                <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                                                </svg>
                                                
                                            </div>

                                            <div className="media-body">
                                                <h6>
                                                    <a href="#">Catherine richardson</a> send you a friend request
                                                </h6>

                                                <p className="text-muted mb-0">5 mins ago</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center mt-2">
                                            <button type="button" className="btn btn-outline-danger mx-1">Reject</button>
                                            <button type="button" className="btn btn-primary mx-1">Accept</button>
                                        </div>

                                    </li>
                                   
                                    <li className="list-group-item">
                                        <div className="media">
                                            <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">
                                              
                                                <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                </svg>
                                               
                                            </div>

                                            <div className="media-body">
                                                <h6>
                                                    <a href="#">Katelyn Valdez</a> accepted your friend request
                                                </h6>

                                                <p className="text-muted mb-0">25 mins ago</p>
                                            </div>
                                        </div>
                                    </li>
                                  
                                    <li className="list-group-item">
                                        <div className="media">
                                            <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">
                                              
                                                <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                                </svg>

                                            </div>

                                            <div className="media-body">
                                                <h6>
                                                    <a href="#">Eva Walker</a> updated profile picture
                                                </h6>

                                                <p className="text-muted mb-0">5 mins ago</p>
                                            </div>
                                        </div>
                                    </li>
                            
                                    <li className="list-group-item">
                                        <div className="media">
                                            <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">
                                               
                                                <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                </svg>
                                                
                                            </div>

                                            <div className="media-body">
                                                <h6>
                                                    <a href="#">Bonnie Torres</a> accepted your friend request
                                                </h6>

                                                <p className="text-muted mb-0">5 mins ago</p>
                                            </div>
                                        </div>
                                    </li>
                                   
                                    <li className="list-group-item">
                                        <div className="media">
                                            <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">
                                              
                                                <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                                </svg>

                                            </div>

                                            <div className="media-body">
                                                <h6>
                                                    <a href="#">Christopher Garcia</a> updated profile picture
                                                </h6>

                                                <p className="text-muted mb-0">5 mins ago</p>
                                            </div>
                                        </div>
                                    </li>
                                 
                                </ul>
                              
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer justify-content-center">
                        <button type="button" className="btn btn-link text-muted">Clear all</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal modal-lg-fullscreen fade" id="addNoteModal" tabindex="-1" role="dialog" aria-labelledby="addNoteModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-zoom">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="addNoteModalLabel">Add new note</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label for="addNoteName" className="col-form-label">Note title:</label>
                            <input type="text" className="form-control" id="addNoteName" value="" placeholder="Add note title here"/>
                        </div>
                        <div className="form-group">
                            <label for="addNoteDetails" className="col-form-label">Note details:</label>
                            <textarea className="form-control hide-scrollbar" id="addNoteDetails" rows="4" placeholder="Add note descriptions"></textarea>
                        </div>
                        <div className="form-group">
                            <label className="col-form-label">Note tag:</label>
                            <select className="custom-select font-size-sm shadow-none">
                                <option selected>Personal</option>
                                <option value="1">Important</option>
                                <option value="2">Work</option>
                                <option value="3">Favourite</option>
                                </select>
                        </div>
                    
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-light border" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Add task</button>
                </div>
                </div>
            </div>
        </div>

        <div className="modal modal-lg-fullscreen fade" id="taskModal" tabindex="-1" role="dialog" aria-labelledby="taskModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-zoom">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="taskModalLabel">Edit task</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                    <div className="form-group">
                        <label for="editTaskName" className="col-form-label">Task name:</label>
                        <input type="text" className="form-control" id="editTaskName" value="Dinner with friends" placeholder="Add task name here"/>
                    </div>
                    <div className="form-group">
                        <label for="editTaskDetails" className="col-form-label">Task details:</label>
                        <textarea className="form-control hide-scrollbar" id="editTaskDetails" rows="4" placeholder="Add task descriptions">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis temporibus vel, molestiae nobis dolor aut sapiente. Vero possimus molestias consequatur quod, quo rem autem molestiae, accusantium nemo culpa eos doloremque?
                        </textarea>
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-light border" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-success">Finish</button>
                    <button type="button" className="btn btn-primary">Save</button>
                </div>
                </div>
            </div>
        </div>
     
        <div className="modal modal-lg-fullscreen fade" id="addTaskModal" tabindex="-1" role="dialog" aria-labelledby="addTaskModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-zoom">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="addTaskModalLabel">Add new task</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                    <div className="form-group">
                        <label for="addTaskName" className="col-form-label">Task name:</label>
                        <input type="text" className="form-control" id="addTaskName" value="" placeholder="Add task name here"/>
                    </div>
                    <div className="form-group">
                        <label for="addTaskDetails" className="col-form-label">Task details:</label>
                        <textarea className="form-control hide-scrollbar" id="addTaskDetails" rows="4" placeholder="Add task descriptions"></textarea>
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-light border" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Add task</button>
                </div>
                </div>
            </div>
        </div>

        </>
    );
}
