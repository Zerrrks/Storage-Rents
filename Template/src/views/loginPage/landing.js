import React from "react";
import { Link } from "react-router-dom";
//import  Button  from "components/CustomButtons/Button.js"; 
import Logo from "srlogo.png"
const Landing = () => {
  return (
    <div align= "center" className="jumbotron mt-5">
      <h1 align="center">Welcome to Storage Rents</h1>
      <p align="center">The app that connects you to local storage! Please login or register to continue.</p>
      <br></br>
      <p align="center">
      <Link to="/login" className="btn btn-primary">
       <button style={{
         background: '#007bff',
         border: 0,
         color: "white",
       }}>&nbsp;&nbsp;Login&nbsp;&nbsp;</button>
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/register" className="btn btn-primary">
        <button style={{
         background: '#007bff',
         border: 0,
         color: "white",
       }}>Register</button>
      </Link>
      </p>
      <img width="304" height="228" src={Logo}/>
    </div>
  );
};

export default Landing;
