export type getListingsRequestType = {
  type: string;
  query: string;
  page: number;
  limit: number;
  sortType: string | null;
  sortOrder: string;
  nicheFiltersString: Array<string>;
  monetizationFiltersString: Array<string>;
  countryFiltersString: Array<string>;
  listingPriceFrom: number | null;
  listingPriceTo: number | null;
  monthlyNetProfitFrom: number | null;
  monthlyNetProfitTo: number | null;
  dateBusinessCreatedFrom: Date | null;
  dateBusinessCreatedTo: Date | null;
}
