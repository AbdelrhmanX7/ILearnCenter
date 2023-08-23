import React, { useState, useRef } from 'react'
import PasswordInput from '../components/atoms/input/PasswordInput'
import EmailInput from '../components/atoms/input/EmailInput'
import { Button } from '../components/atoms'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import toast from 'react-hot-toast'
import Link from 'next/link'
import Router from 'next/router'
import { InputRef } from 'antd'
import { FcGoogle } from 'react-icons/fc'

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const passwordInputRef = useRef<InputRef>(null)
  const loginButtonRef = useRef<HTMLButtonElement>(null)

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-[450px] sm:px-10 sm:pt-10 px-5 mx-5 rounded-xl sm:border sm:shadow-sm">
        <div className="w-full flex flex-col justify-between">
          <h1 className="w-full text-3xl font-bold text-[#1E232C] pb-14">
            Welcome back! Glad to see you, Again!
          </h1>

          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-3">
              <EmailInput
                size="large"
                onChange={(event) =>
                  setForm({ ...form, email: event.target.value })
                }
                onPressEnter={() => passwordInputRef.current?.focus()}
              />
              <div>
                <PasswordInput
                  size="large"
                  onChange={(event) =>
                    setForm({ ...form, password: event.target.value })
                  }
                  ref={passwordInputRef}
                  onPressEnter={() => loginButtonRef.current?.click()}
                />
                <div className="w-full flex justify-end">
                  <Button
                    className="mt-1 !p-0 !h-fit text-sm text-[#6A707C] font-semibold"
                    label="Forgot Password?"
                    variant="tertiary"
                    emphasis="medium"
                    onClick={() => Router.push('/reset-password')}
                  />
                </div>
              </div>
            </div>
            <Button
              onClick={async () => {
                signInWithEmailAndPassword(auth, form.email, form.password)
                  .then(() => {
                    toast.success('Logged in successfully')
                    Router.push('/home')
                  })
                  .catch((err) => toast.error(err))
              }}
              ref={loginButtonRef}
              label="Login"
              className=""
            />
          </div>
          <div className="flex items-center justify-center w-full my-8">
            <div className="h-[1px] w-full bg-[#E8ECF4]" />
            <p className="text-sm font-semibold text-[#6A707C] px-3 whitespace-nowrap">
              Or Login with
            </p>
            <div className="h-[1px] w-full bg-[#E8ECF4]" />
          </div>
          <Button
            label="Google"
            variant="tertiary"
            className="w-full text-lg font-semibold"
            icon={<FcGoogle />}
          />
          <div className="w-full text-center pt-14 pb-8">
            <span className="text-[#1E232C] font-medium">
              Don’t have an account? &nbsp;
            </span>

            <Link href="/signup" className="text-[#34caca] font-bold">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
