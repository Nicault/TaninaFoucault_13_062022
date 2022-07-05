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
    if (state.user.token) {
      fetcher.addBearer(dataLogin.body.token)
      const dataProfile = await fetcher.post('/user/profile')

      store.dispatch(authenticationState(true))
      store.dispatch(
        updateUserAction(
          dataProfile.body.id,
          dataProfile.body.firstName,
          dataProfile.body.lastName
        )
      )
    }
  } catch (error) {
    console.log(error)
    store.dispatch(checkRejected(error))
    store.dispatch(authenticationState(false))
  }
}

export async function updateUserData(store) {
  const state = store.getState()

  const currentFirstName = state.user.user.firstName
  const currentLastName = state.user.user.lastName

  const editedFirstName = state.user.editedFirstName
  const editedLastName = state.user.editedLastName

  function updateName(editedName, currentName) {
    if (editedName && editedName !== currentName) {
      return editedName
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
