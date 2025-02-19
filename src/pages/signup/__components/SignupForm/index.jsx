import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Typography from "../../../../components/common/Typography";
import Input from "../../../../components/common/Input";
import Button from "../../../../components/common/Button";
import styles from "./signup.module.css";
import kakao from "../../../../assets/icons/kakao.svg";
import naver from "../../../../assets/icons/naver.svg";
import { authAPI } from "../../../../services";
// TODO : 스타일링 다시 하기

const SignupForm = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const { username, password, passwordConfirm } = formData;
    setIsValid(
      username.trim() !== "" &&
        password.trim() !== "" &&
        passwordConfirm.trim() !== "" &&
        password === passwordConfirm
    );
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextClick = async () => {
    try {
      if (formData.password !== formData.passwordConfirm) {
        setError("비밀번호가 일치하지 않습니다");
        return;
      }

      const response = await authAPI.signUp({
        username: formData.username,
        password: formData.password,
      });

      if (response.status === 201) {
        localStorage.setItem("userId", response.data.userId);
        props.onComplete && props.onComplete();
      } else {
        setError(response.message || "회원가입 중 오류가 발생했습니다");
      }
    } catch (error) {
      setError(
        error.response?.data?.message || "회원가입 중 오류가 발생했습니다"
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Typography variant="h-b-24">회원가입</Typography>
      </div>

      <div className={styles.inputWrapper}>
        <Input
          name="username"
          placeholder="아이디 입력"
          size="large"
          variant="text-only"
          fullWidth
          value={formData.username}
          onChange={handleChange}
        />
        <Input
          name="password"
          placeholder="비밀번호 입력"
          size="large"
          variant="text-only"
          type="password"
          fullWidth
          value={formData.password}
          onChange={handleChange}
        />
        <Input
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          size="large"
          variant="text-only"
          type="password"
          fullWidth
          value={formData.passwordConfirm}
          onChange={handleChange}
        />
        {error && (
          <Typography variant="c-r-12" style={{ color: "red" }}>
            {error}
          </Typography>
        )}
      </div>

      <div className={styles.buttonWrapper}>
        <Button
          size="large"
          variant="primary"
          fullWidth
          onClick={handleNextClick}
          disabled={!isValid}>
          다음
        </Button>
        <div className={styles.newUserSection}>
          <Typography variant="c-r-12">이미 계정이 있으신가요?</Typography>
          <Typography
            variant="c-sb-12"
            className={styles.signupLink}
            style={{ cursor: "pointer" }}>
            로그인하기
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
