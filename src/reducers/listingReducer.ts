import { LISTING } from "../constants";

type Actions = 
  {
    type: "GET_LISTING_REQUEST";
    data: null
  } |
  {
    type: "GET_LISTING_SUCCESS";
    data: any;
  } | 
  {
    type: "GET_LISTING_ERROR";
    data: any;
  };

type State = {
  isLoading: boolean;
  listings: Array<any> | null; 
  count: number;
  pages: number;
  page: number;
  limit: number;
};

const initialState = {
  isLoading: false,
  listings: [],
  count: 0,
  pages: 0,
  page: 1,
  limit: 50,
}

const listingReducer = (
    state: State = initialState,
    action: Actions
  ) => {
    const data = action.data;
    switch(action.type) {
      case LISTING.GET_LISTINGS_REQUEST:
        return {...initialState, isLoading: true};
      case LISTING.GET_LISTINGS_SUCCESS:
        return {...state, ...data, isLoading: false};
      case LISTING.GET_LISTINGS_ERROR:
        return {...state, getListingsError: data, isLoading: false};
      default:
        return state;
    }
  };

export default listingReducer;
