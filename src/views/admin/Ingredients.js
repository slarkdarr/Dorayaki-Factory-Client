import React, { useState } from "react";
import Modal from "react-modal";
import DorayakiService from "../../services/DorayakiService";

// components

import CardTableIngredients from "components/Cards/CardTableIngredients.js";

const Ingredients = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // Form data create Ingredient
  const initialItemState = {
    name: "",
    stock: "",
  };
  const [item, setItem] = useState(initialItemState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };

  const saveIngredient = async () => {
    var data = {
      name: item.name,
      stock: item.stock,
    };
    if(data.stock === '' || data.stock < 0){
      return alert('Stock cannot be null and must be greater than equal 0');
    }

    if(data.name === ''){
      return alert("Name cannot be null");
    }
    const response = await DorayakiService.createIngredient(data); // id here
    console.log(response);
    if (response.status === 'Error'){
      return alert(response.message);
    }
    closeModal();
  };

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <button
          className="relative flex flex-row-reverse flex min-w-0 bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 p-3 ml-3 mb-2"
          onClick={openModal}
        >
          Add
        </button>
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
              <h3 className="text-2xl font-semibold mb-5">
                Create new Ingredients
              </h3>
              <div className="form-group mb-2 flex flex-wrap">
                <div className="w-full px-4">
                  <label htmlFor="name" className="mr-2">
                    Name
                  </label><br></br>
                  <input
                    type="text"
                    className="form-control mb-3 pt-0 w-full"
                    id="name"
                    required
                    value={item.name}
                    onChange={handleInputChange}
                    name="name"
                  />
                </div>
                <div className="w-full px-4">
                  <label htmlFor="stock" className="ml-2">
                    Initial Stock
                  </label><br></br>
                  <input
                    type="number"
                    min={1}
                    className="form-control mb-3 pt-0 w-full"
                    id="stock"
                    required
                    value={item.stock}
                    onChange={handleInputChange}
                    name="stock"
                  />
                </div>
              </div>
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                onClick={saveIngredient}
                className="text-emerald-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Submit
              </button>
            </div>
          </div>
        </Modal>
        <div className="w-full mb-12 px-4">
          <CardTableIngredients />
        </div>
      </div>
    </>
  );
};

export default Ingredients;
