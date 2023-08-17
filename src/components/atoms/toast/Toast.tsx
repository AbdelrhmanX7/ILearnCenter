import React from "react";
import { toast, Toaster } from "react-hot-toast";

export const Toast = () => {
  return (
    <div>
      <Toaster position="bottom-right" />
      <button onClick={() => toast.success("success")}>success</button>
      <button onClick={() => toast.success("error")}>error</button>
    </div>
  );
};

export default Toast;
