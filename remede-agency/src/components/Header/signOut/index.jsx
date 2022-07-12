import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'
import '../../../index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'

import { signOut } from '../../../redux/actions'
import { store } from '../../../redux/store'

/**
 * Sign out button.
 * Links to the home page on click,
 * resets user informations if he didnt select Remember me option
 *
 * @component
 * @example
 * return (
 *   <SignOut />
 * )
 */

function SignOut() {
  //@ts-ignore
  const firstName = useSelector((state) => state.user.user.firstName)

  return (
    <div>
      <Link className="main-nav-item" to="/user">
        <FontAwesomeIcon icon={faCircleUser} />
        {firstName}
      </Link>
      <Link
        className="main-nav-item"
        to="/"
        onClick={() => {
          signOut(store)
        }}
      >
        <FontAwesomeIcon icon={faRightFromBracket} />
        Sign Out
      </Link>
    </div>
  )
}

export default SignOut
