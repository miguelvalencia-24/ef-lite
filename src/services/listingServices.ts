import axios from 'axios';
import {getListingsRequestType} from '../types/listingRequestTypes';
import {formatDate} from '../helpers/date';
import {toListParameter} from '../helpers/array';

const getListingsService = (request: getListingsRequestType) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/listings/list`, 
    {
        params: {
            q: request.query,
            page: request.page,
            limit: request.limit,
            sort: request.sortType,
            order: request.sortOrder,
            niches: toListParameter(request.nicheFiltersString),
            monetizations: toListParameter(request.monetizationFiltersString),
            countries: toListParameter(request.countryFiltersString),
            listing_price_from: request.listingPriceFrom,
            listing_price_to: request.listingPriceTo,
            average_monthly_net_profit_from: request.monthlyNetProfitFrom,
            average_monthly_net_profit_to: request.monthlyNetProfitTo,
            business_created_at_from: 
                request.dateBusinessCreatedFrom === null ? null : 
                formatDate(request.dateBusinessCreatedFrom),
            business_created_at_to: 
                request.dateBusinessCreatedTo === null ? null : 
                formatDate(request.dateBusinessCreatedTo),
        }
    });
}

const listingAPI = {getListingsService};
export default listingAPI;