import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './modules/reducer.js'

const middleware = [ thunk ]

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger')
  middleware.push(logger)
}

export default (initState = {}) => {

  const store = createStore(
    reducer,
    applyMiddleware(...middleware)
  )

  return store
}