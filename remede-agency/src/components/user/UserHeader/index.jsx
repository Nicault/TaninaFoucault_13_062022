import React from 'react'
import EditUserName from '../EditUserName'
import { useSelector } from 'react-redux/es/hooks/useSelector'

import { useState } from 'react'

/**
 * User header component.
 * Displays the user header component.
 * Fills the first and last names areas with the store.
 * Displays or not the edit user name component.
 *
 * @component
 * @example
 * return (
 *   <UserHeader />
 * )
 */

function UserHeader() {
  //@ts-ignore
  const firstName = useSelector((state) => state.user.user.firstName)
  //@ts-ignore
  const lastName = useSelector((state) => state.user.user.lastName)

  const [isShown, setIsShown] = useState(false)

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {!isShown && (
          <span>
            {firstName} {lastName}!
          </span>
        )}
      </h1>
      {!isShown && (
        <button
          className="edit-button"
          onClick={() => {
            setIsShown(!isShown)
          }}
        >
          Edit Name
        </button>
      )}
      {isShown && <EditUserName isShown={isShown} setIsShown={setIsShown} />}
    </div>
  )
}

export default UserHeader
