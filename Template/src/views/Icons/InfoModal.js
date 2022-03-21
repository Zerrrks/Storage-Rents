
import React, { Fragment, useState } from "react";
import Modal from 'react-bootstrap/Modal';
//import Button from 'react-bootstrap/Button';


const InfoModal = ({storage}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const location_name = useState(storage.location_name);
    const location_price = useState(storage.location_price);
    const square_footage = useState(storage.square_footage);
    const full_name = useState(storage.full_name);
    const street_name = useState(storage.street_name);
    const city_storage  = useState(storage.city_storage);
    const state_storage = useState(storage.state_storage);
    const postal_c = useState(storage.postal_c);
    const add_details = useState(storage.add_details);
   
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
   
    return (
      <Fragment>
          <button style={{  
   padding: 10,              
   borderTop: '0',
   borderLeft: '0',
   borderRight: 'solid 1px grey',
   borderBottom: 'solid 1px grey',
   background: '#eeeeee',
   float: 'center',
   color: '#3c4858',
   fontWeight: "bold",
   fontSize: 16,}}
              variant="primary"
              
              onClick={ handleShow }
          >
              Info
          </button>

          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Location Info:</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <input
                        type="text"
                        className="form-control"
                        value={location_name}
                        readOnly
                        
                    />
                    <input
                        type="text"
                        className="form-control"
                        value={location_price}
                        readOnly
                    />
                    <input
                        type="text"
                        className="form-control"
                        value={square_footage}
                        readOnly
                    />
                    <input
                        type="text"
                        className="form-control"
                        value={full_name}
                        readOnly
                    />
                    <input
                        type="text"
                        className="form-control"
                        value={street_name}
                        readOnly
                    />
                    <input
                        type="text"
                        className="form-control"
                        value={city_storage}
                        readOnly
                    />
                    <input
                        type="text"
                        className="form-control"
                        value={state_storage}
                        readOnly
                    />
                    <input
                        type="text"
                        className="form-control"
                        value={postal_c}
                        readOnly
                    />
                    <input
                        type="text"
                        className="form-control"
                        value={add_details}
                        readOnly
                    />
              </Modal.Body>
              <Modal.Footer>
              </Modal.Footer>
          </Modal>
      </Fragment>
  );
}
export default InfoModal;
