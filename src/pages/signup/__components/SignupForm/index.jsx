import React from "react";
import PropTypes from "prop-types";
import Typography from "../../../../components/common/Typography";
import Input from "../../../../components/common/Input";
import Button from "../../../../components/common/Button";
import styles from "./signup.module.css";
import kakao from "../../../../assets/icons/kakao.svg";
import naver from "../../../../assets/icons/naver.svg";
// TODO : 스타일링 다시 하기

const SignupForm = (props) => {
  const handleNextClick = () => {
    if (props.onComplete && typeof props.onComplete === "function") {
      props.onComplete();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Typography variant="h-b-24">회원가입</Typography>
      </div>

      <div className={styles.inputWrapper}>
        <Input
          placeholder="아이디 입력"
          size="large"
          variant="text-only"
          fullWidth
        />
        <Input
          placeholder="비밀번호 입력"
          size="large"
          variant="text-only"
          type="password"
          fullWidth
        />
        <Input
          placeholder="비밀번호 확인"
          size="large"
          variant="text-only"
          type="password"
          fullWidth
        />
      </div>

      <div className={styles.buttonWrapper}>
        <Button
          color="primary"
          size="large"
          style="contained"
          fullWidth
          onClick={handleNextClick}>
          다음
        </Button>
      </div>

      <div className={styles.divider}>
        <Typography variant="c-r-12">또는</Typography>
      </div>

      <div className={styles.lowerSection}>
        <Button color="kakao" size="large" style="contained" fullWidth>
          <span className={styles.logo}>
            <img src={kakao} alt="kakao" />
          </span>
          카카오로 시작하기
        </Button>
        <Button color="naver" size="large" style="contained" fullWidth>
          <span className={styles.logo}>
            {" "}
            <img src={naver} alt="naver" />
          </span>
          네이버로 시작하기
        </Button>
      </div>
    </div>
  );
};

SignupForm.propTypes = {
  onComplete: PropTypes.func,
};

export default SignupForm;
