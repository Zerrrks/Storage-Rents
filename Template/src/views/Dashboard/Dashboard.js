import React from "react";
// @material-ui/core components
//import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
//import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

//import avatar from "assets/img/faces/marc.jpg";

//import { bugs, website, server } from "variables/general.js";

//import {
//  dailySalesChart,
//  emailsSubscriptionChart,
// completedTasksChart,
//} from "variables/charts.js";

//import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

//const useStyles = makeStyles(styles);


//  const classes = useStyles();


    
export default class Dashboard extends React.Component() {
    
  constructor(props) {
    super(props);
    
    
    this.state = {
      customer: {
        zipcode: props.zipcode,
        timeNeeded: props.timeNeeded,
        storageSpace: props.storageSpace
      }
    }
  }

    handleZipcodeChanged() {
    var customer        = this.state.customer;
    customer.zipcode  = this.target.value;

    this.setState({ customer: customer });
  }

  handleTimeNeededChanged() {
    var customer      = this.state.customer;
    customer.timeNeeded = this.target.value;

    this.setState({ customer: customer });
  }

  handleStorageSpaceChanged() {
    var customer    = this.state.customer;
    customer.storageSpace = this.target.value;

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
                  <h4 >Search for available storage</h4>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Zipcode"
                        id="zipcode"
                        value={this.state.customer.zipcode}
                        onChange={this.handleZipcodeChanged.bind(this)}
                        formControlProps={{
                          fullWidth: true,
                          
                        }}
                      />
                      
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        labelText="Time needed"
                        id="timeNeeded"
                        value={this.state.customer.timeNeeded}
                        onChange={this.handleTimeNeededChanged.bind(this)}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Storage space"
                        id="storageSpace"
                        value={this.state.customer.storageSpace}
                        onChange={this.handleStorageSpaceChanged.bind(this)}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter>
               
                  <Button color="primary"
                  onClick={this.handleButtonClicked.bind(this)}
                   >Search</Button>
                
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>

        
      );
    } 
}