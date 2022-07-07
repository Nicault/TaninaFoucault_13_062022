import { store } from '../../../redux/store'
import { useDispatch } from 'react-redux/es/exports'
import { updateUserData } from '../../../redux/actions'

import FirstNameInput from './FirstNameInput'
import LastNameInput from './LastNameInput'

/**
 * Edit user name component.
 * Updates the first and last names states.
 * Updates the first and last name on the API.
 * Updates state of the component
 *
 * @prop     {bool}       isShown            State of the component
 * @prop     {function}   setIsShown         Function that updates this state
 *
 * @component
 * @example
 * return (
 *   <EditUserName />
 * )
 */

function EditUserName({ isShown, setIsShown }) {
  const dispatch = useDispatch()

  function handleClick() {
    updateUserData(store)
    dispatch({
      type: 'fillEditedFirstName',
      payload: { editedFirstName: '' },
    })
    dispatch({
      type: 'fillEditedLastName',
      payload: { editedLastName: '' },
    })
    setIsShown(!isShown)
  }

  return (
    <div className="wrapper">
      <form className="edit-name-content">
        <div className="inputs-section">
          <FirstNameInput />
          <LastNameInput />
        </div>

        <div className="inputs-section">
          <button className="button margin" onClick={handleClick}>
            Save
          </button>
          <button
            className="button margin"
            onClick={() => {
              setIsShown(!isShown)
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditUserName
