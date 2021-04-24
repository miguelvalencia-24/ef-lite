export type ListingType = {
    id: string;
    listing_number: number;
    public_title: string;
    average_monthly_net_profit: number;
    average_monthly_expenses: number;
    average_monthly_gross_revenue: number;
    business_created_at: string;
    country: string;
    countries: Array<string>;
    first_made_money_at: string;
    listing_price: number;
    seller_interview_link: string | null;
    listing_multiple: number;
    uses_pbn: boolean;
    listing_status: string;
    summary: string;
    assets_included: Array<string>;
    hours_worked_per_week: number;
    opportunities: Array<string>;
    risks: Array<string>;
    seller_support: string;
    reason_for_sale: string;
    has_trademark: boolean;
    monthly_recurring_revenue: number | null;
    monthly_churn_percent: number | null;
    inventory_cost: number | null;
    typical_low_valuation: number;
    typical_high_valuation: number;
    absolute_low_valuation: number;
    absolute_high_valuation: number;
    work_required: Array<string>;
    days_on_marketplace: number;
    deposit_amount: string;
    deposit_percent: string;
    sba_financing_approved: boolean;
    pricing_period_months: number;
    buyer_profiles: Array<string>;
    first_listed_at: string;
    new_listing: boolean;
    created_at: string;
    updated_at: string | null;
    discarded_at: string | null;
    combined_site_metrics: Array<SiteMetricType>;
    seller_accepting_calls: boolean;
    automated_sales: boolean;
    disable_buy_now: boolean;
    circulating_offer_at: number | string | null;
    circulating_offer_completed: boolean | null;
    amazon_sku_count: number;
    amazon_uses_brand_registry: boolean;
    net_profit_trend_percent: number;
    net_profit_trend_percent_months: number;
    gross_revenue_trend_percent: number;
    gross_revenue_trend_percent_months: number;
    unique_users_trend_percent: number;
    unique_users_trend_months: number;
    niche_image: string;
    monetizations: Array<MonetizationType>;
    niches: Array<NicheType>;
    metrics: Array<MetricType>;
    sites: Array<SiteType>;
}

export type SiteMetricType = {
    month: string;
    page_views: number;
    unique_users: number;
}

export type MonetizationType = {
    monetization: string;
    created_at: string;
    updated_at: string | null;
    discarded_at: string | null;
}

export type NicheType = {
    niche: string;
    created_at: string;
    updated_at: string | null;
    discarded_at: string | null;
}

export type MetricType = {
    month: string;
    net_profit: string;
    gross_revenue: string;
    expenses: string;
    created_at: string;
    updated_at: string | null;
    discarded_at: string | null;
}

export type SiteType = {
    id: string;
    listing_id: string;
    platform: string;
    penalties: string | null;
    average_monthly_page_views: number | null;
    average_monthly_unique_users: number | null;
    uses_google_analytics: boolean;
    uses_clicky: boolean;
    domain_type: string | null;
    position: number;
    created_at: string;
    updated_at: string | null;
    discarded_at: string | null;
    metrics: Array<SiteMetricType>;
}