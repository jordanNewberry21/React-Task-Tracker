import React from 'react';
import ReactDOM from 'react-dom';

// Redux imports
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './redux/reducers/_root.reducer';
import rootSaga from './redux/sagas/_root.saga';

// CSS
import './index.css';

// Main App
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create middleware
const sagaMiddleware = createSagaMiddleware();

// Create list of middleware to be used in production mode
const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

// Create the redux store
const store = createStore(
  // taskReducer will be main data location
  rootReducer,
  // Add middleware to the project
  applyMiddleware(...middlewareList),
);

// Tell the sagaMiddleware to use the taskSaga
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
