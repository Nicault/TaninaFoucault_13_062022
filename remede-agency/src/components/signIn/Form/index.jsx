import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import RememberMeCheckbox from './RememberMeCheckbox'
import SignInButton from './SignInButton'
import ErrorMessage from './ErrorMessage'

function Form() {
  return (
    <form>
      <EmailInput />
      <PasswordInput />
      <RememberMeCheckbox />
      <SignInButton />
      <ErrorMessage />
    </form>
  )
}

export default Form
