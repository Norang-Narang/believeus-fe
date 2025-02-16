import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.statusBar}>topNav</div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>bottomNav</footer>
    </div>
  );
};

export default Layout;
