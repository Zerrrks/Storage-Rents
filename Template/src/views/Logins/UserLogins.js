import React from "react";
// @material-ui/core components
//import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";

import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

//import avatar from "assets/img/faces/marc.jpg";
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



export default class UserLogins extends React.Component {
  constructor(props) {
    super(props);
    
 

    this.state = {
      customer: {
        userName: props.userName,
        password: props.password,
       
      }
    }
  }

    handleuserNameChanged(event) {
    var customer        = this.state.customer;
    customer.userName  = event.target.value;

    this.setState({ customer: customer });
  }

  handlepasswordChanged(event) {
    var customer        = this.state.customer;
    customer.password  = event.target.value;

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
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <input className="userName-input" placeholder="Username" type="text" id="userName" value={this.state.customer.userName} onChange={this.handleuserNameChanged.bind(this)}/> 
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <input className="password-input" placeholder="Password" type="password" id="password" value={this.state.customer.password} onChange={this.handlepasswordChanged.bind(this)}/>
                </GridItem>
               
              </GridContainer>
              
            </CardBody>
            <CardFooter>
            <Button onClick={this.handleButtonClicked.bind(this)} color="primary">Login</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
 }
}
UserLogins.propTypes = {
  userName: PropTypes.string,
  password: PropTypes.string
}
