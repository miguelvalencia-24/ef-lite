import { StrictEffect, call, put } from 'redux-saga/effects';
import { LISTING } from '../constants';
import ListingAPI from '../services/listingServices';
import {getListingsRequestType} from '../types/listingRequestTypes';

export function* getListingsSaga(request: getListingsRequestType): Generator<StrictEffect> {
    try {
        const response: any = yield call(ListingAPI.getListingsService, request);
        yield put({type: LISTING.GET_LISTINGS_SUCCESS, data: response.data.data});
    } catch (error) {
        yield put({type: LISTING.GET_LISTINGS_ERROR, data: error});
    } finally {}
}