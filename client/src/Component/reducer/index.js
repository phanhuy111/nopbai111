import museumReducer from './museumReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    museum: museumReducer
});

export default rootReducer