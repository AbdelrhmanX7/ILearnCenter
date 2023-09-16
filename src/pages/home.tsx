import React from 'react'
import PageLayout from '../components/pageLayout'
import { authMiddleware } from '../components/middleware'

export const getServerSideProps = authMiddleware
export default function Home() {
  return <PageLayout />
}
