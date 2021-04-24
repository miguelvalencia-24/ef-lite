import {createStore, applyMiddleware} from 'redux';
import createSagaMiddlewaare from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddlewaare();

    return {
        ...createStore(
            rootReducer,
            composeWithDevTools(applyMiddleware(sagaMiddleware))
        ),
        runSaga: sagaMiddleware.run(rootSaga),
    }
};

export default configureStore;