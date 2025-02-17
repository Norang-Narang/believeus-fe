import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";
import Navbar from "../common/Navbar";
import { NAV_ITEMS } from "../../constants/menu";

const Layout = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(() => {
    const currentPath = location.pathname;
    const currentItem = NAV_ITEMS.find((item) => item.path === currentPath);
    return currentItem?.label || "홈";
  });

  useEffect(() => {
    const currentItem = NAV_ITEMS.find(
      (item) => item.path === location.pathname
    );
    if (currentItem) {
      setActiveItem(currentItem.path);
    }
  }, [location.pathname]);

  const handleNavItemClick = (item) => {
    setActiveItem(item.path);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.statusBar}>topNav</div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <Navbar
          items={NAV_ITEMS}
          activeItem={activeItem}
          onItemClick={handleNavItemClick}
        />
      </footer>
    </div>
  );
};

export default Layout;
