import {LISTING} from '../constants';

export const getListingsAction = (
    query: string = '',
    page: number = 1,
    limit: number = 50,
    sortType: string | null = null,
    sortOrder: string = 'DESC',
    nicheFiltersString: Array<string> = [],
    monetizationFiltersString: Array<string> = [],
    countryFiltersString: Array<string> = [],
    listingPriceFrom: number | null = null,
    listingPriceTo: number | null = null,
    monthlyNetProfitFrom: number | null = null,
    monthlyNetProfitTo: number | null = null,
    dateBusinessCreatedFrom: Date | null = null,
    dateBusinessCreatedTo: Date | null = null,
    ) => { 
    return {
        type: LISTING.GET_LISTINGS_REQUEST,
        query,
        page,
        limit,
        sortType,
        sortOrder,
        nicheFiltersString,
        monetizationFiltersString,
        countryFiltersString,
        listingPriceFrom,
        listingPriceTo,
        monthlyNetProfitFrom,
        monthlyNetProfitTo,
        dateBusinessCreatedFrom,
        dateBusinessCreatedTo,
    };
};