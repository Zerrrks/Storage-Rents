import React, { Fragment, useState, useEffect } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import GridContainer from "components/Grid/GridContainer.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
//import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import axios from "axios";
//import axios from "axios";




const LocationRoute = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        (async () => {
            const result = await axios.get(`http://localhost:5000/locations`, {
                method: "GET"
            });
          
          console.log(result.data) + console.log("data here")
          
          const dataArray = JSON.stringify(result)
          console.log(dataArray)
          setData(result);
          console.log(setData)

          buildTable(result.data)

          
         
        })();
        });

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
            <Card>
                <CardHeader color="primary">
                    <h4>Filter Available Storage</h4>
                </CardHeader>
                <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                            <input
                                className="zipcode-input"
                                placeholder="Zipcode"
                                type="text"
                                name="zipcode"
                                //value={zipcode}
                                //onChange={e => onChange(e)}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <input
                                className="storage-space-input"
                                placeholder="Storage Space"
                                type="text"
                                name="storage_type"
                                //value={storage_type}
                                //onChange={e => onChange(e)}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <input
                                className="address-input"
                                placeholder="Address"
                                type="text"
                                name="location_address"
                                //value={location_address}
                                //onChange={e => onChange(e)}
                            />
                        </GridItem>
                    </GridContainer>
                </CardBody>
                <CardFooter>

                    <Button color="primary"
                    
                    >Search</Button>
                </CardFooter>
            </Card>
            <br></br>
            <Card>
                <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>Current Available Locations</h4>
                </CardHeader>
                <CardBody>
                    
                        <Table id="myTable"
                            tableHeaderColor="primary"
                            tableHead={[ " Storage Type ", " Size (sqft) ", " Location Address ", " Zipcode "]}
                            tableData={[
                                [data.storage_type, data.size, data.location_address, data.zipcode],
                               /* [data.storage_type, data.size, data.location_address, data.zipcode],
                                [data.storage_type, data.size, data.location_address, data.zipcode],
                                [data.storage_type, data.size, data.location_address, data.zipcode],
                                [data.storage_type, data.size, data.location_address, data.zipcode],*/
                            ]}
                        />
                    
                </CardBody>
            </Card>
        </Fragment>

        
    )

    

        function buildTable(data){
            if(document.getElementById('myTable') != null){
            var table = document.getElementById('myTable').innerHTML
    
            for (var i = 0; i < data.length; i++){
                var row = `<tr>
                                <td>${data[i].zipcode}</td>
                                <td>${data[i].storage_type}</td>
                                <td>${data[i].location_address}</td>
                                <td>${data[i].size}</td>
                               
                          </tr>`
                          console.log(data[i].zipcode);
                          if(document.getElementById("zipcode") != null){
                            table.innerHTML += row;
                        }
                table.innerHTML += row

            }
        }
    }
    }

      
    
       

    export default LocationRoute;

 /*
        const [info4, setInfo4] = useState([]);

        async function getInfo4() {
            const res = await fetch(`http://localhost:5000/locations/4`, {
                method: "GET"
            });
            const info4Array = await res.json();
            setInfo4(info4Array);
     
       const info3Array = await res.json();
        setInfo3(info3Array);
        
       // console.log(info3Array)
    

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { username, first_name, last_name, city, country, info, addy, email, postal_code };
            const response = await fetch("http://localhost:5000/prof/3", {
                method: "GET",
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

    const response = 

    useEffect(() => {
        getInfo3();
    }, []);

    //location id 4
    const [info4, setInfo4] = useState([]);

    async function getInfo4() {
        const res = await fetch(`http://localhost:5000/locations/4`, {
            method: "GET"
        });
        const info4Array = await res.json();
        setInfo4(info4Array);
    }

    useEffect(() => {
        getInfo4();
    }, []);

    //location id 5
    const [info5, setInfo5] = useState([]);

    async function getInfo5() {
        const res = await fetch(`http://localhost:5000/locations/5`, {
            method: "GET"
        });
        const info5Array = await res.json();
        setInfo5(info5Array);
    }

    useEffect(() => {
        getInfo5();
    }, []);

    //location id 6
    const [info6, setInfo6] = useState([]);

    async function getInfo6() {
        const res = await fetch(`http://localhost:5000/locations/6`, {
            method: "GET"
        });
        const info6Array = await res.json();
        setInfo6(info6Array);
    }

    useEffect(() => {
        getInfo6();
    }, []);

    //location id 7
    const [info7, setInfo7] = useState([]);

    async function getInfo7() {
        const res = await fetch(`http://localhost:5000/locations/7`, {
            method: "GET"
        });
        const info7Array = await res.json();
        setInfo7(info7Array);
    }

    useEffect(() => {
        getInfo7();
    }, []);
    */

    


/*
                        <GridItem xs={12} sm={12} md={4}>
                            <input
                                className="use-time-input"
                                placeholder="Use Time"
                                type="text"
                                name="time_need"
                                //value={time_need}
                                //onChange={e => onChange(e)}
                            />
                        </GridItem>
*/