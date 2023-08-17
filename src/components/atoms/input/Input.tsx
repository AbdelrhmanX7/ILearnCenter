import React from "react";
import { Input as AntdInput, InputProps } from "antd";

export const Input = ({ label, ...props }: InputProps & { label?: string }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <p className="font-montserrat-semibold text-black">{label}</p>}
      <AntdInput size="large" allowClear {...props} />
    </div>
  );
};

export default Input;
