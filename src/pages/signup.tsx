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
      <div className="w-full max-w-[550px] sm:px-10 sm:py-20 py-10 px-5 mx-5 rounded-xl border shadow-md">
        <div className="w-full flex flex-col justify-between">
          <h1 className="w-full text-[#555555] text-center text-4xl pb-10 font-montserrat font-medium">
            Sign up With
          </h1>

          <div className="flex flex-col gap-6">
            <EmailInput
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
              onPressEnter={() => passwordInputRef.current?.focus()}
            />
            <PasswordInput
              onChange={(event) =>
                setForm({ ...form, password: event.target.value })
              }
              ref={passwordInputRef}
              onPressEnter={() => confirmPasswordInputRef.current?.focus()}
            />
            <PasswordInput
              confirmPassword
              onChange={(event) =>
                setForm({ ...form, confirmPassword: event.target.value })
              }
              onPressEnter={() => singupButtonRef.current?.click()}
              ref={confirmPasswordInputRef}
            />
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

          <div className="w-full text-center pt-14">
            <span className="text-[#999999] text-sm">Have an account?</span>

            <Link href="/login" className="text-[#999999] text-sm bo1">
              Login now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
