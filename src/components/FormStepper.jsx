import { Form, useFormikContext } from "formik";
import React from "react";

const FormStepper = ({ children }) => {
  const {
    values: { step },
  } = useFormikContext();
  return <Form>{children.length > 0 ? children[step] : children}</Form>;
};

export default FormStepper;
