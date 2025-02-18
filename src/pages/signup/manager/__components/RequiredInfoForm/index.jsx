import React from "react";
import Typography from "../../../../../components/common/Typography";
import Input from "../../../../../components/common/Input";
import Checkbox from "../../../../../components/common/Checkbox";
import Button from "../../../../../components/common/Button";
import styles from "../../SignupManager.module.css";

const RequiredInfoForm = ({ onNext, data = {} }) => {
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
          size="large"
          type="text"
          variant="text-with-label"
          label="이름"
          placeholder="이름을 입력해주세요"
          fullWidth
        />
        <Input
          size="large"
          type="tel"
          variant="text-with-label"
          label="전화번호"
          placeholder="전화번호를 입력해주세요"
          fullWidth
        />
        <Input
          size="large"
          type="text"
          variant="text-with-label"
          label="주소"
          placeholder="주소를 입력해주세요"
          fullWidth
        />
      </div>
      <div className={styles.checkboxWrapper}>
        <Checkbox label="차량을 보유하고 있어요" />
        <Checkbox label="치매교육을 이수했어요" />
      </div>
      <div className={styles.buttonWrapper}>
        <Button size="large" variant="primary" fullWidth onClick={onNext}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default RequiredInfoForm;
