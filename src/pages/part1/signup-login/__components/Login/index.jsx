import React from "react";
import Typography from "../../../../../components/common/Typography";
import Input from "../../../../../components/common/Input";
import Button from "../../../../../components/common/Button";
import styles from "../../SignupLogin.module.css";
import kakao from "../../icons/kakao.svg";
import naver from "../../icons/naver.svg";

// TODO : 스타일링 다시 하기

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <Typography variant="h-b-24" className={styles.title}>로그인</Typography>
                <div className={styles.formWrapper}>
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
                <Button
                    color="primary"
                    disabled
                    size="large"
                    style="contained"
                    fullWidth
                >
                    로그인
                </Button>
            </div>

            <div className={styles.newUserSection}>
                <Typography variant="c-r-12">
                    처음 이용하시나요?
                </Typography>
                <Typography variant="c-sb-12" className={styles.signupLink}>
                    회원가입하기
                </Typography>
            </div>

            <div className={styles.divider}>
                <Typography variant="c-r-12">또는</Typography>
            </div>

            <div className={styles.lowerSection}>
                <Button
                    style={{
                        backgroundColor: '#FEE500',
                        color: '#000000',
                        gap: '8px'
                    }}
                    size="large"
                    fullWidth
                >
                    <img src={kakao} alt="kakao" />
                    카카오 로그인
                </Button>
                <Button
                    style={{
                        backgroundColor: '#03C75A',
                        color: '#FFFFFF',
                        gap: '8px'
                    }}
                    size="large"
                    fullWidth
                >
                    <img src={naver} alt="naver" />
                    네이버 로그인
                </Button>
            </div>
        </div>
    )
}

export default Login;