import React, { useState } from "react";
import Typography from "../../../../../components/common/Typography";
import Input from "../../../../../components/common/Input";
import Checkbox from "../../../../../components/common/Checkbox";
import Button from "../../../../../components/common/Button";
import styles from "../../SignupManager.module.css";

import StepProgress from "../../../../../components/common/StepProgress";
import { STEPS } from "../..";

const RequiredInfoForm = ({ onNext, data = {}, currentStep }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    hasVehicle: false,
    hasDementiaTraining: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name) => (checked) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleNext = () => {
    onNext(formData);
  };

  return (
    <div className={styles.container}>
      <Typography variant="h-b-24" className={styles.title}>
        회원정보 확인
      </Typography>
      <div className={styles.description}>
        <Typography variant="t-sb-18">아래 정보를 입력해주세요</Typography>
        <Typography variant="t-sb-18" className={styles.required}>
          (필수)
        </Typography>
      </div>
      <div className={styles.inputWrapper}>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          size="large"
          type="text"
          variant="text-with-label"
          label="이름"
          placeholder="이름을 입력해주세요"
          fullWidth
        />
        <Input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          size="large"
          type="tel"
          variant="text-with-label"
          label="전화번호"
          placeholder="전화번호를 입력해주세요"
          fullWidth
        />
        <Input
          name="address"
          value={formData.address}
          onChange={handleChange}
          size="large"
          type="text"
          variant="text-with-label"
          label="주소"
          placeholder="주소를 입력해주세요"
          fullWidth
        />
      </div>
      <div className={styles.checkboxWrapper}>
        <Checkbox
          label="차량을 보유하고 있어요"
          checked={formData.hasVehicle}
          onChange={handleCheckboxChange("hasVehicle")}
        />
        <Checkbox
          label="치매교육을 이수했어요"
          checked={formData.hasDementiaTraining}
          onChange={handleCheckboxChange("hasDementiaTraining")}
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

export default RequiredInfoForm;
