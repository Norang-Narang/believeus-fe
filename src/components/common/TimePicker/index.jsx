import React, { useState, useRef } from "react";
import Input from "../Input";
import Button from "../Button";
import styles from "./TimePicker.module.css";

const TimePicker = ({ label, placeholder, onChange, value, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState("00");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const inputRef = useRef(null);

  const hours = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, "0")
  );

  const minutes = ["00", "30"];

  const handleTimeConfirm = () => {
    const timeString = `${selectedHour}:${selectedMinute}`;
    onChange(timeString);
    setIsOpen(false);
  };

  const handleInputClick = () => {
    setIsOpen(!isOpen);
    if (value) {
      const [hour, minute] = value.split(":");
      setSelectedHour(hour);
      setSelectedMinute(minute);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.container}>
      <Input
        ref={inputRef}
        type="text"
        label={label}
        placeholder={placeholder}
        value={value || ""}
        onClick={handleInputClick}
        readOnly
        variant="text-with-label"
        size="large"
        fullWidth
      />
      {isOpen && (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
          <div className={styles.modalContent}>
            <div className={styles.timePickerContent}>
              <div className={styles.timeColumn}>
                <div className={styles.columnTitle}>시</div>
                <div className={styles.timeList}>
                  {hours.map((hour) => (
                    <button
                      key={hour}
                      className={`${styles.timeButton} ${
                        selectedHour === hour ? styles.selected : ""
                      }`}
                      onClick={() => setSelectedHour(hour)}>
                      {hour}
                    </button>
                  ))}
                </div>
              </div>
              <div className={styles.timeColumn}>
                <div className={styles.columnTitle}>분</div>
                <div className={styles.timeList}>
                  {minutes.map((minute) => (
                    <button
                      key={minute}
                      className={`${styles.timeButton} ${
                        selectedMinute === minute ? styles.selected : ""
                      }`}
                      onClick={() => setSelectedMinute(minute)}>
                      {minute}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.confirmButton}>
              <Button
                variant="primary"
                size="large"
                fullWidth
                onClick={handleTimeConfirm}>
                확인
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimePicker;
