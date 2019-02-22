import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import Data from './reducers/data'

const reducer = combineReducers({ data: Data })

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)