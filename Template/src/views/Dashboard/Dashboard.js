
// react plugin for creating charts
//import ChartistGraph from "react-chartist";
// @material-ui/core

//import Warning from "@material-ui/icons/Warning";
//import DateRange from "@material-ui/icons/DateRange";
//import LocalOffer from "@material-ui/icons/LocalOffer";
//import Update from "@material-ui/icons/Update";
//import ArrowUpward from "@material-ui/icons/ArrowUpward";
//import AccessTime from "@material-ui/icons/AccessTime";
//import Accessibility from "@material-ui/icons/Accessibility";
//import BugReport from "@material-ui/icons/BugReport";
//import Code from "@material-ui/icons/Code";
//import Cloud from "@material-ui/icons/Cloud";
// core components
// @material-ui/icons
//import Table from "components/Table/Table.js";
//import Tasks from "components/Tasks/Tasks.js";
//import CustomTabs from "components/CustomTabs/CustomTabs.js";
//import Danger from "components/Typography/Danger.js";
//import CardFooter from "components/Card/CardFooter.js";
import React, { useState, useEffect } from "react";

//import Card from "components/Card/Card.js";
//import CardHeader from "components/Card/CardHeader.js";
//import CardIcon from "components/Card/CardIcon.js";
//import logo from 'assets/img/srlogo.png'
//import { makeStyles } from "@material-ui/core/styles";
//import Icon from "@material-ui/core/Icon";
//import { Link } from "react-router-dom";
//import Store from "@material-ui/icons/Store";
import Dash from "views/loginPage/welcome";
import { Link } from "react-router-dom";
//import StorageList from "components/StorageList/StorageList";

//import { bugs, website, server } from "variables/general.js";
/*import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";
//import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

//import { Button } from "@material-ui/core";
//import { useHistory } from "react-router-dom";

/*<GridItem xs={10} sm={10} md={6}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Icon>info_outline</Icon>
              </CardIcon>
              <h1 className={classes.cardTitle}>Want to view locations near you?</h1>
              <a className="iconsLink" href="/admin/icons">
                <h3>View Locations</h3>
              </a>
              <br></br>
              <a className="mapLink" href="/admin/maps">
                <h3>View Map</h3>
              </a>
            </CardHeader>
          </Card>
        </GridItem>
        
        <GridItem xs={6} sm={3} md={6}>
          <Card>
            <CardHeader color="rose" stats icon>
              <CardIcon color="rose">
                <Icon>content_copy</Icon>
              </CardIcon>
              <h1 className={classes.cardTitle}>Have something to store?</h1>
              <a className="loginLink" href="/admin/login">
                <h3>Login</h3>
              </a>
              <br></br>
              <a className="signupLink" href="/admin/login">
                <h3>Signup</h3>
              </a>
            </CardHeader>
          </Card>
        </GridItem>
        
        */

//const useStyles = makeStyles(styles);


export default function Dashboard() {
  //const classes = useStyles();

  const [allStorage, setAllStorage] = useState([]);

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/units/", {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });

      const parseData = await res.json();

      setAllStorage(parseData);

    } catch (err) {
      console.error(err.message);
      console.log(allStorage);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  
  return (
    <div  style={{width: 800, padding: 10,}} className="table mt-5 card d-flex mt-2">
          <Dash />
     
      <br></br>
      

        
        <p>Storage Rents is an application meant to connect you with local storage solutions. </p>

        <p>To view your submitted storage locations and make any desired changes, or to add new storage locations, you can head to the <Link to='/admin/storage'> User Storage </Link> page. </p>

        <p>To view and filter through all user submitted storage locations, you can head to the <Link to='/admin/icons'> Locations </Link> page. </p>


    </div>
  );
}
