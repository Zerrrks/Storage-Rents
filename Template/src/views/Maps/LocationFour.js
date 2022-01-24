import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";
// core components
import classes from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
//import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
//import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
export default function LocationFour () {
return (
<GridItem xs={20} sm={20} md={15}>
                <Card>
                    <CardHeader color="primary">
                    <h1 className={classes.cardTitle}>Basement</h1>
                    </CardHeader>
                    <CardBody>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={10}><br></br>
                            <img src = 'https://nexus.prod.postmedia.digital/wp-content/uploads/2020/01/SP.0110-a31-basement.jpg' style={{height:300, width:300, justifyContent: 'center', aligntItems: 'center', }}/>
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={10}>
                            <h3> Location Details</h3>
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={10}><br></br>

                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={10}><br></br>

                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={10}><br></br>

                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={10}><br></br>

                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={10}><br></br>

                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={10}><br></br>

                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={10}><br></br>

                            </GridItem>
                            <CardFooter>
                            <a href="mailto:sashaturner@storagerents.com">Contact Location</a>
                            </CardFooter>
                        </GridContainer>
                    </CardBody>
                </Card>
            </GridItem>
)
}