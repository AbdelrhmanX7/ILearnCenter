import React, { forwardRef } from 'react'
import { Input, InputRef } from 'antd'
import { MdLock } from 'react-icons/md'
import { PasswordInputProps } from './type'
export const PasswordInput = forwardRef<InputRef, PasswordInputProps>(
  function PasswordInput(
    { confirmPassword = false, ...props }: PasswordInputProps,
    ref
  ) {
    return (
      <div className="flex flex-col gap-2">
        <p className="font-montserrat-semibold text-black">
          {confirmPassword ? 'Confirm Password' : 'Password'}
        </p>
        <Input.Password
          size="large"
          placeholder="Password"
          prefix={<MdLock className="w-5 h-5" />}
          allowClear
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)

export default PasswordInput
