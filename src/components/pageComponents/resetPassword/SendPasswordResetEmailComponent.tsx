import React, { useRef, useState } from 'react'
import { Button, EmailInput } from '../../atoms'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../../firebase'
import toast from 'react-hot-toast'
import Link from 'next/link'

export const SendPasswordResetEmailComponent = () => {
  const [email, setEmail] = useState('')
  const resetPasswordButtonRef = useRef<HTMLButtonElement>(null)

  return (
    <div className="w-full flex flex-col justify-between">
      <div className="pb-14">
        <h1 className="w-full text-3xl font-bold text-[#1E232C] ">
          Forgot Password?
        </h1>
        <p className="text-[#8391A1] font-medium mt-2.5">
          Don&apos;t worry! It occurs. Please enter the email address linked
          with your account.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <EmailInput
          size="large"
          onChange={(event) => setEmail(event.target.value)}
          onPressEnter={() => resetPasswordButtonRef.current?.focus()}
        />
        <Button
          onClick={async () => {
            sendPasswordResetEmail(auth, email)
              .then(() => {
                toast.success('Email sent successfully')
              })
              .catch((err) => toast.error(err))
          }}
          ref={resetPasswordButtonRef}
          label="Send Code"
          className=""
        />
      </div>

      <div className="w-full text-center pt-14">
        <span className="text-[#1E232C] font-medium">
          Remember Password? &nbsp;
        </span>

        <Link href="/login" className="text-[#34caca] font-bold">
          Login
        </Link>
      </div>
    </div>
  )
}

export default SendPasswordResetEmailComponent
