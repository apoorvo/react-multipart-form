import React from "react";
import CustomField from "./common/CustomField";
import FormWidget from "./common/FormWidget";

const WelcomeForm = () => {
  return (
    <FormWidget>
      <FormWidget.Header
        title="Welcome! First things first..."
        subtitle="You can always change them later."
      />

      <FormWidget.Body buttonText={"Create Workspace"}>
        <div className="flex w-full  space-y-2 flex-col">
          <label className="text-lg">Full Name</label>
          <CustomField
            className="p-4 rounded border "
            type="text"
            placeholder="Steve Jobs"
            name="name"
          />
        </div>
        <div className="flex w-full space-y-2 flex-col">
          <label className="text-lg">Display Name</label>
          <CustomField
            type="text"
            className="p-4 rounded border border-gray-300"
            placeholder="Steve"
            name="displayName"
          />
        </div>
      </FormWidget.Body>
    </FormWidget>
  );
};

export default WelcomeForm;
