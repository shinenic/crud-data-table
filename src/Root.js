import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducers from './reducers/index'


export default ({ children, initState = {} }) => {
  // const store = createStore(Reducers, initState)
  const store = createStore(Reducers, initState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}