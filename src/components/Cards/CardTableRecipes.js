import React, { useState, useEffect, useMemo, useRef } from "react";
import DorayakiService from "../../services/DorayakiService";
import { useTable } from "react-table";

const CardTableRecipes = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [searchName, setSearchName] = useState("");
  const recipesRef = useRef();

  recipesRef.current = recipes;

  useEffect(() => {
    retrieveRecipes();
  }, []);

  // const onChangeSearchName = (e) => {
  //   const searchName = e.target.value;
  //   setSearchName(searchName);
  // };

  const retrieveRecipes = () => {
    DorayakiService.getAllRecipes()
      .then((response) => {
        setRecipes(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveRecipes();
  };

  // const findByName = () => {
  //   DorayakiService.findByName(searchName)
  //     .then((response) => {
  //       setRecipes(response.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <div>
              <button className="whitespace-nowrap  bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 border border-blue-700 rounded"
                    onClick={console.log('tes')}>
                View
              </button>
            </div>
          );
        },
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: recipes,
  });

  return (
    <div className="relative flex flex-col in-w-0 break-words w-full mb-6 shadow-lg rounded ">
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchName}
              onChange={console.log('tes')}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={console.log('tes')}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-12 list">
          <table
            className="items-center w-full bg-transparent border-collapse"
            style={{ border: 'solid 1px blue' }}
            {...getTableProps()}
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th 
                      className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                      {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CardTableRecipes;