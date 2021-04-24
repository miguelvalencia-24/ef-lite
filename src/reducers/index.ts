import {combineReducers} from 'redux';

import config from './configReducer';
import listing from './listingReducer';


const rootReducer = combineReducers({
    config,
    listing
});

export default rootReducer;