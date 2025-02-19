import React, { useState, useRef, useEffect } from 'react';
import styles from './Matching.module.css';
import Dropdown from "../../components/common/Dropdown";
import Typography from "../../components/common/Typography";
import Button from "../../components/common/Button";
import homeP from "../../assets/icons/home_p.png";

const ListingPage = () => {
  const [showSalaryModal, setShowSalaryModal] = useState(false);
  const [showWorkHoursModal, setShowWorkHoursModal] = useState(false);
  const [salaryType, setSalaryType] = useState('시급');
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');
  const [selectedStartHour, setSelectedStartHour] = useState('00');
  const [selectedStartMinute, setSelectedStartMinute] = useState('00');
  const [selectedEndHour, setSelectedEndHour] = useState('');
  const [selectedEndMinute, setSelectedEndMinute] = useState('');
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [timePickerType, setTimePickerType] = useState('start'); // 'start' or 'end'
  
  const timePickerRef = useRef(null);
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (timePickerRef.current && !timePickerRef.current.contains(event.target)) {
        setShowTimePicker(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [timePickerRef]);
  
  const workers = [
    { id: 1, name: '홍길동', age: 72, gender: '남', location: '서울 중구', workHours: '8시간', wage: '12,500원' },
    { id: 2, name: '박철수', age: 86, gender: '남', location: '서울 은평구', workHours: '7시간', wage: '13,000원' },
    { id: 3, name: '김준수', age: 82, gender: '남', location: '서울 중구', workHours: '8시간', wage: '12,000원' },
    { id: 4, name: '최영수', age: 81, gender: '남', location: '서울 중구', workHours: '8시간', wage: '13,000원' },
    
  ];

  const salaryOptions = [
    { value: '시급', label: '시급' },
    { value: '월급', label: '월급' }
  ];

  const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));

  const toggleSalaryModal = () => {
    setShowSalaryModal(!showSalaryModal);
    if (showWorkHoursModal) setShowWorkHoursModal(false);
  };

  const toggleWorkHoursModal = () => {
    setShowWorkHoursModal(!showWorkHoursModal);
    if (showSalaryModal) setShowSalaryModal(false);
    setShowTimePicker(false);
  };

  const handleSalaryTypeChange = (value) => {
    setSalaryType(value);
  };

  const openTimePicker = (type) => {
    setTimePickerType(type);
    setShowTimePicker(true);
  };

  const handleTimeSelection = (type, value) => {
    if (timePickerType === 'start') {
      if (type === 'hour') {
        setSelectedStartHour(value);
      } else {
        setSelectedStartMinute(value);
      }
    } else {
      if (type === 'hour') {
        setSelectedEndHour(value);
      } else {
        setSelectedEndMinute(value);
      }
    }
  };

  const confirmTimeSelection = () => {
    setShowTimePicker(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterSection}>
        <div className={styles.filterButtons}>
          <button 
            className={styles.filterButton}
            onClick={toggleSalaryModal}
          >
            <Typography variant="b-r-16">급여</Typography>
            <span className={styles.arrowIcon}>▼</span>
          </button>
          <button className={styles.filterButton}>
            <Typography variant="b-r-16">지역</Typography>
            <span className={styles.arrowIcon}>▼</span>
          </button>
          <button 
            className={styles.filterButton} 
            onClick={toggleWorkHoursModal}
          >
            <Typography variant="b-r-16">근무시간</Typography>
            <span className={styles.arrowIcon}>▼</span>
          </button>
        </div>

        {showSalaryModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <Typography variant="l-sb-12">급여 설정</Typography>
                <button onClick={toggleSalaryModal}>✕</button>
              </div>
              <div className={styles.modalBody}>
                <div className={styles.salaryTypeSelector}>
                  <Dropdown
                    options={salaryOptions}
                    value={salaryType}
                    onChange={handleSalaryTypeChange}
                    placeholder="급여 유형 선택"
                  />
                  <div className={styles.salaryInputs}>
                    <input 
                      type="number" 
                      placeholder="0" 
                      value={minSalary}
                      onChange={(e) => setMinSalary(e.target.value)}
                    />
                    <Typography variant="l-sb-12">-</Typography>
                    <input 
                      type="number" 
                      placeholder="0" 
                      value={maxSalary}
                      onChange={(e) => setMaxSalary(e.target.value)}
                    />
                    <Typography variant="l-sb-12">원</Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showWorkHoursModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <Typography variant="l-sb-12">근무시간 설정</Typography>
                <button onClick={toggleWorkHoursModal}>✕</button>
              </div>
              <div className={styles.modalBody}>
                <div className={styles.timeSelectionContainer}>
                  <div className={styles.timeSelector} onClick={() => openTimePicker('start')}>
                    <Typography variant="l-sb-12">시작</Typography>
                    <div className={styles.selectedTime}>
                      {selectedStartHour || '00'}:{selectedStartMinute || '00'}
                    </div>
                  </div>
                  <Typography variant="l-sb-12" className={styles.timeSeparator}>-</Typography>
                  <div className={styles.timeSelector} onClick={() => openTimePicker('end')}>
                    <Typography variant="l-sb-12">종료</Typography>
                    <div className={styles.selectedTime}>
                      {selectedEndHour || '00'}:{selectedEndMinute || '00'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showTimePicker && (
        <div className={styles.timePickerOverlay}>
            <div className={styles.timePickerContent} ref={timePickerRef}>
            <div className={styles.timePickerHeader}>
                <Typography variant="l-sb-12">
                {timePickerType === 'start' ? '시작' : '종료'}
                </Typography>
            </div>
            <div className={styles.timePickerBody}>
                <div className={styles.timePickerColumns}>
                <div className={styles.timeColumn}>
                    {hours.map((hour) => (
                    <div 
                        key={`hour-${hour}`}
                        className={`${styles.timeOption} ${
                        (timePickerType === 'start' && selectedStartHour === hour) || 
                        (timePickerType === 'end' && selectedEndHour === hour) 
                            ? styles.selectedTimeOption 
                            : ''
                        }`}
                        onClick={() => handleTimeSelection('hour', hour)}
                    >
                        {hour} 
                    </div>
                    ))}
                </div>
                <div className={styles.timeSeparator}>:</div>
                <div className={styles.timeColumn}>
                    {Array.from({ length: 60 }, (_, i) => i).map((minute) => (  // 1분 단위로
                    <div 
                        key={`minute-${minute}`}
                        className={`${styles.timeOption} ${
                        (timePickerType === 'start' && selectedStartMinute === minute) || 
                        (timePickerType === 'end' && selectedEndMinute === minute) 
                            ? styles.selectedTimeOption 
                            : ''
                        }`}
                        onClick={() => handleTimeSelection('minute', minute)}
                    >
                        {minute < 10 ? `0${minute}` : minute}  {/* 00, 01, 02 형식으로 */}
                    </div>
                    ))}
                </div>
                </div>
                <Button 
                color="primary" size="large" style="contained" 
                // className="styles.confirmButton"
                onClick={confirmTimeSelection}
                >
                확인
                </Button>
            </div>
            </div>
        </div>
        )}

      </div>

      <div className={styles.workerList}>
        {workers.map((worker) => (
          <div key={worker.id} className={styles.workerCard}>
            <div className={styles.profileImage}>
              <img src={homeP} alt="프로필" />
            </div>
            <div className={styles.workerInfo}>
              <div className={styles.workerNameAge}>
                <Typography variant="l-sb-12">
                  {worker.name} ({worker.gender}, {worker.age}세)
                </Typography>
              </div>
              <Typography variant="l-sb-12" className={styles.workerLocation}>
                {worker.location}
              </Typography>
            </div>
            <div className={styles.workerEmploymentInfo}>
              <Typography variant="l-sb-12" className={styles.workHours}>
                근무 {worker.workHours}
              </Typography>
              <Typography variant="l-sb-12" className={styles.wage}>
                {salaryType} {worker.wage}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingPage;