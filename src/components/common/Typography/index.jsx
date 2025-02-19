import React from "react";
import { TypographyTypes } from "./Typography.type";
import styles from "./Typography.module.css";

export default function Typography({
  variant = "b-r-16",
  children,
  className,
  ...props
}) {
  return (
    <span className={`${styles[variant]} ${className || ""}`} {...props}>
      {children}
    </span>
  );
}

Typography.propTypes = TypographyTypes;
