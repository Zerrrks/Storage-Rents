import React, { useMemo, useEffect, useState } from "react";
import { useTable } from "react-table";
import axios from "axios";


const StorageTable = ({columns}) => {
    console.log('first render')
    const [data, setData] = useState([]);
    const [unfilteredData, setUnfilteredData] = useState([]);
    const [eyeDee, setEyeDee] = useState();
    useEffect(() => {
        console.log("use effect for clearing the state on first render");
        setData([]);
        setUnfilteredData([]);
        setEyeDee();
    }, []);

    const getUserEyeDee = async () => {
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
      
      useEffect (() => {
        console.log('use effect for grabbing user_id')
        getUserEyeDee();
      }, []);

    columns = useMemo(() => columns, []);

    const grabThat = async() => {
        try {
       await axios
          .get('http://localhost:5000/units/storage', { headers: { jwt_token: localStorage.token,}})
          .then((res) => {
            setUnfilteredData(res.data);
            console.log(data)
          })
          .catch((err) => {
            console.log(err)
          }) } catch (e) {
            console.log('error')
          }
        }
      
    useEffect(() => {
        console.log("use effect for grabing data");
        grabThat();
    }, []);

    const filterThat = async() => {
      setData(unfilteredData.filter(unfilteredData => unfilteredData.user_id == eyeDee ));
    };

    useEffect(() => { 
        console.log("use effect for filtering grabbed data and setting as const data."); 
        filterThat();
    }, [],);



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
                <tbody 
                {...getTableBodyProps()} className="StorageTableBody">
                    {data.length !== 0 &&
                    data.storage_id !== null &&
                    rows.map(row => {
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