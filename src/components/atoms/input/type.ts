import { InputProps } from 'antd'

export interface PasswordInputProps extends InputProps {
  confirmPassword?: boolean
}
export interface NormalInputProps extends InputProps {
  label?: string
}
