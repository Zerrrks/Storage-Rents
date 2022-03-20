import React, { Fragment } from "react";

// @material-ui/core components
//import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
//import Button from "components/CustomButtons/Button.js";
//import Card from "components/Card/Card.js";
//import CardHeader from "components/Card/CardHeader.js";
//import CardAvatar from "components/Card/CardAvatar.js";
//import CardBody from "components/Card/CardBody.js";
//import CardFooter from "components/Card/CardFooter.js";
import { columns } from "components/StorageList/Column";
import StorageTable from "components/reactTable/StorageTable copy";
//import LocationRoute from "./LocationRoute"

//import avatar from "assets/img/faces/marc.jpg";

//import { bugs, website, server } from "variables/general.js";

//import {
//  dailySalesChart,
//  emailsSubscriptionChart,
// completedTasksChart,
//} from "variables/charts.js";

//import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

//const useStyles = makeStyles(styles);


//const classes = useStyles();
    
export default function LocationsPage () {
    return (
      <div>
        <div className="d-flex mt-5 justify-content-around">
        <h2>All Locations</h2>
      </div>       
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
              <Fragment>
                <StorageTable className="d-flex mt-5 justify-content-around" columns={columns} />
              </Fragment>
            </GridItem>
          </GridContainer>
        </div>        
      );
    }