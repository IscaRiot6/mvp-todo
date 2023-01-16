import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
// import { createApi } from '@reduxjs/toolkit/query'
const initialState = {}

const middleware = [thunk]

/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
// import { createApi } from '@reduxjs/toolkit/query/react'

// import { createStore } from 'redux'

// function todos (state = [], action) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return state.concat([action.text])
//     default:
//       return state
//   }
// }

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

// const store = createStore(
//   rootReducer /* preloadedState, */,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// const store = createStore(todos, ['Use Redux'])

// store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Read the docs'
// })

// console.log(store.getState())
// [ 'Use Redux', 'Read the docs' ]

export default store
