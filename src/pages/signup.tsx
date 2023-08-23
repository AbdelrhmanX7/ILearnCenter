import React, { useState, useRef } from 'react'
import { Button, EmailInput, PasswordInput } from '../components/atoms'
import Link from 'next/link'
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth'
import toast from 'react-hot-toast'
import { auth } from '../firebase'
import { InputRef } from 'antd'
import Router from 'next/router'
import { FcGoogle } from 'react-icons/fc'
export default function SignUp() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const passwordInputRef = useRef<InputRef>(null)
  const confirmPasswordInputRef = useRef<InputRef>(null)
  const singupButtonRef = useRef<HTMLButtonElement>(null)
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
              <PasswordInput
                size="large"
                onChange={(event) =>
                  setForm({ ...form, password: event.target.value })
                }
                ref={passwordInputRef}
                onPressEnter={() => confirmPasswordInputRef.current?.focus()}
              />
              <PasswordInput
                size="large"
                confirmPassword
                onChange={(event) =>
                  setForm({ ...form, confirmPassword: event.target.value })
                }
                onPressEnter={() => singupButtonRef.current?.click()}
                ref={confirmPasswordInputRef}
              />
            </div>
            <Button
              onClick={async () => {
                if (form?.password !== form?.confirmPassword) {
                  toast.error("Confirm password doesn't match password")
                } else if (!form.password.length) {
                  toast.error("Password can't be empty")
                } else {
                  createUserWithEmailAndPassword(
                    auth,
                    form?.email,
                    form?.password
                  )
                    .then((userCredential) => {
                      toast.success(
                        'Your sign up was successful. Please verify your email by clicking the link in the email we sent you before signing in to our service later.'
                      )
                      sendEmailVerification(userCredential.user)
                        .then(() => {
                          toast.success('Email verification sent!')
                          Router.push('/verify')
                        })
                        .catch((err) => toast.error(err?.message))
                    })
                    .catch((err) => toast.error(err?.message))
                }
              }}
              label="Sign Up"
              ref={singupButtonRef}
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
              Do you have an account? &nbsp;
            </span>

            <Link href="/login" className="text-[#34caca] font-bold">
              Login Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
