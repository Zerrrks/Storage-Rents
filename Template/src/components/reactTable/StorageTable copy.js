import React, { useMemo, useEffect, useState } from "react";
import { useTable } from "react-table";
import axios from "axios";


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