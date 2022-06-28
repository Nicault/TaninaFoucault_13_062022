import { useDispatch } from 'react-redux/es/exports'

function RememberMe() {
  const dispatch = useDispatch()

  return (
    <div className="input-remember">
      <input
        type="checkbox"
        id="remember-me"
        onChange={() => {
          dispatch({ type: 'selectRememberMe' })
        }}
      />
      <label htmlFor="remember-me">Remember me</label>
    </div>
  )
}

export default RememberMe
