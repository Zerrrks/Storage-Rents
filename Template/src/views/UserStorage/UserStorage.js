import React, { Fragment } from "react";
// @material-ui/core components
//import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";

import UpdateStorage from "./UpdateStorage";
import DisplayStorage from "./DisplayStorage";

// core components
//import GridItem from "components/Grid/GridItem.js";
//import GridContainer from "components/Grid/GridContainer.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
//import Button from "components/CustomButtons/Button.js";
//import Card from "components/Card/Card.js";
//import CardHeader from "components/Card/CardHeader.js";
//import CardBody from "components/Card/CardBody.js";
//import CardFooter from "components/Card/CardFooter.js";
//var PropTypes = require('prop-types');

//const styles = {
//  cardCategoryWhite: {
//  color: "rgba(255,255,255,.62)",
//margin: "0",
//    fontSize: "14px",
//    marginTop: "0",
//    marginBottom: "0",
//  },
//  cardTitleWhite: {
//    color: "#FFFFFF",
//    marginTop: "0px",
//    minHeight: "auto",
//    fontWeight: "300",
//    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//    marginBottom: "3px",
//    textDecoration: "none",
//  },
//};

//const useStyles = makeStyles(styles);


export default function UserStorage() {
    return (
      <div>
        <Fragment>
          <DisplayStorage />
        </Fragment>
        <Fragment>
          <UpdateStorage />
        </Fragment>
        <a href="/Admin/addstorage">Add Storage</a>
      </div>
    );
  }
