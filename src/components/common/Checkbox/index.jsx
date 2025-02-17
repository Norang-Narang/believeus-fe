import React, { useState } from "react";
import { CheckboxTypes } from "./Checkbox.type";
import styles from "./Checkbox.module.css";
import { IoCheckmarkSharp } from "react-icons/io5";

export default function Checkbox({
  label,
  checked: externalChecked = false,
  onChange,
  ...rest
}) {
  const [isChecked, setIsChecked] = useState(externalChecked);

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  const classNames = [styles.checkbox, isChecked && styles.checked]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.input}
          checked={isChecked}
          onChange={handleChange}
          {...rest}
        />
        <div className={classNames}>
          {isChecked && <IoCheckmarkSharp className={styles.icon} size={24} />}
        </div>
        {label && <span className={styles.text}>{label}</span>}
      </label>
    </div>
  );
}

Checkbox.propTypes = CheckboxTypes;
