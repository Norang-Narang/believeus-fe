import React from "react";
import { ButtonTypes } from "./Button.type";
import styles from "./Button.module.css";

export default function Button({
  type = "text",
  size = "large",
  color = "primary",
  style = "contained",
  icon,
  disabled = false,
  children,
  ...rest
}) {
  const classNames = [
    styles.base,
    styles[`${color}-${style}`],
    styles[size],
    styles[type],
    disabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(" ");

  const renderContent = () => {
    switch (type) {
      case "icon-only":
        return icon;
      case "with-icon":
        return (
          <>
            {icon}
            <span className={styles.label}>{children}</span>
          </>
        );
      default:
        return <span className={styles.label}>{children}</span>;
    }
  };

  return (
    <button type="button" className={classNames} disabled={disabled} {...rest}>
      {renderContent()}
    </button>
  );
}

Button.propTypes = ButtonTypes;
