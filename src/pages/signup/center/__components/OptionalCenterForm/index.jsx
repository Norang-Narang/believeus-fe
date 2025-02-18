import React from "react";
import Typography from "../../../../../components/common/Typography";
import Input from "../../../../../components/common/Input";
import Checkbox from "../../../../../components/common/Checkbox";
import Button from "../../../../../components/common/Button";
import styles from "../../SignupCenter.module.css";
import Dropdown from "../../../../../components/common/Dropdown";
import StepProgress from "../../../../../components/common/StepProgress";
import { STEPS } from "../..";

const OptionalCenterForm = ({ onNext, data = {}, currentStep }) => {
  return (
    <div className={styles.container}>
      <Typography variant="h-b-24" className={styles.title}>
        센터정보 등록
      </Typography>
      <div className={styles.description}>
        <Typography variant="t-sb-18">아래 정보를 입력해주세요</Typography>
        <Typography variant="t-sb-18" className={styles.required}>
          (선택)
        </Typography>
      </div>
      <Dropdown
        options={[
          {
            label: "1등급",
            value: "option1",
          },
          {
            label: "2등급",
            value: "option2",
          },
          {
            label: "3등급",
            value: "option3",
          },
          {
            label: "4등급",
            value: "option4",
          },
          {
            label: "5등급",
            value: "option5",
          },
        ]}
        placeholder="센터 등급"
      />
      <div className={styles.inputWrapper}>
        <Input
          size="Xlarge"
          type="text"
          variant="text-with-label"
          label="센터 소개"
          placeholder="한 줄 소개를 입력해주세요"
          fullWidth
        />
      </div>
      <div className={styles.buttonWrapper}>
        <StepProgress
          totalSteps={Object.keys(STEPS).length}
          currentStep={currentStep}
        />
        <Button size="large" variant="primary" fullWidth onClick={onNext}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default OptionalCenterForm;
