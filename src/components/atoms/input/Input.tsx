import React, { forwardRef } from 'react'
import { Input as AntdInput, InputRef } from 'antd'
import { NormalInputProps } from './type'
import { classNames } from '../../utils'

export const Input = forwardRef<InputRef, NormalInputProps>(function Input(
  { label, className, size, ...props }: NormalInputProps,
  ref
) {
  return (
    <div className="flex flex-col gap-2">
      {label && <p className="font-montserrat-semibold text-black">{label}</p>}
      <AntdInput
        ref={ref}
        size="large"
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
})

export default Input
