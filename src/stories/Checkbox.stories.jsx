import Checkbox from "../components/common/Checkbox";
import React from "react";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    label: "체크박스",
    checked: false,
    onChange: (checked) => console.log("체크박스 상태:", checked),
  },
};

export default meta;

export const Default = {
  args: {
    label: "기본 체크박스",
  },
};

export const Checked = {
  args: {
    label: "체크된 상태",
    checked: true,
  },
};
