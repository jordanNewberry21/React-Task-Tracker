import { combineReducers } from 'redux';
import tasks from './tasks.reducer';

// root.reducer is where all reducers will live
const rootReducer = combineReducers ({
    tasks,
});

export default rootReducer;