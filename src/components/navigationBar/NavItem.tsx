import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../atoms'
import { MdNotificationsNone } from 'react-icons/md'
import { TbMessages } from 'react-icons/tb'
import Image from 'next/image'
import { itemVariants, parentVariants } from '../../constants'
import { auth } from '../../firebase'
import { classNames } from '../utils'
import { signOut } from 'firebase/auth'
import Router from 'next/router'
import toast from 'react-hot-toast'
const NavItem = ({ isOpen, isLoggedIn }) => {
  return (
    <motion.ul
      variants={parentVariants}
      style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      className={classNames(
        'absolute left-0 bg-white shadow-sm top-20 w-full flex flex-col gap-2 p-4 items-center z-10 min-h-[288px]',
        isLoggedIn
          ? 'justify-center min-h-[288px]'
          : 'justify-end min-h-[188px]'
      )}
    >
      {isLoggedIn ? (
        <UserNavItem />
      ) : (
        <React.Fragment>
          <motion.li className="w-full" variants={itemVariants}>
            <Button
              onClick={() => Router.push('/login')}
              label="Login"
              variant="tertiary"
              className="w-full"
            />
          </motion.li>
          <motion.li className="w-full" variants={itemVariants}>
            <Button
              onClick={() => Router.push('/signup')}
              label="Sign up"
              className="w-full"
            />
          </motion.li>
        </React.Fragment>
      )}
    </motion.ul>
  )
}

function UserNavItem() {
  return (
    <React.Fragment>
      <motion.li variants={itemVariants}>
        <Button label="Teachers" variant="tertiary" emphasis="medium" />
      </motion.li>
      <motion.li variants={itemVariants}>
        <Button label="Calendar" variant="tertiary" emphasis="medium" />
      </motion.li>
      <motion.li variants={itemVariants}>
        <Button label="Dashboard" variant="tertiary" emphasis="medium" />
      </motion.li>
      <motion.li className="w-full" variants={itemVariants}>
        <Button label="Courses" variant="tertiary" className="w-full" />
      </motion.li>
      <motion.li className="w-full" variants={itemVariants}>
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
          className="w-full"
        />
      </motion.li>
      <motion.li variants={itemVariants}>
        <div className="flex justify-center items-center gap-6">
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
      </motion.li>
    </React.Fragment>
  )
}

export default NavItem
