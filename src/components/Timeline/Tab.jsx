import React from "react";

const Tab = ({
  page,
  completed = false,
  first = false,
  last = false,
  handleClick,
}) => {
  return (
    <div
      className="flex w-full cursor-pointer justify-center items-center"
      onClick={() => handleClick(page - 1)}
    >
      {!first && (
        <div
          className={`md:w-10 w-3 h-0 ${
            completed ? "border-b-purple-primary " : "border-b-gray-400 "
          } border-b-2 `}
        ></div>
      )}
      <div
        className={`flex px-4 rounded-full py-2 ${
          completed
            ? "bg-purple-primary text-white"
            : "bg-white border-gray-300 border text-gray-primary"
        }`}
      >
        {page}
      </div>
      {!last && (
        <div
          className={`md:w-10 w-3 h-0 ${
            completed ? "border-b-purple-primary " : "border-b-gray-400 "
          } border-b-2 `}
        ></div>
      )}
    </div>
  );
};

export default Tab;
