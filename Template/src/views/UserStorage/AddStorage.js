import React, { useState } from "react";
import FindStorage from "hooks/FindStorage";

const AddStorage = () => {
    const [location_name, setLocation_Name] = useState("")
    const [location_price, setLocation_Price] = useState("")
    const [square_footage, setSqaure_Footage] = useState("")
    const [full_name, setFull_Name] = useState("")
    const [street_name, setStreet_Name] = useState("")
    const [city_storage, setCity_Storage] = useState("")
    const [country_storage, setCountry_Storage] = useState("")
    const [postal_c, setPostal_C] = useState("")
    const [add_details, setAdd_Details] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await FindStorage.post("/", {
                location_name,
                location_price,
                square_footage,
                full_name,
                street_name,
                city_storage,
                country_storage,
                postal_c,
                add_details
                
            })
            console.log(response);
        } catch (err) {
            //catch this 
        }
    };
    return (
        <div className="mb-4">
            <form action="">
                <div className="form-col">
                    <div className="row">
                        <input value={location_name} onChange={e => setLocation_Name(e.target.value)} type="text" className="form-control" placeholder="Storage Name"/>
                    </div>
                    <div className="row">
                        <input value={location_price} onChange={e => setLocation_Price(e.target.value)} type="text" className="form-control" placeholder="Storage Price"/>
                    </div>
                    <div className="row">
                        <input value={square_footage} onChange={e => setSqaure_Footage(e.target.value)} type="text" className="form-control" placeholder="Square Footage"/>
                    </div>
                    <div className="row">
                        <input value={full_name} onChange={e => setFull_Name(e.target.value)} type="text" className="form-control" placeholder="Your Full Name"/>
                    </div>
                    <div className="row">
                        <input value={street_name} onChange={e => setStreet_Name(e.target.value)} type="text" className="form-control" placeholder="Street"/>
                    </div>
                    <div className="row">
                        <input value={city_storage} onChange={e => setCity_Storage(e.target.value)} type="text" className="form-control" placeholder="City"/>
                    </div>
                    <div className="row">
                        <input value={country_storage} onChange={e => setCountry_Storage(e.target.value)} type="text" className="form-control" placeholder="Zipcode"/>
                    </div>
                    <div className="row">
                        <input value={postal_c} onChange={e => setPostal_C(e.target.value)} type="text" className="form-control" placeholder="Postal Code"/>
                    </div>
                    <div className="row">
                        <input value={add_details} onChange={e => setAdd_Details(e.target.value)} type="text" className="form-control" placeholder="Additional Details"/>
                    </div>
                </div>
                <button onClick={handleSubmit} type="submit" className="btn btn-primary">Add New Storage</button>
            </form>
        </div>
    )
}

export default AddStorage