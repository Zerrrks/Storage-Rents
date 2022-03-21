import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
//import { Navigate } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
//import  Button  from "components/CustomButtons/Button.js";

const delay = ms => new Promise(res => setTimeout(res, ms));



const Register = ({ setAuth = function(){} }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: ""
  });

  const { email, password, name } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password, name };
      const response = await fetch(
        "http://localhost:5000/auth/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );
      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Registered Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
    await delay(2500);
    console.log("Waited 2.5s");
    document.location.reload(true);
  };

  return (
    <Fragment>
      <h1 align="center" className="mt-5 text-center">Register</h1>
      <form align="center" onSubmit={onSubmitForm}>
      <br></br>
      <br></br>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <br></br>
        <br></br>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <br></br>
        <br></br>
        <button style={{color: 'white', background: '#007bff',}} className="btn  btn-block" onClick={onSubmitForm}>Submit</button>
      </form>
      <br></br>
      <p align="center">
      <Link to="/landing">Back</Link> <Link to="/login">Login</Link>
      </p>
    </Fragment>
  );
};

export default Register;
