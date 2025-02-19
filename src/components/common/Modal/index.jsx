import React from "react";
import styles from "./Modal.module.css";
import Typography from "../Typography";
import Button from "../Button";
import { IoClose } from "react-icons/io5";
import { ModalTypes } from "./Modal.type";

const Modal = ({
  isOpen,
  onClose,
  children,
  variant = "one-button",
  color = "primary",
  primaryButtonLabel = "확인",
  secondaryButtonLabel = "취소",
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  const renderFooter = () => {
    switch (variant) {
      case "no-button":
        return null;
      case "one-button":
        return (
          <Button
            color={color}
            size="large"
            style="contained"
            fullWidth
            onClick={onConfirm || onClose}>
            {primaryButtonLabel}
          </Button>
        );
      case "two-button":
        return (
          <div className={styles.twoButtonWrapper}>
            <Button
              color="primary"
              size="large"
              style="outlined"
              onClick={onCancel || onClose}>
              {secondaryButtonLabel}
            </Button>
            <Button
              color={color}
              size="large"
              style="contained"
              onClick={onConfirm}>
              {primaryButtonLabel}
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <IoClose size={24} />
        </button>
        <div className={styles.content}>
          <Typography variant="b-r-16">{children}</Typography>
        </div>
        {variant !== "no-button" && (
          <div className={styles.footer}>{renderFooter()}</div>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = ModalTypes;

export default Modal;
