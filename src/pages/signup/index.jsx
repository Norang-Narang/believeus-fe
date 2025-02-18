import React, { useState } from "react";
import SignupForm from "./__components/SignupForm";
import SelectRole from "./__components/SelectRole";

const Signup = () => {
  const [currentStep, setCurrentStep] = useState("form"); // 'form' 또는 'role'

  const handleNextStep = () => {
    setCurrentStep("role");
  };

  return (
    <div>
      {currentStep === "form" ? (
        <SignupForm onComplete={handleNextStep} />
      ) : (
        <SelectRole />
      )}
    </div>
  );
};

export default Signup;
