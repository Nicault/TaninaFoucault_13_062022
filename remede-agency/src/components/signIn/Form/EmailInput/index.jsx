import { useDispatch, useSelector } from 'react-redux/es/exports'

function EmailInput() {
  const dispatch = useDispatch()
  //@ts-ignore
  const email = useSelector((state) => state.user.email)
  //@ts-ignore
  const token = useSelector((state) => state.user.token)

  let typedEmail = ''
  const isRemembered = () => {
    if (token) return (typedEmail = email)
  }
  isRemembered()

  return (
    <div className="input-wrapper">
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={typedEmail}
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
