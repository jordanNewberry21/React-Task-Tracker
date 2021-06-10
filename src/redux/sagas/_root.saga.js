import { all } from 'redux-saga/effects';
import taskSaga from './task.saga';

// root.saga is where all the sagas will live to keep it all in one place
export default function* rootSaga() {
    yield all([
        taskSaga(),
    ]);
};