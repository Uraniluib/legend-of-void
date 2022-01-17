import {combineReducers} from 'redux';
import userReducers from './articleReducer.jsx';

const rootReducer = combineReducers({
    users: userReducers
});

export default rootReducer;
