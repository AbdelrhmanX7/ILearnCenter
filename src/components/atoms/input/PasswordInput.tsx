import React, { forwardRef } from 'react'
import { Input, InputRef } from 'antd'
import { PasswordInputProps } from './type'
import { classNames } from '../../utils'
export const PasswordInput = forwardRef<InputRef, PasswordInputProps>(
  function PasswordInput(
    { confirmPassword = false, className, size, ...props }: PasswordInputProps,
    ref
  ) {
    return (
      <div className="flex flex-col gap-2">
        <Input.Password
          placeholder={`Enter your ${
            confirmPassword ? 'confirm password' : 'password'
          }`}
          type="password"
          allowClear
          className={classNames(
            'bg-[#F7F8F9] [&_input]:!bg-[#F7F8F9] font-medium',
            size === 'large' ? 'h-14' : size === 'middle' && 'h-[46px]',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)

export default PasswordInput
