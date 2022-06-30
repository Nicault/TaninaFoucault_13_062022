import { useDispatch, useSelector } from 'react-redux/es/exports'

function RememberMeCheckbox() {
  const rememberMe = useSelector((state) => state.user.rememberMe)

  const dispatch = useDispatch()

  return (
    <div className="input-remember">
      <input
        type="checkbox"
        id="remember-me"
        checked={rememberMe}
        onChange={() => {
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
