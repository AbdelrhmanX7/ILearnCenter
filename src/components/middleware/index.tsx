import { GetServerSidePropsContext } from 'next'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'

export async function authMiddleware(context: GetServerSidePropsContext) {
  return new Promise<void>((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        context.res.writeHead(302, { Location: '/login' })
        context.res.end()
      }

      resolve()
    })
  })
}
