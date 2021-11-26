import React, { useState, useEffect, useMemo } from "react";
import Modal from 'react-modal';
import DataTable from "react-data-table-component";
import FilterCardComponent from "./FilterCardComponent";
import DorayakiService from "services/DorayakiService";
import './style.css'

const CardTableRequests = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	const filteredItems = data.filter(
		item => item.email && item.email.toLowerCase().includes(filterText.toLowerCase()),
	);

  const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterCardComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

  const fetchRequests = async (page, size = perPage) => {
    setLoading(true);

    const response = await DorayakiService.getRequests();
    console.log(response.data.data)

    setData(response.data.data);
    setTotalRows(response.data.total);
    setLoading(false);
  };

  useEffect(() => {
    fetchRequests(1);
  }, []);

  
  const handlePageChange = page => {
    fetchRequests(page);
    setCurrentPage(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    fetchRequests(page, newPerPage);
    setPerPage(newPerPage);
  };

  const saveRequestStatus = async (row, newStatus) => {
    const currentId = row.id;
    var data;
    if (newStatus === 'accepted') {
      data = {
        recipe_name: row.recipe_name,
        status: 'accepted',
      };
    } else {
      data = {
        recipe_name: row.recipe_name,
        status: 'rejected',
      };
    }
    const response = await DorayakiService.updateRequest(currentId, data); // id here
    console.log(data);
    console.log(response);
    fetchRequests(1);
  };

  const columns = useMemo(
    () => [
      {
        name: "Email",
        selector: "email",
        sortable: true
      },
      {
        name: "Nama Resep",
        selector: "recipe_name",
        sortable: true
      },
      {
        name: "Jumlah",
        selector: "quantity",
        sortable: true
      },
      {
        name: "Status",
        selector: "status",
        sortable: true
      },
      {
        name: "Created At",
        selector: (row) => {
          return new Date(row["createdAt"]).toString()
        },
        sortable: true
      },
      {
        name: "Updated At",
        selector: (row) => {
          return new Date(row["updatedAt"]).toString()
        },
        sortable: true
      },
      {
        name: "Action",
        // eslint-disable-next-line react/button-has-type
        cell: row => {
          return row.status === "pending" ?
              <div>
                <button
                  className="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => saveRequestStatus(row, 'accepted')}
                >
                  <i className="fas fa-check"></i>
                </button>
                <button
                  className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => saveRequestStatus(row, 'rejected')}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
          : ""
        }
      }
    ],
    []
  );


  return (
    <>
    <DataTable
      title="Requests"
      columns={columns}
      data={filteredItems}
			pagination
			paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
			subHeader
			subHeaderComponent={subHeaderComponentMemo}
      progressPending={loading}
      pagination
      paginationServer
      paginationTotalRows={totalRows}
      paginationDefaultPage={currentPage}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
      onSelectedRowsChange={({ selectedRows }) => console.log(selectedRows)}
    />
    </>
  );
};

export default CardTableRequests;