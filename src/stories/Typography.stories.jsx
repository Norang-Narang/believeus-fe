import React from "react";
import Typography from "../components/common/Typography";

const meta = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
  args: {
    children: "텍스트",
    variant: "h-b-32",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
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
      ],
    },
  },
};

export default meta;

// Headings
export const HeadingBold32 = {
  args: {
    variant: "h-b-32",
    children: "Heading Bold 32",
  },
};

export const HeadingBold28 = {
  args: {
    variant: "h-b-28",
    children: "Heading Bold 28",
  },
};

export const HeadingBold24 = {
  args: {
    variant: "h-b-24",
    children: "Heading Bold 24",
  },
};

// Titles
export const TitleSemibold24 = {
  args: {
    variant: "t-sb-24",
    children: "Title Semibold 24",
  },
};

export const TitleSemibold20 = {
  args: {
    variant: "t-sb-20",
    children: "Title Semibold 20",
  },
};

// Body Text
export const BodyRegular20 = {
  args: {
    variant: "b-r-20",
    children: "Body Regular 20",
  },
};

export const BodyRegular16 = {
  args: {
    variant: "b-r-16",
    children: "Body Regular 16",
  },
};

// Caption & Label
export const CaptionSemibold12 = {
  args: {
    variant: "c-sb-12",
    children: "Caption Semibold 12",
  },
};

export const LabelSemibold12 = {
  args: {
    variant: "l-sb-12",
    children: "Label Semibold 12",
  },
};
