import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { EmailVerificationSuccess, VerifyEmail } from '../components/verify'
const VerifyEmailComponent = () => {
  const [isEmailVerified, setIsEmailVerified] = useState(false)
  useEffect(() => {
    const verifyChecker = auth.onAuthStateChanged((user) => {
      setIsEmailVerified(user?.emailVerified || false)
    })

    return () => {
      verifyChecker()
    }
  }, [])
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {isEmailVerified ? <EmailVerificationSuccess /> : <VerifyEmail />}
    </div>
  )
}

export default VerifyEmailComponent
