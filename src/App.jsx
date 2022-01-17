import React, { useState } from "react";

import { Formik } from "formik";
import * as Yup from "yup";

import { MAX_STEP } from "./components/common/constants";
import FormStepper from "./components/FormStepper";
import {
  WorkSpaceForm,
  WelcomeForm,
  UsageForm,
  CongratulationForm,
  initialValues,
  stepFormSchema,
} from "./components/FormSteps";
import Timeline from "./components/Timeline";

function App() {
  const [step, setStep] = useState(0);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({ ...stepFormSchema[step] })}
      onSubmit={(values, actions) => {
        if (step < MAX_STEP - 1) {
          actions.setSubmitting(false);
          setStep((step) => step + 1);
        } else {
          //Todo: Add function to submit to server
          console.log(values);
        }
      }}
    >
      <div className="w-screen flex font-inter md:pt-14 pt flex-col items-center h-screen ">
        <div className="lg:w-3/6 md:w-4/5 md:space-y-50 md:mt-0 w-11/12 space-y-8 p-4 mt-10 h-3/5">
          <div className="flex items-center justify-center space-x-4">
            <img src="/logo.png" alt="Eden" className="w-10" />
            <h1 className="text-4xl text-gray-primary font-bold">Eden</h1>
          </div>
          <div className="flex justify-center w-1/6 md:w-2/6 m-auto">
            <Timeline step={step} setStep={setStep} />
          </div>
          <FormStepper step={step}>
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
