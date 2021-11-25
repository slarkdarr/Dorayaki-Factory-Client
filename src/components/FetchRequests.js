import React, { useEffect, useCallback, useState, useMemo } from "react";
import axios from "axios";

//component

import CardTableRequest from "components/Cards/CardTableRequest.js";

export default function FetchRequests() {  
  const [data, setData] = useState([]);
  const token = sessionStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const url = "http://localhost:5000/api/requests";

  const columns = useMemo(
    () => [
      {
        Header: "Email",
        accessor: "email"
      },
      {
        Header: "Nama Resep",
        accessor: "recipe_name"
      },
      {
        Header: "Jumlah",
        accessor: "quantity"
      },
      {
        Header: "Status",
        accessor: "status"
      }
    ],
    []
  );

  useEffect(() => {
    axios
      .get(url, config)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(`Error : ${error}`));
  });

  if (data.length === 0 || data.status === "Error")
    return (
      <tr>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
          -
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          -
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          -
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          -
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <button className="bg-blue-500 hover:bg-blue-700font-bold py-2 px-4 border border-blue-700 rounded">
            Button
          </button>
        </td>
      </tr>
    );

  return(
  <div className="App">
      <CardTableRequest columns={columns} data={data.data} />
  </div>)
}
