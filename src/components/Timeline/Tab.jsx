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
      className="flex w-full cursor-pointer items-center"
      onClick={() => handleClick(page - 1)}
    >
      {!first && (
        <div
          className={`w-full h-0 ${
            completed ? "border-b-purple-primary " : "border-b-gray-400 "
          } border-b-2 `}
        ></div>
      )}
      <div
        className={`flex px-6 rounded-full py-4 ${
          completed
            ? "bg-purple-primary text-white"
            : "bg-white border-gray-300 border text-gray-primary"
        }`}
      >
        {page}
      </div>
      {!last && (
        <div
          className={`w-full h-0 ${
            completed ? "border-b-purple-primary " : "border-b-gray-400 "
          } border-b-2 `}
        ></div>
      )}
    </div>
  );
};

export default Tab;
