import React, { useEffect, useState, useRef } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getListingsAction } from '../actions/listingActions';
import ListingSearchBarComponent from '../components/listings/ListingSearchBarComponent';
import PaginationComponent from '../components/common/PaginationComponent';
import SelectFilterComponent from '../components/common/filters/SelectFilterComponent';
import ListingTableComponent from '../components/listings/ListingTableComponent';
import FiltersComponent from '../components/common/filters/FiltersComponent';
import RangeFilterComponent from '../components/common/filters/RangeFilterComponent';
import DateRangeFilterComponent from '../components/common/filters/DateRangeFilterComponent';
import SelectMultipleFiltersComponent from '../components/common/filters/SelectMultipleFiltersComponent';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ListContainer: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(50);
    const [filtersShown, setFiltersShown] = useState<boolean>(false);
    const [sortType, setSortType] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState<string>('DESC');
    const [query, setQuery] = useState<string>('');
    const [nicheFilters, setNicheFilters] = useState<Array<string>>([]);
    const [monetizationFilters, setMonetizationFilters] = useState<Array<string>>([]);
    const [countryFilters, setCountryFilters] = useState<Array<string>>([]);
    const [listingPriceFrom, setListingPriceFrom] = useState<number | null>(null);
    const [listingPriceTo, setListingPriceto] = useState<number | null>(null);
    const [monthlyNetProfitFrom, setMonthlyNetProfitFrom] = useState<number | null>(null);
    const [monthlyNetProfitTo, setMonthlyNetProfitTo] = useState<number | null>(null);
    const [dateBusinessCreatedFrom, setDateBusinessCreatedFrom] = useState<Date | null>(null);
    const [dateBusinessCreatedTo, setDateBusinessCreatedTo] = useState<Date | null>(null);

    const currentPage = useSelector((state: RootStateOrAny) => state.listing.page);
    const listings = useSelector((state: RootStateOrAny) => state.listing.listings);
    const pages = useSelector((state: RootStateOrAny) => state.listing.pages);
    const isLoading = useSelector((state: RootStateOrAny) => state.listing.isLoading);
    const totalListings = useSelector((state: RootStateOrAny) => state.listing.count);
    const niches = useSelector((state: RootStateOrAny) => state.config.listing_niches);
    const monetizations = useSelector((state: RootStateOrAny) => state.config.listing_monetizations);
    const countries = useSelector((state: RootStateOrAny) => state.config.countries);

    const getListingsError = useSelector((state: RootStateOrAny) => state.listing.getListingsError);

    const dispatch = useDispatch();

    const prevPageRef = useRef<number>();

    useEffect(() => {
        prevPageRef.current = page;
    });

    const prevPage = prevPageRef.current;
    
    useEffect(() => {
        let p = page;
        if(prevPage === p) {
            p = 0;
        }
        dispatch(getListingsAction(
            query, 
            p, 
            limit, 
            sortType, 
            sortOrder, 
            nicheFilters, 
            monetizationFilters,
            countryFilters,
            listingPriceFrom,
            listingPriceTo,
            monthlyNetProfitFrom,
            monthlyNetProfitTo,
            dateBusinessCreatedFrom,
            dateBusinessCreatedTo,
        ));
    }, [
        dispatch,
        query,
        page,
        limit,
        sortType,
        sortOrder,
        nicheFilters,
        monetizationFilters,
        countryFilters,
        listingPriceFrom,
        listingPriceTo,
        monthlyNetProfitFrom,
        monthlyNetProfitTo,
        dateBusinessCreatedFrom,
        dateBusinessCreatedTo,
    ]);

    return (
        <div>
            <Row>
                <Col>
                    {listings?.length ? <h4>{listings.length} of {totalListings} Listings</h4> : <h4>... Listings</h4>}
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListingSearchBarComponent setQuery={setQuery}/>
                </Col>
                <Col>
                    <Button 
                        block
                        onClick={() => filtersShown ? setFiltersShown(false) : setFiltersShown(true)
                    }>
                        {`${filtersShown ? 'Hide' : 'Show'} Filters`}
                    </Button>
                </Col>
            </Row>
            <div className="mt-2" hidden={!filtersShown}>
                <Row>
                    <Col>
                        <b>Niches: </b>
                        <FiltersComponent
                            activeFilters={nicheFilters} 
                            setFilters={setNicheFilters}
                            filters={niches}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <b>Monetizations: </b>
                        <FiltersComponent
                            activeFilters={monetizationFilters} 
                            setFilters={setMonetizationFilters}
                            filters={monetizations}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <b>Listing Price: </b>
                        <RangeFilterComponent
                            title="Listing Price"
                            prepend="$"
                            from={listingPriceFrom}
                            to={listingPriceTo}
                            setFrom={setListingPriceFrom}
                            setTo={setListingPriceto}
                            clearRange={() => {
                                setListingPriceFrom(null);
                                setListingPriceto(null);
                            }}
                        />
                    </Col>
                    <Col>
                        <b>Monthly Net Profit:</b>
                        <RangeFilterComponent
                            title="Monthly Net Profit"
                            prepend="$"
                            from={monthlyNetProfitFrom}
                            to={monthlyNetProfitTo}
                            setFrom={setMonthlyNetProfitFrom}
                            setTo={setMonthlyNetProfitTo}
                            clearRange={() => {
                                setMonthlyNetProfitFrom(null);
                                setMonthlyNetProfitTo(null);
                            }}
                        />
                    </Col>
                    <Col>
                        <b>Date Business Created:</b>
                        <DateRangeFilterComponent 
                            dateFrom={dateBusinessCreatedFrom}
                            dateTo={dateBusinessCreatedTo}
                            setDateFrom={setDateBusinessCreatedFrom}
                            setDateTo={setDateBusinessCreatedTo}
                            clearDateRange={(): void=> {
                                setDateBusinessCreatedFrom(null);
                                setDateBusinessCreatedTo(null);
                            }}
                        />
                    </Col>
                    <Col>
                        <b>Countries: </b>
                        <SelectMultipleFiltersComponent
                            title="Countries"
                            activeFilters={countryFilters}
                            setFilters={setCountryFilters}
                            filters={countries}
                        />
                    </Col>
                </Row>
            </div>
            {getListingsError && <h1>{getListingsError.message}</h1>}
            {
                isLoading ? 
                <Row>
                    <Col>
                        <h4 className="my-2">Loading...</h4> 
                    </Col>
                </Row>
                :
                <div className="mb-2">
                    <Row>
                        <Col>
                            <ListingTableComponent
                                listings={listings}
                                sortType={sortType}
                                sortOrder={sortOrder}
                                setSortType={setSortType}
                                setSortOrder={setSortOrder}
                                countries={countries}
                            />
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col xs={8}>
                            <PaginationComponent currentPage={currentPage} totalPages={pages} onPageChange={setPage}/>
                        </Col>
                        <Col>
                            <SelectFilterComponent
                                filter={limit}
                                setFilter={setLimit} 
                                options={{
                                    10: "10 Results",
                                    20: "20 Results",
                                    50: "50 Results",
                                    100: "100 Results",
                                    200: "200 Results",
                                }}/>
                        </Col>
                    </Row>
                </div>
            }
        </div>
    );
}

export default ListContainer;