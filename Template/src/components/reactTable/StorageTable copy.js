import React, { useMemo, useEffect, useState } from "react";
import { useTable, useFilters } from "react-table";
import axios from "axios";
//import "customreact-table.css" 



const StorageTable = ({columns}) => {

    const [data, setData] = useState([]);
    columns = useMemo(() => columns, []);
    useEffect(() => { 
        try {
        axios.get('http://localhost:5000/units/storage', { headers: { jwt_token: localStorage.token,}})
          .then((res) => {
            setData(res.data);
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
    );``

    const [filterInput, setFilterInput] = useState("");
    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("_name", value); //need to add a db value
        setFilterInput(value);
      };


    return ( 
        <div>
            <input
  value={filterInput}
  onChange={handleFilterChange}
  placeholder={"Search name"}
/>
            <table {...getTableProps()} className="StorageTable">
                <thead  style={{
                background: '#48d5eb',
                color: 'white',
               
                fontSize: 30,
                }}>
                    {headerGroups.map(headerGroup => (
                        <tr key={data.storage_id} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th style={{   
                                    padding: 10,
                                    borderBottom: 'solid 2px grey',
                                    borderRight: 'solid 2px grey',
                                    
                                }} key={data.storage_id} {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody style={{
                             
                            
                        }} 
                        {...getTableBodyProps()} className="StorageTableBody">
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr key={data.storage_id} {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td  style={{
                                            
                                            borderBottom: 'solid 2px grey',
                                            fontSize: 20,
                                            padding: 10,
                                        }} key={data.storage_id} {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );

}

export default StorageTable