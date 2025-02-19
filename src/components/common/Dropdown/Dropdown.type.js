import PropTypes from "prop-types";

export const DropdownTypes = {
  // 기본 속성
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  // 상태
  disabled: PropTypes.bool,
  error: PropTypes.string,

  // 스타일
  fullWidth: PropTypes.bool,

  // 이벤트 핸들러
  onChange: PropTypes.func,
  onSelect: PropTypes.func,

  // 라벨
  label: PropTypes.string,
};
