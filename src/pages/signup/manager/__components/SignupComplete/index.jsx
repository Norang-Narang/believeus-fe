import React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "../../../../../components/common/Typography";
import Button from "../../../../../components/common/Button";
import styles from "../../SignupManager.module.css";
import signupCompleteImage from "../../../../../assets/signupcomplete.png";
import { PATH } from "../../../../../constants/path";

const SignupComplete = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate(PATH.HOME);
  };

  return (
    <div className={styles.container}>
      <Typography variant="h-b-24" className={styles.title}>
        회원가입 완료
      </Typography>
      <div className={styles.description}>
        <Typography variant="t-sb-18">회원가입이 완료되었습니다</Typography>
      </div>
      <div className={styles.completeWrapper}>
        <img
          src={signupCompleteImage}
          alt="회원가입 완료"
          className={styles.completeImage}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button size="large" variant="primary" fullWidth onClick={handleStart}>
          시작하기
        </Button>
      </div>
    </div>
  );
};

export default SignupComplete;
