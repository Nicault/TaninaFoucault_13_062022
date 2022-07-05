import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import checkReducer from './checkReducer'
import userReducer from './userReducer'

const reducer = combineReducers({
  check: checkReducer,
  user: userReducer,
})

export const store = createStore(reducer, composeWithDevTools())

store.subscribe(() => console.log(store.getState()))

export const state = store.getState()
