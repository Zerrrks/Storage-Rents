import React, { Fragment, useState } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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

const UpdateProfile = () => {
    const [inputs, setInputs] = useState({
        username: "",
        first_name: "",
        last_name: "",
        city: "",
        country: "",
        info: "",
        email: "",
        addy: "",
        postal_code: ""
    });
    const { username, first_name, last_name, city, country, info, email, addy, postal_code } = inputs;

    const onChange = e => 
        setInputs({ ...inputs, [e.target.name]: e.target.value });

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { username, first_name, last_name, city, country, info, addy, email, postal_code };
            const response = await fetch("http://localhost:5000/prof/3", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/admin/user"
            console.log(response);
            console.log("please work.")
        } catch (err) {
            console.error(err.message);
        }
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
            <GridItem xs={20} sm={20} md={15}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                        <p className={classes.cardCategoryWhite}>Complete your profile</p>
                    </CardHeader>
                    
                    <CardBody>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={10}>
                                <input 
                                    placeholder="Username"
                                    type="text"
                                    name="username"
                                    value={username}
                                    onChange={e => onChange(e)}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={10}>
                                <input 
                                    placeholder="Email Address"
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={e => onChange(e)}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={10}>
                                <input 
                                    placeholder="First Name"
                                    type="text"
                                    name="first_name"
                                    value={first_name}
                                    onChange={e => onChange(e)}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={10}>
                                <input 
                                    placeholder="Last Name"
                                    type="text"
                                    name="last_name"
                                    value={last_name}
                                    onChange={e => onChange(e)}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={10}>
                                <input 
                                    placeholder="Street Address"
                                    type="text"
                                    name="addy"
                                    value={addy}
                                    onChange={e => onChange(e)}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={10}>
                                <input 
                                    placeholder="Postal Code"
                                    type="number"
                                    name="postal_code"
                                    value={postal_code}
                                    onChange={e => onChange(e)}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={10}>
                                <input 
                                    placeholder="City"
                                    type="text"
                                    name="city"
                                    value={city}
                                    onChange={e => onChange(e)}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={10}>
                                <input 
                                    placeholder="Country"
                                    type="text"
                                    name="country"
                                    value={country}
                                    onChange={e => onChange(e)}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={10}>
                                <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                                <input 
                                    placeholder="Please enter your info."
                                    type="text"
                                    name="info"
                                    value={info}
                                    onChange={e => onChange(e)}
                                />
                            </GridItem>
                            <CardFooter>
                                <Button color="primary" onClick={onSubmitForm}>Update Profile</Button>
                            </CardFooter>
                        </GridContainer>
                    </CardBody>
                </Card>
            </GridItem>
        </Fragment>
    )
};

export default UpdateProfile;