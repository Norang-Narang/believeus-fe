import React from "react";
import Modal from "../components/common/Modal";

const meta = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  args: {
    isOpen: true,
    children: "Modal Text AAA",
    variant: "one-button",
    color: "primary",
    primaryButtonLabel: "확인",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["no-button", "one-button", "two-button"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary"],
    },
  },
};

export default meta;

export const NoButton = {
  args: {
    variant: "no-button",
    children: "Modal Text AAA",
  },
};

export const OneButton = {
  args: {
    variant: "one-button",
    primaryButtonLabel: "확인",
    children: "Modal Text AAA",
  },
};

export const TwoButton = {
  args: {
    variant: "two-button",
    primaryButtonLabel: "확인",
    secondaryButtonLabel: "취소",
    children: "Modal Text AAA",
  },
};
