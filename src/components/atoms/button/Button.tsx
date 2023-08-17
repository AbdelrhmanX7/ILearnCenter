import React from "react";
import { classNames } from "../../utils";
import { ButtonPropsType } from "./type";
import { generateButtonStyle } from "./utils";

export const Button = ({
  label = "",
  variant = "primary",
  danger = false,
  emphasis = "high",
  icon,
  className,
  isLoading = false,
  disabled,
  ...props
}: ButtonPropsType) => {
  return (
    <button
      className={classNames(
        "py-2.5 px-4 duration-300 hover:opacity-80 text-white rounded-lg !font-medium min-w-[40px] min-h-[46px] cursor-pointer border border-solid shadow-[0,1px,2px,0,_rgba(0,0,0,0.05)]",
        icon && "!px-3",
        generateButtonStyle({ emphasis, variant, danger }),
        (disabled || isLoading) && "!cursor-not-allowed",
        disabled && "!opacity-70",
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      <div className="flex justify-center items-center gap-3">
        {isLoading ? (
          <div
            className={classNames(
              "custom-loader",
              (danger || variant === "secondary") &&
                emphasis !== "medium" &&
                "white"
            )}
          />
        ) : (
          <>
            {label && label}
            {icon && <div className="[&_svg]:!w-6 [&_svg]:!h-6">{icon}</div>}
          </>
        )}
      </div>
    </button>
  );
};

export default Button;
