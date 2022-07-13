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
 * @param {object} store state of the store when the function is called
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
    })

    updateSignInStatus(store, dataLogin)
    store.dispatch(authenticationState(true))

    getProfile(store)
  } catch (error) {
    errorOnAuthentication(store, error)
  }
}

export async function getProfile(store) {
  try {
    fetcher.addBearer(getSavedToken())
    const dataProfile = await fetcher.post('/user/profile')

    store.dispatch(
      updateUserAction(
        dataProfile.body.id,
        dataProfile.body.firstName,
        dataProfile.body.lastName
      )
    )
    // console.log(localStorage)
  } catch (error) {
    errorOnAuthentication(store, error)
  }
}

/**
 * Updates sign in status
 *
 * @param {object}  store    store
 * @param {object}  error    caught error
 */
function errorOnAuthentication(store, error) {
  console.log(error)
  store.dispatch(checkRejected(error))
  store.dispatch(authenticationState(false))
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

/**
 * Saves token either in session or local storage
 * depending on the remember me option
 *
 * @param {String}  token       value of the token
 * @param {boolean} rememberMe  value of the remember me option
 */
export function saveToken(token, rememberMe) {
  rememberMe
    ? localStorage.setItem('token', token)
    : sessionStorage.setItem('token', token)

  fetcher.addBearer(token)
}

/**
 * Gets saved token either in session or local storage
 *
 * @return  {String}  token if there is one, otherwise returns ""
 */
export function getSavedToken() {
  if (sessionStorage.getItem('token') !== null) {
    //@ts-ignore
    return sessionStorage.getItem('token')
  }
  if (localStorage.getItem('token') !== null) {
    //@ts-ignore
    return localStorage.getItem('token')
  }
  return ''
}

/**
 * Gets Remember Me status.
 * False if token is in session storage
 * True if token is in local storage
 *
 * @return  {Boolean}  Remember Me status
 */

export function getSavedRememberMe() {
  if (sessionStorage.getItem('token') !== null) return false
  if (localStorage.getItem('token') !== null) return true
  return false
}

/**
 * Updates sign in status
 *
 * @param {object}  store       store
 * @param {object}  dataLogin   API login datas
 */
function updateSignInStatus(store, dataLogin) {
  store.dispatch(checkResolved(dataLogin))
  store.dispatch(fillMessageAction(dataLogin.message))
  store.dispatch(updateStatus(dataLogin.status))

  store.dispatch(getToken(dataLogin.body.token))
  saveToken(store.getState().user.token, store.getState().user.rememberMe)
}

/**
 * Signs out
 *
 * @param {object}  store    store
 */
export function signOut(store) {
  localStorage.clear()
  sessionStorage.clear()

  store.dispatch({ type: 'isAuthenticate', payload: { bool: false } })
  store.dispatch({ type: 'fillEmail', payload: { email: '' } })
  store.dispatch({ type: 'fillPassword', payload: { password: '' } })
  store.dispatch({
    type: 'fillEditedFirstName',
    payload: { editedFirstName: '' },
  })
  store.dispatch({
    type: 'fillEditedLastName',
    payload: { editedLastName: '' },
  })
  store.dispatch({
    type: 'updateUser',
    payload: { id: '', firstName: '', lastName: '' },
  })

  store.dispatch({
    type: 'getToken',
    payload: { token: '' },
  })
}
