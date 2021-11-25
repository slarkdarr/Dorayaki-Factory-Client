import React from "react";

// components

import CardTableRecipes from "components/Cards/CardTableRecipes.js";

export default function Recipes() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTableRecipes />
        </div>
      </div>
    </>
  );
}
