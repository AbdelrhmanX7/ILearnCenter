import React from 'react'
import { Button } from '../../atoms'
import Router from 'next/router'

export const PasswordChangedSuccessfulComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-green-500">Password Changed</h1>
      <p className="mt-2 text-gray-600">
        Your password has been changed successfully.
      </p>
      <Button
        label="Back to Login"
        onClick={() => Router.push('/login')}
        className="mt-6"
      />
    </div>
  )
}

export default PasswordChangedSuccessfulComponent
