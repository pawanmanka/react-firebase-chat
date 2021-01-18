
import React,{useState} from 'react';
import {
  Link
} from "react-router-dom";
import { Button, Checkbox, Form,Grid,Header,Icon,Segment,Message,Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import firebase from 'firebase';
import { Redirect } from 'react-router';
import { useDispatch } from "react-redux";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default function IconBarDetail({history}){
    const dispatch = useDispatch();

    return(    
    <div class="tab-content appnavbar-content"> 
        {/* Notes Section  */}
        <div className="tab-pane h-100" id="notes" role="tabpanel" aria-labelledby="notes-tab">
                <div className="appnavbar-content-wrapper">
                    <div className="appnavbar-scrollable-wrapper">
                        <div className="appnavbar-heading sticky-top">
                            <ul className="nav justify-content-between align-items-center">
                                <li className="text-center">
                                    <h5 className="text-truncate mb-0">Notes</h5>
                                </li>                               
                                <li className="nav-item list-inline-item">
                                    <div data-appcontent-close="">
                                        <svg className="hw-22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>                                        
                                    </div>
                                </li>
                               
                            </ul>
                        </div>

                        <div className="appnavbar-body">
                            <div className="appnavbar-body-title">
                                <div className="dropdown mr-2">
                                    <button className="btn btn-outline-default dropdown-toggle" type="button" data-notes-filter-list="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Notes</button>
                                   
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" data-notes-filter="" data-select="all-chats" href="#">All Notes</a>
                                        <a className="dropdown-item" data-notes-filter="" data-select="friends" href="#">Personal</a>
                                        <a className="dropdown-item" data-notes-filter="" data-select="groups" href="#">Work</a>
                                        <a className="dropdown-item" data-notes-filter="" data-select="unread" href="#">Favourite</a>
                                        <a className="dropdown-item" data-notes-filter="" data-select="archived" href="#">Important</a>
                                    </div>
                                   
                                </div>
                               
                                <form className="form-inline">
                                    <div className="input-group">
                                        <input type="text" className="form-control search border-right-0 transparent-bg pr-0" placeholder="Search notes..."/>
                                        <div className="input-group-append">
                                            <div className="input-group-text transparent-bg border-left-0" role="button">
                                               
                                                <svg className="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                             
                            </div>

                            <div className="note-container">
                                <div className="note">
                                    <div className="note-body">
                                        <div className="note-added-on">Sunday, 20/12/2020 at 12:26 PM</div>
                                        <h5 className="note-title">Metting with John Doe</h5>
                                        <p className="note-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorum odio vitae sapiente eius obcaecati.</p>
                                    </div>
                                    <div className="note-footer">
                                        <div className="note-tools">
                                            <span className="badge badge-info">Personal</span>
                                        </div>
                                        <div className="note-tools">
                                            <div className="dropdown">
                                                <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <svg className="hw-20" xmlns="http://www.w3.org/2000/svg" height="24" width="24"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                                    </svg>                                                        
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#">Personal</a>
                                                    <a className="dropdown-item" href="#">Work</a>
                                                    <a className="dropdown-item" href="#">Favourite</a>
                                                    <a className="dropdown-item" href="#">Important</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item text-danger" href="#">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="note">
                                    <div className="note-body">
                                        <div className="note-added-on">Sunday, 20/12/2020 at 12:26 PM</div>
                                        <h5 className="note-title">Metting with John Doe</h5>
                                        <p className="note-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorum odio vitae sapiente eius obcaecati.</p>
                                    </div>
                                    <div className="note-footer">
                                        <div className="note-tools">
                                            <span className="badge badge-danger">Important</span>
                                        </div>
                                        <div className="note-tools">
                                            <div className="dropdown">
                                                <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <svg className="hw-20" xmlns="http://www.w3.org/2000/svg" height="24" width="24"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                                    </svg>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#">Personal</a>
                                                    <a className="dropdown-item" href="#">Work</a>
                                                    <a className="dropdown-item" href="#">Favourite</a>
                                                    <a className="dropdown-item" href="#">Important</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item text-danger" href="#">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="note">
                                    <div className="note-body">
                                        <div className="note-added-on">Sunday, 20/12/2020 at 12:26 PM</div>
                                        <h5 className="note-title">Metting with John Doe</h5>
                                        <p className="note-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorum odio vitae sapiente eius obcaecati.</p>
                                    </div>
                                    <div className="note-footer">
                                        <div className="note-tools">
                                            <span className="badge badge-primary">Favourite</span>
                                        </div>
                                        <div className="note-tools">
                                            <div className="dropdown">
                                                <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                   <svg className="hw-20" xmlns="http://www.w3.org/2000/svg" height="24" width="24"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                                    </svg>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#">Personal</a>
                                                    <a className="dropdown-item" href="#">Work</a>
                                                    <a className="dropdown-item" href="#">Favourite</a>
                                                    <a className="dropdown-item" href="#">Important</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item text-danger" href="#">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="note">
                                    <div className="note-body">
                                        <div className="note-added-on">Sunday, 20/12/2020 at 12:26 PM</div>
                                        <h5 className="note-title">Metting with John Doe</h5>
                                        <p className="note-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorum odio vitae sapiente eius obcaecati.</p>
                                    </div>
                                    <div className="note-footer">
                                        <div className="note-tools">
                                            <span className="badge badge-warning">Work</span>
                                        </div>
                                        <div className="note-tools">
                                            <div className="dropdown">
                                                <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <svg className="hw-20" xmlns="http://www.w3.org/2000/svg" height="24" width="24"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                                    </svg>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#">Personal</a>
                                                    <a className="dropdown-item" href="#">Work</a>
                                                    <a className="dropdown-item" href="#">Favourite</a>
                                                    <a className="dropdown-item" href="#">Important</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item text-danger" href="#">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="appnavbar-footer">
                            <div className="btn btn-primary btn-block" role="button" data-toggle="modal" data-target="#addNoteModal">Add new note</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Todo Section  */}
            <div className="tab-pane h-100" id="todo" role="tabpanel" aria-labelledby="todo-tab">
                <div className="appnavbar-content-wrapper">
                    <div className="appnavbar-scrollable-wrapper">
                        <div className="appnavbar-heading sticky-top">
                            <ul className="nav justify-content-between align-items-center">
                                <li className="text-center">
                                    <h5 className="text-truncate mb-0">To-do List</h5>
                                </li>
                                
                                <li className="nav-item list-inline-item">
                                    <div data-appcontent-close="">
                                        <svg className="hw-22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>                                      
                                    </div>
                                </li>                                
                            </ul>
                        </div>

                        <div className="appnavbar-body">
                            <div className="appnavbar-body-title">
                               
                                <div className="dropdown mr-2">
                                  
                                    <button className="btn btn-outline-default dropdown-toggle" type="button" data-tasks-filter-list="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Tasks</button>
                                   
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" data-task-filter="" data-select="all-tasks" href="#">All Tasks</a>
                                        <a className="dropdown-item" data-task-filter="" data-select="active" href="#">Active</a>
                                        <a className="dropdown-item" data-task-filter="" data-select="finished" href="#">Finished</a>
                                    </div>
                                    
                                </div>
                               
                                <form className="form-inline">
                                    <div className="input-group">
                                        <input type="text" className="form-control search border-right-0 transparent-bg pr-0" placeholder="Search notes..."/>
                                        <div className="input-group-append">
                                            <div className="input-group-text transparent-bg border-left-0" role="button">
                                                <svg className="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </form>                                
                            </div>

                            <div className="todo-container">
                                <div className="todo-title">
                                    <h6 className="mb-0">20/07/2020</h6>
                                    <p className="text-muted">6 Task remaining</p>
                                </div>
                                
                                <div className="card">
                                    <div className="card-body">
                                        <ul className="todo-list">
                                            <li className="todo-item todo-task-done">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" checked/>
                                                    <label className="custom-control-label" for="customCheck1">&nbsp;</label>
                                                </div>
                                                <h6 className="todo-title" data-toggle="modal" data-target="#taskModal">Dinner with friends</h6>
                                            </li>
                                            <li className="todo-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                                    <label className="custom-control-label" for="customCheck2">&nbsp;</label>
                                                </div>
                                                <h6 className="todo-title" data-toggle="modal" data-target="#taskModal">Watching movie at 10:30PM</h6>
                                            </li>
                                            <li className="todo-item todo-task-done">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck3" checked/>
                                                    <label className="custom-control-label" for="customCheck3">&nbsp;</label>
                                                </div>
                                                <h6 className="todo-title" data-toggle="modal" data-target="#taskModal">Watching a football match</h6>
                                            </li>
                                            <li className="todo-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                                                    <label className="custom-control-label" for="customCheck4">&nbsp;</label>
                                                </div>
                                                <h6 className="todo-title" data-toggle="modal" data-target="#taskModal">Coffie with girlfriend</h6>
                                            </li>
                                            <li className="todo-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck5"/>
                                                    <label className="custom-control-label" for="customCheck5">&nbsp;</label>
                                                </div>
                                                <h6 className="todo-title" data-toggle="modal" data-target="#taskModal">Meeting with design team</h6>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="todo-title mt-2">
                                    <h6 className="mb-0">21/07/2020</h6>
                                    <p className="text-muted">6 Task remaining</p>
                                </div>
                                
                                <div className="card">
                                    <div className="card-body">
                                        <ul className="todo-list">
                                            <li className="todo-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck6"/>
                                                    <label className="custom-control-label" for="customCheck6">&nbsp;</label>
                                                </div>
                                                <h6 className="todo-title" data-toggle="modal" data-target="#taskModal">Dinner with friends</h6>
                                            </li>
                                            <li className="todo-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck7"/>
                                                    <label className="custom-control-label" for="customCheck7">&nbsp;</label>
                                                </div>
                                                <h6 className="todo-title" data-toggle="modal" data-target="#taskModal">Watching movie at 10:30PM</h6>
                                            </li>
                                            <li className="todo-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck8"/>
                                                    <label className="custom-control-label" for="customCheck8">&nbsp;</label>
                                                </div>
                                                <h6 className="todo-title" data-toggle="modal" data-target="#taskModal">Watching a football match</h6>
                                            </li>
                                            <li className="todo-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck9"/>
                                                    <label className="custom-control-label" for="customCheck9">&nbsp;</label>
                                                </div>
                                                <h6 className="todo-title" data-toggle="modal" data-target="#taskModal">Coffie with girlfriend</h6>
                                            </li>
                                            <li className="todo-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck10"/>
                                                    <label className="custom-control-label" for="customCheck10">&nbsp;</label>
                                                </div>
                                                <h6 className="todo-title" data-toggle="modal" data-target="#taskModal">Meeting with design team</h6>
                                            </li>                                        
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className="appnavbar-footer">
                            <div className="btn btn-primary btn-block" role="button" data-toggle="modal" data-target="#addTaskModal">Add new task</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Settings Section  */}

            
            <div className="tab-pane h-100" id="quick-settings" role="tabpanel" aria-labelledby="quick-settings-tab">
                <div className="appnavbar-content-wrapper">
                    <div className="appnavbar-scrollable-wrapper">
                        <div className="appnavbar-heading sticky-top">
                            <ul className="nav justify-content-between align-items-center">
                               <li className="text-center">
                                    <h5 className="text-truncate mb-0">Settings</h5>
                                </li>
                                
                                <li className="nav-item list-inline-item">
                                    <div data-appcontent-close="">
                                        <svg className="hw-22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>                                        
                                    </div>
                                </li>                             
                            </ul>
                        </div>

                        <div className="appnavbar-body">
                            <div className="settings-container">
                                <ul className="list-group border list-group-flush">    
                                    <li className="list-group-item py-2">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="mb-0">Last seen</p>
                                            </div>
                                            <div className="custom-control custom-switch ml-2">
                                                <input type="checkbox" className="custom-control-input" id="quickSettingSwitch1" checked="" />
                                                <label className="custom-control-label" for="quickSettingSwitch1">&nbsp;</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item py-2">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="mb-0">Read receipts</p>
                                            </div>
                                            <div className="custom-control custom-switch ml-2">
                                                <input type="checkbox" className="custom-control-input" id="quickSettingSwitch2" checked="" />
                                                <label className="custom-control-label" for="quickSettingSwitch2">&nbsp;</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item py-2">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="mb-0">Media auto download</p>
                                            </div>
                                            <div className="custom-control custom-switch ml-2">
                                                <input type="checkbox" className="custom-control-input" id="quickSettingSwitch3" checked="" />
                                                <label className="custom-control-label" for="quickSettingSwitch3">&nbsp;</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item py-2">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="mb-0">Notifications</p>
                                            </div>
                                            <div className="custom-control custom-switch ml-2">
                                                <input type="checkbox" className="custom-control-input" id="quickSettingSwitch4" checked="" />
                                                <label className="custom-control-label" for="quickSettingSwitch4">&nbsp;</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item py-2">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="mb-0">Auto backup</p>
                                            </div>
                                            <div className="custom-control custom-switch ml-2">
                                                <input type="checkbox" className="custom-control-input" id="quickSettingSwitch5" checked="" />
                                                <label className="custom-control-label" for="quickSettingSwitch5">&nbsp;</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item py-2">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="mb-0">Screen Lock</p>
                                            </div>
                                            <div className="custom-control custom-switch ml-2">
                                                <input type="checkbox" className="custom-control-input" id="quickSettingSwitch6" />
                                                <label className="custom-control-label" for="quickSettingSwitch6">&nbsp;</label>                                                
                                            </div>
                                        </div>
                                    </li>
                                
                                </ul>
                            </div>
                        </div>

                        <div className="appnavbar-footer">
                            <div className="btn btn-primary btn-block">Save settings</div>
                        </div>
                    </div>
                </div>
            </div>


            
    </div>        
    );
}
