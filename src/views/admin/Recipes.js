import React from "react";

// components

import CardRecipes from "components/Cards/CardRecipes";

export default function Recipes() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardRecipes />
        </div>
      </div>
    </>
  );
}
