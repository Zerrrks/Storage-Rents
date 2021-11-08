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


    
export default function Dashboard() {
 /* const classes = useStyles();
  const useStyles = makeStyles(styles);
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
    };*/
return(
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
                        id="Zipcode"
                        formControlProps={{
                          fullWidth: true,
                          
                        }}
                      />
                      
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        labelText="Time needed"
                        id="Time"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Storage space"
                        id="StorageSpace"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter>
               
                  <Button color="primary" >Search</Button>
                
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>

        
      );
    }
  
  
