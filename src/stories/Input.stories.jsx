import Input from "../components/common/Input";
import React from "react";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    type: "text",
    variant: "only-text",
    props: "Empty",
    size: "large",
    placeholder: "텍스트를 입력하세요",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "tel", "number"],
    },
    variant: {
      control: "select",
      options: ["only-text", "text-with-label"],
    },
    props: {
      control: "select",
      options: ["Empty", "Focused", "Filled", "Error"],
    },
    size: {
      control: "select",
      options: ["small", "large", "Xlarge"],
    },
  },
};

export default meta;

export const Default = {
  args: {
    placeholder: "텍스트를 입력하세요",
  },
};

export const WithLabel = {
  args: {
    variant: "text-with-label",
    label: "라벨",
    placeholder: "텍스트를 입력하세요",
  },
};

export const Password = {
  args: {
    type: "password",
    placeholder: "비밀번호를 입력하세요",
  },
};

export const Email = {
  args: {
    type: "email",
    placeholder: "이메일을 입력하세요",
  },
};

export const Small = {
  args: {
    size: "small",
    placeholder: "작은 입력창",
  },
};

export const Xlarge = {
  args: {
    size: "Xlarge",
    placeholder: "큰 입력창",
  },
};

export const Error = {
  args: {
    props: "Error",
    error: "에러 메시지가 표시됩니다",
    placeholder: "에러 상태",
  },
};

export const Focused = {
  args: {
    props: "Focused",
    placeholder: "포커스 상태",
  },
};

export const Filled = {
  args: {
    props: "Filled",
    placeholder: "입력된 상태",
    value: "입력된 텍스트",
  },
};
