import { CONFIG } from '../constants';

type Actions =
    {
        type: "GET_CONFIG_SUCCESS";
        data: any;
    } | 
    {
        type: "GET_CONFIG_ERROR";
        data: any;
    };

const configReducer = (
        state: any = {countries: {}}, action: Actions
    ) => {
        const data = action.data;
        switch(action.type) {
            case CONFIG.GET_CONFIG_SUCCESS:
                return {...state, ...data};
            case CONFIG.GET_CONFIG_ERROR:
                return {...state, getConfigError: data};
            default:
                return state;
        }
    };

export default configReducer;