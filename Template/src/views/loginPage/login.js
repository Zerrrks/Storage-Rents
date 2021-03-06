import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
//import  Button  from "components/CustomButtons/Button.js";
const delay = ms => new Promise(res => setTimeout(res, ms));





const Login = ({ setAuth = function(){} }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:5000/auth/login",
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
        toast.success("Logged in Successfully");
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
      <h1 align="center" className="mt-5 text-center">Login</h1>
      <form align="center" onSubmit={onSubmitForm}>
      <br></br>
      <br></br>
        <input
          placeholder="Email"
          type="text"
          name="email"
          value={email}
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <br></br>
        <br></br>
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <br></br>
        <br></br>
        <button style={{
         background: '#007bff', 
         color: 'white',
        }}className="btn btn-block" onClick={onSubmitForm}>Submit</button>
      </form>
      <br></br>
      <p align="center">
      <Link  to="/landing">Go Back</Link> <Link to="/register">Register</Link>
      </p>
    </Fragment>
  );
};

export default Login;
