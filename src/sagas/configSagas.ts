import { StrictEffect, call, put } from 'redux-saga/effects';
import { CONFIG } from '../constants';
import ConfigApi from '../services/configServices';

export function* getConfigSaga(): Generator<StrictEffect> {
    try {
        const response: any = yield call(ConfigApi.getConfigService);
        yield put({type: CONFIG.GET_CONFIG_SUCCESS, data: response.data.data});
    } catch (error) {
        yield put({type: CONFIG.GET_CONFIG_ERROR, data: error});
    } finally {}
}