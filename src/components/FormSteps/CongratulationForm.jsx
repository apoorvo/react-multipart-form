import React from "react";

import { useFormikContext } from "formik";

import FormWidget from "./common/FormWidget";

const CongratulationForm = () => {
  const {
    values: { displayName },
  } = useFormikContext();
  return (
    <FormWidget>
      <FormWidget.Header
        title={`Congratulations, ${displayName}!`}
        subtitle={
          "You have completed onboarding, you can start using the Eden!"
        }
        icon={
          <i className="ri-check-line text-5xl rounded-full p-4 md:mt-0 mt-20 bg-purple-primary  text-white"></i>
        }
      />

      <FormWidget.Body buttonText={"Launch Workspace"} />
    </FormWidget>
  );
};

export default CongratulationForm;
