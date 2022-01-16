import { Field } from "formik";
import React from "react";

const CustomField = ({ prefix = "", className, name, ...inputProps }) => {
  return (
    <Field name={name}>
      {({ field, form: { touched, errors } }) => (
        <div className=" rounded">
          <div className={`flex w-full ${prefix && "border"}`}>
            {prefix && <Prefix prefix={prefix} />}
            <input
              {...field}
              {...inputProps}
              className={`flex-grow ${className} ${
                touched[field.name] && errors[field.name]
                  ? "border-red-400 "
                  : "border-gray-300 "
              }`}
            />
          </div>

          {touched[field.name] && errors[field.name] && (
            <div className="text-red-500">* {errors[field.name]}</div>
          )}
        </div>
      )}
    </Field>
  );
};

const Prefix = ({ prefix }) => {
  return (
    <div className="w-fit px-2 text-gray-400 flex justify-center items-center border-gray-300 border-r bg-gray-secondary">
      {prefix}
    </div>
  );
};

export default CustomField;
