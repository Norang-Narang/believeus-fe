import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Onboarding.module.css";

import logo from "../assets/logo_believeus.png";
import { PATH } from "../constants/path";

const Onboarding = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const timer = setTimeout(() => {
      if (token) {
        navigate(PATH.HOME);
      } else {
        navigate("/login");
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.container}>
      <img src={logo} alt="BelieveUs Logo" className={styles.logo} />
    </div>
  );
};

export default Onboarding;
