import produce from 'immer'
import {
  authenticationState,
  fillMessageAction,
  getToken,
  updateStatus,
} from './userReducer'
// import { store } from './store'

const initialState = {
  status: 'void',
  data: null,
  error: null,
}

export const checkFetching = () => ({ type: 'check/fetching' })
export const checkResolved = (data) => ({
  type: 'check/resolved',
  payload: data,
})
export const checkRejected = (error) => ({
  type: 'check/rejected',
  payload: error,
})

export default function checkReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'check/fetching': {
        if (draft.status === 'void') {
          draft.status = 'pending'
          return
        }
        if (draft.status === 'rejected') {
          draft.error = null
          draft.status = 'pending'
          return
        }
        if (draft.status === 'resolved') {
          draft.status = 'updating'
          return
        }
        return
      }
      case 'check/resolved': {
        if (draft.status === 'pending' || draft.status === 'updating') {
          draft.data = action.payload
          draft.status = 'resolved'
          return
        }
        return
      }
      case 'check/rejected': {
        if (draft.status === 'pending' || draft.status === 'updating') {
          draft.error = action.payload
          draft.data = null
          draft.status = 'rejected'
          return
        }
        return
      }
      default:
        return state
    }
  })
}

export async function fetchOrUpdateData(store) {
  const state = store.getState()
  const status = store.getState().check.status

  if (status === 'pending' || status === 'updating') {
    return
  }

  store.dispatch(checkFetching())
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // email: 'tony@stark.com',
        // password: 'password123',
        email: state.user.email,
        password: state.user.password,
        token: state.user.token,
      }),
    })
    const data = await response.json()
    console.log(data)
    store.dispatch(checkResolved(data))
    store.dispatch(fillMessageAction(data.message))
    store.dispatch(updateStatus(data.status))

    if (data.status === 200) {
      store.dispatch(authenticationState(true))
      if (state.user.rememberMe) {
        store.dispatch(getToken(data.body.token))
      }
    }
    if (state.user.token) {
      store.dispatch(authenticationState(true))
    }
  } catch (error) {
    console.log(error)
    store.dispatch(checkRejected(error))
    store.dispatch(authenticationState(false))
  }
}
