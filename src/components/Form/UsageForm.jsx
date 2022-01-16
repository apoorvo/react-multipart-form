import React from "react";

const UsageForm = ({ nextStep }) => {
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
        <OptionCard
          highlighted={true}
          icon={"ri-user-fill"}
          title={"For myself"}
          body={"Write better. Think more clearly. Stay organized."}
        />
        <OptionCard
          icon={"ri-team-fill"}
          title={"For Team"}
          body={"Wikis, docs, tasks & projects, all in one place."}
        />
      </div>
      <div className="flex w-4/6 m-auto flex-col space-y-6 items-center">
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

const OptionCard = ({ highlighted, icon, title, body }) => {
  return (
    <div
      className={`w-40 space-y-2 h-fit p-6 text-xl rounded-lg my-4 ${
        highlighted
          ? " border-purple-primary border-2"
          : "border-gray-300 border"
      }`}
    >
      <i className={`${icon} ${highlighted && "text-purple-primary"} `}></i>
      <h3>{title}</h3>
      <p className="text-xs ">{body}</p>
    </div>
  );
};

export default UsageForm;
