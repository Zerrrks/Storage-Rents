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
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
var PropTypes = require('prop-types');

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

export default class UserStorage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: {
        locationName: props.locationName,
        locationPrice: props.locationPrice,
        squareFootage: props.squareFootage,
        fullName: props.fullName,
        streetName: props.streetName,
        locationCity: props.locationCity,
        locationCountry: props.locationCountry,
        locationpostalCode: props.locationpostalCode,
        locationDetails: props.locationDetails,
      }
    }
  }
  handlelocationNameChanged(event) {
    var customer        = this.state.customer;
    customer.locationName  = event.target.value;

    this.setState({ customer: customer });
  }
  handlelocationPriceChanged(event) {
    var customer        = this.state.customer;
    customer.locationPrice  = event.target.value;

    this.setState({ customer: customer });
  }
  handlesquareFootageChanged(event) {
    var customer        = this.state.customer;
    customer.squareFootage  = event.target.value;

    this.setState({ customer: customer });
  }
  handlefullNameChanged(event) {
    var customer        = this.state.customer;
    customer.fullName  = event.target.value;

    this.setState({ customer: customer });
  }
  handlestreetNameChanged(event) {
    var customer        = this.state.customer;
    customer.streetName  = event.target.value;

    this.setState({ customer: customer });
  }
  handlelocationCityChanged(event) {
    var customer        = this.state.customer;
    customer.locationCity  = event.target.value;

    this.setState({ customer: customer });
  }
  handlelocationCountryChanged(event) {
    var customer        = this.state.customer;
    customer.locationCountry  = event.target.value;

    this.setState({ customer: customer });
  }
  handlelocationpostalCodeChanged(event) {
    var customer        = this.state.customer;
    customer.locationpostalCode  = event.target.value;

    this.setState({ customer: customer });
  }
  handlelocationDetailsChanged(event) {
    var customer        = this.state.customer;
    customer.locationDetails  = event.target.value;

    this.setState({ customer: customer });
  }
  render() {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4>Edit Storage Information</h4>
              <p>Enter Storage Details Here</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={10} sm={10} md={4}>
                <input className="locationName-input" placeholder="Location Name" type="text" id="locationName" value={this.state.customer.locationName} onChange={this.handlelocationNameChanged.bind(this)}/>
                </GridItem>
                <GridItem xs={10} sm={10} md={4}>
                <input className="locationPrice-input" placeholder="Location Price" type="text" id="locationPrice" value={this.state.customer.locationPrice} onChange={this.handlelocationPriceChanged.bind(this)}/>
                </GridItem>
                <GridItem xs={10} sm={10} md={4}>
                <input className="squareFootage-input" placeholder="Square Footage" type="text" id="squareFootage" value={this.state.customer.squareFootage} onChange={this.handlesquareFootageChanged.bind(this)}/>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <input className="fullName-input" placeholder="Full Name" type="text" id="fullName" value={this.state.customer.fullName} onChange={this.handlefullNameChanged.bind(this)}/>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <input className="streetName-input" placeholder="Street" type="text" id="streetName" value={this.state.customer.streetName} onChange={this.handlestreetNameChanged.bind(this)}/>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                <input className="locationCity-input" placeholder="City" type="text" id="locationCity" value={this.state.customer.locationCity} onChange={this.handlelocationCityChanged.bind(this)}/>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <input className="locationCountry-input" placeholder="Country" type="text" id="locationCountry" value={this.state.customer.locationCountry} onChange={this.handlelocationCountryChanged.bind(this)}/>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <input className="locationpostalCode-input" placeholder="Postal Code" type="text" id="locationpostalCode" value={this.state.customer.locationpostalCode} onChange={this.handlelocationpostalCodeChanged.bind(this)}/>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>Additional Details</InputLabel>
                  <input className="locationDetails-input" placeholder="Please enter your info." type="text" id="locationDetails" value={this.state.customer.locationDetails} onChange={this.handlelocationDetailsChanged.bind(this)}/>  
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">Update Storage Details</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
        </GridItem>
      </GridContainer>
    </div>
  );
}
}
UserStorage.propTypes = {
  locationName: PropTypes.string,
  locationPrice: PropTypes.string,
  squareFootage: PropTypes.string,
  fullName: PropTypes.string,
  locationCity: PropTypes.string,
  locationCountry: PropTypes.string,
  locationpostalCode: PropTypes.string,
  locationDetails: PropTypes.string,
  streetName: PropTypes.string,
}
