import React from "react";

const CreateTaskForm = () => {
  return (
    <div>
      <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form
          action=""
          className="flex w-full items-start justify-between text-white"
        >
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                type="text"
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-500 mb-4"
                placeholder="Enter task title"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                type="date"
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-500 mb-4"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
              <input
                type="text"
                placeholder="Employee Name"
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-500 mb-4"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                type="text"
                placeholder="Design, dev, etc..."
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-500 mb-4"
              />
            </div>
          </div>
          <div className="w-2/3 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              type="text"
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-500"
              name=""
              id=""
            />
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskForm;
