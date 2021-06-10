import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchTasks() {
    const response = yield axios.get('/tasks');
    yield put({ type: 'SET_ALL', payload: response.data });
}

function* deleteTask(action) {
    const id = action.payload;
    yield axios.delete(`/tasks/${id}`);
    yield put({ type: 'FETCH_ALL' });
}

function* addTask(action) {
    const task = action.payload;
    yield axios.post(`/tasks`);
    yield put({type: 'FETCH_ALL'});
}

function* taskSaga() {
    yield takeLatest('FETCH_ALL', fetchTasks);
    yield takeLatest('DELETE', deleteTask);
    yield takeLatest('POST', addTask);
}

export default taskSaga;