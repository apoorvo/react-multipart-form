import React from "react";

const CongratulationForm = () => {
  return (
    <>
      <div className="flex flex-col space-y-10 w-full pt-12 items-center">
        <i className="ri-check-line text-5xl rounded-full p-4  bg-purple-primary  text-white"></i>
        <h1 className="font-bold text-center text-5xl text-gray-primary">
          Congratulations, Eren!
        </h1>
        <p className="text-gray-500">
          You have completed onboarding, you can start using the Eden!
        </p>
      </div>

      <div className="flex w-4/6 m-auto mt-6 flex-col space-y-6 items-center">
        <button
          onClick={() => {}}
          className="px-4 text-xl w-full flex-grow bg-purple-primary text-white rounded py-2"
        >
          Launch Workspace
        </button>
      </div>
    </>
  );
};

export default CongratulationForm;
