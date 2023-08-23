import React from 'react'
import { Button } from '../../atoms'
import Router from 'next/router'

const NotAuthorizedComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-red-500">Not Authorized</h1>
      <p className="mt-2 text-gray-600">
        Oops! The provided code is not valid.
      </p>
      <Button
        label="Back to Login"
        onClick={() => Router.push('/login')}
        className="mt-6"
      />
    </div>
  )
}

export default NotAuthorizedComponent
