import { useDispatch } from 'react-redux'
import { store } from '../../../../redux/store'

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
