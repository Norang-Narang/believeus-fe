import React, { useState } from "react";
import Typography from "../../../../../components/common/Typography";
import Button from "../../../../../components/common/Button";
import styles from "../../SignupLogin.module.css";

const RoleChoice = () => {
    const [selectedRole, setSelectedRole] = useState(null);

    return (
        <div className={styles.container}>
            {/* 환영 메시지 */}
            <div className={styles.welcomeMessage}>
                <Typography className={styles.welcome}>환영합니다!</Typography>
                <Typography className={styles.question}>어떤 역할로 가입하시겠습니까?</Typography>
            </div>
            {/* 역할을 선택하는 버튼 */}
            <div className={styles.roleChoice}>
                <Button
                    color={selectedRole === 'manager' ? 'white' : 'primary'}
                    size="large"
                    style="contained"
                    type="text"
                    onClick={() => setSelectedRole('caregiver')}
                >
                    <Typography 
                        className={styles.roleText}
                        style={{ 
                            color: selectedRole === 'manager' 
                                ? 'var(--color-primary-500)' 
                                : '#fff' 
                        }}
                    >
                        요양보호사로 가입할게요
                    </Typography>
                </Button>

                <Button
                    color={selectedRole === 'caregiver' ? 'white' : 'secondary'}
                    size="large"
                    style="contained"
                    type="text"
                    onClick={() => setSelectedRole('manager')}
                >
                    <Typography 
                        className={styles.roleText}
                        style={{ 
                            color: selectedRole === 'caregiver' 
                                ? 'var(--color-secondary-500)' 
                                : '#fff' 
                        }}
                    >
                        관리자로 가입할게요
                    </Typography>
                </Button>
            </div>

            {/* 확인 버튼 */}
            <Button
                color="primary"
                disabled={!selectedRole}
                size="large"
                style="contained"
                type="text"
            >
                다음
            </Button>
        </div>
    )
}

export default RoleChoice;