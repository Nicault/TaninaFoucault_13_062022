import produce from 'immer'

const initialState = {
  email: null,
  password: null,
  token: null,
  rememberMe: false,
  isAuthenticated: false,
  status: 0,
  message: null,
}

export const updateStatus = (status) => ({
  type: 'updateStatus',
  payload: {
    status: status,
  },
})

export const fillEmailAction = (email) => ({
  type: 'fillEmail',
  payload: { email: email },
})

export const fillPasswordAction = (password) => ({
  type: 'fillPassword',
  payload: { password: password },
})

export const fillMessageAction = (message) => ({
  type: 'fillMessage',
  payload: { message: message },
})

export const selectRememberMeAction = (rememberMe) => ({
  type: 'selectRememberMe',
  payload: { rememberMe: rememberMe },
})

export const authenticationState = (bool) => ({
  type: 'isAuthenticate',
  payload: { bool: bool },
})

export const getToken = (token) => ({
  type: 'getToken',
  payload: { token: token },
})

export default function userReducer(state = initialState, action) {
  if (action.type === 'selectRememberMe') {
    return produce(state, (draft) => {
      const rememberMe = action.payload.rememberMe
      draft.rememberMe = rememberMe
    })
    // return {
    //   ...state,
    //   rememberMe: !state.rememberMe,
    // }
  }

  if (action.type === 'updateStatus') {
    const status = action.payload.status
    return {
      ...state,
      status: status,
    }
  }

  if (action.type === 'fillEmail') {
    const email = action.payload.email
    return { ...state, email: email }
  }
  if (action.type === 'fillPassword') {
    const password = action.payload.password
    return { ...state, password: password }
  }

  if (action.type === 'fillMessage') {
    const message = action.payload.message
    return {
      ...state,
      message: message,
    }
  }

  if (action.type === 'isAuthenticate') {
    const bool = action.payload.bool
    return {
      ...state,
      isAuthenticated: bool,
    }
  }

  if (action.type === 'getToken') {
    const token = action.payload.token
    return {
      ...state,
      token: token,
    }
  }

  return state
}
