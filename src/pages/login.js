import React, { useState } from "react";
import './loginsignup.css'
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { logInUser } from "../config/firebase/firebasemethods";
import HInput from './../config/components/input';
import HButton from './../config/components/button';




function Login(){
    const navigate = useNavigate();
    const[userObj, setUserObj] = useState({});
    const[loader, setLoader] = useState(false);

    const gotoReg = () =>{
            navigate(`/`);
            }
    const gotoDash = () =>{
        if(!userObj.email){
            return alert("Email is required ! ") ;
        }
        if(!userObj.password ){
            return alert ( "Pasword is required !");
        }
        console.log(userObj);
                    
        setLoader(true);
        logInUser(userObj)
        .then ((success) => {
            console.log("Logged in successfully!");
            setLoader(false);
            navigate(`/dashboard`)
        }) 
        .catch((err)=>{
            console.log(err);
            console.log("Error occur");   
            setLoader(false);
        }) ;
    }
            
    return(
        <> 
        <div className="outer-container">
       <div className="inner-container">
           <div className="loginTop">
               <div className="custom"></div>
               <Typography variant="h4" color="black">Login</Typography>
           </div>
           <div className="container">
           <div className="inp">
           <HInput label="Email" type="email" onChange={(e) =>
                setUserObj({ ...userObj, email: e.target.value })}/>
          
          <HInput label="Password" type="password" onChange={(e) =>
                setUserObj({ ...userObj, password: e.target.value })}/>
          
           </div>
           <div className="forget typography">  <Typography color="gray" variant="caption">Forgotten your password?</Typography></div>
           <div className="button">
           <HButton loading={loader} label="Login" onClick={gotoDash}/>
           </div>
           <div className="loginBottom typography">
               <Typography color="gray" variant="caption">Don't have an account? <a onClick={gotoReg} >Sign Up</a></Typography>
               
               </div>
               </div>
       </div>
       </div>
        </>
    )
}
export default Login;