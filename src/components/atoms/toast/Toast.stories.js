import React from "react";
import Toast from "./Toast";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Atoms/Toast",
  component: Toast,
};

function Template(args) {
  return (
    <div className="container">
      <Toast {...args} />{" "}
    </div>
  );
}

export const InputCompElement = Template.bind({});
