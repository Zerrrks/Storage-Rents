
import "containers/Login.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

//import Table from "components/Table/Table.js";
//import GridItem from "components/Grid/GridItem";
//import GridContainer from "components/Grid/GridContainer";
// @material-ui/core components
//import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";
// core components
//import GridItem from "components/Grid/GridItem.js";
//import GridContainer from "components/Grid/GridContainer.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
//import Button from "components/CustomButtons/Button.js";
//import Card from "components/Card/Card.js";
//import CardHeader from "components/Card/CardHeader.js";
//import CardAvatar from "components/Card/CardAvatar.js";
//import CardBody from "components/Card/CardBody.js";
//import CardFooter from "components/Card/CardFooter.js";


const LoginInfo = () => {
    const [usernamex, setUsername] = useState("");
    const [passwordx, setPassword] = useState("");
    const [user, setUser] = useState();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);

    const handleLogout = () => {
        setUser({});
        setUsername("");
        setPassword("");
        localStorage.clear();
        window.location = "/admin/login"
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const user = { usernamex, passwordx };
        // send the username and password to the server
        const response = await axios.post(
            "http://localhost:5000/users",
            user
        );
        // set the state of the user
        setUser(response.data);
        // store the user in localStorage
        localStorage.setItem("user", JSON.stringify(response.data));
    };

    if (user) {
        return (
            <div>
                {user.usernamex} is loggged in
                <br></br>
                <button onClick={handleLogout}>logout</button>
            </div>
        );
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    value={usernamex}
                    placeholder="enter a username"
                    onChange={({ target }) => setUsername(target.value)}
                />
                <div>
                    <label htmlFor="password">password: </label>
                    <input
                        type="password"
                        value={passwordx}
                        placeholder="enter a password"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginInfo;