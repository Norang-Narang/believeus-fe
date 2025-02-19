import React, { useState } from "react";
import styles from "./SignupManager.module.css";
import RequiredInfoForm from "./__components/RequiredInfoForm";
import CertificationForm from "./__components/CertificationForm";
import OptionalInfoForm from "./__components/OptionalInfoForm";
import ProfileSetupForm from "./__components/ProfileSetupForm";
import SignupComplete from "./__components/SignupComplete";
import StepProgress from "../../../components/common/StepProgress";
import { authAPI } from "../../../services";

export const STEPS = {
  REQUIRED_INFO: 0,
  CERTIFICATION: 1,
  OPTIONAL_INFO: 2,
  PROFILE_SETUP: 3,
  COMPLETE: 4,
};

const SignupManager = () => {
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

        const payload = {
          userId: parseInt(userId),
          name: newFormData.name,
          phoneNumber: newFormData.phone,
          hasVehicle: Boolean(newFormData.hasVehicle),
          hasDementiaTraining: Boolean(newFormData.hasDementiaTraining),
          experienceYears: newFormData.experienceYears || "",
          majorExperience: newFormData.majorExperience || "",
          introduction: newFormData.introduction || "",
          profileImageUrl: newFormData.profileImageUrl || "",
          certificates: [
            {
              type: "CAREGIVER",
              number: newFormData.serialNumber,
            },
          ],
        };

        const response = await authAPI.registerCaregiver(userId, payload);

        if (response.status === 200) {
          setCurrentStep(STEPS.COMPLETE);
        }
      } catch (error) {
        console.error("Error registering caregiver info:", error);
        console.error("Error response data:", error.response?.data);
      }
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case STEPS.REQUIRED_INFO:
        return (
          <RequiredInfoForm
            onNext={handleNext}
            data={formData}
            currentStep={currentStep}
          />
        );
      case STEPS.CERTIFICATION:
        return (
          <CertificationForm
            onNext={handleNext}
            data={formData}
            currentStep={currentStep}
          />
        );
      case STEPS.OPTIONAL_INFO:
        return (
          <OptionalInfoForm
            onNext={handleNext}
            data={formData}
            currentStep={currentStep}
          />
        );
      case STEPS.PROFILE_SETUP:
        return (
          <ProfileSetupForm
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

export default SignupManager;
