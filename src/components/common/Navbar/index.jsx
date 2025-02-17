import React from "react";
import { NavbarTypes } from "./Navbar.type";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

export default function Navbar({ activeItem, items, onItemClick }) {
  const navigate = useNavigate();

  const handleClick = (item) => {
    onItemClick?.(item);
    navigate(item.path);
  };

  return (
    <nav className={styles.navbar}>
      {items.map((item) => (
        <button
          key={item.id}
          className={`${styles.navItem} ${
            activeItem === item.path ? styles.active : ""
          }`}
          onClick={() => handleClick(item)}>
          {item.icon}
          <span className={styles.label}>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

Navbar.propTypes = NavbarTypes;
