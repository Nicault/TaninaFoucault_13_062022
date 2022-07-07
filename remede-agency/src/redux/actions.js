import fetcher from './fetcher'
import {
  authenticationState,
  fillMessageAction,
  getToken,
  updateStatus,
  updateUserAction,
} from './userReducer'
import { checkFetching, checkResolved, checkRejected } from './checkReducer'

fetcher.addServer('http://localhost:3001/api/v1')

/**
 * Checks the user authentication and updates the related datas.
 * @param {object} store state of the thore when the function is called
 */

export async function fetchOrUpdateData(store) {
  const state = store.getState()
  const status = store.getState().check.status

  if (status === 'pending' || status === 'updating') {
    return
  }

  store.dispatch(checkFetching())
  try {
    const dataLogin = await fetcher.post('/user/login', {
      email: state.user.email,
      password: state.user.password,
      // token: state.user.token,
    })

    store.dispatch(checkResolved(dataLogin))
    store.dispatch(fillMessageAction(dataLogin.message))
    store.dispatch(updateStatus(dataLogin.status))

    if (dataLogin.status === 200) {
      store.dispatch(getToken(dataLogin.body.token))
    }
    if (store.getState().user.token) {
      fetcher.addBearer(dataLogin.body.token)
      const dataProfile = await fetcher.post('/user/profile')

      // if (
      //   dataProfile.status === 'pending' ||
      //   dataProfile.status === 'updating'
      // ) {
      //   return
      // }
      // if (dataProfile.status === 200) {
      store.dispatch(authenticationState(true))
      store.dispatch(
        updateUserAction(
          dataProfile.body.id,
          dataProfile.body.firstName,
          dataProfile.body.lastName
        )
      )
      // }
    }
  } catch (error) {
    console.log(error)
    store.dispatch(checkRejected(error))
    store.dispatch(authenticationState(false))
  }
}

/**
 * Updates first an last names on the API db.
 * @param {object} store state of the thore when the function is called
 */

export async function updateUserData(store) {
  const state = store.getState()

  const currentFirstName = state.user.user.firstName
  const currentLastName = state.user.user.lastName

  const editedFirstName = state.user.editedFirstName
  const editedLastName = state.user.editedLastName

  function updateName(editedName, currentName) {
    if (editedName && editedName !== currentName) {
      return editedName.charAt(0).toUpperCase() + editedName.slice(1)
    } else {
      return currentName
    }
  }

  const newFirstName = updateName(editedFirstName, currentFirstName)
  const newLastName = updateName(editedLastName, currentLastName)

  try {
    fetcher.addBearer(state.user.token)
    const updateData = await fetcher.put('/user/profile', {
      firstName: newFirstName,
      lastName: newLastName,
    })
    store.dispatch(
      updateUserAction(
        updateData.body.id,
        updateData.body.firstName,
        updateData.body.lastName
      )
    )
  } catch (error) {
    console.log(error)
  }
}
