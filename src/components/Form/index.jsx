import { Formik, useFormik } from "formik";
import React from "react";
import CongratulationForm from "./FormSteps/CongratulationForm";
import FormStepper from "./FormStepper";
import UsageForm from "./FormSteps/UsageForm";
import WelcomeForm from "./FormSteps/WelcomeForm";
import WorkSpaceForm from "./FormSteps/WorkSpaceForm";

const Form = ({ step, nextStep }) => {
  const initialValues = {
    name: "",
    displayName: "",
    workspace: "",
    workspaceUrl: " ",
    usage: "",
  };
  return (
    <Formik initialValues={initialValues}>
      <FormStepper step={step} nextStep={nextStep}>
        <WelcomeForm nextStep={nextStep} />
        <WorkSpaceForm nextStep={nextStep} />
        <UsageForm nextStep={nextStep} />
        <CongratulationForm />
      </FormStepper>
    </Formik>
  );
};

export default Form;
