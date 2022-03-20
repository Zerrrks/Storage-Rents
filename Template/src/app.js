import React, { Fragment, useState, useEffect } from "react";

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
import Dash from "./views/loginPage/welcome";
import Landing from "./views/loginPage/landing";
import UserStorage from "./views/UserStorage/UserStorage";

// other components
import Admin from "layouts/Admin.js";
import AddStorage from "views/UserStorage/AddStorage.js";
import "react-toastify/dist/ReactToastify.css";

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
          <Redirect from="/" to="/landing" />
          <Switch>
            <Route exact path="/addstorage" component={AddStorage} />
          
            <Route path="/admin" component={Admin} />
          </Switch>
          <Route
            exact path="/landing"
            render={props =>
              !isAuthenticated ? (
                <Landing {...props} />
              ) : (
                <Redirect to="/admin/dashboard" />
              )
            }
          />
          <Route
            exact path="/login"
            render={props =>
              !isAuthenticated ? (
                <Login {...props} Auth={setAuth} />
              ) : (
                <Redirect to="/admin/dashboard" />
              )
            }
          />
          <Route
            exact path="/register"
            render={props =>
              !isAuthenticated ? (
                <Register {...props} Auth={setAuth} />
              ) : (
                <Redirect to="/admin/dashboard" />
              )
            }
          />
          <Route
            exact path="/admin/dashboard"
            render={props =>
              isAuthenticated ? (
                <Dash {...props} Auth={setAuth} />
              ) : (
                <Redirect to="/landing" />
              )
            }
          />
          <Route
            exact path="/admin/storage"
            render={props =>
              isAuthenticated ? (
                <UserStorage {...props} Auth={setAuth} />
              ) : (
                <Redirect to="/admin/storage" />
              )
            }
          />
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
