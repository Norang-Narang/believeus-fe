import React from "react";
import Typography from "../../../../../components/common/Typography";
import Input from "../../../../../components/common/Input";
import Checkbox from "../../../../../components/common/Checkbox";
import Button from "../../../../../components/common/Button";
import styles from "../../SignupLogin.module.css"

const Signup = () => {
    return (
        <div className={styles.container}>
            <Typography variant="h-b-24" className={styles.title}>
                회원가입
            </Typography>
        </div>
    )
}

export default Signup;