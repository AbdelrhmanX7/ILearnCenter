import React, { useState } from 'react'
import { sendEmailVerification } from 'firebase/auth'
import toast from 'react-hot-toast'
import Image from 'next/image'
import { Button } from '../atoms'
import { auth } from '../../firebase'
export const VerifyEmail = () => {
  const user = auth?.currentUser
  const [timeLeft, setTimeLeft] = useState(0)
  const sendVerificationEmail = () => {
    if (user && timeLeft === 0) {
      sendEmailVerification(user).then(() => {
        toast.success('Email verification sent again!')
        setTimeLeft(5 * 60)
      })
    } else {
      toast.error(
        `You must wait for ${timeLeft}s to be able to send another verification email`
      )
    }
  }

  return (
    <div className="bg-white p-8 shadow-md rounded-md max-w-md mx-6">
      <h2 className="text-2xl font-semibold mb-4">Verify your account</h2>
      <p className="mb-4 text-base">
        Account activation link has been sent to the e-mail address you provided
      </p>
      <Image
        className="mx-auto"
        src={'/gifs/email.gif'}
        alt="email"
        width={120}
        height={120}
      />
      <div className="flex flex-col gap-2 justify-center items-center">
        <p className="text-gray-600">Didn&apos;t get the mail?</p>
        <Button
          onClick={sendVerificationEmail}
          label="Send it again"
          variant="secondary"
          emphasis="medium"
          disabled={timeLeft !== 0}
        />
      </div>
    </div>
  )
}

export default VerifyEmail
