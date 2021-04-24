import { fork } from 'redux-saga/effects';
import { watchConfig, watchListings } from './watchers';

export default function* rootSaga() {
    yield fork(watchConfig);
    yield fork(watchListings);
}