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
import MessageBox from './MessageBox';

export default function ChatBody({history}){
    const dispatch = useDispatch();
    const MessageRef = firebase.database().ref('messages');
    const {user}  = useSelector((state)=>({...state}));
    const {room,receiverId} = useParams();
    const [message,setMessage]=useState();
    
    useEffect(()=>{
        MessageRef.orderByChild('room').equalTo(room).on("value", function(snapshot) {
            // console.log(snapshot.val());
            setMessage(snapshot.val());
          }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
          });
    },[]);
    const messageHtml= ()=>{
        let msgArr = [];
        for (let [key, value] of Object.entries(message)) {
            // console.log(key);
            msgArr.push(<MessageBox msgId={key} msgData={value}/>);           
        }
        return msgArr;
    }
    return( 
        
<div className="chat-content p-2" id="messageBody">
    <div className="container">
            {(message)?messageHtml():""}
    </div>
    <div className="chat-finished" id="chat-finished"></div>
</div>       
       
    );
}


