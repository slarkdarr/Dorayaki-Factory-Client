import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FetchRequests() {
  const [data, setData] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjM3Mjg2MDUyLCJleHAiOjE2MzcyOTE0NTJ9.UTbWQ9tgDb2TIAr7CrgMkkCF2ajUOFFQGfK_f_WHUnI";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const url = "http://localhost:5000/api/requests";

  useEffect(() => {
    (async () => {
      const result = await axios(url, config);
      setData(result.data);
    })();
  });

  return(
  <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
      <h2 className="text-black">{data.status}</h2>;
  </div>)
}
