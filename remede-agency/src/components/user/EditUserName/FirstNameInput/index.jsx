import { useDispatch } from 'react-redux'
import { store } from '../../../../redux/store'

/**
 * First name input component.
 * Updates the edited first name state.
 *
 * @component
 * @example
 * return (
 *   <FirstNameInput />
 * )
 */

function FirstNameInput() {
  const dispatch = useDispatch()
  const firstName = store.getState().user.user.firstName
  return (
    <div className="input-wrapper margin input-wrapper2">
      <input
        type="text"
        placeholder={firstName}
        onChange={(e) => {
          dispatch({
            type: 'fillEditedFirstName',
            payload: {
              editedFirstName: e.target.value,
            },
          })
        }}
      />
    </div>
  )
}

export default FirstNameInput
