import React from "react";
import Layout from "./components/layout/Layout";
import Checkbox from "./components/common/Checkbox";
import Dropdown from "./components/common/Dropdown";
import Input from "./components/common/Input";
import Button from "./components/common/Button";
import { IoAdd } from "react-icons/io5";

function App() {
  return (
    <Layout>
      <h1>Believeus</h1>
      <Checkbox label="체크박스" onChange={() => {}} />
      <Dropdown
        label="드롭다운"
        options={[
          {
            label: "옵션 1",
            value: "option1",
          },
          {
            label: "옵션 2",
            value: "option2",
          },
          {
            label: "옵션 3",
            value: "option3",
          },
        ]}
        onChange={() => {}}
      />
      <Input label="인풋" onChange={() => {}} placeholder="플레이스홀더" />
      <Button color="primary" size="large" onClick={() => {}}>
        버튼1
      </Button>
      <Button
        color="secondary"
        style="outlined"
        size="large"
        onClick={() => {}}>
        버튼2
      </Button>
      <Button
        color="secondary"
        icon={<IoAdd size={24} />}
        size="large"
        style="contained"
        type="icon-only"
      />
    </Layout>
  );
}

export default App;
