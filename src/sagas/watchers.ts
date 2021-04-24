import { takeLatest } from "redux-saga/effects";
import {CONFIG, LISTING} from '../constants';
import {getConfigSaga} from './configSagas';
import {getListingsSaga} from './listingsSagas';

export function* watchConfig() {
    yield takeLatest(CONFIG.GET_CONFIG_REQUEST, getConfigSaga); 
};

export function* watchListings() {
    yield takeLatest(LISTING.GET_LISTINGS_REQUEST, getListingsSaga);
};
