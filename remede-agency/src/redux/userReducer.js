import produce from 'immer'
import { getSavedToken, getSavedRememberMe } from './actions'

const savedToken = getSavedToken()
const savedRememberMe = getSavedRememberMe()

const initialState = {
  email: '',
  password: '',
  token: savedToken,
  rememberMe: savedRememberMe,
  isAuthenticated: savedToken !== '',
  status: 0,
  message: '',
  user: {
    id: '',
    firstName: '',
    lastName: '',
  },
  editedFirstName: '',
  editedLastName: '',
}

export const fillEmailAction = (email) => ({
  type: 'fillEmail',
  payload: { email: email },
})

export const fillPasswordAction = (password) => ({
  type: 'fillPassword',
  payload: { password: password },
})

export const getToken = (token) => ({
  type: 'getToken',
  payload: { token: token },
})

export const selectRememberMeAction = (rememberMe) => ({
  type: 'selectRememberMe',
  payload: { rememberMe: rememberMe },
})

export const authenticationState = (bool) => ({
  type: 'isAuthenticate',
  payload: { bool: bool },
})

export const updateStatus = (status) => ({
  type: 'updateStatus',
  payload: {
    status: status,
  },
})

export const fillMessageAction = (message) => ({
  type: 'fillMessage',
  payload: { message: message },
})

export const updateUserAction = (id, firstName, lastName) => ({
  type: 'updateUser',
  payload: {
    id: id,
    firstName: firstName,
    lastName: lastName,
  },
})

export const fillEditedFirstNameAction = (editedFirstName) => ({
  type: 'fillEditedFirstName',
  payload: { editedFirstName: editedFirstName },
})

export const fillEditedLastNameAction = (editedLastName) => ({
  type: 'fillEditedLastName',
  payload: { editedLastName: editedLastName },
})

export default function userReducer(state = initialState, action) {
  if (action.type === 'fillEmail') {
    const email = action.payload.email
    return { ...state, email: email }
  }

  if (action.type === 'fillPassword') {
    const password = action.payload.password
    return { ...state, password: password }
  }

  if (action.type === 'getToken') {
    const token = action.payload.token
    return {
      ...state,
      token: token,
    }
  }

  if (action.type === 'selectRememberMe') {
    const rememberMe = action.payload.rememberMe
    return produce(state, (draft) => {
      draft.rememberMe = rememberMe
    })
  }

  if (action.type === 'isAuthenticate') {
    const bool = action.payload.bool
    return {
      ...state,
      isAuthenticated: bool,
    }
  }

  if (action.type === 'updateStatus') {
    const status = action.payload.status
    return {
      ...state,
      status: status,
    }
  }

  if (action.type === 'fillMessage') {
    const message = action.payload.message
    return {
      ...state,
      message: message,
    }
  }

  if (action.type === 'updateUser') {
    const id = action.payload.id
    const firstName = action.payload.firstName
    const lastName = action.payload.lastName
    return produce(state, (draft) => {
      draft.user.id = id
      draft.user.firstName = firstName
      draft.user.lastName = lastName
    })
  }

  if (action.type === 'fillEditedFirstName') {
    const editedFirstName = action.payload.editedFirstName
    return produce(state, (draft) => {
      draft.editedFirstName = editedFirstName
    })
  }

  if (action.type === 'fillEditedLastName') {
    const editedLastName = action.payload.editedLastName
    return produce(state, (draft) => {
      draft.editedLastName = editedLastName
    })
  }

  return state
}
