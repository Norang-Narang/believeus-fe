import React from "react";
import { ButtonTypes } from "./Button.type";
import styles from "./Button.module.css";
import Typography from "../Typography";

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
    const textVariant =
      size === "small" || style === "circle" ? "b-r-16" : "t-sb-20";

    switch (type) {
      case "icon-only":
        return icon;
      case "with-icon":
        return (
          <>
            {icon}
            <Typography variant={textVariant}>{children}</Typography>
          </>
        );
      default:
        return <Typography variant={textVariant}>{children}</Typography>;
    }
  };

  return (
    <button type="button" className={classNames} disabled={disabled} {...rest}>
      {renderContent()}
    </button>
  );
}

Button.propTypes = ButtonTypes;
