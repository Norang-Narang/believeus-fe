import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "../../components/common/Typography";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import styles from "./Login.module.css";
import kakao from "../../assets/icons/kakao.svg";
import naver from "../../assets/icons/naver.svg";
import { authAPI } from "../../services";

// TODO : 스타일링 다시 하기

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await authAPI.login(formData);
      if (response.status === 200) {
        navigate("/home");
      }
    } catch (error) {
      setError(error.response?.data?.message || "로그인에 실패했습니다");
    }
  };

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
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="아이디 입력"
          size="large"
          variant="text-only"
          fullWidth
        />
        <Input
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호 입력"
          size="large"
          variant="text-only"
          type="password"
          fullWidth
        />
        {error && (
          <Typography variant="c-r-12" color="error">
            {error}
          </Typography>
        )}
        <Typography variant="c-r-12" className={styles.forgotIdPw}>
          아이디 / 비밀번호 찾기
        </Typography>
      </div>

      <div className={styles.buttonWrapper}>
        <Button
          color="primary"
          size="large"
          style="contained"
          fullWidth
          onClick={handleLogin}>
          로그인
        </Button>
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
            <img src={naver} alt="naver" />
          </span>
          네이버 로그인
        </Button>
      </div>
    </div>
  );
};

export default Login;
