import { combineReducers } from 'redux'
import GithubReducer from './githubReducer'

const rootReducer = combineReducers({
  github: GithubReducer
})

export default rootReducer
