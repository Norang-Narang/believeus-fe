import React, { useState, useEffect } from "react";
import styles from "./Mypage.module.css";

import { IoChevronForward } from "react-icons/io5";
import Typography from "../../components/common/Typography";
import Button from "../../components/common/Button";
import Modal from "../../components/common/Modal";
import ImageUpload from "../../components/common/ImageUpload";
import Input from "../../components/common/Input";

const Mypage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener("openEditModal", handleOpenModal);

    return () => {
      window.removeEventListener("openEditModal", handleOpenModal);
    };
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmEdit = () => {
    // TODO: 수정 로직 구현
    setIsModalOpen(false);
  };

  const userInfo = {
    name: "황성민",
    phone: "010-1234-5678",
    certNumber: "1234-1234567",
  };

  const menuItems = [
    { id: 1, title: "근무 가능 지역/시간 설정", path: "/work-settings" },
    { id: 2, title: "비밀번호 변경", path: "/change-password" },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.profileSection}>
          <div className={styles.profileImage}>
            <img src="/default-profile.png" alt="프로필" />
          </div>
          <Typography variant="h-b-24" className={styles.userName}>
            {userInfo.name}
          </Typography>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.infoSection}>
          <div className={styles.infoItem}>
            <Typography variant="b-r-16" className={styles.label}>
              전화번호
            </Typography>
            <Typography variant="b-r-16">{userInfo.phone}</Typography>
          </div>
          <div className={styles.certWrapper}>
            <Typography variant="b-r-16" className={styles.label}>
              자격증번호
            </Typography>
            <Typography variant="b-r-16">{userInfo.certNumber}</Typography>
          </div>{" "}
          <div className={styles.careerWrapper}>
            <Typography variant="b-r-16" className={styles.label}>
              경력
            </Typography>
            <Button color="primary" size="small" style="circle">
              경력 보기
            </Button>
          </div>
        </div>{" "}
        <div className={styles.divider}></div>
        <div className={styles.menuSection}>
          {menuItems.map((item) => (
            <button key={item.id} className={styles.menuItem}>
              <Typography variant="b-r-16">{item.title}</Typography>
              <IoChevronForward size={24} className={styles.icon} />
            </button>
          ))}
          <div className={styles.divider}></div>
          <button className={styles.menuItem}>
            <Typography variant="b-r-16">로그아웃</Typography>{" "}
            <IoChevronForward size={24} className={styles.icon} />
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        variant="one-button"
        color="primary"
        primaryButtonLabel="수정하기"
        secondaryButtonLabel="취소"
        onConfirm={handleConfirmEdit}
        onCancel={handleCloseModal}>
        <div className={styles.modalContent}>
          <ImageUpload />
          <Input
            variant="text-with-label"
            label="이름"
            placeholder="이름을 입력해주세요."
          />
          <Input
            variant="text-with-label"
            label="자격증번호"
            placeholder="자격증번호를 입력해주세요."
          />
          <Input
            variant="text-with-label"
            label="전화번호"
            placeholder="전화번호를 입력해주세요."
            fullWidth
          />
        </div>
      </Modal>
    </>
  );
};

export default Mypage;
