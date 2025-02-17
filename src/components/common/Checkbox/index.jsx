import React, { useState } from "react";
import { CheckboxTypes } from "./Checkbox.type";
import styles from "./Checkbox.module.css";
import { IoCheckmarkSharp } from "react-icons/io5";
import Typography from "../Typography";

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
        {label && <Typography variant="c-sb-12">{label}</Typography>}
      </label>
    </div>
  );
}

Checkbox.propTypes = CheckboxTypes;
