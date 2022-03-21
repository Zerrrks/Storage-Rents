import React, { useMemo, useEffect, useState } from "react";
import { useTable, useFilters, useBlockLayout } from "react-table";
import axios from "axios";
import InfoModal from "views/Icons/InfoModal";
//import EditStorage from "views/UserStorage/storagecomp/EditStorage";






const StorageTable = ({columns}) => {
    const [rowValue, setRowValue] = useState([]);
    const [data, setData] = useState([]);
  //  const [storage, setStorage] = useState([]);
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
    useFilters,
    useBlockLayout
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
        
        <div >
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
            placeholder={"Search by location"}
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
            <div className="table mt-5">
            <table {...getTableProps()} className="StorageTable">
                <thead >
                    {headerGroups.map(headerGroup => (
                        <tr key={data.storage_id} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th key={data.storage_id} {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                                
                            ))}<th>Info</th>
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()} className="StorageTableBody">
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr onClick={() => setRowValue(row.values)} 
                            key={data.storage_id} {...row.getRowProps()}>
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
                                <InfoModal storage={rowValue}/>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        </div>
    );

}

export default StorageTable