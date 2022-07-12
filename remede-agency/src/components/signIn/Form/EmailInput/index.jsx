import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'

/**
 * Email input component.
 * Updates the email state.
 *
 * @component
 * @example
 * return (
 *   <EmailInput />
 * )
 */

function EmailInput() {
  const dispatch = useDispatch()
  //@ts-ignore
  const email = useSelector((state) => state.user.email)
  //@ts-ignore
  // const token = useSelector((state) => state.user.token)

  // const [typedEmail, setTypedEmail] = useState('')

  // const isRemembered = () => {
  //   if (token) return setTypedEmail(email)
  // }
  // isRemembered()

  return (
    <div className="input-wrapper">
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={email}
        onChange={(e) => {
          dispatch({
            type: 'fillEmail',
            payload: { email: e.target.value },
          })
        }}
      />
    </div>
  )
}

export default EmailInput
