import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTable, useFilters, useSortBy } from "react-table";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function CardTableRequest({ columns, data, color }) {
    const [filterInput, setFilterInput] = useState([]);

    // const cleanData = JSON.parse(data);
    // console.log(cleanData);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setAllFilters
    } = useTable({
        columns,
        data
    },
    useFilters,
    useSortBy
    );

    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setAllFilters([]);
        setFilterInput(value);
    };

    return (
        <>
        <div
            className={
            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
            (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
            }
        >
            <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3
                    className={
                    "font-semibold text-lg " +
                    (color === "light" ? "text-blueGray-700" : "text-white")
                    }
                >
                    Tabel Request
                </h3>
                <input
                    value={filterInput}
                    onChange={handleFilterChange}
                    placeholder={"Search..."}
                />
                </div>
            </div>
            </div>
            <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table {...getTableProps()} className="items-center w-full bg-transparent border-collapse">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}
                                className={
                                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                (color === "light"
                                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700") 
                                // (column.isSorted
                                //     ? column.isSortedDesc
                                //         ? "sort-desc"
                                //         : "sort-asc"
                                //     : "")
                            }>
                                {column.render("Header")}
                                <span>
                +                 {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                +               </span>
                            </th>
                            ))}
                            <th
                            className={
                                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                (color === "light"
                                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                            }
                            ></th>
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()} 
                                        className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {cell.render("Cell")}
                                    </td>;
                                })}
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                    <TableDropdown />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            </div>
        </div>
        </>
    );
}

CardTableRequest.defaultProps = {
  color: "light",
};

CardTableRequest.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
