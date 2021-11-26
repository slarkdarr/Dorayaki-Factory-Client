import React from "react";

// components

import CardTableRequests from "components/Cards/CardTableRequests.js";

export default function Requests() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTableRequests />
        </div>
      </div>
    </>
  );
}
