import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";
import BottomNav from "../common/BottomNav";
import TopNav from "../common/TopNav";
import { NAV_ITEMS } from "../../constants/menu";
import { routes } from "../../App";

const Layout = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const currentRoute = routes[0]?.children?.find(
    (child) =>
      child.path === location.pathname || `/${child.path}` === location.pathname
  );

  const layoutConfig = currentRoute?.layout || {
    showNav: true,
    showTopNav: true,
  };

  return (
    <div className={styles.container}>
      {layoutConfig.showTopNav && (
        <header className={styles.header}>
          <TopNav {...layoutConfig.topNavProps} />
        </header>
      )}
      <main className={styles.main}>
        <Outlet />
      </main>
      {layoutConfig.showNav && (
        <footer className={styles.footer}>
          <BottomNav
            items={NAV_ITEMS}
            activeItem={activeItem}
            onItemClick={(item) => {
              setActiveItem(item.path);
            }}
          />
        </footer>
      )}
    </div>
  );
};

export default Layout;
