import PropTypes from "prop-types";

export const StepProgressTypes = {
  totalSteps: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  className: PropTypes.string,
};
