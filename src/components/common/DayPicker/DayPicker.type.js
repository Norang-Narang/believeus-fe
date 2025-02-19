import PropTypes from "prop-types";

export const DayPickerTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Date),
  className: PropTypes.string,
};
