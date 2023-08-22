import React, { useState } from 'react'
import PasswordInput from '../components/atoms/input/PasswordInput'
import EmailInput from '../components/atoms/input/EmailInput'
import { Button } from '../components/atoms'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import toast from 'react-hot-toast'
import Link from 'next/link'
export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-[550px] sm:px-10 sm:py-20 py-10 px-5 mx-5 rounded-xl border shadow-md">
        <div className="w-full flex flex-col justify-between">
          <h1 className="w-full text-[#555555] text-center text-4xl pb-10 font-montserrat font-medium">
            Sign In With
          </h1>

          <div className="flex flex-col gap-6">
            <EmailInput
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
            />
            <PasswordInput
              onChange={(event) =>
                setForm({ ...form, password: event.target.value })
              }
            />
            <Button
              onClick={async () => {
                signInWithEmailAndPassword(auth, form.email, form.password)
                  .then(() => {
                    toast.success('Logged in successfully')
                  })
                  .catch((err) => toast.error(err))
              }}
              label="Sign In"
            />
          </div>

          <div className="w-full text-center pt-14">
            <span className="text-[#999999] text-sm">Not a member?</span>

            <Link href="/signup" className="text-[#999999] text-sm bo1">
              Sign up now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
