import React from "react";
import { Input, InputProps } from "antd";
import { MdLock } from "react-icons/md";
export const PasswordInput = ({ ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-montserrat-semibold text-black">Password</p>
      <Input.Password
        size="large"
        placeholder="password"
        prefix={<MdLock className="w-5 h-5" />}
        allowClear
        {...props}
      />
    </div>
  );
};

export default PasswordInput;
