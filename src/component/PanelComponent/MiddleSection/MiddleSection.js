import React,{useState,useEffect} from 'react';
import {
  Link
} from "react-router-dom";
import { Button, Checkbox, Form,Grid,Header,Icon,Segment,Message,Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import firebase from 'firebase';
import { Redirect } from 'react-router';
import { useDispatch,useSelector } from "react-redux";

export default function Aside({history}){
    const dispatch = useDispatch();
    const {user}   = useSelector(state=>({...state}));
    
    useEffect(()=>{
        // console.log("@me "+user);
    });
    return(
        <main className="main">
            <div className="chats">
                <div className="d-flex flex-column justify-content-center text-center h-100 w-100">
                    <div className="container">
                        <div className="avatar avatar-lg mb-2">
                            <img className="avatar-img" src={(user)?user.photoURL:""} alt=""/>
                        </div>
                        <h5>Welcome, {(user)?user.name:""}!</h5>
                        <p className="text-muted">Please select a chat to Start messaging.</p>

                        <button className="btn btn-outline-primary no-box-shadow" type="button" data-toggle="modal" data-target="#startConversation">
                            Start a conversation
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}


