import React, { useState } from "react";
import Typography from "../../../../../components/common/Typography";
import Input from "../../../../../components/common/Input";
import Checkbox from "../../../../../components/common/Checkbox";
import Button from "../../../../../components/common/Button";
import styles from "../../SignupManager.module.css";
import Dropdown from "../../../../../components/common/Dropdown";
import StepProgress from "../../../../../components/common/StepProgress";
import { STEPS } from "../..";

const OptionalInfoForm = ({ onNext, data = {}, currentStep }) => {
  const [formData, setFormData] = useState({
    experienceYears: "",
    majorExperience: "",
    introduction: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDropdownSelect = (option) => {
    setFormData((prev) => ({
      ...prev,
      experienceYears: option.value,
    }));
  };

  const handleNext = () => {
    onNext(formData);
  };

  return (
    <div className={styles.container}>
      <Typography variant="h-b-24" className={styles.title}>
        회원정보 등록
      </Typography>
      <div className={styles.description}>
        <Typography variant="t-sb-18">아래 정보를 입력해주세요</Typography>
        <Typography variant="t-sb-18" className={styles.required}>
          (선택)
        </Typography>
      </div>
      <Dropdown
        options={[
          { label: "0-1년", value: "0-1" },
          { label: "2-3년", value: "2-3" },
          { label: "4-5년", value: "4-5" },
          { label: "6년 이상", value: "6+" },
        ]}
        placeholder="경력기간"
        value={formData.experienceYears}
        onSelect={handleDropdownSelect}
      />
      <div className={styles.inputWrapper}>
        <Input
          name="majorExperience"
          value={formData.majorExperience}
          onChange={handleChange}
          size="Xlarge"
          type="text"
          variant="text-with-label"
          label="주요 경력"
          placeholder="주요 경력을 입력해주세요"
          fullWidth
        />
        <Input
          name="introduction"
          value={formData.introduction}
          onChange={handleChange}
          size="Xlarge"
          type="text"
          variant="text-with-label"
          label="자기 소개"
          placeholder="한 줄 소개를 입력해주세요"
          fullWidth
        />
      </div>
      <div className={styles.buttonWrapper}>
        <StepProgress
          totalSteps={Object.keys(STEPS).length}
          currentStep={currentStep}
        />
        <Button size="large" variant="primary" fullWidth onClick={handleNext}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default OptionalInfoForm;
