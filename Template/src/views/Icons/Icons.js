import React, { Fragment } from "react";

// @material-ui/core components
//import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
//import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
//import CardAvatar from "components/Card/CardAvatar.js";
//import CardBody from "components/Card/CardBody.js";
//import CardFooter from "components/Card/CardFooter.js";

import LocationRoute from "./LocationRoute"

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
    
export default function LocationsPage () {
    return (
      <div>       
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
              <Fragment>
                <LocationRoute />
              </Fragment>
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
                        //value={this.state.customer.zipcode}
                        type="text"
                        //onChange={e => this.setState({ zipcode: e.target.value })}
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
                        //value={this.state.customer.timeNeeded}
                        //onChange={this.handleTimeNeededChanged.bind(this)}
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
                       // value={this.state.customer.storageSpace}
                        //onChange={this.handleStorageSpaceChanged.bind(this)}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Address"
                        id="Address"
                        type="text"
                        //value={this.state.customer.Address}
                        //onChange={this.handleAddressChanged.bind(this)}
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
                        //value={this.state.customer.zipcode}
                        type="text"
                        //onChange={e => this.setState({ zipcode: e.target.value })}
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
                        //value={this.state.customer.timeNeeded}
                        //onChange={this.handleTimeNeededChanged.bind(this)}
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
                        //value={this.state.customer.storageSpace}
                        //onChange={this.handleStorageSpaceChanged.bind(this)}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Address"
                        id="Address"
                        type="text"
                        //value={this.state.customer.Address}
                        //onChange={this.handleAddressChanged.bind(this)}
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
                        //value={this.state.customer.zipcode}
                        type="text"
                        //onChange={e => this.setState({ zipcode: e.target.value })}
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
                        //value={this.state.customer.timeNeeded}
                        //onChange={this.handleTimeNeededChanged.bind(this)}
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
                        //value={this.state.customer.storageSpace}
                        //onChange={this.handleStorageSpaceChanged.bind(this)}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Address"
                        id="Address"
                        type="text"
                        //value={this.state.customer.Address}
                        //onChange={this.handleAddressChanged.bind(this)}
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
                       // value={this.state.customer.zipcode}
                        type="text"
                        //onChange={e => this.setState({ zipcode: e.target.value })}
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
                        //value={this.state.customer.timeNeeded}
                       // onChange={this.handleTimeNeededChanged.bind(this)}
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
                        //value={this.state.customer.storageSpace}
                       // onChange={this.handleStorageSpaceChanged.bind(this)}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Address"
                        id="Address"
                        type="text"
                       // value={this.state.customer.Address}
                       // onChange={this.handleAddressChanged.bind(this)}
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
                        //value={this.state.customer.zipcode}
                        type="text"
                        //onChange={e => this.setState({ zipcode: e.target.value })}
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
                       // value={this.state.customer.timeNeeded}
                        //onChange={this.handleTimeNeededChanged.bind(this)}
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
                        //value={this.state.customer.storageSpace}
                       // onChange={this.handleStorageSpaceChanged.bind(this)}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Address"
                        id="Address"
                        type="text"
                        //value={this.state.customer.Address}
                        //onChange={this.handleAddressChanged.bind(this)}
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