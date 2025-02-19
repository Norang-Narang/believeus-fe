import React, { useState, useRef, useEffect } from "react";
import { DropdownTypes } from "./Dropdown.type";
import styles from "./Dropdown.module.css";
import { IoChevronDown } from "react-icons/io5";
import Typography from "../Typography";

export default function Dropdown({
  placeholder = "선택해주세요",
  options = [],
  value,
  disabled = false,
  error,
  fullWidth = false,
  label,
  onSelect,
  ...rest
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);
  const dropdownRef = useRef(null);

  const classNames = [
    styles.base,
    fullWidth && styles.fullWidth,
    isOpen && styles.open,
    selectedOption && styles.hasValue,
    disabled && styles.disabled,
    error && styles.error,
  ]
    .filter(Boolean)
    .join(" ");

  const handleSelect = (option) => {
    if (option.disabled) return;
    setSelectedOption(option.value);
    onSelect?.(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedLabel = options.find(
    (opt) => opt.value === selectedOption
  )?.label;

  const renderContent = () => {
    return (
      <Typography
        variant="b-r-16"
        className={`${styles.selected} ${
          !selectedLabel ? styles.placeholder : ""
        }`}>
        {selectedLabel || placeholder}
      </Typography>
    );
  };

  return (
    <div className={styles.container} ref={dropdownRef}>
      {label && (
        <Typography variant="l-sb-12" className={styles.label}>
          {label}
        </Typography>
      )}
      {error && (
        <Typography variant="c-sb-12" className={styles.error}>
          {error}
        </Typography>
      )}
      <div
        className={classNames}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        {...rest}>
        {renderContent()}
        <IoChevronDown
          className={`${styles.arrow} ${isOpen ? styles.open : ""}`}
          size={20}
        />
        {isOpen && (
          <ul className={styles.options}>
            {options.map((option) => (
              <li
                key={option.value}
                className={`${styles.option} ${
                  option.value === selectedOption ? styles.selected : ""
                } ${option.disabled ? styles.disabled : ""}`}
                onClick={() => handleSelect(option)}>
                <Typography variant="b-r-16">{option.label}</Typography>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

Dropdown.propTypes = DropdownTypes;
