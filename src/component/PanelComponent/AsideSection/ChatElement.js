
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

export default function ChatElement({history,room,data},props){
    const dispatch = useDispatch();
    const {user}   =  useSelector((state=>({...state})));
    const urlPath='/conversation/'+room;
    const memberInfo=data.memberInfo;
     
    return(
        <>
        {
            memberInfo.map((chat,index)=>(
                (chat.uid!=user.uid)?
                <li className="contacts-item friends ">
                    <Link to={urlPath+'/'+chat.uid} className="contacts-link">
                
                        <div className="avatar avatar-online">
                            <img src={chat.photoUrl} alt=""/>
                        </div>
                        <div className="contacts-content">
                            <div className="contacts-info">
                                <h6 className="chat-name text-truncate">{chat.name}</h6>
                                <div className="chat-time">Just now</div>
                            </div>
                            <div className="contacts-texts">
                                <p className="text-truncate">I’m sorry, I didn’t catch that. Could you please repeat?</p>
                            </div>
                        </div>
                    
                    </Link>
                 </li>:""
            ))
        }
        </>
    );
}


           