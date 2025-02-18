import React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "../../components/common/Typography";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import styles from "./Login.module.css";
import kakao from "./icons/kakao.svg";
import naver from "./icons/naver.svg";

// TODO : 스타일링 다시 하기

const Login = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Typography variant="h-b-24">로그인</Typography>
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
        <Typography variant="c-r-12" className={styles.forgotIdPw}>
          아이디 / 비밀번호 찾기
        </Typography>
      </div>

      <div className={styles.buttonWrapper}>
        <Button color="primary" size="large" style="contained" fullWidth>
          로그인
        </Button>{" "}
        <div className={styles.newUserSection}>
          <Typography variant="c-r-12">처음 이용하시나요?</Typography>
          <Typography
            variant="c-sb-12"
            className={styles.signupLink}
            onClick={handleSignupClick}
            style={{ cursor: "pointer" }}>
            회원가입하기
          </Typography>
        </div>
      </div>

      <div className={styles.divider}>
        <Typography variant="c-r-12">또는</Typography>
      </div>

      <div className={styles.lowerSection}>
        <Button color="kakao" size="large" style="contained" fullWidth>
          <span className={styles.logo}>
            <img src={kakao} alt="kakao" />
          </span>
          카카오 로그인
        </Button>
        <Button color="naver" size="large" style="contained" fullWidth>
          <span className={styles.logo}>
            {" "}
            <img src={naver} alt="naver" />
          </span>
          네이버 로그인
        </Button>
      </div>
    </div>
  );
};

export default Login;
