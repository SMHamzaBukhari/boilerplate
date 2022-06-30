import React, { useState } from "react";
import './loginsignup.css'
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { sendData, signUpUser } from "../config/firebase/firebasemethods";
import HInput from './../config/components/input';
import HButton from './../config/components/button';

function Signup(){

   
   
    const navigate = useNavigate();
    const [userObj, setUserObj] = useState({});
    const [loader, setLoader] = useState(false);

    const gotoLogin = () =>{
        navigate(`/login`);
        }

    const signupUser = () => {
        if(!userObj.name){
            return alert("Name is required ! ") ;
        }
        if(!userObj.email){
            return alert("Email is required ! ") ;
        }
        if(!userObj.password || userObj.password.length < 6 ){
            return alert ( "Pasword is required ! and it should more than 6 characters ! ");
        }
                   
        console.log(userObj);
        setLoader(true);
      
        signUpUser(userObj)
            .then ((res) => {
                console.log(res);
                setLoader(false);
                sendData(userObj, '/users',res.user.uid).then(()=>{
                    console.log("successfully");
                }).catch((err)=>{
                    console.log(err);
                });
                navigate(`/login`);
            }) 
            .catch((err)=>{
                setLoader(false);
                console.log(err);
                console.log("Error occur");   
            }) ;
         };


    return(
        <> 
        <div className="outer-container signup">
       <div className="inner-container">
           <div className="loginTop">
               <div className="custom"></div>
               <Typography variant="h4" color="black">Sign Up</Typography>
           </div>
           <div className="container">
           <div className="inp">
           <HInput label="Username" type="text" onChange={(e) =>
                setUserObj({ ...userObj, name: e.target.value })}/>
          
            
           <HInput label="Email" type="email" onChange={(e) =>
                setUserObj({ ...userObj, email: e.target.value })}/>
          
            
          <HInput label="Password" type="password" onChange={(e) =>
                setUserObj({ ...userObj, password: e.target.value })}/>
          
           </div>
           <div className="forget typography">  <Typography color="gray" variant="caption">By signing up, you agree to our 
           <strong> <a href="">Terms, Data Policy and Cookie Policy.</a></strong></Typography></div>
           <div className="button">
            <HButton loading={loader} label="Sign Up" onClick={signupUser}/>
           
           </div>
           <div className="loginBottom typography">
               <Typography color="gray" variant="caption">Already have an account? <a onClick={gotoLogin}>Login</a></Typography>
               
               </div>
               </div>
       </div>
       </div>
        </>
    )
}
export default Signup;


    // sendData(userObj , "users" , res.user.uid) 
                // . then (()=>{
                //   console.log("Data saved ! ");
                // })
                // alert("Successfully signup ! ")
                // navigate(`/login`);