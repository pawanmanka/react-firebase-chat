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
import Notification from "./Notification";
import LeftNavBar from '../LeftNavBar/LeftNavBar';
import RightNavBar from '../RightNavBar/RightNavBar';
import AsideSection from '../AsideSection/AsideSection';
import MessageContent from './chat/MessageContent';

export default function Conversation({history}){
    const dispatch = useDispatch();
    const {user}  = useSelector((state)=>({...state}));
    const {room,userId} = useParams();
    // console.log("Conversion "+userId);
    useEffect(()=>{
        if(user==null) history.push('/');
    });
    
    return(        
        <div className="chats-tab-open">
            <div className="main-layout">
                <LeftNavBar/>
                <AsideSection/>
                <MessageContent room={room} receiverId={userId} />
                <RightNavBar/>
            </div>
      </div>
    );
}
 