import { StepProgressTypes } from "./StepProgress.type";
import styles from "./StepProgress.module.css";

export default function StepProgress({ totalSteps, currentStep, className }) {
  return (
    <div className={`${styles.container} ${className || ""}`}>
      {[...Array(totalSteps)].map((_, index) => (
        <div key={index} className={styles.stepWrapper}>
          <div
            className={`${styles.step} ${
              index === currentStep
                ? styles.current
                : index < currentStep
                ? styles.completed
                : styles.upcoming
            }`}
          />
          {index < totalSteps - 1 && <div className={styles.connector} />}
        </div>
      ))}
    </div>
  );
}

StepProgress.propTypes = StepProgressTypes;
