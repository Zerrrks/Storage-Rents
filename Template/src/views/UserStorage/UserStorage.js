import React, { useEffect, useState } from "react";


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";

//import UpdateStorage from "./UpdateStorage";
//import AddStorage from "./AddStorage";
//import DisplayStorage from "./DisplayStorage";

// core components
import GridItem from "components/Grid/GridItem.js";
//import GridContainer from "components/Grid/GridContainer.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
//import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
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

// <DisplayStorage />


import InputStorage from "./storagecomp/InputStorage";
import ListStorage from "./storagecomp/ListStorage";

const UserStorage = () => {
  const [name, setName] = useState("");
  const [allStorage, setAllStorage] = useState([]);
  const [storageChange, setStorageChange] = useState(false);

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/units/", {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });

      const parseData = await res.json();
      setName(parseData[0].user_name);
      setAllStorage(parseData);

    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
    setStorageChange(false);
  }, [storageChange]);

  const styles = {
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
  };

  const useStyles = makeStyles(styles);

  const classes = useStyles();

  return (
    <div>
      {/* //   <div className="d-flex mt-5 justify-content-around">
    //     <h2>{name} - Storage List</h2>
    //   </div> */}
      <GridItem xs={20} sm={20} md={15}>
        <Card>
          <CardHeader color="primary">
            <h2 className={classes.cardTitleWhite}>{name} - Storage List</h2>
            <p className={classes.cardCategoryWhite}>Add, edit, and remove storage units</p>
          </CardHeader>
          <CardBody>
            <InputStorage setStorageChange={setStorageChange} />
            <ListStorage allStorage={allStorage} setStorageChange={setStorageChange} />
          </CardBody>
        </Card>
      </GridItem>
    </div >
  );
};

export default UserStorage;

