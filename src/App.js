import React,{useEffect,useReducer,useState }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {db ,firebase} from './services/Firebase'; 
import { useDispatch,useSelector } from 'react-redux';
// import { Button, Checkbox, Form,Grid,Header,Icon,Segment } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
//Component
import Login from './component/login/login';
import Register from './component/register/Register';

import { useHistory } from "react-router-dom";
import Loading from "./component/Loading";
// import { ToastProvider } from 'react-toast-notifications';

//|Routes
import Routes from './config/Routes';

function App() {
 
  const dispatch = useDispatch();
  let history = useHistory();  
  const {user} = useSelector(state => ({...state}));
  const [loading,setLoading]=useState(true);
 
  useEffect(() => {
   
      const unsubscribe = firebase.auth().onAuthStateChanged(async (signIn) => {
        
        if (signIn) {
          
          const idTokenResult = await signIn.getIdTokenResult();
          try {
            
            var ref = firebase.database().ref("users").child(signIn.uid);
            ref.on("value", function(snapshot) {
              var userData = snapshot.val();
              // console.log(userData);
              dispatch({
                type: "LOGGED_IN_USER",
                payload: {
                  email: signIn.email,
                  token: idTokenResult.token,
                  name:userData.name,
                  role:userData.role,
                  photoURL:signIn.photoURL,
                  uid:signIn.uid
                },
              });
              setLoading(false);              
            });
          }catch(error){
            console.log("Error "+error);
          }
          
          // history.push("/@me");
        }else{
          setLoading(false);
        }
      });
      return () => unsubscribe();
    
    // cleanup
    
  }, []);

  
  return (    
    <>
      <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {(loading)?<Loading/>:<Routes/>}
      {/*<Loading/> */}
    </>   
  );
}

export default App;
