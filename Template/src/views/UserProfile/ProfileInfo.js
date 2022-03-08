import React, { Fragment, useState, useEffect } from "react";

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
//import CardFooter from "components/Card/CardFooter.js";

const ProfileInfo = () => {
    const [info, setInfo] = useState([]);

    async function getInfo() {
        const res = await fetch("/prof/3"); //`/prof/${id}`
        const infoArray = await res.json();
        setInfo(infoArray);
    }

    useEffect(() => {
        getInfo();
    }, []);

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
                        <h4 className={classes.cardTitleWhite}>Profile</h4>
                        <p className={classes.cardCategoryWhite}>Current profile information</p>
                    </CardHeader>
                    <CardBody>
                        <GridContainer>
                            <Table
                                //key={info.prof_id}
                                tableHeaderColor="primary"
                                tableHead={["Your information: "]}
                                tableData={[
                                    ["Username - ", info.username],
                                    ["Email - ", info.email],
                                    ["First Name - ", info.first_name], 
                                    ["Last Name - ", info.last_name], 
                                    ["Street Address - ", info.addy],
                                    ["Postal Code - ", info.postal_code], 
                                    ["City - ", info.city],
                                    ["State - ", info.country],
                                    ["Info - ", info.info]
                                ]}
                            />
                        </GridContainer>
                    </CardBody>
                </Card>
            </GridItem>
        </Fragment>
    );
};

export default ProfileInfo;

/*
<table className="table mt-5">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email Address</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Street Address</th>
            <th>Postal Code</th>
            <th>City</th>
            <th>Country</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
            <tr key={info.prof_id}>
              <td>{info.username}</td>
              <td>{info.first_name}</td>
              <td>{info.last_name}</td>
              <td>{info.addy}</td>
              <td>{info.postal_code}</td>
              <td>{info.city}</td>
              <td>{info.country}</td>
              <td>{info.info}</td>
            </tr>
        </tbody>
      </table>
*/