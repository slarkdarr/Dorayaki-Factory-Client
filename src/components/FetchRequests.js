import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

//component

import CardTableRequest from "components/Cards/CardTableRequest.js";

export default function FetchRequests() {
  const [data, setData] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjM3Mjg2MDUyLCJleHAiOjE2MzcyOTE0NTJ9.UTbWQ9tgDb2TIAr7CrgMkkCF2ajUOFFQGfK_f_WHUnI";
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
    (async () => {
      const result = await axios(url, config);
      setData(result.data);
    })();
  });

  return(
  <div className="App">
      <CardTableRequest columns={columns} data={data} />
  </div>)
}
