import React, { useState } from "react";
import styles from "./SignupLogin.module.css"
import Login from "./__components/Login";
import Signup from "./__components/Signup";
import RoleChoice from "./__components/RoleChoice";

const STEPS = {
    LOGIN: 0,
    SIGNUP: 1,
    ROLE_CHOICE: 2,
};

const SignupLogin = () => {
    const [currentStep, setCurrentStep] = useState(STEPS.LOGIN);
    const [formData, setFormData] = useState({});

    const handleNext = (stepData = {}) => {
        setFormData((prev) => ({ ...prev, ...stepData }));
        setCurrentStep((prev) => prev + 1);
    };

    const renderStep = () => {
        switch (currentStep) {
            case STEPS.LOGIN:
                return <Login onNext={handleNext} data={formData} />;
            case STEPS.SIGNUP:
                return <Signup onNext={handleNext} data={formData} />;
            case STEPS.ROLE_CHOICE:
                return <RoleChoice onNext={handleNext} data={formData} />;
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
    )
}

export default SignupLogin;