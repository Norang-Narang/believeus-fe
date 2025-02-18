import React from "react";
import Typography from "../../../../../components/common/Typography";
import Input from "../../../../../components/common/Input";
import Checkbox from "../../../../../components/common/Checkbox";
import Button from "../../../../../components/common/Button";
import styles from "../../SignupManager.module.css";
import { FaRegQuestionCircle } from "react-icons/fa";

const CertificationForm = ({ onNext, data = {} }) => {
  return (
    <div className={styles.container}>
      <Typography variant="h-b-24" className={styles.title}>
        자격증 입력
      </Typography>
      <div className={styles.description}>
        <Typography variant="t-sb-18">
          보유 자격증을 모두 입력해주세요
        </Typography>
        <Typography variant="t-sb-18" className={styles.required}>
          (복수 선택)
        </Typography>
      </div>
      <div className={styles.inputWrapper}>
        <div className={styles.subTitleWrapper}>
          <Typography variant="t-sb-18" className={styles.required}>
            시/도청 발급
          </Typography>{" "}
          <Button
            color="grayscale"
            size="icon-small"
            type="icon-only"
            style="texted"
            icon={<FaRegQuestionCircle size={20} />}
          />
        </div>
        <Input
          size="large"
          type="text"
          variant="text-with-label"
          label="연도 기재"
          placeholder="예시: 2025-12345"
          fullWidth
        />
        <Input
          size="large"
          type="text"
          variant="text-with-label"
          label="연도 미기재"
          placeholder="0000-12345"
          fullWidth
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
          size="large"
          type="text"
          variant="text-with-label"
          label="일련번호"
          placeholder="일련번호를 입력해주세요"
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

export default CertificationForm;
