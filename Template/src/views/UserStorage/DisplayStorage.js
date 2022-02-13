import React, { Fragment, useState, useEffect } from "react";
//import { history } from "history";
  
import Table from "components/Table/Table.js";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";
// core components
//import GridItem from "components/Grid/GridItem.js";
//import GridContainer from "components/Grid/GridContainer.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
//import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
//import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
//import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
//import CardFooter from "components/Card/CardFooter.js";
//import storageFinder from "../../components/storageFinder";
//const cors = require("cors");
const DisplayStorage = () => {
   // useEffect(async () => {
    //    try {
   //         const response = await storageFinder.get("/")
    //        console.log(response);
   //     }   catch (err) {}
  //  }, [])
    const [info, setInfo] = useState([]);
    let history = useHistory
    async function getInfo() {
        const res = await fetch('http://localhost:5000/storage/1', {
            method: "GET"
        });
        const infoArray = await res.json();
        setInfo(infoArray);
    }

    useEffect(() => {
        getInfo();
    }, []);
    const handleUpdate = (storage_id) => {
        history.push(`/storage/${storage_id}/`);
    };
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
        <Fragment>
            {" "}
            <GridItem xs={20} sm={20} md={15}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Your listed storage</h4>
                        <p className={classes.cardCategoryWhite}>Current storage infomation</p>
                    </CardHeader>
                    <CardBody>
                        <GridContainer>
                            <Table
                                //key={info.storage_id}
                                tableHeaderColor="primary"
                                tableData={[
                                    ["Location Description - ", info.location_name],
                                    ["Location Price - ", info.location_price],
                                    ["Square Footage - ", info.square_footage], 
                                    ["Full Name - ", info.full_name], 
                                    ["Street Address - ", info.street_name],
                                    ["Postal Code - ", info.postal_c,], 
                                    ["City - ", info.city_storage],
                                    ["State - ", info.country_storage],
                                    ["Details - ", info.add_details]
                                ]}
                            />
                        </GridContainer>
                    </CardBody>
                </Card>
                <button onClick={() => handleUpdate(info.storage_id)}>
         Edit Storage Details 
        </button>
            </GridItem>
            <br></br>
        <a href="/Admin/addstorage">Add Storage</a>
        </Fragment>
    );
};

export default DisplayStorage;