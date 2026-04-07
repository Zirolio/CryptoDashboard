import type { CoinChart } from "@/shared/api/types";

export interface Chart {
    time: number;
    price: number;
    volume: number;
    marketCap: number;
}

export const adaptCoinChart = (data: CoinChart): Chart[] => {
    return data.prices.map(([time, price]: [number, number], i: number) => ({
        time,
        price,
        volume: data.total_volumes?.[i]?.[1] ?? 0,
        marketCap: data.market_caps?.[i]?.[1] ?? 0,
    }));
}