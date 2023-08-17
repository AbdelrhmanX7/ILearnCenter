import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { Button } from "../button";

export const Toast = () => {
  return (
    <div>
      <Toaster position="bottom-right" />
      <Button onClick={() => toast.success("success")} label="Success" />
      <Button onClick={() => toast.error("error")} label="error" danger />
    </div>
  );
};

export default Toast;
