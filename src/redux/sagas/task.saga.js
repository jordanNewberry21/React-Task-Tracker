import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchTasks() {
    const response = yield axios.get('/tasks');
    yield put({ type: 'SET_ALL', payload: response.data });
}

function* taskSaga() {
    yield takeLatest('FETCH_ALL', fetchTasks);
}

export default taskSaga;