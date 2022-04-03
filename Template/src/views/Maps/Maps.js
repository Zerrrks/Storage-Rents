import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
// @material-ui/core components
//import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";
// core components

//import CustomInput from "components/CustomInput/CustomInput.js";
//import Button from "components/CustomButtons/Button.js";
//import Card from "components/Card/Card.js";
//import CardHeader from "components/Card/CardHeader.js";
//import CardAvatar from "components/Card/CardAvatar.js";
//import CardBody from "components/Card/CardBody.js";
//import CardFooter from "components/Card/CardFooter.js";
//import { columns } from "components/StorageList/Column";
import MapRender from "components/Maps/MapRender.js";
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
    
function Maps () {
  const [data, setData] = useState([]);
  useEffect(() => { 
    try {
    axios.get('http://localhost:5000/maps/storage', { headers: { jwt_token: localStorage.token,}})
      .then((res) => {
        setData(res.data);
      }).catch((err) => {
        console.log(err)
      }) } catch (e) {
        console.log('error')
      }
  }, []);
    return (
     
      

              <Fragment>
                <MapRender data={data} />
              </Fragment>
      
      );
    }
export default Maps