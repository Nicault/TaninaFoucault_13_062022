import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'

/**
 * Remember me checkbox component.
 * Updates the rememeberMe state.
 *
 * @component
 * @example
 * return (
 *   <RememberMeCheckbox />
 * )
 */

function RememberMeCheckbox() {
  //@ts-ignore
  const rememberMe = useSelector((state) => state.user.rememberMe)

  const dispatch = useDispatch()

  return (
    <div className="input-remember">
      <input
        type="checkbox"
        id="remember-me"
        checked={rememberMe}
        onClick={() => {
          dispatch({
            type: 'selectRememberMe',
            payload: { rememberMe: !rememberMe },
          })
        }}
      />
      <label htmlFor="remember-me">Remember me</label>
    </div>
  )
}

export default RememberMeCheckbox
