import { api } from "./client";
import type { CoinChart } from "./types";

export const getCoinChart = async(id: string, days: number): Promise<CoinChart> => {
    const { data } = await api.get(`/coins/${id}/market_chart`, {
        params: {
            vs_currency: "usd",
            days: days
        },
    });

    return data;
};