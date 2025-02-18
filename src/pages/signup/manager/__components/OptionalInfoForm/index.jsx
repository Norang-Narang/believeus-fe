import React from "react";
import Typography from "../../../../../components/common/Typography";
import Input from "../../../../../components/common/Input";
import Checkbox from "../../../../../components/common/Checkbox";
import Button from "../../../../../components/common/Button";
import styles from "../../SignupManager.module.css";
import Dropdown from "../../../../../components/common/Dropdown";

const OptionalInfoForm = ({ onNext, data = {} }) => {
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
          {
            label: "0-1년",
            value: "option1",
          },
          {
            label: "2-3년",
            value: "option2",
          },
          {
            label: "4-5년",
            value: "option3",
          },
          {
            label: "6년 이상",
            value: "option4",
          },
        ]}
        placeholder="경력기간"
      />
      <div className={styles.inputWrapper}>
        <Input
          size="Xlarge"
          type="text"
          variant="text-with-label"
          label="주요 경력"
          placeholder="주요 경력을 입력해주세요"
          fullWidth
        />
        <Input
          size="Xlarge"
          type="text"
          variant="text-with-label"
          label="자기 소개"
          placeholder="한 줄 소개를 입력해주세요"
          fullWidth
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button size="large" variant="primary" fullWidth onClick={onNext}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default OptionalInfoForm;
