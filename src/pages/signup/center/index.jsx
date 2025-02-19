import React, { useState } from "react";
import styles from "./SignupCenter.module.css";
import RequiredCenterForm from "./__components/RequiredCenterForm";
import OptionalCenterForm from "./__components/OptionalCenterForm";
import CenterProfileForm from "./__components/CenterProfileForm";
import SignupComplete from "./__components/SignupComplete";

export const STEPS = {
  REQUIRED_INFO: 0,
  OPTIONAL_INFO: 1,
  PROFILE_SETUP: 2,
  COMPLETE: 3,
};

const SignupCenter = () => {
  const [currentStep, setCurrentStep] = useState(STEPS.REQUIRED_INFO);
  const [formData, setFormData] = useState({});

  const handleNext = (stepData = {}) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
    setCurrentStep((prev) => prev + 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case STEPS.REQUIRED_INFO:
        return (
          <RequiredCenterForm
            onNext={handleNext}
            data={formData}
            currentStep={currentStep}
          />
        );
      case STEPS.OPTIONAL_INFO:
        return (
          <OptionalCenterForm
            onNext={handleNext}
            data={formData}
            currentStep={currentStep}
          />
        );
      case STEPS.PROFILE_SETUP:
        return (
          <CenterProfileForm
            onNext={handleNext}
            data={formData}
            currentStep={currentStep}
          />
        );
      case STEPS.COMPLETE:
        return <SignupComplete currentStep={currentStep} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div key={currentStep} className={styles.formWrapper}>
        {renderStep()}
      </div>
    </div>
  );
};

export default SignupCenter;
