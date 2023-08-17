import React from "react";
import { Input, InputProps } from "antd";
import { UserOutlined } from "@ant-design/icons";

export const EmailInput = ({ ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-montserrat-semibold text-black">Email</p>
      <Input
        size="large"
        placeholder="large size"
        type="email"
        prefix={<UserOutlined />}
        allowClear
        {...props}
      />
    </div>
  );
};

export default EmailInput;
