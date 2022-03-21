import React, { useEffect, useState } from "react";


// @material-ui/core components

//import InputLabel from "@material-ui/core/InputLabel";

//import UpdateStorage from "./UpdateStorage";
//import AddStorage from "./AddStorage";
//import DisplayStorage from "./DisplayStorage";

// core components

//import GridContainer from "components/Grid/GridContainer.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
//import Button from "components/CustomButtons/Button.js";

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


  return (
    <div style={{width: 800,}}className="card">
      {/* //   <div className="d-flex mt-5 justify-content-around">
    //     <h2>{name} - Storage List</h2>
    //   </div> */}

            <h2 className="d-flex mt-5 justify-content-around">{name} - Storage List</h2>
            <p className="d-flex mt-5 justify-content-around">Add, edit, and remove storage units</p>
            <InputStorage setStorageChange={setStorageChange} />
            <ListStorage allStorage={allStorage} setStorageChange={setStorageChange} />


    </div >
  );
};

export default UserStorage;

