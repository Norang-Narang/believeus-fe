import React, { useState } from "react";
import Typography from "../../../../components/common/Typography";
import Button from "../../../../components/common/Button";
import styles from "./selectRole.module.css";
import { useNavigate } from "react-router-dom";

const SelectRole = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleNext = () => {
    if (selectedRole === "manager") {
      navigate("/signup/manager");
    } else if (selectedRole === "center") {
      navigate("/signup/center");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Typography variant="h-b-24">환영합니다!</Typography>
      </div>
      <div className={styles.description}>
        <Typography variant="t-sb-18">어떤 역할로 가입하시겠습니까?</Typography>
      </div>
      <div className={styles.roleWrapper}>
        <Button
          color="primary"
          size="large"
          style="outlined"
          fullWidth
          onClick={() => handleRoleSelect("manager")}>
          요양보호사로 가입할게요
        </Button>
        <Button
          color="secondary"
          size="large"
          style="outlined"
          fullWidth
          onClick={() => handleRoleSelect("center")}>
          관리자로 가입할게요
        </Button>
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          color="primary"
          size="large"
          style="contained"
          fullWidth
          onClick={handleNext}
          disabled={!selectedRole}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default SelectRole;
