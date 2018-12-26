import { combineReducers } from 'redux'
import login from './login'
import movies from './movies'



export default combineReducers({
  movies,login
})