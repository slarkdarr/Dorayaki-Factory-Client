import React from "react";

// components

import CardTableIngredients from "components/Cards/CardTableIngredients.js";

export default function Ingredients() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <button className="relative flex flex-row-reverse flex min-w-0 bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 p-3 ml-3 mb-2"> Add</button>
        <div className="w-full mb-12 px-4">
          <CardTableIngredients />
        </div>
      </div>
    </>
  );
}
