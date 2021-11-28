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

import UpdateProfile from "./UpdateProfile";
import ProfileInfo from "./ProfileInfo";
//import ListProfile from "./ListProfile";

//import avatar from "assets/img/faces/marc.jpg";

/*const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
}; */

//const useStyles = makeStyles(styles);

export default function UserProfile() {
  //const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridContainer>
          <GridItem>
            <Fragment>
              <ProfileInfo />
            </Fragment>
          </GridItem>
          <GridItem>
            <Fragment>
              <UpdateProfile />
            </Fragment>
          </GridItem>
        </GridContainer>
      </GridContainer>
    </div>
  );
}

/*
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>RENTER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                I got some great storage options with Storage Rents!
              </p>
            </CardBody>
          </Card>
        </GridItem> 
*/