import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import "regenerator-runtime/runtime";

import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
const sagaMiddleware = createSagaMiddleware()

import rootReducer from './store/reducers'

import App from './components/App';

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore( rootReducer, applyMiddleware(sagaMiddleware) );
sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)