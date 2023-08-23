import React from 'react'
import { InputProps } from 'antd'
import Input from './Input'
import { classNames } from '../../utils'

export const EmailInput = ({ className, size, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Input
        size="large"
        placeholder="Enter your email"
        type="email"
        allowClear
        className={classNames(
          'bg-[#F7F8F9] [&_input]:!bg-[#F7F8F9] h-10 font-medium',
          size === 'large' ? 'h-14' : size === 'middle' && 'h-[46px]',
          className
        )}
        {...props}
      />
    </div>
  )
}

export default EmailInput
