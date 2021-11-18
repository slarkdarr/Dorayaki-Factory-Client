import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";
import CardTableRequest from "components/Cards/CardTableRequest.js";

export default function RequestList() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTableRequest />
        </div>
      </div>
    </>
  );
}
