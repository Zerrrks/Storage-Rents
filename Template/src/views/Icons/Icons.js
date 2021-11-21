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


//const classes = useStyles();



var PropTypes = require('prop-types');
    
export default class Location extends React.Component {

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

    handleZipcodeChanged(event) {
    var customer        = this.state.customer;
    customer.zipcode  = event.target.value;

    this.setState({ customer: customer });
  }

  handleTimeNeededChanged(event) {
    var customer      = this.state.customer;
    customer.timeNeeded = event.target.value;

    this.setState({ customer: customer });
  }

  handleStorageSpaceChanged(event) {
    var customer    = this.state.customer;
    customer.storageSpace = event.target.value;

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
                  <h4 >Search for Available Storage</h4>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                    <input className="zipcode-input" placeholder="Zipcode" type="text" id="Zipcode" value={this.state.customer.zipcode} onChange={this.handleZipcodeChanged.bind(this)}/>
                    </GridItem>         
                    <GridItem xs={12} sm={12} md={4}>
                    <input className="use-time-input" placeholder="Use Time" type="text" id="TimeNeeded" value={this.state.customer.timeNeeded} onChange={this.handleTimeNeededChanged.bind(this)}/>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                    <input className="storage-space-input" placeholder="Storage Space" type="text" id="StorageSpace" value={this.state.customer.storageSpace} onChange={this.handleStorageSpaceChanged.bind(this)}/>
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
            <GridItem xs={6} sm={3} md={8}>
              <Card>
                
                <CardHeader color="rose">
                  <h4 >Open Garage</h4>
                </CardHeader>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Zipcode"
                        id="Zipcode"
                        value={this.state.customer.zipcode}
                        type="text"
                        onChange={e => this.setState({ zipcode: e.target.value })}
                        formControlProps={{
                          
                          fullWidth: true,
                          
                        }}
                      />  
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        labelText="Time needed"
                        id="timeNeeded"
                        type="text"
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
                        type="text"
                        value={this.state.customer.storageSpace}
                        onChange={this.handleStorageSpaceChanged.bind(this)}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                  </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={6} sm={3} md={8}>
              <Card>     
                <CardHeader color="rose">
                  <h4 >Heated Basement</h4>
                </CardHeader>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Zipcode"
                        id="Zipcode"
                        value={this.state.customer.zipcode}
                        type="text"
                        onChange={e => this.setState({ zipcode: e.target.value })}
                        formControlProps={{
                          
                          fullWidth: true,
                          
                        }}
                      />                      
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        labelText="Time needed"
                        id="timeNeeded"
                        type="text"
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
                        type="text"
                        value={this.state.customer.storageSpace}
                        onChange={this.handleStorageSpaceChanged.bind(this)}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                  </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={6} sm={3} md={8}>
              <Card>                
                <CardHeader color="rose">
                  <h4 >Small Shed in the backyard</h4>
                </CardHeader>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Zipcode"
                        id="Zipcode"
                        value={this.state.customer.zipcode}
                        type="text"
                        onChange={e => this.setState({ zipcode: e.target.value })}
                        formControlProps={{                          
                          fullWidth: true,                          
                        }}
                      />                      
                    </GridItem>                    
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        labelText="Time needed"
                        id="timeNeeded"
                        type="text"
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
                        type="text"
                        value={this.state.customer.storageSpace}
                        onChange={this.handleStorageSpaceChanged.bind(this)}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                  </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={6} sm={3} md={8}>
              <Card>
                <CardHeader color="rose">
                  <h4 >Basement with easy access</h4>
                </CardHeader>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Zipcode"
                        id="Zipcode"
                        value={this.state.customer.zipcode}
                        type="text"
                        onChange={e => this.setState({ zipcode: e.target.value })}
                        formControlProps={{                          
                          fullWidth: true,                          
                        }}
                      />                      
                    </GridItem>                    
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        labelText="Time needed"
                        id="timeNeeded"
                        type="text"
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
                        type="text"
                        value={this.state.customer.storageSpace}
                        onChange={this.handleStorageSpaceChanged.bind(this)}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  </Card>
            </GridItem>
              <GridItem xs={6} sm={3} md={8}>
              <Card>                
                <CardHeader color="rose">
                  <h4 >Attic space</h4>
                </CardHeader>
                <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Zipcode"
                        id="Zipcode"
                        value={this.state.customer.zipcode}
                        type="text"
                        onChange={e => this.setState({ zipcode: e.target.value })}
                        formControlProps={{                          
                          fullWidth: true,                          
                        }}
                      />                      
                    </GridItem>                    
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        labelText="Time needed"
                        id="timeNeeded"
                        type="text"
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
                        type="text"
                        value={this.state.customer.storageSpace}
                        onChange={this.handleStorageSpaceChanged.bind(this)}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                  </GridContainer>                          
              </Card>
            </GridItem>
                  
          </GridContainer>
        </div>        
      );
    }
}

Location.propTypes = {
  zipcode: PropTypes.string,
  timeNeeded: PropTypes.string,
  storageSpace: PropTypes.string
}