import { Field, useFormikContext } from "formik";
import React from "react";
import Input from "../common/Input";

const WorkSpaceForm = () => {
  return (
    <>
      <div className="flex flex-col space-y-4 w-full items-center">
        <h1 className="font-bold  text-center  text-5xl text-gray-primary">
          Let's setup a home for all your work
        </h1>
        <p className="text-gray-500">
          You can always create another workspace later.
        </p>
      </div>

      <div className="flex w-5/6 m-auto flex-col space-y-6 items-center">
        <div className="flex w-full  space-y-2 flex-col">
          <label className="text-lg">Workspace Name</label>
          <Field
            className="p-4 rounded border border-gray-300"
            type="text"
            placeholder="Eden"
            name="workspace"
          />
        </div>
        <div className="flex w-full space-y-2 flex-col">
          <label className="text-lg">
            Workspace Url <span className="text-gray-300">(optional)</span>
          </label>
          <Input
            type="text"
            prefix={"www.eden.com/"}
            className="p-4 "
            placeholder="Example"
            name="workspaceUrl"
          />
        </div>

        <button
          type="submit"
          className="px-4 text-xl w-full flex-grow bg-purple-primary text-white rounded py-2"
        >
          Create Workspace
        </button>
      </div>
    </>
  );
};

export default WorkSpaceForm;
