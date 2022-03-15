import React from "react";
import { useTable } from "react-table";

export default function sortedTable({ columns, data }) {
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data
  });

  /* 
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
  return (
    <table {...getTableProps()}>
      <thead>
      <li key={headerGroups.id}></li>
        {headerGroups.map(headerGroup => (
            
          <tr {...headerGroup.getHeaderGroupProps()} li key={headerGroups.id}>
              
              
               
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} li key={column.getHeaderGroupProps.id}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}li key={getTableBodyProps.id}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}li key={row.getRowProps.id}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}li key={cell.getCellProps.id}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}