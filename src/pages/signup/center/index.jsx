import React, { useState } from "react";
import styles from "./SignupCenter.module.css";
import RequiredCenterForm from "./__components/RequiredCenterForm";
import OptionalCenterForm from "./__components/OptionalCenterForm";
import CenterProfileForm from "./__components/CenterProfileForm";
import SignupComplete from "./__components/SignupComplete";
import { authAPI } from "../../../services";

export const STEPS = {
  REQUIRED_INFO: 0,
  OPTIONAL_INFO: 1,
  PROFILE_SETUP: 2,
  COMPLETE: 3,
};

const SignupCenter = () => {
  const [currentStep, setCurrentStep] = useState(STEPS.REQUIRED_INFO);
  const [formData, setFormData] = useState({});

  const handleNext = async (stepData = {}) => {
    const newFormData = { ...formData, ...stepData };
    setFormData(newFormData);

    if (currentStep === STEPS.PROFILE_SETUP) {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          throw new Error("사용자 정보를 찾을 수 없습니다.");
        }

        const response = await authAPI.registerAdminInfo(userId, {
          userId: parseInt(userId),
          name: newFormData.name,
          centerName: newFormData.centerName,
          phone: newFormData.phone,
          address: newFormData.address,
          centerGrade: newFormData.centerGrade,
          hasBathVehicle: Boolean(newFormData.hasBathVehicle),
          operatingPeriod: newFormData.operatingPeriod || "",
          introduction: newFormData.introduction || "",
          profileImageUrl: newFormData.profileImageUrl || "",
        });

        if (response.status === 200) {
          setCurrentStep(STEPS.COMPLETE);
        }
      } catch (error) {
        console.error("Error registering admin info:", error);
      }
    } else {
      setCurrentStep(currentStep + 1);
    }
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
