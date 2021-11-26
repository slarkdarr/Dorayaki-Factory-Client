import React, { useState, useEffect, useCallback, useMemo } from "react";
import Modal from "react-modal";
import DataTable from "react-data-table-component";
import FilterCardComponent from "./FilterCardComponent";
import DorayakiService from "services/DorayakiService";
import "./style.css";

const CardTableIngredients = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentId, setCurrentId] = useState(1);
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = data.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterCardComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const FetchIngredients = async (page, size = perPage) => {
    setLoading(true);

    const response = await DorayakiService.getAllIngredients();

    setData(response.data.data);
    setTotalRows(response.data.total);
    setLoading(false);
  };

  useEffect(() => {
    FetchIngredients(1);
  }, []);

  const handlePageChange = (page) => {
    FetchIngredients(page);
    setCurrentPage(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    FetchIngredients(page, newPerPage);
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
    (row) => () => {
      setCurrentId(row.id);
      openModal();
    },
    [currentPage, perPage, totalRows]
  );

  const columns = useMemo(
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
        name: "Stock",
        selector: (row) => row["stock"],
        sortable: true,
      },
      {
        name: "Action",
        // eslint-disable-next-line react/button-has-type
        cell: (row) => (
          <button
            className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={handleView(row)}
          >
            Edit Stock
          </button>
        ),
      },
    ],
    [handleView]
  );

  // Form data edit stock
  const initialStockState = {
    quantity: 1,
  };
  const [stock, setStock] = useState(initialStockState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStock({ ...stock, [name]: value });
  };

  const saveStock = async () => {
    var data = {
      stock: stock.quantity,
    };
    const response = await DorayakiService.updateIngredient(currentId, data); // id here
    console.log(currentId);
    closeModal();
  };

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
        <div className="submit-form">
            <div>
              <div className="form-group">
                <label htmlFor="title">New Stock</label>
                <input
                  type="number"
                  min={1}
                  className="form-control"
                  id="quantity"
                  required
                  value={stock.quantity}
                  onChange={handleInputChange}
                  name="quantity"
                />
              </div>
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={closeModal}
              >
                Close
              </button>
              <button onClick={saveStock} className="btn btn-success">
                Submit
              </button>
            </div>
        </div>
        {/*footer*/}
        {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
          <button
            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={closeModal}
          >
            Close
          </button>
          <button
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
            onClick={closeModal}
          >
            Save Changes
          </button>
        </div> */}
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

export default CardTableIngredients;
