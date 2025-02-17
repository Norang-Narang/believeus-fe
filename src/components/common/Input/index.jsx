import React from "react";
import { InputTypes } from "./Input.type";
import styles from "./Input.module.css";

export default function Input({
  type = "text",
  variant = "only-text",
  props = "Empty",
  size = "large",
  placeholder,
  label,
  error,
  ...rest
}) {
  const classNames = [styles.base, styles[variant], styles[props], styles[size]]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.container}>
      {variant === "text-with-label" && (
        <label className={styles.label}>{label}</label>
      )}
      {size === "Xlarge" ? (
        <textarea className={classNames} placeholder={placeholder} {...rest} />
      ) : (
        <input
          type={type}
          className={classNames}
          placeholder={placeholder}
          {...rest}
        />
      )}
      {props === "Error" && error && (
        <span className={styles.error}>{error}</span>
      )}
    </div>
  );
}

Input.propTypes = InputTypes;
