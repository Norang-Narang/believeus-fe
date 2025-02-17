import PropTypes from "prop-types";

export const InputTypes = {
  type: PropTypes.oneOf(["text", "password", "email", "tel", "number"]),
  variant: PropTypes.oneOf(["only-text", "text-with-label"]),
  props: PropTypes.oneOf(["Empty", "Focused", "Filled", "Error"]),
  size: PropTypes.oneOf(["small", "large", "Xlarge"]),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};
