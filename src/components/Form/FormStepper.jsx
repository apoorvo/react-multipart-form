import React from "react";

const FormStepper = ({ children, step }) => {
  console.log(children);
  return <div>{children.length > 0 ? children[step] : children}</div>;
};

export default FormStepper;
