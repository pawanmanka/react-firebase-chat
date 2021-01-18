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
import LeftNavBar from './LeftNavBar/LeftNavBar';
import RightNavBar from './RightNavBar/RightNavBar';
import AsideSection from './AsideSection/AsideSection';
import MiddleSection from './MiddleSection/MiddleSection';

export default function PanelComponent({history}){
    const dispatch = useDispatch();
    const {user}  = useSelector((state)=>({...state}));
    useEffect(()=>{
        if(user==null) history.push('/');
    });
    return(
      <div className="chats-tab-open">
        <div className="main-layout">
            <LeftNavBar/>
            <AsideSection/>
            <MiddleSection/>
            <RightNavBar/>
        </div>
      </div>
    );
}