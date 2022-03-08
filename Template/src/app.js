import React, { Fragment, useState, useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { toast } from "react-toastify";

//components

import Login from "./views/loginPage/login";
import Register from "./views/loginPage/register";
import Dashboard from "./views/loginPage/welcome";
import Landing from "./views/loginPage/landing";

toast.configure();

function App() {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  return (
    <Fragment>
      <Router>
        <div className="container">
          <Switch>
          <Redirect to="/admin/landing" />
            <Route
              exact
              path="/admin/landing"
              render={props =>
                !isAuthenticated ? (
                  <Landing {...props} />
                ) : (
                  <Redirect to="/admin/dashboard" />
                )
              }
            />
            <Route
              exact
              path="/admin/login"
              render={props =>
                !isAuthenticated ? (
                  <Login {...props} Auth={setAuth} />
                ) : (
                  <Redirect to="/admin/dashboard" />
                )
              }
            />
            <Route
              exact
              path="/admin/register"
              render={props =>
                !isAuthenticated ? (
                  <Register {...props} Auth={setAuth} />
                ) : (
                  <Redirect to="/admin/dashboard" />
                )
              }
            />
            <Route
              exact
              path="/admin/dashboard"
              render={props =>
                isAuthenticated ? (
                  <Dashboard {...props} Auth={setAuth} />
                ) : (
                  <Redirect to="/admin/login" />
                )
              }
            />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
