import PropTypes from "prop-types";
import { PATH } from "../../../constants/path";

export const BottomNavTypes = {
  activeItem: PropTypes.oneOf(Object.values(PATH)),

  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),

  onItemClick: PropTypes.func,
};
