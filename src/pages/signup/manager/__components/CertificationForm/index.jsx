import React, { useState } from "react";
import Typography from "../../../../../components/common/Typography";
import Input from "../../../../../components/common/Input";
import Checkbox from "../../../../../components/common/Checkbox";
import Button from "../../../../../components/common/Button";
import styles from "../../SignupManager.module.css";
import { FaRegQuestionCircle } from "react-icons/fa";
import StepProgress from "../../../../../components/common/StepProgress";
import { STEPS } from "../..";

const CertificationForm = ({ onNext, data = {}, currentStep }) => {
  const [formData, setFormData] = useState({
    yearNumber: "", // 연도 기재 번호
    noYearNumber: "", // 연도 미기재 번호
    serialNumber: "", // 일련번호
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    // 연도 기재 번호가 있으면 그것을 사용, 없으면 연도 미기재 번호 사용
    const certificateNumber = formData.yearNumber || formData.noYearNumber;
    const fullCertNumber = `${certificateNumber}-${formData.serialNumber}`;

    onNext({
      serialNumber: fullCertNumber,
    });
  };

  return (
    <div className={styles.container}>
      <Typography variant="h-b-24" className={styles.title}>
        자격증 등록
      </Typography>
      <div className={styles.description}>
        <Typography variant="t-sb-18">자격증 정보를 입력해주세요</Typography>
        <Typography variant="t-sb-18" className={styles.required}>
          (필수)
        </Typography>
      </div>
      <div className={styles.inputWrapper}>
        <div className={styles.subTitleWrapper}>
          <Typography variant="t-sb-18" className={styles.required}>
            시/도청 발급
          </Typography>
          <Button
            color="grayscale"
            size="icon-small"
            type="icon-only"
            style="texted"
            icon={<FaRegQuestionCircle size={20} />}
          />
        </div>
        <Input
          name="yearNumber"
          value={formData.yearNumber}
          onChange={handleChange}
          size="large"
          type="text"
          variant="text-with-label"
          label="연도 기재"
          placeholder="예시: 2025-12345"
          fullWidth
        />
        <Input
          name="noYearNumber"
          value={formData.noYearNumber}
          onChange={handleChange}
          size="large"
          type="text"
          variant="text-with-label"
          label="연도 미기재"
          placeholder="0000-12345"
          fullWidth
          disabled={formData.yearNumber !== ""}
        />
        <div className={styles.subTitleWrapper}>
          <Typography variant="t-sb-18" className={styles.required}>
            보건복지부
          </Typography>
          <Button
            color="grayscale"
            size="icon-small"
            type="icon-only"
            style="texted"
            icon={<FaRegQuestionCircle size={20} />}
          />
        </div>
        <Input
          name="serialNumber"
          value={formData.serialNumber}
          onChange={handleChange}
          size="large"
          type="text"
          variant="text-with-label"
          label="일련번호"
          placeholder="일련번호를 입력해주세요"
          fullWidth
        />
      </div>
      <div className={styles.buttonWrapper}>
        <StepProgress
          totalSteps={Object.keys(STEPS).length}
          currentStep={currentStep}
        />
        <Button
          size="large"
          variant="primary"
          fullWidth
          onClick={handleNext}
          disabled={
            !(
              (formData.yearNumber || formData.noYearNumber) &&
              formData.serialNumber
            )
          }>
          다음
        </Button>
      </div>
    </div>
  );
};

export default CertificationForm;
