import React from "react";
import Header from "../partials/Header";
import CreateTaskForm from "../partials/CreateTaskForm";
import AllTaskList from "../partials/AllTaskList";
const AdminDashBoard = () => {
  return (
    <div className="h-screen w-full p-7">
      <Header />
      <CreateTaskForm/>
      <AllTaskList/>
    </div>
  );
};

export default AdminDashBoard;
