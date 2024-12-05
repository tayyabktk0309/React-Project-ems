import React from "react";

const AllTaskList = () => {
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded h-52 overflow-auto" id="tasklist">
      <div className="bg-red-400 py-2 px-4 text-white flex justify-between rounded mb-2">
        <h2 className="text-2xl">Testing</h2>
        <h3>Make UI Design</h3>
        <h5>Status</h5>
      </div>
    </div>
  );
};

export default AllTaskList;
