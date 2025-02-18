import React, { useState } from "react";
import styles from "./SignupManager.module.css";
import RequiredInfoForm from "./__components/RequiredInfoForm";
import CertificationForm from "./__components/CertificationForm";
import OptionalInfoForm from "./__components/OptionalInfoForm";
import ProfileSetupForm from "./__components/ProfileSetupForm";
import SignupComplete from "./__components/SignupComplete";

const STEPS = {
  REQUIRED_INFO: 0,
  CERTIFICATION: 1,
  OPTIONAL_INFO: 2,
  PROFILE_SETUP: 3,
  COMPLETE: 4,
};

const SignupManager = () => {
  const [currentStep, setCurrentStep] = useState(STEPS.REQUIRED_INFO);
  const [formData, setFormData] = useState({});

  const handleNext = (stepData = {}) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
    setCurrentStep((prev) => prev + 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case STEPS.REQUIRED_INFO:
        return <RequiredInfoForm onNext={handleNext} data={formData} />;
      case STEPS.CERTIFICATION:
        return <CertificationForm onNext={handleNext} data={formData} />;
      case STEPS.OPTIONAL_INFO:
        return <OptionalInfoForm onNext={handleNext} data={formData} />;
      case STEPS.PROFILE_SETUP:
        return <ProfileSetupForm onNext={handleNext} data={formData} />;
      case STEPS.COMPLETE:
        return <SignupComplete />;
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

export default SignupManager;
