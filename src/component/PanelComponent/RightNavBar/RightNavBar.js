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

//component
import  Iconbar from './IconBar';
import  IconBarDetail from './IconBarDetail';
import  ModelSection from './ModelSection';
export default function RightNavBar({history}){
    const dispatch = useDispatch();
   
    return(
        <>
            <div className="appbar">
                <Iconbar/>
                <IconBarDetail/>            
            </div>
            <ModelSection/>
        </>    
    );
}


