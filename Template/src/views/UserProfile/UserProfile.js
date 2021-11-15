import React from "react";
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
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";
var PropTypes = require('prop-types');
//const styles = {
//  cardCategoryWhite: {
//    color: "rgba(255,255,255,.62)",
//    margin: "0",
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



export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    
 

    this.state = {
      customer: {
        userName: props.userName,
        emailAddress: props.emailAddress,
        firstName: props.firstName,
        lastName: props.lastName,
        cityName: props.cityName,
        countryName: props.countryName,
        postalCode: props.postalCode,
        aboutMe: props.aboutMe,
      }
    }
  }

    handleuserNameChanged(event) {
    var customer        = this.state.customer;
    customer.userName  = event.target.value;

    this.setState({ customer: customer });
  }

  handleemailAddressChanged(event) {
    var customer      = this.state.customer;
    customer.emailAddress = event.target.value;

    this.setState({ customer: customer });
  }

  handlefirstNameChanged(event) {
    var customer    = this.state.customer;
    customer.firstName = event.target.value;

    this.setState({ customer: customer });
  }
  handlelastNameChanged(event) {
    var customer    = this.state.customer;
    customer.lastName = event.target.value;

    this.setState({ customer: customer });
  }
  handlecityNameChanged(event) {
    var customer    = this.state.customer;
    customer.cityName = event.target.value;

    this.setState({ customer: customer });
  }
  handlecountryNameChanged(event) {
    var customer    = this.state.customer;
    customer.countryName = event.target.value;

    this.setState({ customer: customer });
  }
  handlepostalCodeChanged(event) {
    var customer    = this.state.customer;
    customer.postalCode = event.target.value;

    this.setState({ customer: customer });
  }
  handleaboutMeChanged(event) {
    var customer    = this.state.customer;
    customer.aboutMe = event.target.value;

    this.setState({ customer: customer });
  }
  
  handleButtonClicked() {
    console.log(this.state.customer);
  }
  render() {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className="cardTitleWhite">Edit Profile</h4>
              <p className="cardCategoryWhite">Complete your profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <input className="userName-input" placeholder="Username" type="text" id="userName" value={this.state.customer.userName} onChange={this.handleuserNameChanged.bind(this)}/> 
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <input className="emailAddress-input" placeholder="Email Address" type="text" id="emailAddress" value={this.state.customer.emailAddress} onChange={this.handleemailAddressChanged.bind(this)}/>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <input className="firstName-input" placeholder="First Name" type="text" id="firstName" value={this.state.customer.firstName} onChange={this.handlefirstNameChanged.bind(this)}/>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <input className="lastName-input" placeholder="Last Name" type="text" id="lastName" value={this.state.customer.lastName} onChange={this.handlelastNameChanged.bind(this)}/> 
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                <input className="cityName-input" placeholder="City" type="text" id="cityName" value={this.state.customer.cityName} onChange={this.handlecityNameChanged.bind(this)}/>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <input className="countryName-input" placeholder="Country" type="text" id="countryName" value={this.state.customer.countryName} onChange={this.handlecountryNameChanged.bind(this)}/>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <input className="postalCode-input" placeholder="Postal Code" type="text" id="postalCode" value={this.state.customer.postalCode} onChange={this.handlepostalCodeChanged.bind(this)}/>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}><br></br>
                  <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                  <input className="aboutMe-input" placeholder="Please enter your info." type="text" id="aboutMe" value={this.state.customer.aboutMe} onChange={this.handleaboutMeChanged.bind(this)}/>
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
            <Button onClick={this.handleButtonClicked.bind(this)} color="primary">Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className="cardCategory">RENTER</h6>
              <h4 className="cardTitle">Alec Thompson</h4>
              <p className="description">
                    I got some great storage options with Storage Rents!
              </p>
              <Button color="primary" round>
                Like
              </Button>
              <Button color="primary" round>
                Dislike
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
 }
}
UserProfile.propTypes = {
  userName: PropTypes.string,
  emailAddress: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  cityName: PropTypes.string,
  countryName: PropTypes.string,
  postalCode: PropTypes.string,
  aboutMe: PropTypes.string
}
