import React, { useState } from "react";
import Typography from "../../../../../components/common/Typography";
import Input from "../../../../../components/common/Input";
import Checkbox from "../../../../../components/common/Checkbox";
import Button from "../../../../../components/common/Button";
import styles from "../../SignupCenter.module.css";
import Dropdown from "../../../../../components/common/Dropdown";
import StepProgress from "../../../../../components/common/StepProgress";
import { STEPS } from "../..";
import DatePicker from "../../../../../components/common/DayPicker";
import TimePicker from "../../../../../components/common/TimePicker";

const OptionalCenterForm = ({ onNext, data = {}, currentStep }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [centerGrade, setCenterGrade] = useState("");
  const [introduction, setIntroduction] = useState("");

  console.log("Dropdown 현재 값:", centerGrade);

  const handleDropdownSelect = (option) => {
    console.log("선택된 옵션:", option);
    setCenterGrade(option.value);
  };

  const handleIntroductionChange = (e) => {
    setIntroduction(e.target.value);
  };

  const handleNext = () => {
    console.log("Next 버튼 클릭시 centerGrade:", centerGrade);
    const operatingPeriod = `${selectedDate} ${startTime}-${endTime}`;
    const submitData = {
      centerGrade,
      operatingPeriod,
      introduction,
    };
    console.log("제출되는 데이터:", submitData);
    onNext(submitData);
  };

  return (
    <div className={styles.container}>
      <Typography variant="h-b-24" className={styles.title}>
        센터정보 등록
      </Typography>
      <div className={styles.description}>
        <Typography variant="t-sb-18">아래 정보를 입력해주세요</Typography>
        <Typography variant="t-sb-18" className={styles.required}>
          (선택)
        </Typography>
      </div>
      <Dropdown
        options={[
          { label: "1등급", value: "1" },
          { label: "2등급", value: "2" },
          { label: "3등급", value: "3" },
          { label: "4등급", value: "4" },
          { label: "5등급", value: "5" },
        ]}
        placeholder="센터 등급"
        value={centerGrade}
        onSelect={handleDropdownSelect}
      />
      <div className={styles.inputWrapper}>
        <DatePicker
          label="설립 일자"
          placeholder="yyyy-mm-dd"
          value={selectedDate}
          onChange={setSelectedDate}
        />
        <div className={styles.timeRangeWrapper}>
          <TimePicker
            label="운영 시작 시간"
            placeholder="시작 시간"
            value={startTime}
            onChange={setStartTime}
          />
          <div className={styles.timeRangeDivider}>-</div>
          <TimePicker
            label="운영 종료 시간"
            placeholder="종료 시간"
            value={endTime}
            onChange={setEndTime}
          />
        </div>
        <Input
          name="introduction"
          value={introduction}
          onChange={handleIntroductionChange}
          size="Xlarge"
          type="text"
          variant="text-with-label"
          label="센터 소개"
          placeholder="한 줄 소개를 입력해주세요"
          fullWidth
        />
      </div>
      <div className={styles.buttonWrapper}>
        <StepProgress
          totalSteps={Object.keys(STEPS).length}
          currentStep={currentStep}
        />
        <Button size="large" variant="primary" fullWidth onClick={handleNext}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default OptionalCenterForm;
