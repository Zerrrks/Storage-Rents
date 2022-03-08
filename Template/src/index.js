/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.10.0";
import AddStorage from "views/UserStorage/AddStorage.js"
import Login from "views/loginPage/login.js";
import Register from "views/loginPage/register";
import App from "./app";

ReactDOM.render(<App />, document.getElementById("root"));

//<Redirect from="/" to="/admin/landing" />

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/admin/addstorage" component={AddStorage} />
      <Route exact path="/admin/login" component={Login} />
      <Route exact path="/admin/register" component={Register} />
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
