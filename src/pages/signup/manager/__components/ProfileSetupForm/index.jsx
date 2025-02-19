import React, { useState } from "react";
import Typography from "../../../../../components/common/Typography";
import Input from "../../../../../components/common/Input";
import Checkbox from "../../../../../components/common/Checkbox";
import Button from "../../../../../components/common/Button";
import styles from "../../SignupManager.module.css";
import Dropdown from "../../../../../components/common/Dropdown";
import ImageUpload from "../../../../../components/common/ImageUpload";
import StepProgress from "../../../../../components/common/StepProgress";
import { STEPS } from "../..";

const ProfileSetupForm = ({ onNext, data = {}, currentStep }) => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageSelect = (imageUrl) => {
    setProfileImage(imageUrl);
  };

  const handleNext = () => {
    onNext({
      profileImageUrl: profileImage,
    });
  };

  return (
    <div className={styles.container}>
      <Typography variant="h-b-24" className={styles.title}>
        프로필 등록
      </Typography>
      <div className={styles.description}>
        <Typography variant="t-sb-18">프로필 사진을 선택해주세요</Typography>
        <Typography variant="t-sb-18" className={styles.required}>
          (선택)
        </Typography>
      </div>
      <div className={styles.profileWrapper}>
        <ImageUpload
          onImageSelect={handleImageSelect}
          imageUrl={profileImage}
        />
        <Typography variant="t-sb-24">{data.name || ""}</Typography>
      </div>
      <div className={styles.buttonWrapper}>
        <StepProgress
          totalSteps={Object.keys(STEPS).length}
          currentStep={currentStep}
        />
        <Button size="large" variant="primary" fullWidth onClick={handleNext}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default ProfileSetupForm;
