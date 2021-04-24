import './ListingTableComponent.css';
import React, { ReactElement } from 'react'
import {ListingType, NicheType, MonetizationType} from '../../types/listingTypes';

import Table from 'react-bootstrap/Table';

interface ListingTableComponentProps {
    listings: Array<ListingType>,
    sortType: string | null,
    sortOrder: string,
    setSortType: React.Dispatch<React.SetStateAction<string | null>>,
    setSortOrder: React.Dispatch<React.SetStateAction<string>>,
    countries: {
        [key: string]: string
    }
}

const ListingTableComponent: React.FC<ListingTableComponentProps> = ({
        listings,
        sortType,
        sortOrder,
        setSortType,
        setSortOrder,
        countries,
    }) => {

    const showListings = (): React.ReactElement<any, string | React.JSXElementConstructor<any>>[] => {
        const listingData = listings.map((listing: ListingType, i: number): ReactElement => {
            return (
                <tr key={i}>
                    <td>
                        <div className="td-80">
                            {listing.listing_number}
                        </div>
                    </td>
                    <td>
                        <div>
                            {listing.niches?.map((n: NicheType, i: number) => `${n.niche}${i === listing.niches.length-1 ? '' : ', '}`)}
                        </div>
                        <div>
                            <b>{listing.listing_status}</b>
                        </div>
                    </td>
                    <td>{listing.monetizations?.map((m: MonetizationType, i: number) => `${m.monetization}${i === listing.monetizations.length-1 ? '' : ', '}`)}</td>
                    <td>
                        <div className="td-80">
                            {`$${listing.listing_price}`}
                        </div>
                    </td>
                    <td>{`$${listing.average_monthly_net_profit}`}</td>
                    <td>
                        <div className="td-80">
                            {`${listing.listing_multiple}x`}
                        </div>
                    </td>
                    <td>{`${listing.pricing_period_months} ${listing.pricing_period_months > 1 ? 'months' : 'month'}`}</td>
                    <td>
                        <div className="td-120">
                            {listing.seller_interview_link ? <i className="fa fa-check"></i> : <i className="fa fa-times"></i>}
                        </div>
                    </td>
                    <td>
                        <div className="td-60">
                            {listing.uses_pbn ? <i className="fa fa-check"></i> : <i className="fa fa-times"></i>}
                        </div>
                    </td>
                    <td>
                        <div className="td-120">
                            {listing.has_trademark ? <i className="fa fa-trademark"></i> : <i className="fa fa-times"></i>}
                        </div>
                    </td>
                    <td>{listing.countries?.map((c: string, i: number) => `${countries[c]}${i === listing.countries.length-1 ? '' : ', '}`)}</td>
                    <td>
                        <div className="td-120">
                            {listing.business_created_at}
                        </div>
                    </td>
                    <td>
                        <div className="td-180">
                            {listing.buyer_profiles?.map((p: string, i: number) => `${p}${i === listing.buyer_profiles.length-1 ? '' : ', '}`)}
                        </div>
                    </td>
                    <td>{listing.amazon_sku_count || '-'}</td>
                    <td>{listing.amazon_uses_brand_registry ? <i className="fa fa-check"></i> : <i className="fa fa-times"></i>}</td>
                </tr>
            )
        })
        return listingData;
    }

    const sortHandler = (type: string): void => {
        if(sortType === type) {
            if(sortOrder === 'DESC') {
                setSortOrder('ASC');
            } else {
                setSortType(null);
                setSortOrder('DESC');
            }
        } else {
            setSortType(type);
            setSortOrder('DESC');
        }
    }

    const showSortArrow = (st: string) => {
        if(st === sortType) {
            if (sortOrder === "ASC") {
                return <i className="fa fa-sort-up ml-2"></i>
            } else {
                return <i className="fa fa-sort-down ml-2"></i>    
            }
        } else {
            return <i className="fa fa-sort ml-2"></i>
        }
    }

    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th onClick={() => sortHandler('listing_number')}>
                        Listing {showSortArrow('listing_number')}
                    </th>
                    <th>Niches & State</th>
                    <th>Monetization</th>
                    <th onClick={() => sortHandler('listing_price')}>
                        Price {showSortArrow('listing_price')}
                    </th>
                    <th onClick={() => sortHandler('average_monthly_net_profit')}>
                        Avg Monthly Profit
                        {showSortArrow('average_monthly_net_profit')}
                    </th>
                    <th onClick={() => sortHandler('sale_multiple')}>
                        Multiple
                        {showSortArrow('sale_multiple')}
                    </th>
                    <th>Pricing Period</th>
                    <th onClick={() => sortHandler('seller_interview_link')}>
                        Seller Interview
                        {showSortArrow('seller_interview_link')}
                    </th>
                    <th onClick={() => sortHandler('uses_pbn')}>
                        PBN
                        {showSortArrow('uses_pbn')}
                    </th>
                    <th onClick={() => sortHandler('has_trademark')}>
                        Trademark
                        {showSortArrow('has_trademark')}
                    </th>
                    <th>Countries</th>
                    <th onClick={() => sortHandler('business_created_at')}>
                        Business Created
                        {showSortArrow('business_created_at')}
                    </th>
                    <th>Buyer Personas</th>
                    <th>SKU Count</th>
                    <th>User Brand Registry</th>
                </tr>
            </thead>
            <tbody>
                {showListings()}
            </tbody>
        </Table>
    );
}

export default ListingTableComponent;