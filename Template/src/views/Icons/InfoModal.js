
import React, { Fragment, useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { Button } from "react-bootstrap";
//import Button from 'react-bootstrap/Button';


const InfoModal = ({storage}) => {
   const [dataStorage, setDataStorage] = useState([]);
   useEffect(() => { 
      try {
      axios.get('http://localhost:5000/units/storage', { headers: { jwt_token: localStorage.token,}})
        .then((res) => {
          setDataStorage(res.data);
        }).catch((err) => {
          console.log(err)
        }) } catch (e) {
          console.log('error')
        }
    }, []);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [location_name, set_location_name] = useState();
    const [location_price, set_location_price] = useState();
    const [square_footage, set_square_footage] = useState();
    const [full_name, set_full_name] = useState();
    const [street_name, set_street_name] = useState();
    const [city_storage, set_city_storage] = useState();
    const [state_storage, set_state_storage] = useState();
    const [postal_c, set_postal_c] = useState();
    const [add_details, set_add_details] = useState();
   /* const editText = async (id) => {
        try {
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
            const myHeaders = new Headers();

            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("jwt_token", localStorage.token);

            await fetch(`http://localhost:5000/units/storage/${id}`, {
                method: "PUT",
                headers: myHeaders,
                body: JSON.stringify(body),
            });

            setStorageChange(true);
        } catch (err) {
            console.error(err.message);
        }
    };

    function commitChanges() {
        editText(storage.storage_id);
        handleClose();
    } */
   if(storage !== undefined && storage !== [] && dataStorage !== undefined && dataStorage !== []){
      const [filteredData, setFilteredData] = useState([]);
   useEffect(() => {
      dataStorage.filter(dataStorage => dataStorage.storage_id == storage.storage_id).map(filteredData => (setFilteredData(filteredData)))
      console.log("filtered data ^")
      set_location_name(storage.location_name);
      set_location_price(storage.location_price);
      set_square_footage(storage.square_footage);
      set_full_name(filteredData.full_name);
      set_street_name(filteredData.street_name);
      set_city_storage(filteredData.city_storage);
      set_state_storage(storage.state_storage);
      set_postal_c(filteredData.postal_c);
      set_add_details(filteredData.add_details);
   });
    return (
      <Fragment>
          <Button style={{  
   padding: 10,              
   borderTop: 'solid 1px grey',
   borderLeft: 'solid 1px grey',
   borderRight: 'solid 1px grey',
   borderBottom: 'solid 1px grey',
   background: '#007bff',
   float: 'center',
   color: 'white',
   fontWeight: "bold",
   fontSize: 16,
   width: 20,
   height: 20,
   
   }} 
              variant="primary"
              onClick={ handleShow }
          > 
          </Button>

          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Location Info:</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                 <p>Location Type:
              <input
                        type="text"
                        className="form-control"
                        value={location_name}
                        readOnly
                        
                    /></p>
                    <br></br>
                    <p>Location Price:
                    <input
                        type="text"
                        className="form-control"
                        value={location_price}
                        readOnly
                    /></p>
                    <br></br>
                    <p>Square Footage:
                    <input
                        type="text"
                        className="form-control"
                        value={square_footage}
                        readOnly
                    /></p>
                    <br></br>
                    <p>Full Name:
                    <input
                        type="text"
                        className="form-control"
                        value={full_name}
                        readOnly
                    /></p>
                    <br></br>
                    <p>Street:
                    <input
                        type="text"
                        className="form-control"
                        value={street_name}
                        readOnly
                    /></p>
                    <br></br>
                    <p>City:
                    <input
                        type="text"
                        className="form-control"
                        value={city_storage}
                        readOnly
                    /></p>
                    <br></br>
                    <p>State:
                    <input
                        type="text"
                        className="form-control"
                        value={state_storage}
                        readOnly
                    /></p>
                    <br></br>
                    <p>Postal Code:
                    <input
                        type="text"
                        className="form-control"
                        value={postal_c}
                        readOnly
                    /></p>
                    <br></br>
                    <p>Contact Info:
                    <textarea
                            rows="5" cols="80"
                            type="text"
                            value={add_details}
                            className="form-control"
                    /></p>
              </Modal.Body>
              <Modal.Footer>
              </Modal.Footer>
          </Modal>
      </Fragment>
  );
} else {
   return (null);
}
}
export default InfoModal;
