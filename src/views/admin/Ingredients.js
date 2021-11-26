import React from "react";

// components

import CardTableIngredients from "components/Cards/CardTableIngredients.js";

export default function Ingredients() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <button className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"> Halo gais</button>
        <div className="w-full mb-12 px-4">
          <CardTableIngredients />
        </div>
      </div>
    </>
  );
}
