import { Field, useFormikContext } from "formik";
import React from "react";

const UsageForm = () => {
  const {
    values: { usage },
    setFieldValue,
  } = useFormikContext();
  const handleUsageClick = (usageName) => {
    setFieldValue("usage", usageName);
  };

  return (
    <>
      <div className="flex flex-col space-y-4 w-full items-center">
        <h1 className="font-bold text-center  text-5xl text-gray-primary">
          How are you planning to use Eden?
        </h1>
        <p className="text-gray-500">
          We'll streamline your setup experience accordingly.
        </p>
      </div>
      <div className="flex w-full space-y-2 items-center justify-center space-x-8 ">
        <Field type="hidden" name="usage" />
        <OptionCard
          highlighted={usage == "myself"}
          icon={"ri-user-fill"}
          title={"For myself"}
          name={"myself"}
          body={"Write better. Think more clearly. Stay organized."}
          handleUsageClick={handleUsageClick}
        />
        <OptionCard
          icon={"ri-team-fill"}
          title={"For Team"}
          highlighted={usage == "team"}
          name={"team"}
          body={"Wikis, docs, tasks & projects, all in one place."}
          handleUsageClick={handleUsageClick}
        />
      </div>
      <div className="flex w-4/6 m-auto mt-8 flex-col space-y-6 items-center">
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
      className={`w-40 space-y-2 h-fit p-6 text-xl cursor-pointer rounded-lg my-4 ${
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
