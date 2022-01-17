import React from "react";

import { useFormikContext } from "formik";

import CustomField from "./common/CustomField";
import FormWidget from "./common/FormWidget";

const UsageForm = () => {
  const {
    values: { usage },
    setFieldValue,
  } = useFormikContext();
  const handleUsageClick = (usageName) => {
    setFieldValue("usage", usageName);
  };

  return (
    <FormWidget>
      <FormWidget.Header
        title={"How are you planning to use Eden?"}
        subtitle={"We'll streamline your setup experience accordingly."}
      />
      <FormWidget.Body buttonText={"Create Workspace"}>
        <div className="flex flex-col w-full items-center 2xl:justify-center justify-center md:justify-between md:space-x-8 md:flex-row ">
          <OptionCard
            highlighted={usage === "self"}
            icon={"ri-user-fill"}
            title={"For myself"}
            name={"self"}
            body={"Write better. Think more clearly. Stay organized."}
            handleUsageClick={handleUsageClick}
          />
          <OptionCard
            icon={"ri-team-fill"}
            title={"For Team"}
            highlighted={usage === "team"}
            name={"team"}
            body={"Wikis, docs, tasks & projects, all in one place."}
            handleUsageClick={handleUsageClick}
          />
        </div>
        <CustomField type="hidden" name="usage" />
      </FormWidget.Body>
    </FormWidget>
  );
};

const OptionCard = ({
  highlighted,
  icon,
  title,
  body,
  name,
  handleUsageClick,
}) => {
  return (
    <div
      className={`md:w-60 md:py-8 w-full space-y-2 h-fit p-6 text-xl cursor-pointer rounded-lg mt-3 ${
        highlighted
          ? " border-purple-primary border-2"
          : "border-gray-300 border"
      }`}
      onClick={() => handleUsageClick(name)}
    >
      <i className={`${icon} ${highlighted && "text-purple-primary"} `}></i>
      <h3>{title}</h3>
      <p className="text-xs ">{body}</p>
    </div>
  );
};

export default UsageForm;
