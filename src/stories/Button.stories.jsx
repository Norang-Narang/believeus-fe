import Button from "../components/common/Button";
import { IoAdd } from "react-icons/io5";
import React from "react";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "기본 버튼",
    color: "primary",
    style: "contained",
    type: "text",
    size: "large",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "icon-only", "with-icon"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "grayscale"],
    },
    style: {
      control: "select",
      options: ["contained", "outlined", "texted", "circle"],
    },
    size: {
      control: "select",
      options: ["small", "large"],
    },
  },
};

export default meta;

export const Primary = {
  args: {
    children: "기본 버튼",
  },
};

export const Secondary = {
  args: {
    children: "보조 버튼",
    color: "secondary",
  },
};

export const Grayscale = {
  args: {
    children: "그레이스케일 버튼",
    color: "grayscale",
  },
};

export const WithIcon = {
  args: {
    children: "아이콘 버튼",
    type: "with-icon",
    icon: <IoAdd size={12} />,
  },
};

export const IconOnly = {
  args: {
    type: "icon-only",
    style: "outlined",
    icon: <IoAdd size={24} />,
  },
};

export const Small = {
  args: {
    children: "작은 버튼",
    size: "small",
  },
};

export const Disabled = {
  args: {
    children: "비활성화 버튼",
    disabled: true,
  },
};
