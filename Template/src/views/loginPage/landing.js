import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="jumbotron mt-5">
      <h1>Welcome to Storage Rents</h1>
      <p>Login or Register Here</p>
      <br></br>
      <Link to="/admin/login" className="btn btn-primary">
        Login
      </Link>
      <br></br>
      <br></br>
      <Link to="/admin/register" className="btn btn-primary ml-3">
        Register
      </Link>
    </div>
  );
};

export default Landing;
