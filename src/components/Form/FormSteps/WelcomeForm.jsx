import { Field } from "formik";
import React from "react";

const WelcomeForm = ({ nextStep }) => {
  return (
    <>
      <div className="flex flex-col space-y-4 w-full items-center">
        <h1 className="font-bold text-center  text-5xl text-gray-primary">
          Welcome! First things first...
        </h1>
        <p className="text-gray-500">You can always change them later.</p>
      </div>

      <div className="flex w-5/6 m-auto flex-col space-y-6 items-center">
        <div className="flex w-full  space-y-2 flex-col">
          <label className="text-lg">Full Name</label>
          <Field
            className="p-4 rounded border border-gray-300"
            type="text"
            placeholder="Steve Jobs"
            name="name"
          />
        </div>
        <div className="flex w-full space-y-2 flex-col">
          <label className="text-lg">Display Name</label>
          <Field
            type="text"
            className="p-4 rounded border border-gray-300"
            placeholder="Steve"
            name="displayName"
          />
        </div>

        <button
          onClick={() => nextStep()}
          className="px-4 text-xl w-full flex-grow bg-purple-primary text-white rounded py-2"
        >
          Create Workspace
        </button>
      </div>
    </>
  );
};

export default WelcomeForm;
