import { Form } from "formik";
import React from "react";

const FormStepper = ({ children, step }) => {
  return <Form>{children.length > 0 ? children[step] : children}</Form>;
};

export default FormStepper;
