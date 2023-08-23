import React, { useRef, useState } from 'react'
import { Button, PasswordInput } from '../../atoms'
import toast from 'react-hot-toast'
import { auth } from '../../../firebase'
import { confirmPasswordReset } from 'firebase/auth'
import { InputRef } from 'antd'
import NotAuthorizedComponent from './NotAuthorizedComponent'
import PasswordChangedSuccessfulComponent from './PasswordChangedSuccessfulComponent'

export const CreateNewPasswordComponent = ({ oobCode, userEmail }) => {
  const [form, setForm] = useState({
    newPassword: '',
    confirmNewPassword: '',
  })
  const [passwordChangedSuccessful, setPasswordChangedSuccessful] =
    useState(false)
  const confirmNewPasswordInputRef = useRef<InputRef>(null)
  const resetPasswordButtonRef = useRef<HTMLButtonElement>(null)

  if (!userEmail?.length) {
    return <NotAuthorizedComponent />
  }

  if (passwordChangedSuccessful) {
    return <PasswordChangedSuccessfulComponent />
  }
  return (
    <div className="w-full flex flex-col justify-between">
      <div className="pb-14">
        <h1 className="w-full text-3xl font-bold text-[#1E232C] ">
          Create new password for {userEmail}
        </h1>
        <p className="text-[#8391A1] font-medium mt-2.5">
          Your new password must be unique from those previously used.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <PasswordInput
            size="large"
            onChange={(event) =>
              setForm({ ...form, newPassword: event.target.value })
            }
            onPressEnter={() => confirmNewPasswordInputRef.current?.focus()}
            placeholder="New Password"
          />
          <PasswordInput
            confirmPassword
            size="large"
            onChange={(event) =>
              setForm({ ...form, confirmNewPassword: event.target.value })
            }
            ref={confirmNewPasswordInputRef}
            placeholder="Confirm Password"
          />
        </div>
        <Button
          onClick={async () => {
            if (!form.newPassword || !form.confirmNewPassword.length) {
              toast.error("New password can't be empty")
            } else if (form.newPassword !== form.confirmNewPassword) {
              toast.error("Confirm new password doesn't match new password")
            } else {
              confirmPasswordReset(auth, oobCode, form.newPassword)
                .then(() => {
                  toast.success('Your password has been changed successfully.')
                  setPasswordChangedSuccessful(true)
                })
                .catch((err) => toast.error(err))
            }
          }}
          ref={resetPasswordButtonRef}
          label="Reset Password"
        />
      </div>
    </div>
  )
}

export default CreateNewPasswordComponent
