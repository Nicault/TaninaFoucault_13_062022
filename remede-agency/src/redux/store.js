import { createStore } from 'redux'

const initialState = {
  authentication: {
    email: '',
    password: '',
  },
  token: '',
  rememberMe: false,
  isAuthenticated: false,
  status: '0',
  message: '',
}

export const updateStatus = (status) => ({
  type: 'updateStatus',
  payload: {
    status: status,
  },
})

export const fillEmailAction = () => ({
  type: 'fillEmail',
})

export const fillPasswordAction = () => ({
  type: 'fillPassword',
})

export const fillMessageAction = (message) => ({
  type: 'fillMessage',
  payload: { message: message },
})

export const selectRememberMeAction = () => ({
  type: 'selectRememberMe',
})

export const authenticationState = () => ({
  type: 'isAuthenticate',
})

export const authenticationAction = (email, password) => ({
  type: 'authentication',
  payload: {
    authentication: {
      email: email,
      password: password,
    },
  },
})

function reducer(state, action) {
  if (action.type === 'selectRememberMe') {
    return {
      ...state,
      rememberMe: !state.rememberMe,
    }
  }

  if (action.type === 'updateStatus') {
    const status = action.payload.status
    return {
      ...state,
      status: status,
    }
  }

  if (action.type === 'authentication') {
    const email = action.payload.email
    const password = action.payload.password
    return {
      ...state,
      authentication: {
        email: email,
        password: password,
      },
    }
  }

  if (action.type === 'fillMessage') {
    const message = action.payload.message
    return {
      ...state,
      message: message,
    }
  }

  if (action.type === 'isAuthenticate') {
    return {
      ...state,
      isAuthenticated: !state.isAuthenticated,
    }
  }
  return state
}

export const store = createStore(reducer, initialState)
store.subscribe(() => console.log(store.getState()))

const state = store.getState()

console.log(state)

// console.log(store.getState())

// store.dispatch(selectRememberMeAction())

// console.log(store.getState())
