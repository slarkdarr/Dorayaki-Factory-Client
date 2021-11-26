import React, { useState, useEffect, useCallback, useMemo } from "react";
import Modal from 'react-modal';
import DataTable from "react-data-table-component";
import FilterCardComponent from "./FilterCardComponent";
import DorayakiService from "services/DorayakiService";
import './style.css'

const CardTableRecipes = () => {
  // Recipes
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

  // Ingredients
  const [ingredients, setIngredients] = useState([]);
  const [loadingIngredients, setLoadingIngredients] = useState(false);
  const [totalRowsIngredients, setTotalRowsIngredients] = useState(0);
  const [perPageIngredients, setPerPageIngredients] = useState(10);
  const [currentPageIngredients, setCurrentPageIngredients] = useState(1);

  // Filter Recipes
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

  // Fetch Recipes
  const fetchRecipes = async (page, size = perPage) => {
    setLoading(true);

    const response = await DorayakiService.getRecipes();

    setData(response.data.data);
    setTotalRows(response.data.total);
    setLoading(false);
  };

  useEffect(() => {
    fetchRecipes(1);
  }, []);

  // fetchIngredients
  const fetchIngredients = async (id) => {
    setLoadingIngredients(true);

    const response = await DorayakiService.getRecipes(id);
    setIngredients(response.data.data.Ingredients);
    setTotalRowsIngredients(response.data.total);
    setLoadingIngredients(false);
  };

  useEffect(() => {
    fetchIngredients(1);
  }, []);

  // handlepagechange recipes
  const handlePageChange = page => {
    fetchRecipes(page);
    setCurrentPage(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    fetchRecipes(page, newPerPage);
    setPerPage(newPerPage);
  };
  // handlepagechange ingredients
  const handlePageChangeIngredients = page => {
    fetchIngredients(page);
    setCurrentPageIngredients(page);
  };

  const handlePerRowsChangeIngredients = async (newPerPage, page) => {
    fetchRecipes(page, newPerPage);
    setPerPage(newPerPage);
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleView = useCallback(
    row =>  () => {
      console.log(row.id);
      fetchIngredients(row.id);
      openModal();
    },
    [currentPage, perPage, totalRows]
  );

  const columns = useMemo(
    () => [
      {
        name: "ID",
        selector: row => row['id'],
        sortable: true
      },
      {
        name: "Name",
        selector: row => row['name'],
        sortable: true
      },
      {
        name: "Description",
        selector: row => row['description'],
        sortable: true
      },
      {
        name: "Action",
        // eslint-disable-next-line react/button-has-type
        cell: row => <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"  onClick={handleView(row)}>View</button>
      }
    ],
    [handleView]
  );
  const columnsIngredients = useMemo(
    () => [
      {
        name: "ID",
        selector: (row) => row["id"],
        sortable: true,
      },
      {
        name: "Name",
        selector: (row) => row["name"],
        sortable: true,
      },
      {
        name: "Quantity",
        selector: (row) => row["RecipeIngredients"]["quantity"],
        sortable: true,
      },
    ],
    []
  );


  return (
    <>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
        ariaHideApp={false}
      >
        <button onClick={closeModal}>close</button>
        <div>
          <DataTable
            title="Ingredients"
            columns={columnsIngredients}
            data={ingredients}
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