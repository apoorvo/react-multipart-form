import React, { useState } from "react";

import { Formik } from "formik";
import * as Yup from "yup";

import { MAX_STEP } from "./components/common/constants";

import FormStepper from "./components/FormStepper";
import CongratulationForm from "./components/FormSteps/CongratulationForm";
import UsageForm from "./components/FormSteps/UsageForm";
import WelcomeForm from "./components/FormSteps/WelcomeForm";
import WorkSpaceForm from "./components/FormSteps/WorkSpaceForm";
import Timeline from "./components/Timeline";
import { initialValues } from "./components/common/formValues";
import { stepFormSchema } from "./components/common/formSchema";

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
        }
      }}
    >
      
      <div className="w-screen flex pt-20 flex-col items-center h-screen ">
        <div className="w-3/6 space-y-8 p-4 mt-10 h-3/5">
          <div className="flex justify-center space-x-4">
            <h1 className="text-4xl font-bold">Eden</h1>
          </div>
          <div className="flex justify-center w-4/5 m-auto">
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
