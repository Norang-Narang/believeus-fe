import PropTypes from "prop-types";

export const ButtonTypes = {
  type: PropTypes.oneOf(["text", "icon-only", "with-icon"]),
  size: PropTypes.oneOf(["small", "large", "icon-small"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "grayscale",
    "kakao",
    "naver",
  ]),
  style: PropTypes.oneOf(["contained", "outlined", "texted", "circle"]),
  icon: PropTypes.element,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};
