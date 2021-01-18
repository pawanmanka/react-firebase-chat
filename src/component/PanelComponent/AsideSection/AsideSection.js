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

//Component
import Notification from "./Notification";
import Chat from "./Chat";
export default function Aside({history}){
    const dispatch = useDispatch();
    
    return(        
        <aside className="sidebar">     
            <div className="tab-content">
                <div className="hide-scrollbar h-100" id="chatContactsList">
                    <Notification/>
                    <Chat/>
                </div>            
            </div>
        </aside>
    );
}


