import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducers from './reducers'

const initialState =  {}

const middlware = [thunk]

const store = createStore(
  reducers,
  initialState,
  (process.env.NODE_ENV !== 'production') ? composeWithDevTools(applyMiddleware(...middlware)) : undefined
)

export default store