import { useDispatch, useSelector } from 'react-redux/es/exports'

/**
 * Password input component.
 * Updates the password state.
 *
 * @component
 * @example
 * return (
 *   <PasswordInput />
 * )
 */

function PasswordInput() {
  const dispatch = useDispatch()

  //@ts-ignore
  const password = useSelector((state) => state.user.password)
  //@ts-ignore
  // const token = useSelector((state) => state.user.token)

  // const isRemembered = () => {
  //   if (token) return setTypedPassword(password)
  // }
  // isRemembered()

  return (
    <div className="input-wrapper">
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => {
          dispatch({
            type: 'fillPassword',
            payload: { password: e.target.value },
          })
        }}
      />
    </div>
  )
}

export default PasswordInput
