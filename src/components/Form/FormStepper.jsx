import { Form, useFormikContext } from "formik";
import React from "react";

const FormStepper = ({ children, step }) => {
  const { values } = useFormikContext();
  console.log(values);
  return <Form>{children.length > 0 ? children[step] : children}</Form>;
};

export default FormStepper;
