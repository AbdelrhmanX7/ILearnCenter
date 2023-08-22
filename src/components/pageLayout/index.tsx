import React from 'react'
import Navbar from '../navigationBar'

export const PageLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="w-full h-full bg-white">
      <Navbar />
      <div className="pt-20 bg-white px-6">{children}</div>
    </div>
  )
}

export default PageLayout
