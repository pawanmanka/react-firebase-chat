import React,{useState} from 'react';
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

export default function ChatFooter({history}){
    const dispatch = useDispatch();
    const [message,setMessage] = useState();
    const {room,recevierId} = useParams();
    const {user} = useSelector((state)=>({...state}));
    const MessageRef = firebase.database().ref("messages");
    // console.log(room,recevierId);
    function MessageSet(e)
    {  
        setMessage(e.target.value);
    }

    function sendMessage()
    {   
        // alert("Send Message Function Call");
        if(message=="") return false;
        
        try{
            MessageRef.child(MessageRef.push().key).set({
                content:message,
                type:"text",
                room:room,
                senderInfo:{
                    name:user.name,
                    uid:user.uid
                },
                recevierId:{
                    name:"student",
                    uid:"recevierId"

                }
            });
            setMessage("");
        }
        catch(error){
            console.log(error);
        }    
    }
    
    return(   
        <div className="chat-footer">
            <div className="attachment">
                <div className="dropdown">
                    <button className="btn btn-secondary btn-icon btn-minimal btn-sm" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                            <span>Gallery</span>
                        </a>
                        <a className="dropdown-item" href="#">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                            </svg>
                            <span>Audio</span>
                        </a>
                        <a className="dropdown-item" href="#">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                            </svg>
                            <span>Document</span>
                        </a>
                        <a className="dropdown-item" href="#">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                            </svg>
                            <span>Contact</span>
                        </a>
                        <a className="dropdown-item" href="#">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <span>Location</span>
                        </a>
                        <a className="dropdown-item" href="#">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                            <span>Poll</span>
                        </a>
                    </div>
                </div>
            </div>

            <textarea onChange={MessageSet} value={message} className="form-control emojionearea-form-control" id="messageInput" rows="1" placeholder="Type your message here..."></textarea>
           
            <div className="btn btn-primary btn-icon send-icon rounded-circle text-light mb-1" onClick={sendMessage} role="button">
                <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
            </div>
        </div>
        
    );
}
