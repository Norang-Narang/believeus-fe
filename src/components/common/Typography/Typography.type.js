import PropTypes from "prop-types";

export const TypographyTypes = {
  variant: PropTypes.oneOf([
    "h-b-32",
    "h-b-28",
    "h-b-24",
    "h-b-20",
    "h-b-18",
    "h-b-16",
    "t-sb-24",
    "t-sb-20",
    "t-sb-18",
    "t-sb-16",
    "t-sb-14",
    "b-r-24",
    "b-r-20",
    "b-r-18",
    "b-r-16",
    "b-r-14",
    "c-sb-12",
    "l-sb-12",
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
};
