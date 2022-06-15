import React from 'react'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'

export const AppContainer = () => {

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
