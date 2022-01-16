import React from "react";

const Input = ({ prefix = "", className, ...inputProps }) => {
  return (
    <div className="flex rounded border border-gray-300">
      {prefix && <Prefix prefix={prefix} />}
      <input {...inputProps} className={`flex-grow ${className}`} />
    </div>
  );
};

const Prefix = ({ prefix }) => {
  return (
    <div className="w-fit px-2 text-gray-400 flex justify-center items-center border-gray-300 border-r bg-gray-secondary">
      {prefix}
    </div>
  );
};

export default Input;
