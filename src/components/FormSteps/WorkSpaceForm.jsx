import React from "react";

import { Field } from "formik";

import CustomField from "./common/CustomField";
import FormWidget from "./common/FormWidget";

const WorkSpaceForm = () => {
  return (
    <FormWidget>
      <FormWidget.Header
        title={"Let's setup a home for all your work"}
        subtitle={" You can always create another workspace later."}
      />

      <FormWidget.Body buttonText={"Create Workspace"}>
        <div className="flex w-full  space-y-2 flex-col">
          <label className="text-lg">Workspace Name</label>
          <Field name="workspace">
            {({ field, form: { touched, errors } }) => (
              <>
                <input
                  {...field}
                  type="text"
                  placeholder="Eden"
                  className={`p-4 rounded border w-full ${
                    touched[field.name] && errors[field.name]
                      ? "border-red-400 "
                      : "border-gray-300 "
                  } `}
                />
                {touched[field.name] && errors[field.name] && (
                  <div className="text-red-500">* {errors[field.name]}</div>
                )}
              </>
            )}
          </Field>
        </div>
        <div className="flex w-full space-y-2 flex-col">
          <label className="text-lg">
            Workspace Url <span className="text-gray-300">(optional)</span>
          </label>
          <CustomField
            type="text"
            prefix={"www.eden.com/"}
            className="p-4 "
            placeholder="Example"
            name="workspaceUrl"
          />
        </div>
      </FormWidget.Body>
    </FormWidget>
  );
};

export default WorkSpaceForm;
