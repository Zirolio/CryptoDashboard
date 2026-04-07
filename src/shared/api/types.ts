export interface Coin {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
    market_cap: number;
    price_change_percentage_24h: number;
    tickers: Ticker[];
}

export interface Ticker {
    last: number;
    timestamp: string; // "2026-04-02T10:12:28+00:00"
    volume: number;
}

export interface CoinChart {
    prices: [number, number][];
    market_caps: [number, number][];
    total_volumes: [number, number][];
};

export interface CoinApi {
    id: string;
    name: string;
    symbol: string;

    image: {
        thumb: string;
        small: string;
        large: string;
    };

    market_data: {
        current_price: {
            usd: number;
        };
        market_cap: {
            usd: number;
        };
        price_change_percentage_24h: number;
    };

    tickers: Ticker[];
}