import React from "react";
import { Form } from "formik";

const FormStepper = ({ children, step }) => {
  return <Form>{children.length > 0 ? children[step] : children}</Form>;
};

export default FormStepper;
