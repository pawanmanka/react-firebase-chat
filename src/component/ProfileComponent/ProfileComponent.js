import React,{useState,useEffect} from 'react';
import {
  Link
} from "react-router-dom";
import { Button, Checkbox, Form,Grid,Header,Icon,Segment,Message,Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import firebase from 'firebase';
import { Redirect } from 'react-router';
import { useDispatch,useSelector } from "react-redux";

//Component
import RightNavBar from "../PanelComponent/RightNavBar/RightNavBar";
import LeftNavBar from "../PanelComponent/LeftNavBar/LeftNavBar";
import Logout from "./Logout";
import Settings from "./Settings";
export default function ProfileComponent({history}){
    const dispatch = useDispatch();
    const {user}  = useSelector((state)=>({...state}));
    useEffect(()=>{
        if(user==null) history.push('/');
    });
    return(
        <div className="profile-tab-open">
            <div className="main-layout">
                <LeftNavBar/>
                    <aside className="sidebar">     
                        <div className="tab-content">
                            <div className="hide-scrollbar h-100" id="chatContactsList">
                               <Logout/>
                            </div>            
                        </div>
                    </aside>
                    <main className="main">
                        <Settings/>
                    </main>
                <RightNavBar/>
            </div>
        </div>
    );
}