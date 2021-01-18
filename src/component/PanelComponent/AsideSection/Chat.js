import React,{useState,useEffect} from 'react';
import {
  Link
} from "react-router-dom";
import { Button, Checkbox, Form,Grid,Header,Icon,Segment,Message,Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import firebase from 'firebase';
import { Redirect } from 'react-router';
import { useDispatch,useSelector } from "react-redux";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

//Component
import Notification from "./Notification";
import ChatElement from "./ChatElement";

export default function Conversation({history}){
    const dispatch = useDispatch();
    const chatRef=firebase.database().ref('rooms');
    const {chats }= useSelector(state => ({...state}));
    const [getChat,setGetChat]=useState();
    useEffect(()=>{
        chatRef.on("value", function(snapshot) {
            dispatch({
                type:"LOAD_CHATS",
                payload:snapshot.val()
            });
            setGetChat(snapshot.val());
           
          }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
          });
        
    },[]);
    const chatHtml= ()=>{
        let chatData = [];
        for (let [key, value] of Object.entries(getChat)) {
            // console.log(key);
            chatData.push(<ChatElement room={key} data={value}/>);           
        }
        return chatData;
    }
    return( 
        <ul className="contacts-list" id="chatContactTab" data-chat-list="">   
            {(getChat)?
                chatHtml()                
                :"Loading"}
            
            {/*

                
                <li className="contacts-item friends ">
            <Link to="/conversation" className="contacts-link">
           
                <div className="avatar avatar-online">
                    <img src="../assets/media/avatar/2.png" alt=""/>
                </div>
                <div className="contacts-content">
                    <div className="contacts-info">
                        <h6 className="chat-name text-truncate">Catherine Richardson</h6>
                        <div className="chat-time">Just now</div>
                    </div>
                    <div className="contacts-texts">
                        <p className="text-truncate">I’m sorry, I didn’t catch that. Could you please repeat?</p>
                    </div>
                </div>
            
            </Link>
        </li>
            <li class="contacts-item groups active">
                <a class="contacts-link" href="chat-2.html">
                    <div class="avatar bg-success text-light">
                        <span>
                            <svg class="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </span>
                    </div>
                    <div class="contacts-content">
                        <div class="contacts-info">
                            <h6 class="chat-name">Themeforest Group</h6>
                            <div class="chat-time"><span>10:20 pm</span></div>
                        </div>
                        <div class="contacts-texts">
                            <p class="text-truncate"><span>Jeny: </span>That’s pretty common. I heard that a lot of people had the same experience.</p>
                            <div class="d-inline-flex align-items-center ml-1">
                                <svg class="hw-16 text-muted" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
                                </svg>  
                            </div>
                        </div>
                    </div>
                </a>
            </li>
             */}
        </ul>
    );
}


