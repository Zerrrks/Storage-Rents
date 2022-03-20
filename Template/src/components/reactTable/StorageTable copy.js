import React, { useMemo, useEffect, useState } from "react";
import { useTable, useFilters } from "react-table";
import axios from "axios";
//import EditStorage from "views/UserStorage/storagecomp/EditStorage";






const StorageTable = ({columns}) => {
    
    const [data, setData] = useState([]);
  //  const [storage, setStorage] = useState([]);
    columns = useMemo(() => columns, []);
    useEffect(() => { 
        try {
        axios.get('http://localhost:5000/units/storage', { headers: { jwt_token: localStorage.token,}})
          .then((res) => {
            setData(res.data);
   //         setStorage(res.data);
          }).catch((err) => {
            console.log(err)
          }) } catch (e) {
            console.log('error')
          }
      }, []);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        rows,
        setFilter,
    } = useTable(
    {
        columns,
        data,
    },
    useFilters
    );

    const [filterInput, setFilterInput] = useState("");
    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("location_name", value); //need to add a db value
        setFilterInput(value);
      };

    const [filterTwoInput, setFilterTwoInput] = useState("");
    const handleFilterTwoChange = e => {
        const value = e.target.value || undefined;
        setFilter("location_price", value); //need to add a db value
        setFilterTwoInput(value);
      };
    const [filterThreeInput, setFilterThreeInput] = useState("");
    const handleFilterThreeChange = e => {
        const value = e.target.value || undefined;
        setFilter("square_footage", value); //need to add a db value
        setFilterThreeInput(value);
      }; 
      const [filterFourInput, setFilterFourInput] = useState("");
      const handleFilterFourChange = e => {
          const value = e.target.value || undefined;
          setFilter("state_storage", value); //need to add a db value
          setFilterFourInput(value);
        }; 

    

    return (
        
        <div  >
            <div className="d-flex mt-2 justify-content-">
            <input style={{
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: 'solid 1px grey',
                background: '#eeeeee',
                fontSize: 16,
                padding: 10,
                
            }}
            value={filterInput}
            onChange={handleFilterChange}
            placeholder={"Search by name"}
            />&nbsp;&nbsp;
            <input style={{
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: 'solid 1px grey',
                background: '#eeeeee',
                fontSize: 16,
                padding: 10,
                
            }}
            value={filterTwoInput}
            onChange={handleFilterTwoChange}
            placeholder={"Search by price"}
            />&nbsp;&nbsp;
            <input style={{
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: 'solid 1px grey',
                background: '#eeeeee',
                fontSize: 16,
                padding: 10,
                
            }}
            value={filterThreeInput}
            onChange={handleFilterThreeChange}
            placeholder={"Search by square footage"}
            /> &nbsp;&nbsp;
                        <input style={{
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: 'solid 1px grey',
                background: '#eeeeee',
                fontSize: 16,
                padding: 10,
                
            }}
            value={filterFourInput}
            onChange={handleFilterFourChange}
            placeholder={"Search by state"}
            />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <table {...getTableProps()} className="StorageTable">
                <thead >
                    {headerGroups.map(headerGroup => (
                        <tr key={data.storage_id} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th style={{
                                    padding: 10,
                                    borderBottom: 'solid 2px grey',
                                    fontSize: 20,
                                    }} key={data.storage_id} {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()} className="StorageTableBody">
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr key={data.storage_id} {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td style={{
                                            borderBottom: 'solid 1px grey',
                                            padding: 10,
                                        }}key={data.storage_id} {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    )
                                })}
                                <br></br>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );

}

export default StorageTable