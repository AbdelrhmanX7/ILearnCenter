import React from "react";
import Input from "./Input";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Atoms/Input",
  component: Input,
};

function Template(args) {
  return (
    <div className="container">
      <Input {...args} />{" "}
    </div>
  );
}

export const InputCompElement = Template.bind({});
