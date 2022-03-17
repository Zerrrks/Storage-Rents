import React, {Fragment, useEffect, useState} from "react";
// This component is used in the Dashboard, listing all user storage spaces with name and description.

const StorageList = () => {
    const [storage, setStorage] = useState([]);
    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("jwt_token", localStorage.token);
    const getStorage = async () => {
        try {
            const response = await fetch(`http://localhost:5000/units/storage`, {
                method: "GET",
                headers: { jwt_token: localStorage.token }
            })
            const jsonData = await response.json();
            console.log(response);
            setStorage(jsonData);
        } catch (err) {
          console.error(err.message);  
        }
        
    };

    useEffect(() => {
        getStorage();
    }, []);
    return (
        <Fragment>
            {" "}
        <table  className="table mt-5 text-center">
            <thead>
                <tr>
                    <th style={
                        {
                            fontSize: 25,
                            textAlign: 'center'
                    }
                    }>Location Name</th>
                    <th style={
                        {
                            fontSize: 25,
                            textAlign: 'center',
                    }
                    }>Description</th>
                </tr>
            </thead>
            <tbody>
             {storage.map(storage => (
                 <tr key={storage.storage_id}>
                 <td style={
                        {
                            fontSize: 20,
                            overflow: 'visible',
                            textAlign: 'Center',
                            
                            
                    }
                    }>{storage.location_name}</td>  
                 <td style={
                        {
                            fontSize: 20,
                            overflow: 'visible',
                            borderLeft: 'solid',
                            
                            
                            textAlign: 'left',
                    }
                    }>{storage.add_details}</td>      
                 </tr>
             ))}
            </tbody>
        </table>
        </Fragment>
    );
};

export default StorageList;