import React from "react";

const FormWidget = ({ children }) => {
  return <div className="space-y-10 pb-4">{children}</div>;
};

const Header = ({ title, subtitle, icon }) => {
  return (
    <>
      <div className="flex flex-col space-y-4 w-fit text-center m-auto items-center">
        {icon && icon}
        <h1 className="font-bold lg:text-4xl  text-3xl text-gray-primary">
          {title}
        </h1>
        <p className="text-gray-500">{subtitle}</p>
      </div>
    </>
  );
};

const Body = ({ buttonText, children }) => {
  return (
    <div className="flex md:w-4/6 w-10/12 px-2 self-end m-auto flex-col md:space-y-6 space-y-4 items-center">
      {children}
      <button
        type="submit"
        className="px-4 text-xl self-stretch flex-grow bg-purple-primary text-white rounded py-2"
      >
        {buttonText}
      </button>
    </div>
  );
};

FormWidget.Header = Header;
FormWidget.Body = Body;

export default FormWidget;
