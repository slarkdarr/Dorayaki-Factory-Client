import React from "react";

// components

export default function AdminHeader() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12 z-0">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 text-2xl text-blueGray-200">
              Hello, Admin!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
