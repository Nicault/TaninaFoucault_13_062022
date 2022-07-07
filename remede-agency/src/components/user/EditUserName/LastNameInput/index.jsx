import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { store } from '../../../../redux/store'

/**
 * Last name input component.
 * Updates the edited last name state.
 *
 * @component
 * @example
 * return (
 *   <LastNameInput />
 * )
 */

function LastNameInput() {
  const dispatch = useDispatch()
  const lastName = store.getState().user.user.lastName

  return (
    <div className="input-wrapper margin input-wrapper2">
      <input
        type="text"
        placeholder={lastName}
        onChange={(e) => {
          dispatch({
            type: 'fillEditedLastName',
            payload: {
              editedLastName: e.target.value,
            },
          })
        }}
      />
    </div>
  )
}

export default LastNameInput
