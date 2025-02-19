import React from "react";
import { IoChevronBack } from "react-icons/io5";

import { BrowserRouter } from "react-router-dom";
import TopNav from "../components/common/TopNav";

const meta = {
  title: "Components/TopNav",
  component: TopNav,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  args: {
    variant: "only-icon",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["only-text", "only-icon", "text-with-icon"],
    },
    icon: {
      control: "none",
    },
    label: {
      control: "text",
    },
  },
};

export default meta;

export const OnlyIcon = {
  args: {
    variant: "only-icon",
  },
};

export const OnlyText = {
  args: {
    variant: "only-text",
    label: "페이지 제목",
  },
};

export const TextWithIcon = {
  args: {
    variant: "text-with-icon",
    label: "페이지 제목",
    icon: <IoChevronBack size={24} />,
  },
};
