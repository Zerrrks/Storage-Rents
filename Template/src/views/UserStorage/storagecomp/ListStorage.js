import React, { Fragment, useState, useEffect } from "react";
import EditStorage from "./EditStorage";

const ListStorage = ({ allStorage, setStorageChange }) => {
  console.log(allStorage);
  const [storage, setStorage] = useState([]); //useState to set storage to

  //delete Storage function

  async function deleteStorage(id) {
    try {
      await fetch(`http://localhost:5000/units/storage/${id}`, {
        method: "DELETE",
        headers: { jwt_token: localStorage.token }
      });

      setStorage(storage.filter(storage => storage.storage_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    setStorage(allStorage);
  }, [allStorage]);

  console.log(storage);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Storage Name/Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {storage.length !== 0 &&
            storage.storage_id !== null &&
            storage.map(storage => (
              <tr key={storage.storage_id}>
                <td>{storage.location_name}</td>
                <td>
                  <EditStorage storage={storage} setStorageChange={setStorageChange} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteStorage(storage.storage_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListStorage;
