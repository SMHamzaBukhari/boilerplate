import React from "react";
import Login from './../../pages/login';
import Dashboard from './../../pages/dashboard';
import Signup from './../../pages/signup';
import NotFound from './../../pages/notFound';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function Routing() {
  return (
    <Router>
        <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/> 
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Signup/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
  );
}
