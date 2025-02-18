import React from "react";
import Typography from "../../../../../components/common/Typography";
import Input from "../../../../../components/common/Input";
import Checkbox from "../../../../../components/common/Checkbox";
import Button from "../../../../../components/common/Button";
import styles from "../../SignupCenter.module.css";

import StepProgress from "../../../../../components/common/StepProgress";
import { STEPS } from "../..";

const RequiredCenterForm = ({ onNext, data = {}, currentStep }) => {
  return (
    <div className={styles.container}>
      <Typography variant="h-b-24" className={styles.title}>
        센터정보 확인
      </Typography>
      <div className={styles.description}>
        <Typography variant="t-sb-18">아래 정보를 입력해주세요</Typography>
        <Typography variant="t-sb-18" className={styles.required}>
          (필수)
        </Typography>
      </div>
      <div className={styles.inputWrapper}>
        <Input
          size="large"
          type="text"
          variant="text-with-label"
          label="센터명"
          placeholder="센터명을 입력해주세요"
          fullWidth
        />
        <Input
          size="large"
          type="text"
          variant="text-with-label"
          label="센터 주소"
          placeholder="센터 주소를 입력해주세요"
          fullWidth
        />
        <Input
          size="large"
          type="tel"
          variant="text-with-label"
          label="센터 전화번호"
          placeholder="센터 전화번호를 입력해주세요"
          fullWidth
        />
      </div>
      <div className={styles.checkboxWrapper}>
        <Checkbox label="목욕 차량을 보유하고 있어요" />
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

export default RequiredCenterForm;
