import React from 'react'
import { useRouter } from 'next/router'
import {
  CreateNewPasswordComponent,
  SendPasswordResetEmailComponent,
} from '../components/pageComponents'
import { verifyPasswordResetCode } from 'firebase/auth'
import { auth } from '../firebase'

export default function ResetPassword({ userEmail }) {
  const oobCode = useRouter().query?.oobCode
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-[450px] sm:px-10 sm:pt-10 px-5 mx-5 rounded-xl sm:border sm:shadow-sm">
        <div className="w-full flex flex-col justify-between mb-10">
          {!!oobCode?.length ? (
            <CreateNewPasswordComponent
              userEmail={userEmail}
              oobCode={oobCode}
            />
          ) : (
            <SendPasswordResetEmailComponent />
          )}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  let userEmail = ''
  await verifyPasswordResetCode(auth, query?.oobCode ?? '')
    .then((email) => (userEmail = email))
    .catch(() => (userEmail = ''))

  return {
    props: {
      userEmail,
    },
  }
}
