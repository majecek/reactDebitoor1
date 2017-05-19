import { applyMiddleware, compose, createStore } from 'redux'
import ReduxPromise from 'redux-promise'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import reducers from './reducers'

const router = routerMiddleware(browserHistory)

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, ReduxPromise, router),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
)

export default store
