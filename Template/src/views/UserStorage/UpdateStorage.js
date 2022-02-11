import React, { Fragment, useState } from "react";
//import Geofunction from "./Geofunction";
// @material-ui/core components
//import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
//import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
const UpdateStorage = () => {
    const [inputs, setInputs] = useState({
        location_name: "",
        location_price: "",
        square_footage: "",
        full_name: "",
        street_name: "",
        city_storage: "",
        country_storage: "",
        postal_c: "",
        add_details: ""
    });
    const { location_name, location_price, square_footage, full_name, street_name, city_storage, country_storage, postal_c, add_details } = inputs;

    const onChange = e => 
        setInputs({ ...inputs, [e.target.name]: e.target.value });

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { location_name, location_price, square_footage, full_name, street_name, city_storage, country_storage, postal_c, add_details }; //lat, lng
            const response = await fetch("http://localhost:5000/storage/1", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/admin/storage"
            console.log(response);
            console.log("please work.")
//          
        } 
        catch (err) {
            console.error(err.message);
        }
    };

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
    };*/
    //const useStyles = makeStyles(styles);

    //const classes = useStyles();

    return (
        <Fragment>
            <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4>Edit Storage Information</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={10} sm={10} md={4}>
                    <input
                      className="locationName-input"
                      placeholder="Location Description"
                      type="text" 
                      name="location_name"
                      value={location_name}
                      onChange={e => onChange(e)}
                    />
                  </GridItem>
                  <GridItem xs={10} sm={10} md={4}>
                    <input
                      className="locationPrice-input"
                      placeholder="Location Price"
                      type="text" 
                      name="location_price"
                      value={location_price}
                      onChange={e => onChange(e)}
                    />
                  </GridItem>
                  <GridItem xs={10} sm={10} md={4}>
                    <input
                      className="squareFootage-input"
                      placeholder="Square Footage"
                      type="text" 
                      name="square_footage"
                      value={square_footage}
                      onChange={e => onChange(e)}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <input
                      className="fullName-input"
                      placeholder="Full Name"
                      type="text"
                      name="full_name"
                      value={full_name}
                      onChange={e => onChange(e)}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <input
                      className="streetName-input"
                      placeholder="Street Address"
                      type="text"
                      name="street_name"
                      value={street_name}
                      onChange={e => onChange(e)}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <input
                      className="locationCity-input"
                      placeholder="City"
                      type="text"
                      name="city_storage"
                      value={city_storage}
                      onChange={e => onChange(e)}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <input
                      className="locationCountry-input"
                      placeholder="State"
                      type="text"
                      name="country_storage"
                      value={country_storage}
                      onChange={e => onChange(e)}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <input
                      className="locationpostalCode-input"
                      placeholder="Postal Code"
                      type="text"
                      name="postal_c"
                      value={postal_c}
                      onChange={e => onChange(e)}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}><br></br>
                    <InputLabel style={{ color: "#AAAAAA" }}>Additional Details</InputLabel>
                    <input
                      className="locationDetails-input"
                      placeholder="Please enter your info."
                      type="text"
                      name="add_details"
                      value={add_details}
                      onChange={e => onChange(e)}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button onClick={onSubmitForm} color="primary">Update Storage Details</Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          </GridItem>
        </GridContainer>
        </Fragment>
    )
    
};

export default UpdateStorage;