// import { configureStore } from '@reduxjs/toolkit'
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

// import { configureStore } from '@reduxjs/toolkit'
// import { devToolsEnhancer } from '@redux-devtools-extension'

import checkReducer from './checkReducer'
import userReducer from './userReducer'

const reducer = combineReducers({
  check: checkReducer,
  user: userReducer,
})

// export const store = createStore(reducer)

export const store = createStore(reducer, composeWithDevTools())

store.subscribe(() => console.log(store.getState()))

export const state = store.getState()

// console.log(state)

// console.log(store.getState())

// store.dispatch(selectRememberMeAction())

// console.log(store.getState())
