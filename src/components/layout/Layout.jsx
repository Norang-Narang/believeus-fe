import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";
import BottomNav from "../common/BottomNav";
import { NAV_ITEMS } from "../../constants/menu";
import { HIDDEN_NAV_PATH } from "../../constants/path";
import TopNav from "../common/TopNav";

const Layout = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(() => {
    const currentPath = location.pathname;
    const currentItem = NAV_ITEMS.find((item) => item.path === currentPath);
    return currentItem?.path || "/home";
  });

  const showNav = !HIDDEN_NAV_PATH.includes(location.pathname);

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
        <TopNav variant="text-with-icon" label="마이페이지" />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      {showNav && (
        <footer className={styles.footer}>
          <BottomNav
            items={NAV_ITEMS}
            activeItem={activeItem}
            onItemClick={handleNavItemClick}
          />
        </footer>
      )}
    </div>
  );
};

export default Layout;
