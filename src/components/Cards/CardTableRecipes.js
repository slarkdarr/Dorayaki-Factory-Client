import React, { useState, useEffect, useCallback, useMemo } from "react";
import Modal from 'react-modal';
import DataTable from "react-data-table-component";
import FilterCardComponent from "./FilterCardComponent";
import DorayakiService from "services/DorayakiService";
import './style.css'

const CardTableRecipes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	const filteredItems = data.filter(
		item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
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

  const fetchUsers = async (page, size = perPage) => {
    setLoading(true);

    const response = await DorayakiService.getAllRecipes();

    setData(response.data.data);
    setTotalRows(response.data.total);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers(1);
  }, []);

  const columns = useMemo(
    () => [
      {
        name: "ID",
        selector: "id",
        sortable: true
      },
      {
        name: "Name",
        selector: "name",
        sortable: true
      },
      {
        name: "Description",
        selector: "description",
        sortable: true
      },
      {
        name: "Action",
        // eslint-disable-next-line react/button-has-type
        cell: row => <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"  onClick={openModal}>View</button>
      }
    ],
    []
  );

  const handlePageChange = page => {
    fetchUsers(page);
    setCurrentPage(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    fetchUsers(page, newPerPage);
    setPerPage(newPerPage);
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <button onClick={closeModal}>close</button>
        <div>
          <DataTable
            title="Ingredients"
            columns={columns}
            data={filteredItems.Ingredients}
          />
        </div>
      </Modal>
    <DataTable
      title="Recipes"
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

export default CardTableRecipes;