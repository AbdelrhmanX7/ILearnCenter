import React, { useEffect, useState } from 'react'
import { Button } from '../atoms'
import Router from 'next/router'
import { MdMenu, MdNotificationsNone } from 'react-icons/md'
import NavItem from './NavItem'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { TbMessages } from 'react-icons/tb'
import { User, signOut } from 'firebase/auth'
import toast from 'react-hot-toast'
import { auth } from '../../firebase'
import { classNames } from '../utils'
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [userData, setUserData] = useState<null | User>(auth.currentUser)
  console.log(userData)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserData(user)
    })

    return () => {
      unsubscribe()
    }
  }, [])
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className="w-screen h-20 px-9 bg-white border shadow-box fixed top-0 flex justify-center items-center z-10"
    >
      <div className="w-full flex justify-between items-center">
        <h1 className="text-3xl font-montserrat font-semibold">ILearnCenter</h1>
        {userData?.email ? (
          <UserNavItem />
        ) : (
          <div className="space-x-3 sm:block hidden">
            <Button
              onClick={() => Router.push('/login')}
              label="Login"
              variant="tertiary"
            />
            <Button onClick={() => Router.push('/signup')} label="Sign up" />
          </div>
        )}
        <div
          className={classNames(
            userData?.email ? 'lg:hidden block' : 'sm:hidden block'
          )}
        >
          <Button
            className="w-fit min-h-fit !p-2"
            icon={<MdMenu className="w-7 h-7" />}
            variant="tertiary"
            onClick={() => setIsOpen(!isOpen)}
          />
          <NavItem isLoggedIn={userData?.email} isOpen={isOpen} />
        </div>
      </div>
    </motion.nav>
  )
}

function UserNavItem() {
  return (
    <div className=" justify-between items-center w-full ml-4 lg:flex hidden">
      <div>
        <Button label="Teachers" variant="tertiary" emphasis="medium" />
        <Button label="Calendar" variant="tertiary" emphasis="medium" />
        <Button label="Dashboard" variant="tertiary" emphasis="medium" />
      </div>
      <div className="flex">
        <div className="flex justify-center items-center gap-3 mr-7">
          <Button label="Courses" variant="tertiary" />
          <Button
            label="Logout"
            onClick={() => {
              signOut(auth)
                .then(() => {
                  toast.success('Logged Out Successfully')
                  Router.push('/login')
                })
                .catch((err) => toast.error(err))
            }}
            danger
          />
        </div>
        <div className="min-w-[136px] flex justify-center items-center gap-6">
          <MdNotificationsNone className="w-6 h-6" />
          <TbMessages className="w-6 h-6" />
          <Image
            src={'https://via.placeholder.com/40x40'}
            alt="placeholder"
            width={40}
            height={40}
            className="rounded-full w-10 h-10"
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
