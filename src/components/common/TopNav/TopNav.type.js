import PropTypes from "prop-types";

export const TopNavTypes = {
  variant: PropTypes.oneOf(["only-text", "only-icon", "text-with-icon"]),
  icon: PropTypes.element,
  label: PropTypes.string,
};
