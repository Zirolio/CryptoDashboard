import type { Coin, CoinApi } from "@/shared/api/types";

export const adaptCoin = (data: CoinApi): Coin => ({
    id: data.id,
    name: data.name,
    symbol: data.symbol,

    image: data.image?.small ?? "",

    current_price: data.market_data?.current_price?.usd ?? 0,
    market_cap: data.market_data?.market_cap?.usd ?? 0,
    price_change_percentage_24h:
        data.market_data?.price_change_percentage_24h ?? 0,

    tickers: data.tickers ?? []
});