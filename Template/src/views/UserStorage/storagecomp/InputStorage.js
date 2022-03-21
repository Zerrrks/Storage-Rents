import React, { Fragment, useState } from "react";
//import Form from 'react-bootstrap/Form'
//import Button from 'react-bootstrap/Button'
//import FormControl from 'react-bootstrap/FormControl'

const InputStorage = ({ setStorageChange }) => {
    const [location_name, set_location_name] = useState("");
    const [location_price, set_location_price] = useState("");
    const [square_footage, set_square_footage] = useState("");
    const [full_name, set_full_name] = useState("");
    const [street_name, set_street_name] = useState("");
    const [city_storage, set_city_storage] = useState("");
    const [state_storage, set_state_storage] = useState("");
    const [postal_c, set_postal_c] = useState("");
    const [add_details, set_add_details] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const myHeaders = new Headers();

            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("jwt_token", localStorage.token);

            const body = {
                location_name,
                location_price,
                square_footage,
                full_name,
                street_name,
                city_storage,
                state_storage,
                postal_c,
                add_details
            };
            const response = await fetch("http://localhost:5000/units/storage", {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(body)
            });

            const parseResponse = await response.json();
            console.log(body);
            console.log(parseResponse);

            setStorageChange(true);
            set_location_name("");
            set_location_price("");
            set_square_footage("");
            set_full_name("");
            set_street_name("");
            set_city_storage("");
            set_state_storage("");
            set_postal_c("");
            set_add_details("");

        } catch (err) {
            console.error(err.message);
        }
    };


    return (
        <Fragment>
            <h1 className="text-center my-5">Input Storage Unit(s)</h1>
            <form onSubmit={onSubmitForm}>
                <label className="text-center my-5">Enter your storage information:
                    <div className="row">

                        <input
                            type="text"
                            placeholder="Storage Type"
                            className="form-control"
                            value={location_name}
                            onChange={(e) => set_location_name(e.target.value)}
                        />

                        &nbsp;&nbsp;

                        <input
                            type="text"
                            placeholder="Price Per Month"
                            className="form-control"
                            value={location_price}
                            onChange={(e) => set_location_price(e.target.value)}
                        />

                        &nbsp;&nbsp;

                        <input
                            type="text"
                            placeholder="Square Footage (sqft)"
                            className="form-control"
                            value={square_footage}
                            onChange={(e) => set_square_footage(e.target.value)}
                        />

                        &nbsp;&nbsp;

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="form-control"
                            value={full_name}
                            onChange={(e) => set_full_name(e.target.value)}
                        />

                        &nbsp;&nbsp;

                        <input
                            type="text"
                            placeholder="Location Address"
                            className="form-control"
                            value={street_name}
                            onChange={(e) => set_street_name(e.target.value)}
                        />

                        &nbsp;&nbsp;

                        <input
                            type="text"
                            placeholder="City"
                            className="form-control"
                            value={city_storage}
                            onChange={(e) => set_city_storage(e.target.value)}
                        />

                        &nbsp;&nbsp;

                        <input
                            type="text"
                            placeholder="State"
                            className="form-control"
                            value={state_storage}
                            onChange={(e) => set_state_storage(e.target.value)}
                        />

                        &nbsp;&nbsp;

                        <input
                            type="text"
                            placeholder="Zipcode"
                            className="form-control"
                            value={postal_c}
                            onChange={(e) => set_postal_c(e.target.value)}
                        />

                        &nbsp;&nbsp;
                    </div>
                    <label>Enter your contact information and other additional details.
                        <textarea
                            rows="5" cols="80"
                            type="text"
                            placeholder="Contact Information"
                            className="form-control"
                            value={add_details}
                            onChange={(e) => set_add_details(e.target.value)}
                        />
                    </label>

                </label>
                &nbsp;
                <button variant="dark" className="btn btn-success ">Add</button>
            </form>
        </Fragment>
    );
};

export default InputStorage;