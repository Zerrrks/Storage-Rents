import React, { useMemo, useEffect, useState } from "react";
import { useTable } from "react-table";
import axios from "axios";


const StorageTable = ({columns}) => {
    const [data, setData] = useState([]);
    const [unfilteredData, setUnfilteredData] = useState([]);
    const [eyeDee, setEyeDee] = useState();

    const getProfile = async () => {
        try {
          const res = await fetch("http://localhost:5000/dashboard/", {
            method: "GET",
            headers: { jwt_token: localStorage.token }
          });
    
          const parseData = await res.json([]);
          setEyeDee(parseData.user_id);
        } catch (err) {
          console.error(err.message);
        }
      };
      useEffect(() => {
        getProfile();
      }, []);

      
    columns = useMemo(() => columns, []);
    useEffect(() => { 
        try {
        axios.get('http://localhost:5000/units/storage', { headers: { jwt_token: localStorage.token,}})
          .then((res) => {
            setUnfilteredData(res.data);
            setData(unfilteredData.filter(unfilteredData => unfilteredData.user_id == eyeDee ));
            console.log(data)
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
    } = useTable(
    {
        columns,
        data,
    }
    );

    return (
        <div>
            <table {...getTableProps()} className="StorageTable">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr key={data.storage_id} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th key={data.storage_id} {...column.getHeaderProps()}>
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
                                        <td key={data.storage_id} {...cell.getCellProps()}>
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