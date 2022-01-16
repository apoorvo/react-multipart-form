import React, { useState } from "react";
import { MAX_STEP } from "./components/common/constants";
import Form from "./components/Form";
import Timeline from "./components/Timeline";

function App() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < MAX_STEP - 1) {
      setStep((step) => step + 1);
    }
  };

  return (
    <div className="w-screen flex pt-20 flex-col items-center h-screen ">
      <div className="w-3/6 space-y-8 p-4 mt-10 h-3/5">
        <div className="flex justify-center space-x-4">
          <h1 className="text-4xl font-bold">Eden</h1>
        </div>
        <div className="flex justify-center w-4/5 m-auto">
          <Timeline step={step} />
        </div>
        <Form step={step} nextStep={nextStep} />
      </div>
    </div>
  );
}

export default App;
