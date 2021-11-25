import React from "react";

// components

import CardTableIngredients from "components/Cards/CardTableIngredients.js";


export default function Ingredients() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTableIngredients/>
        </div>
      </div>
    </>
  );
}
