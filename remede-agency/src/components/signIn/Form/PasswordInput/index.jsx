import { useDispatch, useSelector } from 'react-redux/es/exports'

function PasswordInput() {
  const dispatch = useDispatch()

  const password = useSelector((state) => state.user.password)
  const token = useSelector((state) => state.user.token)

  let typedPassword
  const isRemembered = () => {
    if (token) return (typedPassword = password)
  }
  isRemembered()

  return (
    <div className="input-wrapper">
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={typedPassword}
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
