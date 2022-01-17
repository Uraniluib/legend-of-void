import {combineReducers} from 'redux';
import userReducers from './articleReducer.jsx';
import chronicleReducer from './chronicleReducer.jsx';

const rootReducer = combineReducers({
    users: userReducers,
    chronicles: chronicleReducer,
});

export default rootReducer;
