import React, { Fragment, useState } from "react";

// @material-ui/core components
//import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";
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


const LocationRoute = () => {
    const [inputs, setInputs] = useState({
        zipcode: "",
        storage_type: "",
        time_need: "",
        location_address: ""
    });
    const { zipcode, storage_type, time_need, location_address } = inputs;

    const onChange = e =>
        setInputs({ ...inputs, [e.target.name]: e.target.value });

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { zipcode, storage_type, time_need, location_address };
            const response = await fetch("http://localhost:5000/locations/1", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            console.log(response);
            console.log("please work lol.");
        } catch (err) {
            console.error(err.message);
        }
    };
    return (
    <Fragment>
        <Card>
            <CardHeader color="primary">
                <h4 >Search for Available Storage</h4>
            </CardHeader>
            <CardBody>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <input 
                        className="zipcode-input" 
                        placeholder="Zipcode" 
                        type="text" 
                        name="zipcode" 
                        value={zipcode} 
                        onChange={e => onChange(e)} />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <input 
                        className="use-time-input" 
                        placeholder="Use Time" 
                        type="text" 
                        name="time_need" 
                        value={time_need}
                        onChange={e => onChange(e)} />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <input 
                        className="storage-space-input" 
                        placeholder="Storage Space" 
                        type="text" 
                        name="storage_type" 
                        value={storage_type} 
                        onChange={e => onChange(e)} />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <input 
                        className="address-input" 
                        placeholder="Address" 
                        type="text" 
                        name="location_address" 
                        value={location_address} 
                        onChange={e => onChange(e)} />
                    </GridItem>
                </GridContainer>
            </CardBody>
            <CardFooter>

                <Button color="primary"
                    onClick={onSubmitForm}
                >Search</Button>
            </CardFooter>
        </Card>
    </Fragment>
    )
};

export default LocationRoute;