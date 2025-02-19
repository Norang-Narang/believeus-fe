import React from "react";
import Typography from "../../../../components/common/Typography";
import Input from "../../../../components/common/Input";
import Button from "../../../../components/common/Button";
import styles from "./selectRole.module.css";
// TODO : 스타일링 다시 하기

const SelectRole = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Typography variant="h-b-24">환영합니다!</Typography>
      </div>
      <div className={styles.description}>
        <Typography variant="t-sb-18">어떤 역할로 가입하시겠습니까?</Typography>
      </div>
      <div className={styles.roleWrapper}>
        <Button color="primary" size="large" style="outlined" fullwidth>
          요양보호사로 가입할게요
        </Button>
        <Button color="secondary" size="large" style="outlined" fullwidth>
          관리자로 가입할게요
        </Button>
      </div>
      <div className={styles.buttonWrapper}>
        <Button color="primary" size="large" style="contained" fullWidth>
          다음
        </Button>
      </div>
    </div>
  );
};

export default SelectRole;
