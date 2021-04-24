import {CONFIG} from '../constants';

export const getConfigAction = () => {
    return {
        type: CONFIG.GET_CONFIG_REQUEST
    };
};