import React from "react";
import Link from "./Link";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Atoms/Link",
  component: Link,
};

function Template(args) {
  return (
    <div className="container">
      <Link {...args} />{" "}
    </div>
  );
}

export const InputCompElement = Template.bind({});
