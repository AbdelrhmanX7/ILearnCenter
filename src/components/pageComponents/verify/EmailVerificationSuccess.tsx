import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

export const EmailVerificationSuccess = () => {
  const router = useRouter()
  const [countdown, setCountdown] = useState(3)
  const [init, setInit] = useState(false)
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1)
    }, 1000)

    setTimeout(() => {
      clearInterval(timer)
      toast.dismiss()
      setTimeout(() => {
        router.push('/home')
      }, 2000)
    }, 3000)

    return () => {
      clearInterval(timer)
    }
  }, [router])

  useEffect(() => {
    if (init) {
      toast(
        () => (
          <div>
            <p>Redirecting to the home page in {countdown} seconds...</p>
          </div>
        ),
        {
          duration: 3000,
          position: 'top-center',
          icon: '🕒',
        }
      )
    } else {
      setInit(true)
    }
  }, [countdown, init])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          Email Verification Successful
        </h2>
        <p className="mb-4">
          Thank you for verifying your email address. Your account has been
          successfully verified. You can now enjoy the full benefits of your
          account.
        </p>
        <Image
          className="mx-auto"
          src={'/gifs/verified.gif'}
          alt="email"
          width={60}
          height={60}
        />
      </div>
    </div>
  )
}

export default EmailVerificationSuccess
