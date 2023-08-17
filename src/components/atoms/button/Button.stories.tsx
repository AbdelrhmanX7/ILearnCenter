import React from "react";
import Button from "./Button";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Atoms/Button",
  component: Button,
};

function Template(args) {
  return (
    <div className="container">
      <Button {...args} />{" "}
    </div>
  );
}

export const InputCompElement = Template.bind({});
