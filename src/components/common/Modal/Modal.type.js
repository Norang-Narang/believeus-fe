import PropTypes from "prop-types";

export const ModalTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["no-button", "one-button", "two-button"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
  primaryButtonLabel: PropTypes.string,
  secondaryButtonLabel: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};
