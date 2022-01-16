import React from "react";
import CongratulationForm from "./CongratulationForm";
import FormStepper from "./FormStepper";
import UsageForm from "./UsageForm";
import WelcomeForm from "./WelcomeForm";
import WorkSpaceForm from "./WorkSpaceForm";

const Form = ({ step, nextStep }) => {
  return (
    <div>
      <FormStepper step={step} nextStep={nextStep}>
        <WelcomeForm nextStep={nextStep} />
        <WorkSpaceForm nextStep={nextStep} />
        <UsageForm nextStep={nextStep} />
        <CongratulationForm />
      </FormStepper>
    </div>
  );
};

export default Form;
