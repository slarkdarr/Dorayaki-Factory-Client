import React from "react";

// components

// import DataTableRequest from "components/Cards/DataTableRequest.js";
import FetchRequests from "components/FetchRequests.js";

export default function RequestList() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <FetchRequests />
        </div>
      </div>
    </>
  );
}
