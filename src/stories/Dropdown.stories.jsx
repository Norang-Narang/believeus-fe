import Dropdown from "../components/common/Dropdown";
import React from "react";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  args: {
    placeholder: "선택해주세요",
    options: [
      { value: "option1", label: "옵션 1" },
      { value: "option2", label: "옵션 2" },
      { value: "option3", label: "옵션 3" },
      { value: "option4", label: "옵션 4", disabled: true },
    ],
  },
};

export default meta;

export const Default = {
  args: {
    placeholder: "선택해주세요",
  },
};

export const WithLabel = {
  args: {
    label: "라벨",
    placeholder: "선택해주세요",
  },
};

export const WithError = {
  args: {
    error: "에러가 발생했습니다",
    placeholder: "에러 상태",
  },
};

export const Disabled = {
  args: {
    disabled: true,
    placeholder: "비활성화 상태",
  },
};

export const FullWidth = {
  args: {
    fullWidth: true,
    placeholder: "전체 너비",
  },
};
