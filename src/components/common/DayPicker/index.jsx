import React, { useState, useRef } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import Input from "../Input";
import styles from "./DayPicker.module.css";
import "react-day-picker/dist/style.css";

const DatePicker = ({ label, placeholder, onChange, value, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const handleDaySelect = (date) => {
    if (date) {
      onChange(date);
      setIsOpen(false);
    }
  };

  const handleInputClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <Input
        ref={inputRef}
        type="text"
        label={label}
        placeholder={placeholder}
        value={value ? format(value, "yyyy.MM.dd", { locale: ko }) : ""}
        onClick={handleInputClick}
        readOnly
        variant="text-with-label"
        size="large"
        fullWidth
      />
      {isOpen && (
        <div className={styles.calendarWrapper}>
          <DayPicker
            mode="single"
            selected={value}
            onSelect={handleDaySelect}
            locale={ko}
            hideNavigation
            captionLayout="dropdown"
            modifiers={{
              selected: value,
            }}
            modifiersStyles={{
              selected: {
                backgroundColor: "transparent",
                color: "black",
                fontWeight: "400",
                fontSize: "14px",
                borderRadius: "100%",
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
