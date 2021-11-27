
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
//import CardBody from "components/Card/CardBody.js";
//import CardFooter from "components/Card/CardFooter.js";
import React from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import logo from 'assets/img/srlogo.png'
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

import Store from "@material-ui/icons/Store";


 //import { bugs, website, server } from "variables/general.js";
/*import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";
*/
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(styles);





export default function Dashboard() {
  const classes = useStyles();



               //={window.location.href='/'}>
             
  
  return (
    <div>
      
      <GridContainer>
        <GridItem xs={6} sm={3} md={6}>
          <Card>
            <CardHeader color="rose" stats icon>
              <CardIcon color="rose">
                <Icon>content_copy</Icon>
              </CardIcon>
              <h1 className={classes.cardTitle}>Have something to store?</h1>
              <Button color="primary" className="px-4"
                >
                  Login
                </Button>
              <h2 className={classes.cardTitle}>Signup</h2>
            </CardHeader>
            
          </Card>
        </GridItem>
        <GridItem xs={6} sm={2} md={6}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <h1 className={classes.cardTitle}>Have something to store?</h1>
              <h2 className={classes.cardTitle}>Login</h2>
              <h2 className={classes.cardTitle}>Signup</h2>
            </CardHeader>

          </Card>
        </GridItem>
        <GridItem xs={10} sm={10} md={6}>
          <Card>
            <CardHeader color= "info" stats icon>
              <CardIcon color="info">
                <Icon>info_outline</Icon>
              </CardIcon>
              <h1 className={classes.cardTitle}>Want to view locations near you?</h1>
              <h2 className={classes.cardTitle}>View Locations</h2>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={10} sm={10} md={6}>
          <Card>
            <CardHeader color= "info" stats icon>
              <CardIcon color="info">
                <Icon>info_outline</Icon>
              </CardIcon>
              <img src={logo}></img>;
            </CardHeader>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
  }