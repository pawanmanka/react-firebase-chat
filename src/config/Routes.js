import React,{useEffect,useState }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import { Redirect } from 'react-router';
import {db} from '../services/Firebase'; 
import firebase from 'firebase';

//redux
import { createStore } from 'redux';
import { Provider,useSelector  } from 'react-redux';
import { composeWithDevTools }  from 'redux-devtools-extension';                     
//user context
import { UserContext } from '../services/UserContext';

//Component
import Login from '../component/login/login';
import Register from '../component/register/Register';
// import Dashboard from '../component/dashboard/Dashboard';
// import Home from '../component/Home/Home';
// import About from '../component/About/About';
import ResetPassword from '../component/ResetPassword/ResetPassword';
import PanelComponent from '../component/PanelComponent/PanelComponent';
import ProfileComponent from '../component/ProfileComponent/ProfileComponent';
import Conversation from '../component/PanelComponent/AsideSection/Conversation';

export default function Routes() {

    const [checkAuth,setcheckAuth]=useState(false);   
    const {user} = useSelector(state => ({...state}));
    useEffect(()=>{
    //  console.log(user);
    //  setLoggedin(true);
    })
  return (   
      <Switch> 
        (user)
        ?
        <Route exact path="/register" component={Register} />            
        <Route exact path="/"  component={Login} />           
        <Route exact path="/reset-password" component={ResetPassword} />  
        :
        <Route exact path="/@me" component={PanelComponent} />    
        <Route exact path="/profile" component={ProfileComponent} />   
        <Route exact path="/conversation/:room/:userId" component={Conversation} />         
          
      </Switch>
  );
}
