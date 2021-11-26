import React, { useState } from "react";
import Modal from "react-modal";
// components

import CardTableRecipes from "components/Cards/CardTableRecipes.js";

const Recipes = () => {
  // For Modal
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // For Input
  const [inputList, setInputList] = useState([{ id: "", quantity: "" }]);
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { name: "", quantity: "" }]);
  };

  const addRecipe = async (e) => {
    e.preventDefault();
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
        <form>
        <div>
          {inputList.map((x, i) => {
            return (
              <div className="box">
                <input
                  name="name"
                  placeholder="Enter Name"
                  value={x.name}
                  onChange={e => handleInputChange(e, i)}
                />
                <input
                  className="ml10"
                  name="quantity"
                  placeholder="Enter Quantity"
                  value={x.quantity}
                  onChange={e => handleInputChange(e, i)}
                />
                <div className="btn-box">
                  {inputList.length !== 1 && <button
                    className="mr10"
                    onClick={() => handleRemoveClick(i)}>Remove</button>}
                  {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={closeModal}
        >
          Close
        </button>
        <button type="submit" onClick={addRecipe} className="btn btn-success">
          Add
        </button>
        </form>
      </Modal>
      <div className="flex flex-wrap mt-4">
        <button onClick={openModal} className="relative flex flex-row-reverse flex min-w-0 bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 p-3 ml-3 mb-2"> Add</button>
        <div className="w-full mb-12 px-4">
          <CardTableRecipes />
        </div>
      </div>
    </>
  );
}

export default Recipes;
