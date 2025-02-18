import React from "react";
import { TopNavTypes } from "./TopNav.type";
import styles from "./TopNav.module.css";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Typography from "../Typography";

export default function TopNav({ variant = "only-icon", icon, label }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const renderContent = () => {
    switch (variant) {
      case "only-icon":
        return (
          <button className={styles.iconButton} onClick={handleBackClick}>
            <IoChevronBack size={18} />
          </button>
        );
      case "only-text":
        return (
          <div className={styles.label}>
            <Typography variant="h-b-18" component="h1">
              {label}
            </Typography>
          </div>
        );
      case "text-with-icon":
        return (
          <>
            <button className={styles.iconButton} onClick={handleBackClick}>
              {icon || <IoChevronBack size={18} />}
            </button>
            <div className={styles.label}>
              <Typography variant="h-b-18" component="h1">
                {label}
              </Typography>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return <nav className={styles.topNav}>{renderContent()}</nav>;
}

TopNav.propTypes = TopNavTypes;
