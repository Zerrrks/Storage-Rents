import React, { Fragment, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const InfoModal = ({ storage, setStorageChange }) => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [location_name, set_location_name] = useState(storage.location_name);
    const [location_price, set_location_price] = useState(storage.location_price);
    const [square_footage, set_square_footage] = useState(storage.square_footage);
    const [full_name, set_full_name] = useState(storage.full_name);
    const [street_name, set_street_name] = useState(storage.street_name);
    const [city_storage, set_city_storage] = useState(storage.city_storage);
    const [state_storage, set_state_storage] = useState(storage.state_storage);
    const [postal_c, set_postal_c] = useState(storage.postal_c);
    const [add_details, set_add_details] = useState(storage.add_details);

    const editText = async (id) => {
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
    }

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
              View Info
          </button>

          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Edit your storage info:</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <input
                      type="text"
                      className="form-control"
                      value={location_name}
                      onChange={(e) => set_location_name(e.target.value)}
                  />
                  <input
                      type="text"
                      className="form-control"
                      value={location_price}
                      onChange={(e) => set_location_price(e.target.value)}
                  />
                  <input
                      type="text"
                      className="form-control"
                      value={square_footage}
                      onChange={(e) => set_square_footage(e.target.value)}
                  />
                  <input
                      type="text"
                      className="form-control"
                      value={full_name}
                      onChange={(e) => set_full_name(e.target.value)}
                  />
                  <input
                      type="text"
                      className="form-control"
                      value={street_name}
                      onChange={(e) => set_street_name(e.target.value)}
                  />
                  <input
                      type="text"
                      className="form-control"
                      value={city_storage}
                      onChange={(e) => set_city_storage(e.target.value)}
                  />
                  <input
                      type="text"
                      className="form-control"
                      value={state_storage}
                      onChange={(e) => set_state_storage(e.target.value)}
                  />
                  <input
                      type="text"
                      className="form-control"
                      value={postal_c}
                      onChange={(e) => set_postal_c(e.target.value)}
                  />
                  <input
                      type="text"
                      className="form-control"
                      value={add_details}
                      onChange={(e) => set_add_details(e.target.value)}
                  />
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="primary" onClick={commitChanges}>
                      Commit Changes
                  </Button>
                  <Button variant="secondary" onClick={handleClose}>
                      Cancel
                  </Button>
              </Modal.Footer>
          </Modal>
      </Fragment>
  );
}
export default InfoModal;
