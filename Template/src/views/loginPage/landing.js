import React from "react";
import { Link } from "react-router-dom";
import  Button  from "components/CustomButtons/Button.js"; 
import Logo from "srlogo.png"
const Landing = () => {
  return (
    <div align= "center" className="jumbotron mt-5">
      <h1 align="center">Welcome to Storage Rents</h1>
      <p align="center">The app that connects you to local storage! Please login or register to continue.</p>
      <br></br>
      <p align="center">
      <Link to="/login" className="btn btn-primary">
       <Button color="info"className="btn btn-primary">&nbsp;&nbsp;Login&nbsp;&nbsp;</Button>
      </Link>
      <Link to="/register" className="btn btn-primary">
        <Button color="info"className="btn btn-primary">Register</Button>
      </Link>
      </p>
      <img width="304" height="228" src={Logo}/>
    </div>
  );
};

export default Landing;
