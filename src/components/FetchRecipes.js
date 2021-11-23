import React, { useEffect, useState } from "react";
import axios from "axios";
// components
const url = "http://localhost:5000/api/recipes";

export default function FetchRecipes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(`Error : ${error}`));
  }, []);

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
          <button className="bg-blue-500 hover:bg-blue-700font-bold py-2 px-4 border border-blue-700 rounded">
            Button
          </button>
        </td>
      </tr>
    );

  return data.data.map((recipe) => {
    return (
      <tr>
        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
          {recipe.id}
        </th>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          {recipe.name}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          {recipe.description}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <button className="whitespace-nowrap  bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 border border-blue-700 rounded">
            Button
          </button>
        </td>
      </tr>
    );
  });
}
