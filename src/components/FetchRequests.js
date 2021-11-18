import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FetchRequests() {
  const [data, setData] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjM3MjU0MjQwLCJleHAiOjE2MzcyNTk2NDB9.JWugVooFAS31h0OsaCY-iq2Gess5X315LCyOut9NMD0";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const url = "http://localhost:5000/api/requests";

  useEffect(() => {
    (async () => {
      const result = await axios(url, config);
      setData(result.data);
    })();
  }, []);

  return(
  <div className="flex flex-wrap mt-4">
    <div className="w-full mb-12 px-4">
      <h2>{data.status}</h2>;
    </div>
  </div>)
}
