import React, { useState } from "react";
import Modal from "react-modal";
import DorayakiService from "../../services/DorayakiService";
import api from "api";
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
  // Form data create Recipes
  const initialItemState = {
    name: "",
    description: "",
  };
  const [item, setItem] = useState(initialItemState);
  // handle input change
  const ItemhandleInputChange = (e, index) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };


  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { id: "", quantity: "" }]);
  };

  const saveRecipes = async (e) => {
    e.preventDefault();
    var data = {
      name: item.name,
      description: item.description,
    };

    if (data.name === "" || data.description === "") {
      return alert("Name or description cannot be null");
    }
    // const response = await DorayakiService.createRecipes(data); // id here
    inputList.forEach((element,i) => {
      data['ingredientsObject']=[];
      data['ingredientsObject'].push({
        id:element.id,
        quantity:element.quantity
      });
    });
    const response = await DorayakiService.createRecipes(data);
    if (response.status === 'Error'){
      return alert(response.message);
    }
    else {
      window.location.reload();
    }
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
            <h3 className="text-2xl font-semibold mb-5">Create new Recipes</h3>
            <div className="form-group mb-2 flex flex-wrap">
              <div className="w-full px-4">
                <label htmlFor="name" className="mr-2">
                  Name
                </label>
                <br></br>
                <input
                  type="text"
                  className="form-control mb-3 pt-0"
                  id="name"
                  required
                  value={item.name}
                  onChange={ItemhandleInputChange}
                  name="name"
                />
              </div>
              <div className="w-full px-4">
                <label htmlFor="description" className="mr-2">
                  Description
                </label>
                <br></br>
                <input
                  type="text"
                  className="form-control mb-3 pt-0"
                  id="description"
                  required
                  value={item.description}
                  onChange={ItemhandleInputChange}
                  name="description"
                />
              </div>
            </div>
            {inputList.map((x, i) => {
              return (
                <div className="box">
                  <input
                    name="id"
                    placeholder="Enter ID"
                    value={x.id}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                  <input
                    className="ml10"
                    name="quantity"
                    placeholder="Enter Quantity"
                    value={x.quantity}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                  <div className="btn-box">
                    {inputList.length !== 1 && (
                      <button
                        className="mr10"
                        onClick={() => handleRemoveClick(i)}
                      >
                        Remove
                      </button>
                    )}
                    {inputList.length - 1 === i && (
                      <button onClick={handleAddClick}>Add</button>
                    )}
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
          <button
            type="submit"
            onClick={saveRecipes}
            className="btn btn-success"
          >
            Add
          </button>
        </form>
      </Modal>
      <div className="flex flex-wrap mt-4">
        <button
          onClick={openModal}
          className="relative flex flex-row-reverse flex min-w-0 bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 p-3 ml-3 mb-2"
        >
          {" "}
          Add
        </button>
        <div className="w-full mb-12 px-4">
          <CardTableRecipes />
        </div>
      </div>
    </>
  );
};

export default Recipes;
