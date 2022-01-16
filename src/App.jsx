import { Formik } from "formik";
import React, { useState } from "react";
import { MAX_STEP } from "./components/common/constants";
import FormStepper from "./components/FormStepper";
import CongratulationForm from "./components/FormSteps/CongratulationForm";
import UsageForm from "./components/FormSteps/UsageForm";
import WelcomeForm from "./components/FormSteps/WelcomeForm";
import WorkSpaceForm from "./components/FormSteps/WorkSpaceForm";
import Timeline from "./components/Timeline";

function App() {
  const initialValues = {
    name: "",
    displayName: "",
    workspace: "",
    workspaceUrl: " ",
    usage: "",
    step: 0,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        if (values.step < MAX_STEP - 1) {
          actions.setSubmitting(false);
          actions.setFieldValue("step", values.step + 1);
        }
      }}
    >
      <div className="w-screen flex pt-20 flex-col items-center h-screen ">
        <div className="w-3/6 space-y-8 p-4 mt-10 h-3/5">
          <div className="flex justify-center space-x-4">
            <h1 className="text-4xl font-bold">Eden</h1>
          </div>
          <div className="flex justify-center w-4/5 m-auto">
            <Timeline />
          </div>
          <FormStepper>
            <WelcomeForm />
            <WorkSpaceForm />
            <UsageForm />
            <CongratulationForm />
          </FormStepper>
        </div>
      </div>
    </Formik>
  );
}

export default App;
